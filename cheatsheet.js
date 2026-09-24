/* cheatsheet.js — renders the printable "most common phrases" cheat sheet.

   A curated (not exhaustive) set of the everyday survival phrases a traveller or
   new learner reaches for first, grouped by situation. Each phrase gets an audio
   button (via audio.js `data-speak`); the layout is print-optimised so it prints
   cleanly onto a couple of pages. Data lives here so it is easy to hand-edit. */
(function () {
    'use strict';

    var SHEET = [
        { title: 'Greetings', items: [
            ['안녕하세요', 'annyeonghaseyo', 'Hello (polite)'],
            ['안녕하십니까', 'annyeonghasimnikka', 'Hello (formal)'],
            ['안녕', 'annyeong', 'Hi / Bye (casual, to friends)'],
            ['처음 뵙겠습니다', 'cheoeum boepgetseumnida', 'How do you do? (formal, first meeting)'],
            ['만나서 반갑습니다', 'mannaseo bangapseumnida', 'Nice to meet you (formal)'],
            ['잘 지냈어요?', 'jal jinaesseoyo?', 'How have you been?'],
            ['안녕히 가세요', 'annyeonghi gaseyo', 'Goodbye (to someone leaving)'],
            ['안녕히 계세요', 'annyeonghi gyeseyo', 'Goodbye (to someone staying)'],
            ['또 만나요', 'tto mannayo', 'See you again']
        ]},
        { title: 'Courtesy', items: [
            ['감사합니다', 'gamsahamnida', 'Thank you (formal)'],
            ['고마워요', 'gomawoyo', 'Thanks (polite)'],
            ['천만에요', 'cheonmaneyo', "You're welcome"],
            ['죄송합니다', 'joesonghamnida', "I'm sorry (formal)"],
            ['미안해요', 'mianhaeyo', 'Sorry (polite)'],
            ['괜찮아요', 'gwaenchanayo', "It's okay / I'm fine / No, thanks"],
            ['저기요', 'jeogiyo', 'Excuse me (to get attention)'],
            ['실례합니다', 'sillyehamnida', 'Excuse me (formal; entering or interrupting)'],
            ['네 / 아니요', 'ne / aniyo', 'Yes / No']
        ]},
        { title: 'Getting help & language', items: [
            ['잘 모르겠어요', 'jal moreugesseoyo', "I'm not sure / I don't really know"],
            ['이해 못 했어요', 'ihae mot haesseoyo', "I didn't understand"],
            ['다시 한번 말해 주세요', 'dasi hanbeon malhae juseyo', 'Please say that again'],
            ['천천히 말해 주세요', 'cheoncheonhi malhae juseyo', 'Please speak slowly'],
            ['영어 할 수 있어요?', 'yeongeo hal su isseoyo?', 'Can you speak English?'],
            ['한국어를 배우고 있어요', 'hangugeoreul baeugo isseoyo', "I'm learning Korean"],
            ['이거 한국어로 뭐예요?', 'igeo hangugeoro mwoyeyo?', 'What is this in Korean?'],
            ['한국어로 뭐라고 해요?', 'hangugeoro mworago haeyo?', 'How do you say it in Korean?'],
            ['도와주세요!', 'dowajuseyo!', 'Help!']
        ]},
        { title: 'Numbers & money', items: [
            ['하나, 둘, 셋, 넷, 다섯', 'hana, dul, set, net, daseot', '1–5, native Korean (counting things, hours, age)'],
            ['일, 이, 삼, 사, 오', 'il, i, sam, sa, o', '1–5, Sino-Korean (money, dates, minutes)'],
            ['얼마예요?', 'eolmayeyo?', 'How much is it?'],
            ['만 원이에요', 'man wonieyo', "It's 10,000 won"],
            ['너무 비싸요', 'neomu bissayo', "It's too expensive"],
            ['카드 돼요?', 'kadeu dwaeyo?', 'Can I pay by card?'],
            ['현금으로 할게요', 'hyeongeumeuro halgeyo', "I'll pay in cash"],
            ['영수증 주세요', 'yeongsujeung juseyo', 'A receipt, please']
        ]},
        { title: 'Food & drink', items: [
            ['메뉴판 주세요', 'menyupan juseyo', 'The menu, please'],
            ['이거 주세요', 'igeo juseyo', "I'll have this, please"],
            ['비빔밥 하나 주세요', 'bibimbap hana juseyo', 'One bibimbap, please'],
            ['물 좀 주세요', 'mul jom juseyo', 'Some water, please'],
            ['안 맵게 해 주세요', 'an maepge hae juseyo', 'Not spicy, please'],
            ['맛있어요!', 'masisseoyo!', "It's delicious!"],
            ['잘 먹겠습니다', 'jal meokgetseumnida', 'Thank you for the meal (said before eating)'],
            ['잘 먹었습니다', 'jal meogeotseumnida', 'Thank you for the meal (said after eating)'],
            ['계산해 주세요', 'gyesanhae juseyo', 'The bill, please']
        ]},
        { title: 'Shopping', items: [
            ['구경하고 있어요', 'gugyeonghago isseoyo', "I'm just looking"],
            ['이거 입어 봐도 돼요?', 'igeo ibeo bwado dwaeyo?', 'Can I try this on?'],
            ['더 큰 사이즈 있어요?', 'deo keun saijeu isseoyo?', 'Do you have a bigger size?'],
            ['다른 색깔 있어요?', 'dareun saekkkal isseoyo?', 'Do you have another colour?'],
            ['좀 깎아 주세요', 'jom kkakka juseyo', 'Can you give me a discount? (markets)'],
            ['이걸로 할게요', 'igeollo halgeyo', "I'll take this one"],
            ['봉투 필요해요', 'bongtu piryohaeyo', 'I need a bag'],
            ['환불할 수 있어요?', 'hwanbulhal su isseoyo?', 'Can I get a refund?']
        ]},
        { title: 'Getting around', items: [
            ['화장실이 어디예요?', 'hwajangsiri eodiyeyo?', 'Where is the restroom?'],
            ['지하철역이 어디예요?', 'jihacheollyeogi eodiyeyo?', 'Where is the subway station?'],
            ['여기에서 멀어요?', 'yeogieseo meoreoyo?', 'Is it far from here?'],
            ['똑바로 가세요', 'ttokbaro gaseyo', 'Go straight ahead'],
            ['오른쪽 / 왼쪽으로 가세요', 'oreunjjok / oenjjogeuro gaseyo', 'Go right / left'],
            ['어디에서 갈아타요?', 'eodieseo garatayo?', 'Where do I transfer?'],
            ['서울역으로 가 주세요', 'seoullyeogeuro ga juseyo', 'To Seoul Station, please (taxi)'],
            ['여기에서 내려 주세요', 'yeogieseo naeryeo juseyo', 'Please let me off here'],
            ['길을 잃었어요', 'gireul ireosseoyo', "I'm lost"]
        ]},
        { title: 'Health & emergencies', items: [
            ['아파요', 'apayo', "It hurts / I'm sick"],
            ['머리가 아파요', 'meoriga apayo', 'I have a headache'],
            ['배가 아파요', 'baega apayo', 'I have a stomachache'],
            ['알레르기가 있어요', 'allereugiga isseoyo', 'I have an allergy'],
            ['약국이 어디예요?', 'yakgugi eodiyeyo?', 'Where is a pharmacy?'],
            ['병원에 가야 해요', 'byeongwone gaya haeyo', 'I need to go to the hospital'],
            ['구급차 불러 주세요!', 'gugeupcha bulleo juseyo!', 'Call an ambulance!'],
            ['경찰 불러 주세요!', 'gyeongchal bulleo juseyo!', 'Call the police!'],
            ['119 / 112', 'il-il-gu / il-il-i', 'Emergency numbers: fire & ambulance / police']
        ]},
        { title: 'Time & plans', items: [
            ['지금 몇 시예요?', 'jigeum myeot siyeyo?', 'What time is it now?'],
            ['세 시 반이에요', 'se si banieyo', "It's half past three"],
            ['오늘 / 내일 / 어제', 'oneul / naeil / eoje', 'Today / tomorrow / yesterday'],
            ['주말에 뭐 해요?', 'jumare mwo haeyo?', 'What are you doing at the weekend?'],
            ['내일 시간 있어요?', 'naeil sigan isseoyo?', 'Are you free tomorrow?'],
            ['같이 밥 먹을까요?', 'gachi bap meogeulkkayo?', 'Shall we get a meal together?'],
            ['몇 시에 만날까요?', 'myeot sie mannalkkayo?', 'What time shall we meet?'],
            ['좋아요!', 'joayo!', 'Sounds good!'],
            ['미안해요, 그날은 안 돼요', 'mianhaeyo, geunareun an dwaeyo', "Sorry, that day doesn't work for me"]
        ]},
        { title: 'Social / making friends', items: [
            ['이름이 뭐예요?', 'ireumi mwoyeyo?', "What's your name?"],
            ['어느 나라 사람이에요?', 'eoneu nara saramieyo?', 'Which country are you from?'],
            ['저는 미국 사람이에요', 'jeoneun miguk saramieyo', "I'm American"],
            ['무슨 일 하세요?', 'museun il haseyo?', 'What do you do for work? (honorific)'],
            ['취미가 뭐예요?', 'chwimiga mwoyeyo?', "What's your hobby?"],
            ['한국 음식 좋아해요', 'hanguk eumsik joahaeyo', 'I like Korean food'],
            ['카톡 해요?', 'katok haeyo?', 'Do you use KakaoTalk?'],
            ['말 놓을까요?', 'mal noeulkkayo?', 'Shall we switch to casual speech?'],
            ['건배!', 'geonbae!', 'Cheers!']
        ]}
    ];

    function esc(s) {
        return String(s).replace(/[&<>"']/g, function (c) {
            return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
        });
    }

    var root = document.getElementById('cheatsheet-root');
    if (!root) return;

    root.innerHTML = SHEET.map(function (cat) {
        var rows = cat.items.map(function (it) {
            return '<div class="cs-row">' +
                '<div class="cs-tl"><span data-speak="' + esc(it[0]) + '">' + esc(it[0]) + '</span></div>' +
                '<div class="cs-pron">' + esc(it[1]) + '</div>' +
                '<div class="cs-en">' + esc(it[2]) + '</div>' +
            '</div>';
        }).join('');
        return '<section class="cs-card"><h3 class="cs-cat">' + esc(cat.title) +
            '<button type="button" class="cs-cat-practice" data-cat="' + esc(cat.title) + '" ' +
            'aria-label="Practice ' + esc(cat.title) + ' flashcards" title="Practice these">🃏</button>' +
            '</h3>' + rows + '</section>';
    }).join('');

    var total = SHEET.reduce(function (n, c) { return n + c.items.length; }, 0);
    var count = document.getElementById('cs-count');
    if (count) count.textContent = total + ' essential phrases across ' + SHEET.length + ' situations';

    /* ---------- flashcard practice ----------
       Flip through every phrase (front = Korean + pronunciation, back = English).
       Reuses the .lx-flash modal styles from learn.css. Browse-only: the cheat
       sheet is a quick reference, not tied to the spaced-repetition deck. */
    var DECK = [];
    SHEET.forEach(function (cat) { cat.items.forEach(function (it) { DECK.push({ ko: it[0], pron: it[1], en: it[2], cat: cat.title }); }); });

    function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

    function openFlashcards(deck, title) {
        if (!deck.length) return;
        var i = 0, flipped = false;
        var overlay = document.createElement('div');
        overlay.className = 'lx-modal';
        overlay.innerHTML =
            '<div class="lx-flash" role="dialog" aria-modal="true" aria-label="Flashcard practice">' +
                '<div class="lx-flash-head"><h3>' + esc(title) + '</h3>' +
                    '<button type="button" class="lx-flash-close" aria-label="Close">&times;</button></div>' +
                '<div class="lx-flash-card"><div class="lx-flash-face"></div>' +
                    '<div class="lx-flash-hint">Tap the card to flip</div></div>' +
                '<div class="lx-flash-controls">' +
                    '<button type="button" class="lx-btn lx-flash-prev">← Prev</button>' +
                    '<span class="lx-flash-progress"></span>' +
                    '<button type="button" class="lx-btn lx-flash-next">Next →</button>' +
                '</div>' +
            '</div>';
        document.body.appendChild(overlay);

        var faceEl = overlay.querySelector('.lx-flash-face');
        var progEl = overlay.querySelector('.lx-flash-progress');
        function render() {
            var w = deck[i];
            if (!flipped) {
                faceEl.innerHTML = '<div class="lx-flash-front"><span data-speak="' + esc(w.ko) + '">' + esc(w.ko) + '</span></div>' +
                    (w.pron ? '<div class="lx-flash-pron">' + esc(w.pron) + '</div>' : '') +
                    (w.cat ? '<div class="lx-flash-hint" style="margin-top:.3rem">' + esc(w.cat) + '</div>' : '');
            } else {
                faceEl.innerHTML = '<div class="lx-flash-back">' + esc(w.en) + '</div>';
            }
            progEl.textContent = (i + 1) + ' / ' + deck.length;
        }
        function go(d) { i = (i + d + deck.length) % deck.length; flipped = false; render(); }
        function close() { overlay.remove(); document.removeEventListener('keydown', onKey); }
        overlay.querySelector('.lx-flash-card').addEventListener('click', function () { flipped = !flipped; render(); });
        overlay.querySelector('.lx-flash-next').addEventListener('click', function () { go(1); });
        overlay.querySelector('.lx-flash-prev').addEventListener('click', function () { go(-1); });
        overlay.querySelector('.lx-flash-close').addEventListener('click', close);
        overlay.addEventListener('click', function (e) { if (e.target === overlay) close(); });
        function onKey(e) {
            if (e.key === 'Escape') close();
            else if (e.key === 'ArrowRight') go(1);
            else if (e.key === 'ArrowLeft') go(-1);
            else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipped = !flipped; render(); }
        }
        document.addEventListener('keydown', onKey);
        render();
    }

    var practiceBtn = document.querySelector('.cs-practice');
    if (practiceBtn) practiceBtn.addEventListener('click', function () {
        openFlashcards(shuffle(DECK), 'Cheat sheet · ' + DECK.length + ' phrases');
    });

    // Per-category practice (delegated on the grid).
    root.addEventListener('click', function (e) {
        var b = e.target.closest('.cs-cat-practice');
        if (!b) return;
        var cat = b.getAttribute('data-cat');
        var deck = DECK.filter(function (w) { return w.cat === cat; });
        if (deck.length) openFlashcards(shuffle(deck), cat + ' · ' + deck.length + ' phrases');
    });
})();
