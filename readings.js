/* readings.js — graded Korean dialogues & reading passages that recycle
   vocabulary from across the lessons. Standalone (like glossary.js /
   cheatsheet.js): renders from the DIALOGUES data below, wires audio via
   data-speak (audio.js adds the 🔊 buttons), a hide-English comprehension
   toggle, an optional "Play all" (only when a TTS voice is installed), and
   check-your-understanding questions with a self-contained answer checker. */
(function () {
    'use strict';

    /* ---- content: each piece recycles earlier lessons' words ---- */
    var DIALOGUES = [
        {
            id: 'mannaseo',
            title: '만나서 반가워요',
            en_title: 'Nice to Meet You',
            kind: 'Dialogue',
            scene: 'Michael, an American student, meets Ji-young at a language exchange. Listen for 이에요/예요 and 은/는.',
            recycles: [4, 5],
            lines: [
                { sp: '지영', ko: '안녕하세요! 저는 김지영이에요.', en: "Hello! I'm Kim Ji-young." },
                { sp: '마이클', ko: '안녕하세요. 저는 마이클이에요. 만나서 반가워요.', en: "Hello. I'm Michael. Nice to meet you." },
                { sp: '지영', ko: '저도 반가워요. 마이클 씨는 어느 나라 사람이에요?', en: 'Nice to meet you too. Which country are you from, Michael?' },
                { sp: '마이클', ko: '저는 미국 사람이에요. 지영 씨는 학생이에요?', en: "I'm American. Are you a student, Ji-young?" },
                { sp: '지영', ko: '아니요, 저는 학생이 아니에요. 회사원이에요.', en: "No, I'm not a student. I'm an office worker." },
                { sp: '마이클', ko: '아, 그래요? 저는 대학생이에요.', en: "Oh, really? I'm a university student." },
                { sp: '지영', ko: '이건 제 명함이에요.', en: 'This is my business card.' },
                { sp: '마이클', ko: '감사합니다. 그럼 또 만나요!', en: 'Thank you. See you again, then!' },
                { sp: '지영', ko: '네, 안녕히 가세요!', en: 'Yes, goodbye!' }
            ],
            questions: [
                { q: 'Which country is Michael from? (Korean or English)', a: '미국|미국 사람|america|american|usa', hint: 'He answers 저는 … 사람이에요.' },
                { q: 'What is Ji-young’s job? (Korean word)', a: '회사원|office worker', hint: 'She says it right after saying she is not a student.' },
                { q: 'Which words does Ji-young use to say she is NOT a student?', a: '학생이 아니에요|이 아니에요|아니에요', hint: 'Noun + 이/가 …' }
            ]
        },
        {
            id: 'kape',
            title: '카페에서',
            en_title: 'At the Café',
            kind: 'Dialogue',
            scene: 'Min-su and Ji-young order drinks. Watch the polite present, 주세요 and the total price.',
            recycles: [7, 10, 11],
            lines: [
                { sp: '직원', ko: '어서 오세요! 주문하시겠어요?', en: 'Welcome! Are you ready to order?' },
                { sp: '민수', ko: '아이스 아메리카노 한 잔 주세요.', en: 'One iced americano, please.' },
                { sp: '직원', ko: '네, 또 뭐 드릴까요?', en: 'Sure. What else can I get you?' },
                { sp: '민수', ko: '지영 씨는 뭐 마셔요?', en: 'Ji-young, what are you having?' },
                { sp: '지영', ko: '저는 커피를 안 마셔요. 녹차 라테 주세요.', en: "I don't drink coffee. A green tea latte, please." },
                { sp: '민수', ko: '그리고 치즈케이크도 하나 주세요.', en: 'And one cheesecake too, please.' },
                { sp: '직원', ko: '모두 만 이천 원입니다.', en: "That's 12,000 won altogether." },
                { sp: '민수', ko: '여기 카드요.', en: "Here's my card." },
                { sp: '직원', ko: '감사합니다. 잠시만 기다리세요.', en: 'Thank you. Please wait a moment.' }
            ],
            questions: [
                { q: 'What does Ji-young order? (Korean)', a: '녹차 라테|녹차라떼|녹차 라떼|녹차|green tea latte', hint: 'She orders it after saying what she doesn’t drink.' },
                { q: 'What does Ji-young NOT drink? (Korean word)', a: '커피|coffee', hint: 'Look for 안 마셔요.' },
                { q: 'How much is it altogether? (in digits)', a: '12000|12,000|만 이천 원|만이천원|만 이천', hint: '만 = 10,000; 이천 = 2,000.' }
            ]
        },
        {
            id: 'haru',
            title: '나의 하루',
            en_title: 'My Day',
            kind: 'Reading',
            scene: 'Ji-young describes an ordinary weekday. Notice the times and the particles 에 and 에서.',
            recycles: [12, 7, 9, 6],
            lines: [
                { ko: '저는 매일 아침 일곱 시에 일어나요.', en: 'I get up at seven every morning.' },
                { ko: '먼저 샤워를 해요. 그리고 옷을 입어요.', en: 'First I take a shower. Then I get dressed.' },
                { ko: '부엌에서 아침을 먹어요. 보통 빵하고 우유예요.', en: "I eat breakfast in the kitchen. It's usually bread and milk." },
                { ko: '여덟 시 반에 집에서 나가요.', en: 'I leave home at half past eight.' },
                { ko: '회사는 강남에 있어요. 지하철로 삼십 분 걸려요.', en: 'My office is in Gangnam. It takes thirty minutes by subway.' },
                { ko: '점심은 동료하고 회사 근처 식당에서 먹어요.', en: 'I have lunch with a coworker at a restaurant near the office.' },
                { ko: '저녁 여섯 시에 집에 와요. 저녁에는 요리를 해요.', en: 'I come home at six in the evening. In the evening I cook.' },
                { ko: '밤 열한 시쯤 자요. 저는 제 하루가 좋아요!', en: 'I go to bed around eleven. I like my day!' }
            ],
            questions: [
                { q: 'What time does she get up? (a number)', a: '7|7시|일곱 시|일곱시|seven', hint: 'Look at the first sentence.' },
                { q: 'In which neighbourhood is her office? (Korean)', a: '강남|gangnam', hint: '회사는 … 에 있어요.' },
                { q: 'Where does she eat breakfast? (Korean word)', a: '부엌|부엌에서|kitchen', hint: 'The place comes before 에서.' }
            ]
        },
        {
            id: 'sijang',
            title: '시장에서',
            en_title: 'At the Market',
            kind: 'Dialogue',
            scene: 'Michael buys T-shirts at Dongdaemun Market. Listen for the counter 장, the prices and the seller’s honorifics.',
            recycles: [6, 14, 13],
            lines: [
                { sp: '사장님', ko: '어서 오세요! 뭐 찾으세요?', en: 'Welcome! What are you looking for?' },
                { sp: '마이클', ko: '티셔츠 있어요?', en: 'Do you have T-shirts?' },
                { sp: '사장님', ko: '네, 이쪽에 있어요. 이 파란색 티셔츠 어떠세요?', en: 'Yes, over here. How about this blue T-shirt?' },
                { sp: '마이클', ko: '예뻐요. 이거 얼마예요?', en: "It's pretty. How much is this?" },
                { sp: '사장님', ko: '한 장에 만 원이에요.', en: "It's 10,000 won each." },
                { sp: '마이클', ko: '두 장 주세요. 좀 깎아 주세요.', en: 'Two, please. Could you give me a discount?' },
                { sp: '사장님', ko: '그럼 두 장에 만 팔천 원만 주세요.', en: 'Then just give me 18,000 won for two.' },
                { sp: '마이클', ko: '감사합니다! 여기 이만 원이요.', en: "Thank you! Here's 20,000 won." },
                { sp: '사장님', ko: '거스름돈 이천 원 여기 있어요. 또 오세요!', en: "Here's your 2,000 won change. Come again!" }
            ],
            questions: [
                { q: 'What colour is the T-shirt? (Korean)', a: '파란색|파란|파랑|blue', hint: '이 …색 티셔츠' },
                { q: 'How much does Michael pay for two after the discount? (in digits)', a: '18000|18,000|만 팔천 원|만팔천원|만 팔천', hint: '두 장에 …' },
                { q: 'How much change does he get? (in digits)', a: '2000|2,000|이천 원|이천원|이천', hint: '거스름돈 = change.' }
            ]
        },
        {
            id: 'jumal',
            title: '주말 잘 보냈어요?',
            en_title: 'Did You Have a Good Weekend?',
            kind: 'Dialogue',
            scene: 'On Monday morning, Min-su and Ji-young talk about their weekends. Every verb is in the past tense.',
            recycles: [15, 18],
            lines: [
                { sp: '민수', ko: '지영 씨, 주말 잘 보냈어요?', en: 'Ji-young, did you have a good weekend?' },
                { sp: '지영', ko: '네! 토요일에 친구하고 등산했어요.', en: 'Yes! On Saturday I went hiking with a friend.' },
                { sp: '민수', ko: '와, 어디에 갔어요?', en: 'Wow, where did you go?' },
                { sp: '지영', ko: '북한산에 갔어요. 날씨가 정말 좋았어요.', en: 'We went to Bukhansan. The weather was really nice.' },
                { sp: '민수', ko: '일요일에는 뭐 했어요?', en: 'What did you do on Sunday?' },
                { sp: '지영', ko: '집에서 쉬었어요. 영화도 봤어요. 민수 씨는요?', en: 'I rested at home. I watched a movie too. How about you, Min-su?' },
                { sp: '민수', ko: '저는 토요일에 기타 수업이 있었어요.', en: 'I had a guitar lesson on Saturday.' },
                { sp: '지영', ko: '기타를 배워요? 멋있어요!', en: "You're learning guitar? That's cool!" },
                { sp: '민수', ko: '네, 지난달에 시작했어요. 아직 잘 못 쳐요.', en: "Yes, I started last month. I can't play well yet." }
            ],
            questions: [
                { q: 'What did Ji-young do on Saturday? (Korean word)', a: '등산|등산했어요|hiking|hike', hint: 'She did it with a friend.' },
                { q: 'Which mountain did she go to? (Korean)', a: '북한산|bukhansan', hint: 'The name ends in 산 (mountain).' },
                { q: 'What instrument is Min-su learning? (Korean)', a: '기타|guitar', hint: 'He had a … 수업 on Saturday.' }
            ]
        },
        {
            id: 'yaksok',
            title: '토요일에 만날까요?',
            en_title: 'Shall We Meet on Saturday?',
            kind: 'Dialogue',
            scene: 'Min-su invites Michael to Insadong and explains how to get there by subway. Listen for -(으)ㄹ까요, -(으)려고 하다, -고 and -(으)면.',
            recycles: [16, 17, 23],
            lines: [
                { sp: '민수', ko: '마이클 씨, 토요일에 시간 있어요?', en: 'Michael, are you free on Saturday?' },
                { sp: '마이클', ko: '네, 있어요. 왜요?', en: 'Yes, I am. Why?' },
                { sp: '민수', ko: '인사동에 가려고 해요. 같이 갈까요?', en: "I'm planning to go to Insadong. Shall we go together?" },
                { sp: '마이클', ko: '좋아요! 그런데 인사동에 어떻게 가요?', en: 'Great! But how do I get to Insadong?' },
                { sp: '민수', ko: '지하철 3호선을 타고 안국역에서 내리세요.', en: 'Take subway Line 3 and get off at Anguk Station.' },
                { sp: '마이클', ko: '몇 번 출구로 나가요?', en: 'Which exit do I take?' },
                { sp: '민수', ko: '6번 출구로 나오면 제가 거기에서 기다릴게요.', en: "Come out of Exit 6 and I'll be waiting there." },
                { sp: '마이클', ko: '알겠어요. 몇 시에 만날까요?', en: 'Got it. What time shall we meet?' },
                { sp: '민수', ko: '열한 시 어때요? 늦으면 전화하세요!', en: "How about eleven? If you're late, give me a call!" }
            ],
            questions: [
                { q: 'Where are they going? (Korean place name)', a: '인사동|insadong', hint: 'Min-su says …에 가려고 해요.' },
                { q: 'Which subway line should Michael take? (a number)', a: '3|3호선|삼호선|three|line 3', hint: '…호선 = line number.' },
                { q: 'At which exit will Min-su wait? (a number)', a: '6|6번|6번 출구|육 번|six|exit 6', hint: '…번 출구' }
            ]
        }
    ];

    var TITLES = (window.KOREAN_VOCAB && window.KOREAN_VOCAB.titles) || {};

    function lessonHref(n){ var s=(window.KOREAN_VOCAB&&KOREAN_VOCAB.slugs)||{}; return s[n]? s[n]+'.html' : 'korean_lesson_'+n+'.html'; }

    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }
    function norm(s) {
        // Spacing is ignored (Korean 띄어쓰기 isn't what these questions test).
        return (s || '').normalize('NFC').trim().toLowerCase().replace(/[.!?,;:]+$/, '').replace(/\s+/g, '');
    }

    function chip(n) {
        var t = TITLES[n] ? ' — ' + TITLES[n] : '';
        return '<a class="rd-chip" href="' + lessonHref(n) + '" title="Lesson ' + n + esc(t) + '">Lesson ' + n + '</a>';
    }

    function lineHTML(l) {
        var sp = l.sp ? '<span class="rd-sp">' + esc(l.sp) + '</span>' : '';
        return '<div class="rd-line' + (l.sp ? '' : ' rd-line-narr') + '">' +
            sp +
            '<div class="rd-line-body">' +
            '<p class="rd-tl"><span data-speak="' + esc(l.ko) + '">' + esc(l.ko) + '</span></p>' +
            '<p class="rd-en">' + esc(l.en) + '</p>' +
            '</div></div>';
    }

    function qHTML(q, i) {
        return '<li class="rd-q" data-answer="' + esc(q.a) + '">' +
            '<p class="rd-q-text">' + esc(q.q) + '</p>' +
            '<div class="rd-q-row">' +
            '<input type="text" class="rd-q-input" autocomplete="off" autocapitalize="none" spellcheck="false" aria-label="Your answer">' +
            '<button type="button" class="lx-btn lx-btn-primary rd-q-check">Check</button>' +
            '<button type="button" class="lx-btn rd-q-reveal">Show answer</button>' +
            '</div>' +
            '<p class="rd-q-fb" role="status"></p>' +
            (q.hint ? '<p class="rd-q-hint">Hint: ' + esc(q.hint) + '</p>' : '') +
            '</li>';
    }

    function cardHTML(d) {
        return '<article class="rd-card" id="rd-' + esc(d.id) + '">' +
            '<header class="rd-head">' +
            '<span class="rd-kind">' + esc(d.kind) + '</span>' +
            '<h2 class="rd-title"><span data-speak="' + esc(d.title) + '">' + esc(d.title) + '</span>' +
            ' <span class="rd-title-en">' + esc(d.en_title) + '</span></h2>' +
            '<p class="rd-scene">' + esc(d.scene) + '</p>' +
            '<p class="rd-recycles">Recycles: ' + d.recycles.map(chip).join(' ') + '</p>' +
            '<div class="rd-controls">' +
            '<button type="button" class="lx-btn rd-toggle-en" aria-pressed="false">Hide English</button>' +
            '<button type="button" class="lx-btn rd-playall" hidden>&#9654; Play all</button>' +
            '</div>' +
            '</header>' +
            '<div class="rd-lines">' + d.lines.map(lineHTML).join('') + '</div>' +
            '<div class="rd-quiz"><h3 class="rd-quiz-title">Check your understanding</h3>' +
            '<ol class="rd-qs">' + d.questions.map(qHTML).join('') + '</ol></div>' +
            '</article>';
    }

    /* ---- self-contained "Play all" (only if a TTS voice exists) ---- */
    function pickVoice() {
        var synth = window.speechSynthesis;
        if (!synth) return null;
        var voices = synth.getVoices() || [];
        var saved;
        try { saved = localStorage.getItem('korean-tts-voice'); } catch (e) { saved = null; }
        if (saved) { var m = voices.filter(function (v) { return v.voiceURI === saved; })[0]; if (m) return m; }
        var order = [/^ko([-_]|$)/i, /korean/i, /한국어/];
        for (var i = 0; i < order.length; i++) {
            var v = voices.filter(function (vv) { return order[i].test(vv.lang) || order[i].test(vv.name); })[0];
            if (v) return v;
        }
        return null;
    }
    function savedRate() {
        try { return parseFloat(localStorage.getItem('korean-tts-rate')) || 0.9; } catch (e) { return 0.9; }
    }
    function playAll(card, btn) {
        var synth = window.speechSynthesis;
        var voice = pickVoice();
        if (!synth || !voice) return;
        synth.cancel();
        var lines = Array.prototype.map.call(card.querySelectorAll('.rd-tl [data-speak]'), function (el) { return el.getAttribute('data-speak'); });
        var rate = savedRate(), i = 0;
        btn.classList.add('rd-playing');
        function next() {
            if (i >= lines.length) { btn.classList.remove('rd-playing'); return; }
            var u = new SpeechSynthesisUtterance(lines[i++]);
            u.voice = voice; u.lang = voice.lang; u.rate = rate;
            u.onend = next; u.onerror = next;
            synth.speak(u);
        }
        next();
    }

    /* ---- boot ---- */
    document.addEventListener('DOMContentLoaded', function () {
        var root = document.getElementById('readings-root');
        if (!root) return;
        root.innerHTML = DIALOGUES.map(cardHTML).join('');

        var count = document.getElementById('rd-count');
        if (count) {
            var qs = DIALOGUES.reduce(function (n, d) { return n + d.questions.length; }, 0);
            count.textContent = DIALOGUES.length + ' passages · ' + qs + ' comprehension questions';
        }

        var audioReady = window.CourseAudio && window.CourseAudio.available && window.CourseAudio.available();
        if (audioReady) {
            Array.prototype.forEach.call(root.querySelectorAll('.rd-playall'), function (b) { b.hidden = false; });
        }

        root.addEventListener('click', function (e) {
            var t = e.target;

            var tog = t.closest('.rd-toggle-en');
            if (tog) {
                var card = tog.closest('.rd-card');
                var hidden = card.classList.toggle('rd-hide-en');
                tog.setAttribute('aria-pressed', String(hidden));
                tog.textContent = hidden ? 'Show English' : 'Hide English';
                return;
            }

            var pa = t.closest('.rd-playall');
            if (pa) { playAll(pa.closest('.rd-card'), pa); return; }

            var chk = t.closest('.rd-q-check');
            if (chk) {
                var li = chk.closest('.rd-q');
                var input = li.querySelector('.rd-q-input');
                var fb = li.querySelector('.rd-q-fb');
                var alts = li.getAttribute('data-answer').split('|').map(norm);
                var ok = alts.indexOf(norm(input.value)) >= 0;
                li.classList.toggle('rd-correct', ok);
                li.classList.toggle('rd-wrong', !ok);
                fb.textContent = ok ? '맞아요! (Correct!) 🎉' : 'Not quite — try again, or reveal the answer.';
                return;
            }

            var rev = t.closest('.rd-q-reveal');
            if (rev) {
                var li2 = rev.closest('.rd-q');
                var ans = li2.getAttribute('data-answer').split('|')[0];
                var input2 = li2.querySelector('.rd-q-input');
                input2.value = ans;
                li2.classList.remove('rd-wrong');
                li2.classList.add('rd-correct');
                li2.querySelector('.rd-q-fb').textContent = 'Answer: ' + ans;
                return;
            }
        });

        root.addEventListener('keydown', function (e) {
            if (e.key === 'Enter' && !e.isComposing && e.keyCode !== 229 && e.target.classList.contains('rd-q-input')) {
                e.preventDefault();
                var btn = e.target.closest('.rd-q').querySelector('.rd-q-check');
                if (btn) btn.click();
            }
        });
    });
})();
