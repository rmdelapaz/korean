/* audio.js — Korean pronunciation via the Web Speech API.

   Attaches a speaker button to every table cell containing Hangul. Korean text in
   this course is not language-tagged and does not sit in a predictable column, so
   cells are matched on Unicode range rather than position or header text.

   If the device has no Korean voice installed (common on Windows without the
   language pack) the entire layer hides itself. An English voice reading Hangul
   is worse than no audio at all.

   Exposes window.KoreanAudio for the widgets in hangul-lab.js. */
(function () {
    'use strict';

    var synth = window.speechSynthesis;

    /* Syllables, compatibility jamo (the standalone ㄱ / ㅏ used in lessons 1-3),
       and conjoining jamo. */
    var HANGUL = /[가-힣ㄱ-ㆎᄀ-ᇿ]/;
    var HANGUL_RUN = /[가-힣ㄱ-ㆎᄀ-ᇿ]+/g;

    var koVoice = null;
    var activeBtn = null;

    function findKoreanVoice() {
        var voices = synth.getVoices();
        if (!voices.length) return null;
        /* Voice.lang is 'ko-KR' on most platforms but 'ko_KR' on some Android builds. */
        var ko = voices.filter(function (v) {
            return v.lang.replace('_', '-').toLowerCase().indexOf('ko') === 0;
        });
        if (!ko.length) return null;
        /* Prefer a local voice: no network round-trip, works offline. */
        var local = ko.filter(function (v) { return v.localService; });
        return (local[0] || ko[0]);
    }

    /* Strip romanization and glosses: '기역 (giyeok)' speaks as '기역'.
       Runs are joined with a space so '야채 / 채소' reads as two words. */
    function extractHangul(text) {
        var runs = text.match(HANGUL_RUN);
        return runs ? runs.join(' ') : '';
    }

    function speak(text) {
        if (!koVoice || !text) return;
        synth.cancel();
        var u = new SpeechSynthesisUtterance(text);
        u.voice = koVoice;
        u.lang = koVoice.lang;
        u.rate = 0.85;
        return u;
    }

    function speakPlain(text) {
        var u = speak(text);
        if (u) synth.speak(u);
    }

    function clearActive() {
        if (activeBtn) activeBtn.classList.remove('speaking');
        activeBtn = null;
    }

    function speakFromButton(btn) {
        var u = speak(btn.dataset.speak);
        if (!u) return;
        clearActive();
        activeBtn = btn;
        btn.classList.add('speaking');
        u.onend = u.onerror = clearActive;
        synth.speak(u);
    }

    function makeButton(text) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'audio-btn';
        btn.dataset.speak = text;
        btn.textContent = '🔊';
        btn.setAttribute('aria-label', 'Listen to ' + text);
        btn.title = 'Listen';
        return btn;
    }

    /* A bare consonant is unpronounceable in isolation, and speech engines read it
       as the letter's *name* ("기역") rather than its sound. Voice it as a syllable
       with the neutral vowel ㅏ instead. Vowels are already syllabic once carried
       by the silent placeholder ㅇ. */
    var JAMO_SYLLABLE = {
        'ㄱ': '가', 'ㄴ': '나', 'ㄷ': '다', 'ㄹ': '라', 'ㅁ': '마',
        'ㅂ': '바', 'ㅅ': '사', 'ㅇ': '아', 'ㅈ': '자', 'ㅊ': '차',
        'ㅋ': '카', 'ㅌ': '타', 'ㅍ': '파', 'ㅎ': '하',
        'ㄲ': '까', 'ㄸ': '따', 'ㅃ': '빠', 'ㅆ': '싸', 'ㅉ': '짜',
        'ㅏ': '아', 'ㅑ': '야', 'ㅓ': '어', 'ㅕ': '여', 'ㅗ': '오',
        'ㅛ': '요', 'ㅜ': '우', 'ㅠ': '유', 'ㅡ': '으', 'ㅣ': '이',
        'ㅐ': '애', 'ㅒ': '얘', 'ㅔ': '에', 'ㅖ': '예', 'ㅘ': '와',
        'ㅙ': '왜', 'ㅚ': '외', 'ㅝ': '워', 'ㅞ': '웨', 'ㅟ': '위', 'ㅢ': '의'
    };

    function speakableText(el) {
        if (el.dataset.speak) return el.dataset.speak;
        var raw = extractHangul(el.textContent);
        if (!raw) return '';
        return JAMO_SYLLABLE[raw] || raw;
    }

    function attachButtons() {
        var cells = document.querySelectorAll('td');
        Array.prototype.forEach.call(cells, function (cell) {
            if (cell.closest('.no-audio')) return;
            if (cell.querySelector('.audio-btn')) return;
            if (!HANGUL.test(cell.textContent)) return;

            var text = speakableText(cell);
            if (!text) return;
            cell.appendChild(makeButton(text));
        });

        /* Opt-in markers outside tables, e.g. the minimal-pair drill cards. */
        var opted = document.querySelectorAll('[data-speak]:not(.audio-btn)');
        Array.prototype.forEach.call(opted, function (el) {
            if (el.querySelector('.audio-btn')) return;
            el.appendChild(makeButton(el.dataset.speak));
        });
    }

    function addNotice() {
        var wrap = document.querySelector('.content-wrap') || document.body;
        var first = wrap.querySelector('h1');
        var note = document.createElement('p');
        note.className = 'audio-notice';
        note.innerHTML = '🔇 <strong>No Korean voice found on this device.</strong> ' +
            'Audio playback is hidden. To enable it, install a Korean language pack ' +
            '(Windows: Settings → Time &amp; Language → Language → Add a language → 한국어), ' +
            'then reload.';
        if (first && first.parentNode) first.parentNode.insertBefore(note, first.nextSibling);
        else wrap.insertBefore(note, wrap.firstChild);
    }

    function init() {
        koVoice = findKoreanVoice();
        if (!koVoice) {
            document.documentElement.classList.add('no-ko-voice');
            return;
        }
        document.documentElement.classList.remove('no-ko-voice');
        attachButtons();
    }

    /* Delegated, so buttons injected later by the widgets still work.
       site-nav.js binds one listener per element at load; nothing here may rely on that. */
    document.addEventListener('click', function (e) {
        var btn = e.target.closest && e.target.closest('.audio-btn');
        if (btn) speakFromButton(btn);
    });

    window.KoreanAudio = {
        speak: speakPlain,
        available: function () { return !!koVoice; },
        syllableFor: function (jamo) { return JAMO_SYLLABLE[jamo] || jamo; }
    };

    if (!synth || typeof SpeechSynthesisUtterance === 'undefined') {
        document.documentElement.classList.add('no-ko-voice');
        document.addEventListener('DOMContentLoaded', addNotice);
        return;
    }

    /* getVoices() is empty on first call in Chrome and fires voiceschanged once the
       list is populated. Firefox populates synchronously.

       voiceschanged can fire several times: local voices arrive first, remote ones
       later. Keep listening until a Korean voice actually turns up — detaching on
       the first event would permanently give up on a device whose Korean voice is
       simply slow to register. */
    function onVoices() {
        init();
        if (koVoice) synth.removeEventListener('voiceschanged', onVoices);
    }

    function boot() {
        addNotice();
        init();
        if (!koVoice) {
            synth.addEventListener('voiceschanged', onVoices);
            setTimeout(init, 1200);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
