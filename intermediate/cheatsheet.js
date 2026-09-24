/* cheatsheet.js — renders the printable intermediate (B1/B2) grammar-recipe sheet.

   A curated (not exhaustive) set of the core B1–B2 grammar patterns, grouped by
   function and following the intermediate syllabus. Each item is
   [short Korean example sentence, pattern name, English meaning]; the example gets
   an audio button (via audio.js `data-speak`) and is the flashcard front. The layout
   is print-optimised. Data lives here so it is easy to hand-edit. */
(function () {
    'use strict';

    var SHEET = [
        { title: 'Casual & feeling endings', items: [
            ['밥 먹었어?', '-아/어 (반말)', 'Did you eat? (casual)'],
            ['우리 같이 가자.', '-자', "Let's go together."],
            ['이거 누구 거니?', '-니?', 'Whose is this? (to someone younger)'],
            ['와, 한국어를 정말 잘하시네요!', '-네요', 'Wow, you speak Korean really well!'],
            ['아, 그래서 늦었군요.', '-군요', "Ah, so that's why you were late."],
            ['벌써 봄이구나!', '-구나', "Oh, it's already spring!"],
            ['제가 어제 말했잖아요.', '-잖아요', 'I told you yesterday, remember?'],
            ['오늘은 못 가요. 약속이 있거든요.', '-거든요', "I can't go today. I have plans, you see."],
            ['저는 괜찮은데요.', '-(으)ㄴ/는데요', "I'm fine, though…"],
            ['이거 맛있죠?', '-지요/-죠', "This is tasty, isn't it?"],
            ['아마 벌써 끝났을걸요.', '-(으)ㄹ걸요', "It's probably already over, I bet."],
            ['저는 아이스 커피 마실래요.', '-(으)ㄹ래요', "I'll have an iced coffee."]
        ]},
        { title: 'Reported speech', items: [
            ['민수 씨가 내일 바쁘다고 했어요.', '-다고 하다', 'Min-su said he is busy tomorrow.'],
            ['지영 씨가 요즘 운동한다고 해요.', '-ㄴ/는다고 하다', "Ji-young says she's working out these days."],
            ['그분이 의사라고 했어요.', 'N(이)라고 하다', 'He said he is a doctor.'],
            ['엄마가 밥 먹었냐고 물어보셨어요.', '-냐고 묻다', 'Mum asked whether I had eaten.'],
            ['친구가 같이 영화 보자고 했어요.', '-자고 하다', 'My friend suggested we watch a film together.'],
            ['선생님이 숙제를 내라고 하셨어요.', '-(으)라고 하다', 'The teacher told us to hand in our homework.'],
            ['친구가 책을 빌려 달라고 했어요.', '-아/어 달라고 하다', 'My friend asked me to lend him a book.'],
            ['이 책을 동생한테 주라고 했어요.', '-아/어 주라고 하다', 'She told me to give this book to my younger sibling.'],
            ['내일 비가 온대요.', '-대요', "They say it'll rain tomorrow."],
            ['저분이 새로 온 팀장님이래요.', '-(이)래요', "Apparently that's the new team leader."],
            ['선생님이 조용히 하래요.', '-(으)래요 (command)', 'The teacher says to be quiet.'],
            ['다음 달에 이사한다면서요?', '-다면서요?', "I heard you're moving next month — is that right?"]
        ]},
        { title: 'Guessing & inferring', items: [
            ['밖에 비가 오는 것 같아요.', '-는 것 같다', 'It seems to be raining outside.'],
            ['민수 씨가 벌써 간 것 같아요.', '-(으)ㄴ 것 같다 (past)', 'I think Min-su has already left.'],
            ['내일은 추울 것 같아요.', '-(으)ㄹ 것 같다', 'I think it will be cold tomorrow.'],
            ['사람이 많은 걸 보니까 맛있나 봐요.', '-나 보다', 'Judging by the crowd, it must be good.'],
            ['지영 씨가 요즘 바쁜가 봐요.', '-(으)ㄴ가 보다', 'Ji-young must be busy these days.'],
            ['길이 막힐지도 몰라요.', '-(으)ㄹ지도 모르다', 'The roads might be jammed.'],
            ['불이 꺼진 걸 보니 다들 퇴근한 모양이에요.', '-(으)ㄴ 모양이다', 'The lights are off — everyone seems to have gone home.'],
            ['제가 예약할 테니까 걱정하지 마세요.', '-(으)ㄹ 테니까', "I'll make the booking, so don't worry."],
            ['많이 힘들었겠어요.', '-았/었겠-', 'That must have been hard.']
        ]},
        { title: 'Reasons & contrast', items: [
            ['감기에 걸렸기 때문에 결석했어요.', '-기 때문에', 'I was absent because I had a cold.'],
            ['숙제하느라고 못 잤어요.', '-느라고', "I couldn't sleep because I was doing homework."],
            ['버스가 늦게 오는 바람에 지각했어요.', '-는 바람에', 'The bus came late, so I ended up being late.'],
            ['선생님 덕분에 시험에 합격했어요.', 'N 덕분에', 'I passed the exam thanks to my teacher.'],
            ['늦잠을 잔 탓에 비행기를 놓쳤어요.', '-(으)ㄴ 탓에', 'I missed my flight because I overslept.'],
            ['날씨가 좋길래 산책했어요.', '-길래', 'The weather was nice, so I went for a walk.'],
            ['잠을 못 자서 그런지 머리가 아파요.', '-아/어서 그런지', "Maybe because I didn't sleep, I have a headache."],
            ['비가 와도 갈 거예요.', '-아/어도', "I'll go even if it rains."],
            ['힘들더라도 포기하지 마세요.', '-더라도', "Even if it's hard, don't give up."],
            ['약을 먹었는데도 안 나아요.', '-(으)ㄴ/는데도', "I took medicine, but I'm still not better."],
            ['맛있기는 하지만 좀 비싸요.', '-기는 하지만', "It is tasty, but it's a bit pricey."],
            ['서울은 편리한 반면에 집값이 비싸요.', '-(으)ㄴ/는 반면에', 'Seoul is convenient, but housing is expensive.'],
            ['제가 요리하는 대신에 설거지는 민수 씨가 해 주세요.', '-는 대신에', "I'll cook, and in return you do the dishes, Min-su."]
        ]},
        { title: 'Time & sequence', items: [
            ['집에 도착하자마자 잠들었어요.', '-자마자', 'I fell asleep as soon as I got home.'],
            ['제가 없는 동안 고양이 좀 봐 주세요.', '-는 동안', "Please look after the cat while I'm away."],
            ['퇴근하는 길에 마트에 들렀어요.', '-는 길에', 'I stopped by the supermarket on my way home from work.'],
            ['운전하다가 졸면 위험해요.', '-다가', "It's dangerous to doze off while driving."],
            ['공원에 갔다가 비가 와서 돌아왔어요.', '-았/었다가', 'I went to the park, but it rained, so I came back.'],
            ['밥을 먹고 나서 약을 드세요.', '-고 나서', 'Take the medicine after you eat.'],
            ['한국에 온 지 1년이 됐어요.', '-(으)ㄴ 지 N 되다', "It's been a year since I came to Korea."],
            ['비가 그칠 때까지 기다립시다.', '-(으)ㄹ 때까지', "Let's wait until the rain stops."],
            ['지금 회의하는 중이에요.', '-는 중이다', "I'm in a meeting right now."]
        ]},
        { title: 'Purpose & decisions', items: [
            ['감기에 걸리지 않도록 따뜻하게 입으세요.', '-도록', "Dress warmly so you don't catch a cold."],
            ['뒤에서도 잘 들리게 크게 말해 주세요.', '-게', 'Please speak up so people at the back can hear.'],
            ['유학을 가기 위해서 돈을 모으고 있어요.', '-기 위해서', "I'm saving money to study abroad."],
            ['올해부터 담배를 끊기로 했어요.', '-기로 하다', "I've decided to quit smoking this year."],
            ['주말에 대청소를 할까 해요.', '-(으)ㄹ까 하다', "I'm thinking of doing a big clean this weekend."],
            ['마침 전화하려던 참이었어요.', '-(으)려던 참이다', 'I was just about to call you.'],
            ['고객 만족도를 높이고자 서비스를 개선했습니다.', '-고자', 'We improved our service in order to raise customer satisfaction.']
        ]},
        { title: 'Nominalisers & questions', items: [
            ['이 단어는 발음하기 어려워요.', '-기 어렵다', 'This word is hard to pronounce.'],
            ['올해 목표: 매일 30분 걷기', '-기 (lists & goals)', "This year's goal: walk 30 minutes every day"],
            ['제 취미는 사진을 찍는 거예요.', '-는 것', 'My hobby is taking photos.'],
            ['회의 시간이 변경되었음을 알려 드립니다.', '-(으)ㅁ', 'Please note that the meeting time has changed.'],
            ['이 보고서를 쓰는 데 일주일 걸렸어요.', '-는 데 걸리다', 'It took a week to write this report.'],
            ['저는 아침을 많이 먹는 편이에요.', '-는 편이다', 'I tend to eat a big breakfast.'],
            ['회의가 몇 시에 시작하는지 아세요?', '-는지 알다', 'Do you know what time the meeting starts?'],
            ['그 사람이 왜 화가 났는지 궁금해요.', '-았/었는지 궁금하다', 'I wonder why he got angry.'],
            ['내일 비가 올지 모르겠어요.', '-(으)ㄹ지 모르다', "I'm not sure whether it'll rain tomorrow."],
            ['주말에는 영화를 보거나 책을 읽어요.', '-거나', 'At weekends I watch films or read.'],
            ['뭘 먹든지 상관없어요.', '-든지', "It doesn't matter what we eat."],
            ['아무 데나 앉으세요.', '아무 N(이)나', 'Sit anywhere you like.']
        ]},
        { title: 'Helper verbs', items: [
            ['케이크를 혼자 다 먹어 버렸어요.', '-아/어 버리다', 'I ate the whole cake by myself.'],
            ['결국 울고 말았어요.', '-고 말다', 'In the end I burst into tears.'],
            ['손님이 오기 전에 청소해 놓았어요.', '-아/어 놓다', 'I cleaned before the guests arrived.'],
            ['중요한 건 메모해 두세요.', '-아/어 두다', 'Make a note of the important things.'],
            ['문이 열려 있어요.', '-아/어 있다', 'The door is open.'],
            ['지금 창문을 열고 있어요.', '-고 있다', "I'm opening the window now."],
            ['날씨가 점점 따뜻해져요.', '-아/어지다', 'The weather is getting warmer.'],
            ['한국 생활에 조금씩 익숙해져 가요.', '-아/어 가다', "I'm gradually getting used to life in Korea."],
            ['지금까지 열심히 살아왔어요.', '-아/어 오다', "I've worked hard all my life up to now."]
        ]},
        { title: 'Passive & causative', items: [
            ['여기서 바다가 보여요.', 'passive -이-', 'You can see the sea from here.'],
            ['바람 때문에 문이 닫혔어요.', 'passive -히-', 'The door shut because of the wind.'],
            ['옆집 음악 소리가 들려요.', 'passive -리-', "I can hear music from next door."],
            ['아기가 엄마 품에 안겼어요.', 'passive -기-', "The baby was held in its mother's arms."],
            ['도둑이 경찰에게 잡혔어요.', 'N에게 + passive', 'The thief was caught by the police.'],
            ['이 건물은 1920년에 지어졌어요.', '-아/어지다 (passive)', 'This building was built in 1920.'],
            ['회사 일 때문에 부산으로 이사하게 됐어요.', '-게 되다', 'I ended up moving to Busan because of work.'],
            ['엄마가 아기에게 우유를 먹여요.', 'causative -이-', 'The mother feeds the baby milk.'],
            ['아이에게 옷을 입혔어요.', 'causative -히-', 'I dressed the child.'],
            ['동생 울리지 마.', 'causative -리-', "Don't make your little brother cry."],
            ['내일 아침 7시에 깨워 주세요.', 'causative -우-', 'Please wake me at 7 tomorrow morning.'],
            ['의사가 환자를 푹 쉬게 했어요.', '-게 하다', 'The doctor had the patient get plenty of rest.'],
            ['부장님이 저한테 복사를 시키셨어요.', '시키다', 'The manager had me do the photocopying.']
        ]},
        { title: '-더- & hypotheticals', items: [
            ['그 식당 정말 맛있더라고요.', '-더라고요', 'That restaurant was really good, I found.'],
            ['아까 보니까 민수 씨가 바쁘던데요.', '-던데요', 'Min-su looked busy earlier, from what I saw.'],
            ['제가 자주 가던 카페가 없어졌어요.', '-던 (past habit)', 'The café I used to go to has closed.'],
            ['어릴 때 살았던 동네에 가 봤어요.', '-았/었던', 'I visited the neighbourhood I lived in as a child.'],
            ['아침에는 흐리더니 오후에는 맑아졌어요.', '-더니', 'It was cloudy this morning, but it cleared up in the afternoon.'],
            ['약을 먹었더니 좀 나았어요.', '-았/었더니', 'I took some medicine, and now I feel a bit better.'],
            ['복권에 당첨된다면 세계 여행을 할 거예요.', '-(ㄴ/는)다면', "If I won the lottery, I'd travel the world."],
            ['미리 알았더라면 도와줬을 텐데요.', '-았/었더라면 … -았/었을 텐데', 'If I had known in advance, I would have helped.'],
            ['시간이 좀 더 있으면 좋을 텐데요.', '-(으)ㄹ 텐데', 'It would be nice to have a bit more time.'],
            ['내일은 날씨가 좋았으면 좋겠어요.', '-았/었으면 좋겠다', 'I hope the weather is nice tomorrow.'],
            ['도착하거든 연락해.', '-거든 (+ command)', 'Get in touch once you arrive.'],
            ['시청에 가려면 어떻게 해야 돼요?', '-(으)려면', 'How do I get to City Hall?'],
            ['꾸준히 연습해야 잘할 수 있어요.', '-아/어야', 'You only get good by practising regularly.']
        ]},
        { title: 'Degree & extent', items: [
            ['한국어는 배울수록 재미있어요.', '-(으)ㄹ수록', 'The more I learn Korean, the more fun it gets.'],
            ['눈물이 날 정도로 웃었어요.', '-(으)ㄹ 정도로', 'I laughed so hard I cried.'],
            ['배가 터질 만큼 먹었어요.', '-(으)ㄹ 만큼', 'I ate until I was fit to burst.'],
            ['계단에서 넘어질 뻔했어요.', '-(으)ㄹ 뻔하다', 'I almost fell on the stairs.'],
            ['이 영화는 한번 볼 만해요.', '-(으)ㄹ 만하다', 'This film is worth seeing.'],
            ['아시다시피 이번 주는 휴가철입니다.', '-다시피', 'As you know, this week is holiday season.'],
            ['쉬기는커녕 밥 먹을 시간도 없었어요.', '-기는커녕', "Far from resting, I didn't even have time to eat."]
        ]},
        { title: 'Formal & written style', items: [
            ['잠시 후 열차가 들어오겠습니다.', '하십시오체 (announcement)', 'The train will be arriving shortly.'],
            ['선생님께 여쭤볼게요.', '여쭙다 (humble)', "I'll ask the teacher."],
            ['내일 사무실에서 뵙겠습니다.', '뵙다 (humble)', "I'll see you at the office tomorrow."],
            ['나는 매일 일기를 쓴다.', '한다체 -ㄴ/는다', 'I write a diary every day.'],
            ['물가가 계속 오르고 있다.', '한다체 -고 있다', 'Prices continue to rise.'],
            ['서울 아파트값 3개월 연속 상승', 'headline nominal style', 'Seoul apartment prices rise for third straight month'],
            ['진정한 행복이란 무엇인가?', '-(으)ㄴ가 (written question)', 'What is true happiness?'],
            ['태풍으로 인해 항공편이 결항되었다.', '(으)로 인해', 'Flights were cancelled due to the typhoon.'],
            ['게다가 교통도 편리하다.', '게다가', 'What is more, transport is convenient.'],
            ['한편, 반대 의견도 적지 않다.', '한편', 'On the other hand, there are quite a few opposing views.'],
            ['따라서 대책이 필요하다.', '따라서', 'Therefore, measures are needed.'],
            ['무엇보다 서로 존중하는 것이 중요하다.', '-는 것이 중요하다', 'Above all, respecting one another is important.'],
            ['정부는 대책을 마련해야 할 것이다.', '-아/어야 할 것이다', 'The government will need to prepare measures.']
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
    if (count) count.textContent = total + ' grammar patterns across ' + SHEET.length + ' categories';

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
