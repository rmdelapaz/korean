/* hangul-lab.js — interactive Hangul widgets.

   Mount by placing an empty element in the page:
       <div data-widget="composer"></div>
       <div data-widget="batchim"></div>

   Uses event delegation throughout. site-nav.js binds one listener per element at
   load time and would not wire anything these widgets insert, so they own their
   own handlers. */
(function () {
    'use strict';

    /* Hangul syllables are composed arithmetically, not looked up:
           code = 0xAC00 + (L * 21 + V) * 28 + T
       over 19 initials, 21 medials and 28 finals (index 0 = no final). */
    var SBASE = 0xAC00, VCOUNT = 21, TCOUNT = 28;

    var INITIALS = ['ㄱ','ㄲ','ㄴ','ㄷ','ㄸ','ㄹ','ㅁ','ㅂ','ㅃ','ㅅ',
                    'ㅆ','ㅇ','ㅈ','ㅉ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];
    var MEDIALS  = ['ㅏ','ㅐ','ㅑ','ㅒ','ㅓ','ㅔ','ㅕ','ㅖ','ㅗ','ㅘ','ㅙ',
                    'ㅚ','ㅛ','ㅜ','ㅝ','ㅞ','ㅟ','ㅠ','ㅡ','ㅢ','ㅣ'];
    var FINALS   = ['','ㄱ','ㄲ','ㄳ','ㄴ','ㄵ','ㄶ','ㄷ','ㄹ','ㄺ','ㄻ','ㄼ','ㄽ',
                    'ㄾ','ㄿ','ㅀ','ㅁ','ㅂ','ㅄ','ㅅ','ㅆ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ'];

    var ROMAN_I = ['g','kk','n','d','tt','r','m','b','pp','s','ss','—','j','jj','ch','k','t','p','h'];
    var ROMAN_V = ['a','ae','ya','yae','eo','e','yeo','ye','o','wa','wae','oe','yo',
                   'u','wo','we','wi','yu','eu','ui','i'];

    function compose(l, v, t) {
        return String.fromCharCode(SBASE + (l * VCOUNT + v) * TCOUNT + t);
    }

    function decompose(ch) {
        var code = ch.charCodeAt(0) - SBASE;
        if (code < 0 || code >= 11172) return null;
        return {
            l: Math.floor(code / (VCOUNT * TCOUNT)),
            v: Math.floor((code % (VCOUNT * TCOUNT)) / TCOUNT),
            t: code % TCOUNT
        };
    }

    function el(tag, cls, text) {
        var n = document.createElement(tag);
        if (cls) n.className = cls;
        if (text != null) n.textContent = text;
        return n;
    }

    /* ------------------------------------------------------------------
       Jamo composer
       ------------------------------------------------------------------ */
    function buildComposer(mount) {
        mount.classList.add('composer');

        var state = { l: 0, v: 0, t: 0 };

        var display = el('div', 'composer-display');
        var block = el('div', 'composer-block');
        var meta = el('div', 'composer-meta');
        display.appendChild(block);
        display.appendChild(meta);
        mount.appendChild(display);

        function row(label, items, key, isFinal) {
            var wrap = el('div', 'jamo-row');
            wrap.appendChild(el('span', 'jamo-row-label', label));
            var keys = el('div', 'jamo-keys');
            items.forEach(function (j, i) {
                var b = el('button', 'jamo-key' + (isFinal && i === 0 ? ' is-none' : ''),
                           isFinal && i === 0 ? 'none' : j);
                b.type = 'button';
                b.dataset.slot = key;
                b.dataset.index = i;
                b.setAttribute('aria-pressed', String(state[key] === i));
                keys.appendChild(b);
            });
            wrap.appendChild(keys);
            return wrap;
        }

        mount.appendChild(row('Initial · 초성', INITIALS, 'l', false));
        mount.appendChild(row('Medial · 중성', MEDIALS, 'v', false));
        mount.appendChild(row('Final · 종성 (받침)', FINALS, 't', true));

        function render() {
            var ch = compose(state.l, state.v, state.t);
            block.textContent = ch;

            var code = ch.charCodeAt(0);
            var roman = ROMAN_I[state.l] + ROMAN_V[state.v] +
                        (state.t ? ' + ' + FINALS[state.t] + ' 받침' : '');

            meta.innerHTML = '';
            meta.appendChild(el('div', null, roman));
            var formula = el('div');
            formula.innerHTML = '<code>0xAC00 + (' + state.l + '×21 + ' + state.v +
                                ')×28 + ' + state.t + '</code>';
            meta.appendChild(formula);
            var cp = el('div');
            cp.innerHTML = '= <code>U+' + code.toString(16).toUpperCase() + '</code>';
            meta.appendChild(cp);

            if (window.KoreanAudio && window.KoreanAudio.available()) {
                var existing = meta.querySelector('.audio-btn');
                if (existing) existing.remove();
                var btn = el('button', 'audio-btn');
                btn.type = 'button';
                btn.dataset.speak = ch;
                btn.textContent = '🔊';
                btn.setAttribute('aria-label', 'Listen to ' + ch);
                meta.appendChild(btn);
            }

            Array.prototype.forEach.call(mount.querySelectorAll('.jamo-key'), function (b) {
                b.setAttribute('aria-pressed', String(state[b.dataset.slot] === +b.dataset.index));
            });
        }

        mount.addEventListener('click', function (e) {
            var k = e.target.closest('.jamo-key');
            if (!k || !mount.contains(k)) return;
            state[k.dataset.slot] = +k.dataset.index;
            render();
            if (window.KoreanAudio) window.KoreanAudio.speak(compose(state.l, state.v, state.t));
        });

        render();
    }

    /* ------------------------------------------------------------------
       Batchim reducer — the 27 finals collapse to 7 sounds
       ------------------------------------------------------------------ */
    var REDUCTION = {
        'ㄱ':  ['ㄱ', 'k',  'plain'],
        'ㄲ':  ['ㄱ', 'k',  'tense → plain'],
        'ㅋ':  ['ㄱ', 'k',  'aspirated → plain'],
        'ㄳ':  ['ㄱ', 'k',  'cluster → keeps first'],
        'ㄺ':  ['ㄱ', 'k',  'cluster → keeps second'],
        'ㄴ':  ['ㄴ', 'n',  'plain'],
        'ㄵ':  ['ㄴ', 'n',  'cluster → keeps first'],
        'ㄶ':  ['ㄴ', 'n',  'cluster → keeps first'],
        'ㄷ':  ['ㄷ', 't',  'plain'],
        'ㅅ':  ['ㄷ', 't',  'neutralised to [t]'],
        'ㅆ':  ['ㄷ', 't',  'neutralised to [t]'],
        'ㅈ':  ['ㄷ', 't',  'neutralised to [t]'],
        'ㅊ':  ['ㄷ', 't',  'neutralised to [t]'],
        'ㅌ':  ['ㄷ', 't',  'neutralised to [t]'],
        'ㅎ':  ['ㄷ', 't',  'neutralised to [t]'],
        'ㄹ':  ['ㄹ', 'l',  'plain'],
        'ㄼ':  ['ㄹ', 'l',  'cluster → keeps first'],
        'ㄽ':  ['ㄹ', 'l',  'cluster → keeps first'],
        'ㄾ':  ['ㄹ', 'l',  'cluster → keeps first'],
        'ㅀ':  ['ㄹ', 'l',  'cluster → keeps first'],
        'ㅁ':  ['ㅁ', 'm',  'plain'],
        'ㄻ':  ['ㅁ', 'm',  'cluster → keeps second'],
        'ㅂ':  ['ㅂ', 'p',  'plain'],
        'ㅍ':  ['ㅂ', 'p',  'aspirated → plain'],
        'ㅄ':  ['ㅂ', 'p',  'cluster → keeps first'],
        'ㄿ':  ['ㅂ', 'p',  'cluster → keeps second'],
        'ㅇ':  ['ㅇ', 'ng', 'plain']
    };

    function buildBatchim(mount) {
        mount.classList.add('batchim-lab');

        var input = el('input', 'batchim-input');
        input.type = 'text';
        input.value = '꽃밭';
        input.setAttribute('aria-label', 'Korean word to analyse');
        input.setAttribute('lang', 'ko');
        input.maxLength = 12;

        var hint = el('p', 'caption', 'Type any Korean word to see how each 받침 is pronounced.');
        var out = el('div', 'batchim-out');

        mount.appendChild(input);
        mount.appendChild(hint);
        mount.appendChild(out);

        function render() {
            var word = input.value.trim();
            out.innerHTML = '';

            if (!word) {
                out.appendChild(el('p', 'b-empty', 'Type a Korean word above.'));
                return;
            }

            var any = false;
            Array.prototype.forEach.call(word, function (ch) {
                var d = decompose(ch);
                if (!d) return;
                any = true;

                var line = el('p');
                line.appendChild(el('span', 'b-syl', ch));

                if (!d.t) {
                    line.appendChild(document.createTextNode(' — open syllable, no 받침'));
                    out.appendChild(line);
                    return;
                }

                var jamo = FINALS[d.t];
                var r = REDUCTION[jamo];
                if (!r) { out.appendChild(line); return; }

                line.appendChild(document.createTextNode(' — 받침 ' + jamo + ' → '));
                var sound = el('span', 'b-sound', r[0] + ' [' + r[1] + ']');
                line.appendChild(sound);
                line.appendChild(el('span', 'b-rule', r[2]));
                out.appendChild(line);
            });

            if (!any) out.appendChild(el('p', 'b-empty', 'No Hangul syllables found.'));
        }

        input.addEventListener('input', render);
        render();
    }

    /* ------------------------------------------------------------------
       Vocal-tract diagram buttons
       ------------------------------------------------------------------ */
    function wireDiagrams() {
        var figures = document.querySelectorAll('.vt-figure');
        if (!figures.length) return;

        document.addEventListener('click', function (e) {
            var fig = e.target.closest && e.target.closest('.vt-figure');
            if (!fig) return;
            var wasOn = fig.getAttribute('aria-pressed') === 'true';
            Array.prototype.forEach.call(figures, function (f) {
                f.setAttribute('aria-pressed', 'false');
            });
            fig.setAttribute('aria-pressed', wasOn ? 'false' : 'true');
            if (!wasOn && window.KoreanAudio && fig.dataset.speak) {
                window.KoreanAudio.speak(fig.dataset.speak);
            }
        });
    }

    function init() {
        Array.prototype.forEach.call(
            document.querySelectorAll('[data-widget="composer"]'), buildComposer);
        Array.prototype.forEach.call(
            document.querySelectorAll('[data-widget="batchim"]'), buildBatchim);
        wireDiagrams();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
