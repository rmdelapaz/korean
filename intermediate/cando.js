/* cando.js — intermediate B1/B2 (TOPIK 3–4) "can-do" self-assessment checklist.
   Standalone (like glossary.js / readings.js). Renders the CANDO data below,
   persists ticks in localStorage (korean-int-cando), and shows live progress bars.
   Each item links to the lesson(s) that teach it. */
(function () {
    'use strict';

    var CANDO = [
        {
            level: 'B1', title: 'B1 — TOPIK 3 (Intermediate)',
            groups: [
                {
                    name: 'Speech styles & natural conversation', items: [
                        { id: 'b1-banmal', text: 'Chat with friends in 반말 using -아/어, -자 and -니?/-냐?', ln: [[1]] },
                        { id: 'b1-switch', text: 'Offer to drop formalities (말 놓을까요?) and judge when switching is appropriate', ln: [[1]] },
                        { id: 'b1-feel', text: 'React naturally with -네요, -군요 and -구나', ln: [[5]] },
                        { id: 'b1-shared', text: 'Appeal to shared knowledge with -잖아요 and check agreement with -지요/-죠', ln: [[5]] },
                        { id: 'b1-background', text: 'Explain myself with -거든요 and soften replies with -(으)ㄴ/는데요', ln: [[5], [7]] },
                        { id: 'b1-bet', text: 'Make a hedged guess with -(으)ㄹ걸요 and state a choice with -(으)ㄹ래요', ln: [[5]] }
                    ]
                },
                {
                    name: 'Reporting & asking', items: [
                        { id: 'b1-report', text: 'Pass on what someone said with -다고/-ㄴ다고/-는다고 하다 and (이)라고 하다', ln: [[2]] },
                        { id: 'b1-report-q', text: 'Report questions, suggestions and commands with -냐고, -자고 and -(으)라고', ln: [[2]] },
                        { id: 'b1-direct', text: 'Quote someone word for word with “…”라고 하다', ln: [[2]] },
                        { id: 'b1-hearsay', text: 'Share news and gossip with the contractions -대요, -래요 and -재요', ln: [[3]] },
                        { id: 'b1-myeonseo', text: 'Check something I heard with -다면서요?', ln: [[3]] },
                        { id: 'b1-dalla', text: 'Choose correctly between 달라고 and 주라고 when reporting requests', ln: [[3]] },
                        { id: 'b1-embedded', text: 'Ask for information politely with -(으)ㄴ/는지 알다/모르다/궁금하다', ln: [[11]] },
                        { id: 'b1-choice', text: 'Offer and accept choices with -거나, -든지, N(이)나 and 아무 N(이)나', ln: [[11]] }
                    ]
                },
                {
                    name: 'Reasoning & explaining', items: [
                        { id: 'b1-guess', text: 'Make guesses in past, present and future with -(으)ㄴ/는/(으)ㄹ 것 같다', ln: [[4]] },
                        { id: 'b1-infer', text: 'Infer from evidence with -나 보다 and -는 모양이다', ln: [[4]] },
                        { id: 'b1-maybe', text: 'Say something might happen with -(으)ㄹ지도 모르다', ln: [[4]] },
                        { id: 'b1-reason', text: 'Give reasons and excuses with -기 때문에, -느라고 and -는 바람에', ln: [[6]] },
                        { id: 'b1-credit', text: 'Give credit or blame with -(으)ㄴ 덕분에 and -(으)ㄴ 탓에', ln: [[6]] },
                        { id: 'b1-pros', text: 'Weigh pros and cons with -기는 하지만 and -(으)ㄴ/는 반면에', ln: [[7]] },
                        { id: 'b1-concede', text: 'Say “even if” and “even though” with -아도, -더라도 and -(으)ㄴ/는데도', ln: [[7]] },
                        { id: 'b1-instead', text: 'Offer a trade-off with -는 대신에', ln: [[7]] }
                    ]
                },
                {
                    name: 'Time, plans & habits', items: [
                        { id: 'b1-sequence', text: 'Tell a story in order with -자마자, -고 나서 and -다가', ln: [[8]] },
                        { id: 'b1-since', text: 'Say how long it has been since something happened with -(으)ㄴ 지 N 되다', ln: [[8]] },
                        { id: 'b1-onway', text: 'Say what I did on the way somewhere with -는 길에', ln: [[8]] },
                        { id: 'b1-purpose', text: 'State goals and aims with -기 위해서, -도록 and -게', ln: [[9]] },
                        { id: 'b1-decide', text: 'Announce decisions with -기로 하다 and tentative plans with -(으)ㄹ까 하다', ln: [[9]] },
                        { id: 'b1-about-to', text: 'Say I was just about to do something with -(으)려던 참이다', ln: [[9]] },
                        { id: 'b1-nominal', text: 'Turn verbs into nouns with -기, -(으)ㅁ and -는 것', ln: [[10]] },
                        { id: 'b1-tendency', text: 'Describe habits and tendencies with -는 편이다', ln: [[10]] },
                        { id: 'b1-takes', text: 'Say how long or how much something takes with -는 데 걸리다/들다', ln: [[10]] },
                        { id: 'b1-helper', text: 'Add nuance with helper verbs -아 버리다, -고 말다 and -아 놓다/두다', ln: [[12]] },
                        { id: 'b1-state', text: 'Tell a resulting state (-아 있다) from an action in progress (-고 있다)', ln: [[12]] },
                        { id: 'b1-change', text: 'Describe gradual change with -아지다 and -아 가다/오다', ln: [[12]] }
                    ]
                },
                {
                    name: 'Living & working in Korea', items: [
                        { id: 'b1-bank', text: 'Open a bank account and ask for a 통장 and 체크카드', ln: [[13]] },
                        { id: 'b1-phone', text: 'Get a mobile phone contract (개통) and understand the plan', ln: [[13]] },
                        { id: 'b1-housing', text: 'Discuss a rental at a 부동산: 보증금, 월세, 관리비 and the 계약서', ln: [[13]] },
                        { id: 'b1-admin', text: 'Handle the 주민센터, my 외국인등록증, parcels (택배) and hospital 접수', ln: [[13]] },
                        { id: 'b1-titles', text: 'Address colleagues by title and position (과장님, 팀장님…)', ln: [[14]] },
                        { id: 'b1-email', text: 'Write a short business email and answer the office phone', ln: [[14]] },
                        { id: 'b1-report-up', text: 'Report to a superior and understand how 보고 and 결재 work', ln: [[14]] },
                        { id: 'b1-meeting', text: 'Take part in a meeting and behave appropriately at a 회식', ln: [[14]] }
                    ]
                }
            ]
        },
        {
            level: 'B2', title: 'B2 — TOPIK 4 (Upper Intermediate)',
            groups: [
                {
                    name: 'Things that happen & making things happen', items: [
                        { id: 'b2-passive', text: 'Describe events with passive verbs like 보이다, 닫히다, 열리다 and 안기다', ln: [[15]] },
                        { id: 'b2-jida', text: 'Use -아/어지다 and -게 되다 for things that happen or turn out', ln: [[15]] },
                        { id: 'b2-agent', text: 'Name who did it in a passive sentence with 에게 or 에 의해', ln: [[15]] },
                        { id: 'b2-causative', text: 'Say I made or helped someone do something with 먹이다, 입히다, 웃기다, 깨우다', ln: [[16]] },
                        { id: 'b2-gehada', text: 'Make, let or have someone act with -게 하다 and 시키다', ln: [[16]] },
                        { id: 'b2-lex-periph', text: 'Explain the difference between 먹이다 and 먹게 하다', ln: [[16]] }
                    ]
                },
                {
                    name: 'Memories, what-ifs & degree', items: [
                        { id: 'b2-deora', text: 'Report what I saw or experienced with -더라고요 and -던데요', ln: [[17]] },
                        { id: 'b2-deon', text: 'Describe past habits and interrupted actions with -던 vs -았던', ln: [[17]] },
                        { id: 'b2-deoni', text: 'Show a change or a result with -더니 and -았더니', ln: [[17]] },
                        { id: 'b2-damyeon', text: 'Imagine unlikely situations with -다면', ln: [[18]] },
                        { id: 'b2-regret', text: 'Express regret with -았더라면 … -았을 텐데', ln: [[18]] },
                        { id: 'b2-wish', text: 'Express wishes with -았으면 좋겠다 and -(으)ㄹ 텐데', ln: [[18]] },
                        { id: 'b2-condition', text: 'Set conditions with -(으)려면, -아야 and -거든', ln: [[18]] },
                        { id: 'b2-surok', text: 'Say “the more…, the more…” with -(으)ㄹ수록', ln: [[19]] },
                        { id: 'b2-extent', text: 'Exaggerate with -(으)ㄹ 정도로 and -(으)ㄹ 만큼', ln: [[19]] },
                        { id: 'b2-near-miss', text: 'Describe a near miss with -(으)ㄹ 뻔했다', ln: [[19]] },
                        { id: 'b2-worth', text: 'Recommend things with -(으)ㄹ 만하다 and say “far from…” with -기는커녕', ln: [[19]] }
                    ]
                },
                {
                    name: 'Respect & formal speech', items: [
                        { id: 'b2-humble', text: 'Use humble verbs 드리다, 여쭙다, 뵙다 and 모시다, and humble 저희 and 말씀', ln: [[20]] },
                        { id: 'b2-hasipsio', text: 'Understand and give announcements in 하십시오체', ln: [[20]] },
                        { id: 'b2-service', text: 'Recognise service-industry honorifics, including over-polite 사물존대', ln: [[20]] },
                        { id: 'b2-apjon', text: 'Explain 압존법 and when it still applies', ln: [[20]] }
                    ]
                },
                {
                    name: 'Reading & writing', items: [
                        { id: 'b2-handa', text: 'Read and write the plain written style 한다체', ln: [[21]] },
                        { id: 'b2-headline', text: 'Decode news headlines written in nominal style', ln: [[21]] },
                        { id: 'b2-news', text: 'Follow the main points of a short news article', ln: [[21]] },
                        { id: 'b2-opinion', text: 'State and support an opinion with 저는 … 고 생각합니다 and -는 것이 중요하다', ln: [[22]] },
                        { id: 'b2-connect', text: 'Link an argument with 게다가, 반면에, 따라서 and 그러므로', ln: [[22]] },
                        { id: 'b2-essay', text: 'Plan a 600–700-character essay with introduction, body and conclusion', ln: [[22], [26]] },
                        { id: 'b2-graph', text: 'Describe a chart or survey result in writing (쓰기 53)', ln: [[22], [26]] }
                    ]
                },
                {
                    name: 'Vocabulary, culture & TOPIK', items: [
                        { id: 'b2-hanja', text: 'Guess new words from Sino-Korean roots like 학, 생, 대 and 인', ln: [[23]] },
                        { id: 'b2-affix', text: 'Use Sino-Korean affixes 비-, 무-, 불-, -화 and -성', ln: [[23]] },
                        { id: 'b2-idiom', text: 'Understand and use common 관용어 like 발이 넓다 and 눈이 높다', ln: [[24]] },
                        { id: 'b2-proverb', text: 'Recognise well-known 속담 and 사자성어 and when they fit', ln: [[24]] },
                        { id: 'b2-dialect', text: 'Recognise Gyeongsang, Jeolla and Jeju 사투리', ln: [[25]] },
                        { id: 'b2-slang', text: 'Understand 신조어, 줄임말 and Konglish in the media', ln: [[25]] },
                        { id: 'b2-drama', text: 'Follow the gist of drama and variety-show dialogue', ln: [[25]] },
                        { id: 'b2-topik-format', text: 'Know the TOPIK II paper structure and question types', ln: [[26]] },
                        { id: 'b2-topik-writing', text: 'Answer TOPIK 쓰기 questions 51–54 within the time limit', ln: [[26]] },
                        { id: 'b2-topik-plan', text: 'Make a study plan targeting level 3 or level 4', ln: [[26]] }
                    ]
                }
            ]
        }
    ];

    var KEY = 'korean-int-cando';

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
