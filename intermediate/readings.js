/* readings.js — graded intermediate (B1→B2) Korean dialogues & reading passages
   (diary, email, news, notice, column) that recycle grammar and vocabulary from
   across the intermediate lessons. Standalone (like glossary.js /
   cheatsheet.js): renders from the DIALOGUES data below, wires audio via
   data-speak (audio.js adds the 🔊 buttons), a hide-English comprehension
   toggle, an optional "Play all" (only when a TTS voice is installed), and
   check-your-understanding questions with a self-contained answer checker. */
(function () {
    'use strict';

    /* ---- content: each piece recycles earlier lessons' words ---- */
    var DIALOGUES = [
        {
            id: 'mal-noki',
            title: '우리 말 놓을까요?',
            en_title: 'Shall We Drop the Formalities?',
            kind: 'Dialogue',
            scene: 'Ha-eun and Jun-ho, members of a university club, discover they were born the same year and switch to 반말. Listen for 동갑, 말 놓다 and the hearsay endings -대/-대요.',
            recycles: [1, 3, 5],
            lines: [
                { sp: '준호', ko: '하은 씨, 혹시 몇 년생이에요?', en: 'Ha-eun, what year were you born, if you don’t mind me asking?' },
                { sp: '하은', ko: '저는 2001년생이에요. 준호 씨는요?', en: 'I was born in 2001. How about you, Jun-ho?' },
                { sp: '준호', ko: '어, 저도 2001년생이에요! 우리 동갑이네요.', en: "Oh, I was born in 2001 too! We're the same age." },
                { sp: '하은', ko: '그럼 우리 말 놓을까요?', en: 'Then shall we drop the formalities?' },
                { sp: '준호', ko: '좋아! 이제부터 편하게 말하자.', en: "Great! Let's talk casually from now on." },
                { sp: '하은', ko: '응. 근데 너 다음 주 모임에 와?', en: 'Yeah. By the way, are you coming to next week’s get-together?' },
                { sp: '준호', ko: '아마 갈 거야. 근데 민지는 이번에 못 온대.', en: "I'll probably go. But Min-ji says she can't come this time." },
                { sp: '하은', ko: '왜? 무슨 일 있대?', en: 'Why? Did she say something’s up?' },
                { sp: '준호', ko: '아르바이트 때문에 바쁘대. 요즘 주말마다 일하잖아.', en: "She says she's busy with her part-time job. She works every weekend these days, you know." }
            ],
            questions: [
                { q: 'In what year were both of them born? (a number)', a: '2001|2001년|2001년생|이천일 년|이천일년', hint: '…년생 = born in the year …' },
                { q: 'Who can’t come to the get-together? (a name)', a: '민지|min-ji|minji', hint: 'Look for 못 온대.' },
                { q: 'Why is she busy? (Korean word)', a: '아르바이트|알바|part-time job|part time job|work', hint: '… 때문에 바쁘대.' }
            ]
        },
        {
            id: 'ilgi',
            title: '운 없는 하루',
            en_title: 'An Unlucky Day',
            kind: 'Diary',
            scene: 'Jun-ho’s diary entry, written in the plain 한다체 style. Notice the reasons (-는 바람에), the sequence (-자마자) and the helper verbs.',
            recycles: [6, 8, 9, 12],
            lines: [
                { ko: '9월 23일 수요일, 맑음', en: 'Wednesday 23 September, clear skies' },
                { ko: '오늘은 정말 운이 없는 날이었다.', en: 'Today was a really unlucky day.' },
                { ko: '알람을 끄고 다시 자 버리는 바람에 늦잠을 잤다.', en: 'I switched off my alarm and fell back asleep, so I overslept.' },
                { ko: '일어나자마자 역으로 뛰어갔지만 지하철 문은 이미 닫혀 있었다.', en: 'As soon as I got up I ran to the station, but the train doors were already shut.' },
                { ko: '결국 수업에 30분이나 늦었다.', en: 'In the end I was a whole thirty minutes late for class.' },
                { ko: '교수님께서 화가 나신 것 같아서 수업이 끝나자마자 사과를 드렸다.', en: 'The professor seemed angry, so I apologised as soon as class finished.' },
                { ko: '다행히 교수님은 웃으시면서 괜찮다고 하셨다.', en: 'Luckily the professor smiled and said it was fine.' },
                { ko: '집에 오는 길에 좋아하는 떡볶이를 사 먹고 나니까 기분이 좀 나아졌다.', en: 'On the way home I bought my favourite tteokbokki, and I felt a bit better.' },
                { ko: '내일부터는 알람을 두 개 맞춰 놓기로 했다.', en: "From tomorrow I've decided to set two alarms." }
            ],
            questions: [
                { q: 'How many minutes late was he? (a number)', a: '30|30분|삼십 분|삼십분|thirty', hint: '…분이나 늦었다' },
                { q: 'What did he eat on the way home? (Korean)', a: '떡볶이|tteokbokki|ddeokbokki', hint: 'Look for 오는 길에.' },
                { q: 'How many alarms will he set from tomorrow? (a number)', a: '2|2개|두 개|두개|둘|two', hint: '알람을 … 맞춰 놓기로 했다' }
            ]
        },
        {
            id: 'wonroom',
            title: '원룸 구하기',
            en_title: 'Finding a Studio Flat',
            kind: 'Dialogue',
            scene: 'Emma, an exchange student, visits a 부동산 (estate agent) near her university. Listen for 보증금, 월세 and 관리비 — and for -는 편이다 and -기는 하지만.',
            recycles: [13, 10, 7, 11],
            lines: [
                { sp: '중개사', ko: '어서 오세요. 어떤 집을 찾으세요?', en: 'Welcome. What kind of place are you looking for?' },
                { sp: '엠마', ko: '학교 근처에 원룸을 구하고 있는데요. 월세가 보통 얼마인지 알 수 있을까요?', en: "I'm looking for a studio near the university. Could you tell me what rent usually is?" },
                { sp: '중개사', ko: '이 근처는 보통 보증금 500에 월세 50 정도예요.', en: 'Around here it’s usually a 5-million-won deposit and 500,000 won a month.' },
                { sp: '엠마', ko: '관리비는 따로 내야 돼요?', en: 'Do I have to pay the maintenance fee separately?' },
                { sp: '중개사', ko: '네, 관리비는 한 달에 7만 원이에요. 대신에 인터넷은 포함돼 있어요.', en: "Yes, the maintenance fee is 70,000 won a month. But the internet is included." },
                { sp: '엠마', ko: '역에서 가까운 편이에요?', en: 'Is it fairly close to the station?' },
                { sp: '중개사', ko: '걸어서 5분밖에 안 걸려요. 좀 좁기는 하지만 깨끗해요.', en: "It's only a five-minute walk. It is a bit small, but it's clean." },
                { sp: '엠마', ko: '좋네요. 계약하기 전에 한번 볼 수 있을까요?', en: 'Sounds good. Could I see it before I sign a contract?' },
                { sp: '중개사', ko: '그럼요. 지금 같이 가 보실까요?', en: 'Of course. Shall we go and take a look now?' }
            ],
            questions: [
                { q: 'How much is the monthly maintenance fee? (in won)', a: '7만 원|7만원|70000|70,000|칠만 원|칠만원', hint: '관리비는 한 달에 …' },
                { q: 'How many minutes is it on foot to the station? (a number)', a: '5|5분|오 분|오분|five', hint: '걸어서 …밖에 안 걸려요' },
                { q: 'What is included in the maintenance fee? (Korean word)', a: '인터넷|internet', hint: '…은 포함돼 있어요' }
            ]
        },
        {
            id: 'imeil',
            title: '회의 일정 변경 안내',
            en_title: 'Meeting Rescheduled',
            kind: 'Email',
            scene: 'A team-wide email from Kim Su-jin in the marketing team. Notice the business-email formulas, 부장님께서 and the -아/어 주시기 바랍니다 request.',
            recycles: [14, 6, 12, 9],
            lines: [
                { ko: '제목: 주간 회의 일정 변경 안내', en: 'Subject: Change to the weekly meeting schedule' },
                { ko: '팀원 여러분, 안녕하세요. 마케팅팀 김수진입니다.', en: 'Hello, everyone. This is Kim Su-jin from the marketing team.' },
                { ko: '이번 주 목요일 오후 2시에 예정되어 있던 주간 회의가 금요일 오전 10시로 변경되었습니다.', en: "This week's meeting, scheduled for Thursday at 2 p.m., has been moved to Friday at 10 a.m." },
                { ko: '부장님께서 목요일에 부산으로 출장을 가시게 되었기 때문입니다.', en: 'This is because the department head has to go on a business trip to Busan on Thursday.' },
                { ko: '회의는 기존과 같이 3층 대회의실에서 진행됩니다.', en: 'The meeting will be held in the main conference room on the third floor, as before.' },
                { ko: '회의 전까지 각자 담당 업무의 진행 상황을 정리해 주시기 바랍니다.', en: 'Before the meeting, please each summarise the progress of the work you are responsible for.' },
                { ko: '참석이 어려우신 분은 목요일까지 저에게 메일로 알려 주세요.', en: 'If you are unable to attend, please let me know by email by Thursday.' },
                { ko: '감사합니다. 김수진 드림', en: 'Thank you. Kim Su-jin' }
            ],
            questions: [
                { q: 'On what day is the meeting now? (Korean or English)', a: '금요일|금|friday', hint: '…로 변경되었습니다' },
                { q: 'Where is the department head going on a business trip? (Korean)', a: '부산|busan', hint: '…으로 출장을 가시게 되었기 때문입니다' },
                { q: 'On which floor is the conference room? (a number)', a: '3|3층|삼 층|삼층|three|third', hint: '…층 대회의실' }
            ]
        },
        {
            id: 'jeju',
            title: '제주도에 다녀왔는데요',
            en_title: 'Back from Jeju',
            kind: 'Story',
            scene: 'Ji-min tells her colleague Tae-o about her weekend on Jeju Island. She reports what she saw and felt with -더라고요, and nearly has an accident (-(으)ㄹ 뻔하다).',
            recycles: [17, 19, 6, 8],
            lines: [
                { sp: '태오', ko: '지민 씨, 제주도 여행은 어땠어요?', en: 'Ji-min, how was your trip to Jeju?' },
                { sp: '지민', ko: '정말 좋았어요. 바다 색깔이 생각보다 훨씬 예쁘더라고요.', en: 'It was great. The colour of the sea was much prettier than I expected.' },
                { sp: '태오', ko: '사람 많지 않았어요?', en: "Wasn't it crowded?" },
                { sp: '지민', ko: '성수기라서 그런지 관광객이 정말 많더라고요. 유명한 식당에서는 한 시간이나 기다렸어요.', en: 'Maybe because it’s peak season, there were loads of tourists. We waited a whole hour at a famous restaurant.' },
                { sp: '태오', ko: '한 시간이요? 기다릴 만했어요?', en: 'An hour? Was it worth the wait?' },
                { sp: '지민', ko: '네, 흑돼지가 입에서 녹을 정도로 부드럽더라고요.', en: 'Yes, the black pork was so tender it melted in my mouth.' },
                { sp: '태오', ko: '한라산에도 올라갔어요?', en: 'Did you climb Hallasan too?' },
                { sp: '지민', ko: '올라가다가 비가 너무 많이 와서 중간에 내려왔어요. 미끄러져서 넘어질 뻔했어요.', en: 'I was on my way up, but it rained so hard that I came back down halfway. I slipped and nearly fell.' },
                { sp: '태오', ko: '아이고, 안 다쳐서 다행이네요.', en: "Oh dear, it's lucky you didn't get hurt." }
            ],
            questions: [
                { q: 'How long did she wait at the famous restaurant?', a: '한 시간|한시간|1시간|1|one hour|an hour', hint: '…이나 기다렸어요' },
                { q: 'What food does she rave about? (Korean)', a: '흑돼지|black pork|돼지고기', hint: '입에서 녹을 정도로…' },
                { q: 'Why did she come down from Hallasan halfway? (Korean word)', a: '비|비가 와서|비 때문에|rain', hint: '…가 너무 많이 와서' }
            ]
        },
        {
            id: 'nyuseu',
            title: '수도권 폭우에 출근길 혼잡',
            en_title: 'Heavy Rain Snarls the Morning Commute',
            kind: 'News',
            scene: 'A short news report in 한다체. Notice the nominal headline, the passive verbs (잠기다, 고립되다, 중단되다) and reported speech in the -다고 밝혔다 pattern.',
            recycles: [21, 15, 6, 2],
            lines: [
                { ko: '수도권 기록적 폭우… 출근길 교통 혼잡', en: 'Record rainfall in the capital region… morning commute in chaos' },
                { ko: '23일 새벽부터 서울과 경기 지역에 시간당 80mm가 넘는 비가 내렸다.', en: 'From the early hours of the 23rd, more than 80 mm of rain per hour fell on Seoul and Gyeonggi.' },
                { ko: '이로 인해 도로 곳곳이 물에 잠기고 차량 수백 대가 고립되었다.', en: 'As a result, roads were flooded in many places and hundreds of vehicles were stranded.' },
                { ko: '지하철 2호선 일부 구간은 선로가 침수되는 바람에 약 두 시간 동안 운행이 중단되었다.', en: 'Part of subway Line 2 was suspended for about two hours after the tracks flooded.' },
                { ko: '출근길 시민들은 우산을 써도 옷이 다 젖을 정도였다고 말했다.', en: 'Commuters said they got soaked even with umbrellas.' },
                { ko: '기상청은 이번 비가 내일 오후까지 이어질 것으로 보인다고 밝혔다.', en: 'The Korea Meteorological Administration said the rain is expected to continue until tomorrow afternoon.' },
                { ko: '서울시는 저지대 주민들에게 외출을 자제해 달라고 당부했다.', en: 'The Seoul city government urged residents of low-lying areas to avoid going out.' }
            ],
            questions: [
                { q: 'How many millimetres of rain fell per hour? (a number)', a: '80|80mm|80밀리미터|팔십', hint: '시간당 …mm가 넘는 비' },
                { q: 'Which subway line was suspended? (a number)', a: '2|2호선|이호선|line 2|two', hint: '지하철 …호선' },
                { q: 'Until when will the rain continue? (Korean)', a: '내일 오후|내일|tomorrow afternoon|tomorrow', hint: '…까지 이어질 것으로 보인다' }
            ]
        },
        {
            id: 'gongji',
            title: '엘리베이터 정기 점검 안내',
            en_title: 'Notice: Elevator Maintenance',
            kind: 'Notice',
            scene: 'A notice posted by an apartment management office, in formal 하십시오체. Notice 알려 드립니다, -아/어 주시기 바랍니다 and 불편을 드려 죄송합니다.',
            recycles: [20, 21, 15, 13],
            lines: [
                { ko: '입주민 여러분께 알려 드립니다.', en: 'A notice to all residents.' },
                { ko: '안전한 엘리베이터 이용을 위해 아래와 같이 정기 점검을 실시하겠습니다.', en: 'To keep the elevators safe to use, we will carry out routine maintenance as follows.' },
                { ko: '점검 일시는 10월 5일 화요일 오전 9시부터 오후 1시까지입니다.', en: 'Maintenance will take place on Tuesday 5 October from 9 a.m. to 1 p.m.' },
                { ko: '점검 시간 동안에는 1호기와 2호기 모두 운행이 중지됩니다.', en: 'During this time, both Elevator 1 and Elevator 2 will be out of service.' },
                { ko: '거동이 불편하신 분이나 무거운 짐을 옮기셔야 하는 분께서는 관리사무소로 미리 연락해 주시기 바랍니다.', en: 'Residents with limited mobility or who need to move heavy items are asked to contact the management office in advance.' },
                { ko: '이용에 불편을 드려 대단히 죄송합니다.', en: 'We sincerely apologise for the inconvenience.' },
                { ko: '입주민 여러분의 양해와 협조를 부탁드립니다.', en: 'We ask for your understanding and cooperation.' },
                { ko: '행복아파트 관리사무소 드림', en: 'Haengbok Apartments Management Office' }
            ],
            questions: [
                { q: 'On what date is the maintenance?', a: '10월 5일|10월5일|10/5|5 october|october 5|october 5th', hint: '점검 일시는 …' },
                { q: 'How many hours will the elevators be out of service? (a number)', a: '4|4시간|네 시간|네시간|four', hint: '9 a.m. to 1 p.m.' },
                { q: 'Whom should residents contact in advance? (Korean)', a: '관리사무소|관리 사무소|management office', hint: '…로 미리 연락해 주시기 바랍니다' }
            ]
        },
        {
            id: 'kalleom',
            title: '아이에게 스마트폰, 언제 줘야 할까',
            en_title: 'When Should Children Get a Smartphone?',
            kind: 'Column',
            scene: 'An opinion column paragraph in 한다체. Follow the argument: advantages (게다가), disadvantages (반면에), and the writer’s conclusion (따라서 … 고 생각한다).',
            recycles: [22, 19, 10, 21],
            lines: [
                { ko: '요즘은 초등학생이 스마트폰을 가지고 다니는 것이 당연하게 여겨진다.', en: 'These days it is taken for granted that primary-school children carry a smartphone.' },
                { ko: '부모 입장에서는 아이와 언제든지 연락할 수 있다는 점에서 안심이 된다.', en: 'For parents, it is reassuring to be able to contact their child at any time.' },
                { ko: '게다가 공부에 필요한 정보를 쉽게 찾을 수 있다는 장점도 있다.', en: 'What is more, there is the advantage of finding study information easily.' },
                { ko: '반면에 스마트폰을 일찍 사용하기 시작할수록 중독될 위험이 높다는 연구 결과도 있다.', en: 'On the other hand, research shows that the earlier children start using smartphones, the greater the risk of addiction.' },
                { ko: '실제로 스마트폰 때문에 친구들과 밖에서 노는 시간이 줄었다는 아이들도 적지 않다.', en: 'In fact, quite a few children say they spend less time playing outside with friends because of their phones.' },
                { ko: '따라서 나는 스마트폰을 언제 주느냐보다 사용 규칙을 정하는 것이 더 중요하다고 생각한다.', en: 'I therefore believe that setting rules for use matters more than when the phone is given.' },
                { ko: '예를 들어 하루 사용 시간을 정해 두거나 잠자기 전에는 부모에게 맡기게 하는 것이다.', en: 'For example, fixing a daily time limit, or having children hand the phone to their parents before bed.' },
                { ko: '결국 중요한 것은 아이 스스로 조절하는 힘을 기르는 것이다.', en: 'In the end, what matters is helping children develop the ability to control themselves.' }
            ],
            questions: [
                { q: 'According to the writer, what matters more than timing? (Korean)', a: '사용 규칙|사용규칙|규칙|사용 규칙을 정하는 것|rules|usage rules', hint: '…을 정하는 것이 더 중요하다' },
                { q: 'Which connective introduces the writer’s conclusion (“therefore”)?', a: '따라서|therefore', hint: 'It starts the sixth sentence.' },
                { q: 'What risk rises the earlier children start? (Korean word)', a: '중독|addiction', hint: '…될 위험이 높다' }
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
