/* cando.js — A1/A2 (TOPIK 1–2) "can-do" self-assessment checklist. Standalone
   (like glossary.js / readings.js). Renders the CANDO data below, persists
   ticks in localStorage (korean-cando), and shows live progress bars.
   Each item links to the lesson(s) that teach it. */
(function () {
    'use strict';

    var CANDO = [
        {
            level: 'A1', title: 'A1 — TOPIK 1 (Beginner)',
            groups: [
                {
                    name: 'Reading & sounds', items: [
                        { id: 'a1-consonants', text: 'Recognise the basic consonants and tell plain, aspirated and tense sounds apart', ln: [[1]] },
                        { id: 'a1-vowels', text: 'Read the basic and compound vowels', ln: [[2]] },
                        { id: 'a1-blocks', text: 'Read any Hangul syllable block aloud, including final consonants', ln: [[2], [3]] },
                        { id: 'a1-write', text: 'Write my name and simple words in Hangul', ln: [[2]] },
                        { id: 'a1-batchim', text: 'Pronounce final consonants (받침) with their seven representative sounds', ln: [[3]] },
                        { id: 'a1-linking', text: 'Apply linking (연음) and nasalisation when reading aloud', ln: [[3]] }
                    ]
                },
                {
                    name: 'Building sentences', items: [
                        { id: 'a1-identity', text: 'Say what something or someone is with 이에요/예요', ln: [[5]] },
                        { id: 'a1-not', text: 'Say what something is not with 이/가 아니에요', ln: [[5]] },
                        { id: 'a1-topic', text: 'Mark the topic and subject with 은/는 and 이/가', ln: [[5]] },
                        { id: 'a1-this', text: 'Point to things and places with 이것/그것/저것 and 여기/거기/저기', ln: [[5]] },
                        { id: 'a1-present', text: 'Conjugate verbs and adjectives in the polite present (-아요/어요)', ln: [[7]] },
                        { id: 'a1-object', text: 'Mark the object with 을/를 in a subject–object–verb sentence', ln: [[7]] },
                        { id: 'a1-place', text: 'Say where I am going and where I do things with 에 and 에서', ln: [[9]] },
                        { id: 'a1-have', text: 'Say what there is and what I have with 있어요/없어요', ln: [[9]] },
                        { id: 'a1-position', text: 'Describe where things are with 위, 아래, 앞, 뒤, 옆, 안', ln: [[9]] },
                        { id: 'a1-and', text: 'Link nouns with 하고 and use 도 (also) and 만 (only)', ln: [[9]] },
                        { id: 'a1-neg', text: 'Make sentences negative with 안, 못 and -지 않아요', ln: [[10]] },
                        { id: 'a1-qwords', text: 'Ask questions with 뭐, 누구, 어디, 언제, 왜, 어떻게, 몇 and 얼마', ln: [[10]] },
                        { id: 'a1-past', text: 'Say what I did with the past tense -았/었어요', ln: [[15]] },
                        { id: 'a1-past-time', text: 'Use time words like 어제, 지난주 and 작년 with the past tense', ln: [[15]] }
                    ]
                },
                {
                    name: 'Everyday situations', items: [
                        { id: 'a1-greet', text: 'Greet people and say goodbye with 안녕히 가세요 / 안녕히 계세요', ln: [[4]] },
                        { id: 'a1-intro', text: 'Introduce myself: my name, nationality and job', ln: [[4], [5]] },
                        { id: 'a1-thanks', text: 'Say thank you, sorry and excuse me', ln: [[4]] },
                        { id: 'a1-native', text: 'Count with native Korean numbers (하나, 둘, 셋…) and common counters', ln: [[6]] },
                        { id: 'a1-sino', text: 'Use Sino-Korean numbers for money, dates and phone numbers', ln: [[6]] },
                        { id: 'a1-time', text: 'Tell the time (native-number hours, Sino-number minutes)', ln: [[6]] },
                        { id: 'a1-dates', text: 'Say the days of the week, months and dates', ln: [[6]] },
                        { id: 'a1-family', text: 'Name my family members and describe people', ln: [[8]] },
                        { id: 'a1-order', text: 'Order food and drink at a restaurant or café', ln: [[11]] },
                        { id: 'a1-taste', text: 'Say whether food is spicy, salty or delicious', ln: [[11]] },
                        { id: 'a1-home', text: 'Name the rooms of a home and everyday household items', ln: [[12]] },
                        { id: 'a1-routine', text: 'Describe my daily routine with times', ln: [[12], [6]] },
                        { id: 'a1-shop', text: 'Ask prices and buy things with 얼마예요? and …주세요', ln: [[14]] },
                        { id: 'a1-counters', text: 'Ask for quantities with counters like 개, 장, 병 and 잔', ln: [[14], [6]] }
                    ]
                },
                {
                    name: 'Culture & manners', items: [
                        { id: 'a1-bow', text: 'Bow and greet appropriately for the setting', ln: [[4]] },
                        { id: 'a1-names', text: 'Address people by name + 씨 or by title instead of “you”', ln: [[4], [13]] },
                        { id: 'a1-levels', text: 'Choose between formal 합니다, polite 해요 and casual 반말', ln: [[13]] },
                        { id: 'a1-hon', text: 'Use the honorific -(으)시- and verbs like 계시다 and 드시다 with elders', ln: [[13]] },
                        { id: 'a1-table', text: 'Follow basic table manners: wait for elders, give and receive with two hands', ln: [[11], [13]] },
                        { id: 'a1-age', text: 'Understand why Koreans ask your age and use 형, 오빠, 언니, 누나', ln: [[8], [13]] }
                    ]
                }
            ]
        },
        {
            level: 'A2', title: 'A2 — TOPIK 2 (Elementary)',
            groups: [
                {
                    name: 'Talking about time', items: [
                        { id: 'a2-story', text: 'Tell a short story about what I did yesterday or last weekend', ln: [[15], [18]] },
                        { id: 'a2-future', text: 'Talk about plans and predictions with -(으)ㄹ 거예요', ln: [[17]] },
                        { id: 'a2-want', text: 'Say what I want to do with -고 싶어요', ln: [[17]] },
                        { id: 'a2-suggest', text: 'Suggest doing something together with -(으)ㄹ까요? and -(으)ㅂ시다', ln: [[17]] },
                        { id: 'a2-purpose', text: 'Say I am going somewhere to do something with -(으)러 가요', ln: [[17]] },
                        { id: 'a2-progressive', text: 'Say what I am doing right now with -고 있어요', ln: [[25]] },
                        { id: 'a2-experience', text: 'Talk about my experiences with -(으)ㄴ 적이 있어요', ln: [[25]] }
                    ]
                },
                {
                    name: 'Doing things', items: [
                        { id: 'a2-can', text: 'Say what I can and can’t do with -(으)ㄹ 수 있어요/없어요', ln: [[19]] },
                        { id: 'a2-must', text: 'Say what I have to do with -아야/어야 해요', ln: [[19]] },
                        { id: 'a2-permission', text: 'Ask for and give permission with -아도/어도 돼요 and -(으)면 안 돼요', ln: [[19]] },
                        { id: 'a2-request', text: 'Make polite requests with -아/어 주세요 and -(으)세요', ln: [[19]] },
                        { id: 'a2-dont', text: 'Tell someone politely not to do something with -지 마세요', ln: [[19]] },
                        { id: 'a2-irregular', text: 'Conjugate irregular verbs such as 더워요, 들어요, 몰라요 and 어때요', ln: [[21]] }
                    ]
                },
                {
                    name: 'Linking & describing', items: [
                        { id: 'a2-and-but', text: 'Join clauses with -고 (and) and -지만 (but)', ln: [[23]] },
                        { id: 'a2-because', text: 'Give reasons with -아서/어서 and -(으)니까', ln: [[23]] },
                        { id: 'a2-if', text: 'Talk about conditions with -(으)면', ln: [[23]] },
                        { id: 'a2-when', text: 'Order events with -(으)ㄹ 때, -기 전에 and -(으)ㄴ 후에', ln: [[23]] },
                        { id: 'a2-connect', text: 'Link sentences with 그리고, 그래서, 그런데 and 하지만', ln: [[23]] },
                        { id: 'a2-modifier', text: 'Describe nouns with modifiers (예쁜 옷, 자주 가는 식당)', ln: [[25]] },
                        { id: 'a2-compare', text: 'Compare things with 보다 더 and 제일', ln: [[25]] }
                    ]
                },
                {
                    name: 'Everyday situations', items: [
                        { id: 'a2-directions', text: 'Ask for and follow simple directions', ln: [[16]] },
                        { id: 'a2-transport', text: 'Take the subway, bus and taxi and change lines', ln: [[16]] },
                        { id: 'a2-hobbies', text: 'Talk about my hobbies and how often I do them', ln: [[18]] },
                        { id: 'a2-health', text: 'Describe symptoms at a pharmacy or clinic', ln: [[20]] },
                        { id: 'a2-emergency', text: 'Call 119 or 112 and ask for help in an emergency', ln: [[20]] },
                        { id: 'a2-weather', text: 'Talk about the weather and the four seasons', ln: [[22], [21]] },
                        { id: 'a2-work', text: 'Talk about my job, my workplace and my studies', ln: [[24]] },
                        { id: 'a2-tech', text: 'Use phones, apps and messaging vocabulary (문자, 카톡)', ln: [[26]] },
                        { id: 'a2-feelings', text: 'Express how I feel and describe my relationships', ln: [[27]] },
                        { id: 'a2-travel', text: 'Book a room and get around Korea as a traveller', ln: [[28]] }
                    ]
                },
                {
                    name: 'Culture', items: [
                        { id: 'a2-workplace', text: 'Understand workplace hierarchy and titles like 부장님 and 선배', ln: [[24], [13]] },
                        { id: 'a2-texting', text: 'Recognise common texting shorthand like ㅋㅋ and ㅇㅇ', ln: [[26]] },
                        { id: 'a2-jeong', text: 'Understand relationship ideas such as 정 and 눈치', ln: [[27]] },
                        { id: 'a2-holidays', text: 'Name major holidays like 설날 and 추석 and their customs', ln: [[28]] }
                    ]
                }
            ]
        }
    ];

    var KEY = 'korean-cando';

    function lessonHref(n){ var s=(window.KOREAN_VOCAB&&KOREAN_VOCAB.slugs)||{}; return s[n]? s[n]+'.html' : 'korean_lesson_'+n+'.html'; }

    function load() {
        try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
    }
    function save(state) {
        try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* private mode */ }
    }
    function esc(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    function lessonLink(spec) {
        // spec is [n] for a lesson number, or ['slug','Label'] for a page
        if (typeof spec[0] === 'number') {
            return '<a class="ck-lesson" href="' + lessonHref(spec[0]) + '">L' + spec[0] + '</a>';
        }
        return '<a class="ck-lesson" href="' + esc(spec[0]) + '.html">' + esc(spec[1]) + '</a>';
    }

    function allItems() {
        var out = [];
        CANDO.forEach(function (lvl) { lvl.groups.forEach(function (g) { g.items.forEach(function (it) { out.push(it); }); }); });
        return out;
    }

    document.addEventListener('DOMContentLoaded', function () {
        var root = document.getElementById('cando-root');
        if (!root) return;
        var state = load();

        var html = '';
        CANDO.forEach(function (lvl) {
            html += '<section class="ck-level" data-level="' + esc(lvl.level) + '">';
            html += '<div class="ck-level-head"><h2>' + esc(lvl.title) + '</h2>' +
                '<div class="ck-level-meter"><div class="ck-bar"><span class="ck-bar-fill" data-level="' + esc(lvl.level) + '"></span></div>' +
                '<span class="ck-level-count" data-level="' + esc(lvl.level) + '"></span></div></div>';
            lvl.groups.forEach(function (g) {
                html += '<h3 class="ck-group">' + esc(g.name) + '</h3><ul class="ck-list">';
                g.items.forEach(function (it) {
                    var on = !!state[it.id];
                    html += '<li class="ck-item' + (on ? ' ck-on' : '') + '">' +
                        '<label><input type="checkbox" class="ck-box" data-id="' + esc(it.id) + '"' + (on ? ' checked' : '') + '> ' +
                        '<span class="ck-text">' + esc(it.text) + '</span></label> ' +
                        '<span class="ck-lessons">' + it.ln.map(lessonLink).join(' ') + '</span></li>';
                });
                html += '</ul>';
            });
            html += '</section>';
        });
        root.innerHTML = html;

        function refresh() {
            var items = allItems();
            var total = items.length, done = 0;
            items.forEach(function (it) { if (state[it.id]) done++; });
            var overall = document.getElementById('ck-overall');
            if (overall) overall.textContent = done + ' / ' + total + ' can-do statements (' + Math.round(done / total * 100) + '%)';
            var ofill = document.getElementById('ck-overall-fill');
            if (ofill) ofill.style.width = Math.round(done / total * 100) + '%';

            CANDO.forEach(function (lvl) {
                var lt = 0, ld = 0;
                lvl.groups.forEach(function (g) { g.items.forEach(function (it) { lt++; if (state[it.id]) ld++; }); });
                var pct = Math.round(ld / lt * 100);
                var fill = root.querySelector('.ck-bar-fill[data-level="' + lvl.level + '"]');
                var cnt = root.querySelector('.ck-level-count[data-level="' + lvl.level + '"]');
                if (fill) fill.style.width = pct + '%';
                if (cnt) cnt.textContent = ld + '/' + lt + ' (' + pct + '%)';
            });
        }
        refresh();

        root.addEventListener('change', function (e) {
            var box = e.target.closest('.ck-box');
            if (!box) return;
            var id = box.getAttribute('data-id');
            if (box.checked) state[id] = true; else delete state[id];
            box.closest('.ck-item').classList.toggle('ck-on', box.checked);
            save(state);
            refresh();
        });

        var resetBtn = document.getElementById('ck-reset');
        if (resetBtn) resetBtn.addEventListener('click', function () {
            if (!confirm('Clear all your ticks and start fresh?')) return;
            state = {};
            save(state);
            Array.prototype.forEach.call(root.querySelectorAll('.ck-box'), function (b) { b.checked = false; b.closest('.ck-item').classList.remove('ck-on'); });
            refresh();
        });
    });
})();
