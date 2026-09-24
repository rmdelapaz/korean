/* lesson-content.js — per-lesson objectives, summaries, time and CEFR level.

   Consumed by learn.js to render the "What You'll Learn" box under every lesson title and
   the "Lesson Summary" box at the end (plus a time / CEFR / TOPIK meta line). This is the
   single source for both boxes: do NOT hand-write them into the lesson HTML, or every page
   will show two. Only <strong> is allowed as markup. Safe to hand-edit. */
window.KOREAN_LESSON_INFO = {
  "1": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Convert any 해요체 statement or question, including noun sentences, into natural 반말",
      "Suggest activities with -자 and -지 말자",
      "Distinguish the casual commands -아/어, -아라/어라 and -(으)렴 by relationship and tone",
      "Use 반말 pronouns and name forms (나/내가, 너/네가, 얘/걔/쟤, 지훈아, 지훈이가) correctly",
      "Negotiate a switch with phrases like 말 놓을까요? and 말 편하게 하세요",
      "Judge when to switch back to 존댓말 depending on the situation and who is listening"
    ],
    "summary": [
      "반말 signals <strong>closeness or hierarchy</strong>. It isn't rude in itself, but using it uninvited is.",
      "The core rule still holds: <strong>해요체 minus 요</strong>, with 이에요/예요 becoming <strong>이야/야</strong>.",
      "<strong>-자</strong> means \"let's\" and <strong>-지 말자</strong> means \"let's not\"; <strong>-지 마</strong> means \"don't\".",
      "<strong>-니?</strong> is a soft, caring question; <strong>-냐?</strong> is blunt and suits very close friends.",
      "Commands: <strong>-아/어</strong> between friends, <strong>-아라/어라</strong> from parents (or playfully), <strong>-(으)렴</strong> tender and elder-to-child.",
      "나 + 가 = <strong>내가</strong>, 너 + 가 = <strong>네가</strong> (said 니가); 얘/걔/쟤 mean \"this/that person\" in 반말.",
      "Switching is negotiated (<strong>말 놓다, 말 트다, 말 편하게 하세요</strong>) and is often one-way between different ages.",
      "The same people switch styles by situation: 반말 at lunch, polite in a meeting or with a friend's parents."
    ]
  },
  "2": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Report statements with -다고, -ㄴ/는다고 and (이)라고, choosing the form by word type",
      "Report questions with -냐고 and recognise the traditional -느냐고/-(으)냐고",
      "Report suggestions with -자고 and commands with -(으)라고, including -지 말자고/-지 말라고",
      "Keep the original tense inside a quote instead of backshifting as in English",
      "Shift pronouns, places and times (저 → 자기, 오늘 → 그날) when reporting",
      "Use direct quotes with \"…\"라고 and 하고 for exact words and sounds"
    ],
    "summary": [
      "Reported speech = <strong>plain-style ending + 고 + 하다</strong>; polite 요, -습니다 and -(으)세요 disappear.",
      "Statements: <strong>-다고</strong> (adjectives, 있다/없다, past), <strong>-ㄴ/는다고</strong> (present verbs), <strong>(이)라고</strong> (nouns), <strong>아니라고</strong>.",
      "Questions: <strong>-냐고</strong> for everything in speech; -느냐고/-(으)냐고 in formal writing.",
      "Suggestions: <strong>-자고</strong> / -지 말자고. Commands: <strong>-(으)라고</strong> / <strong>-지 말라고</strong> (never 마라고).",
      "Korean does <strong>not backshift</strong>: \"I'm tired\" → 피곤하다고 했어요.",
      "Promises with -(으)ㄹ게요 are reported as <strong>-겠다고</strong>; the quoted speaker's \"I\" often becomes <strong>자기</strong>.",
      "Honour the person you quote with -(으)시- and 께서: 할머니께서 … 드신다고 하셨어요.",
      "Direct quotes take <strong>라고</strong> after any sound; vivid sounds and exclamations often take <strong>하고</strong>."
    ]
  },
  "3": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Contract reported speech into -대요, -래요, -재요 and -냬요 (and 반말 -대, -래, -재, -냬)",
      "Pass on news and rumours with -대요, -다고 들었어요, -다는 소문 and N에 따르면",
      "Confirm something you heard with -다면서요? / -다며?",
      "Choose 달라고 or 주라고 (드리라고) according to who receives the favour",
      "Pick the right reporting verb: 말하다, 묻다, 부탁하다, 전하다, 듣다, 제안하다, 약속하다",
      "Tell hearsay -대요 apart from -데요 and command -(으)래요 from -(으)ㄹ래요"
    ],
    "summary": [
      "Contractions drop <strong>고 하-</strong>: -다고 해요 → <strong>-대요</strong>, -라고 → <strong>-래요</strong>, -자고 → <strong>-재요</strong>, -냐고 → <strong>-냬요</strong>.",
      "Every Lesson 2 rule still applies: 먹<strong>는</strong>대요, 학생<strong>이</strong>래요, 먹<strong>으</strong>래요, 가지 <strong>말</strong>래요.",
      "-대요 is everyday <strong>hearsay</strong> (\"apparently / they say\"); stress a past saying with -다고 했어요 or -댔어요.",
      "<strong>-다면서요?</strong> (반말 -다며?) asks someone to confirm what you heard, or throws their words back at them.",
      "Favour for the original speaker → <strong>달라고</strong> (달래요); for someone else → <strong>주라고</strong> (주래요), or <strong>드리라고</strong> for an honoured person.",
      "-다고 하는 contracts to <strong>-다는</strong>: 결혼한다는 소문, 오라는 연락.",
      "Match the verb to the quote: <strong>-냐고 묻다</strong>, <strong>-아 달라고 부탁하다</strong>, <strong>-다고 전하다</strong>, <strong>-다고 듣다</strong>.",
      "Spelling check: hearsay is ㅐ (<strong>-대요</strong>); -데요 means you experienced it yourself."
    ]
  },
  "4": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Choose the correct tense of -(으)ㄴ/는/(으)ㄹ 것 같다 for past, present and predicted events",
      "Draw conclusions from observed clues with -나 보다 and -(으)ㄴ가 보다",
      "Distinguish -나 보다 from -는 모양이다 and use 모양이다 in narration",
      "Express low-certainty possibility with -(으)ㄹ지도 모르다",
      "React with empathy and instant inference using -겠-",
      "Turn a guess or an intention into advice with -(으)ㄹ 테니까"
    ],
    "summary": [
      "Every Korean guess encodes two things: <strong>what your evidence is</strong> and <strong>how sure you are</strong>.",
      "In <strong>것 같다</strong> the modifier carries the tense: 간 / 가는 / 갈 것 같다; adjectives take 바쁜 in the present.",
      "<strong>-는 것 같다</strong> leans on what you perceive; <strong>-(으)ㄹ 것 같다</strong> is a prediction or outside guess.",
      "<strong>-나 보다 / -(으)ㄴ가 보다</strong> concludes from clues about others; not for your own direct experience, and tense goes on the guessed verb (바빴나 봐요).",
      "<strong>-는 모양이다</strong> means nearly the same but is more detached and works in narration (…모양이었다).",
      "<strong>-(으)ㄹ지도 모르다</strong> is the low-certainty \"might\", often with 어쩌면 or 혹시.",
      "Inference <strong>-겠-</strong> is the instant, empathetic reaction: 맛있겠다! 힘들었겠어요.",
      "<strong>-(으)ㄹ 테니까</strong> uses an expectation (any subject) or the speaker's intention (I/we) as the reason for a request or suggestion."
    ]
  },
  "5": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Share fresh discoveries with -네요 and realisations with -군요/-구나",
      "Remind a listener of shared knowledge with -잖아요 and give new background with -거든요",
      "Soften openings, contradictions and refusals with -(으)ㄴ/는데요",
      "Confirm, agree and suggest politely with -지요/-죠",
      "Offer a gentle guess with -(으)ㄹ걸요 and tell it apart from regret -(으)ㄹ걸",
      "State or ask about preferences with -(으)ㄹ래요, contrasting it with -(으)ㄹ게요 and -(으)ㄹ까요"
    ],
    "summary": [
      "Sentence-final endings mark <strong>who knows what</strong>: a new discovery, shared knowledge, background, or a guess.",
      "<strong>-네요</strong> reacts to what you perceive right now; ㄹ-stems drop ㄹ (머네요, 만드네요).",
      "<strong>-군요/-구나</strong> marks a realisation, including information someone has just told you (그렇군요).",
      "<strong>-잖아요</strong> assumes the listener already knows; <strong>-거든요</strong> assumes they don't. Be careful using -잖아요 upwards.",
      "<strong>-(으)ㄴ/는데요</strong> leaves the door open: soft openings, phone introductions, polite contradictions and refusals.",
      "<strong>-지요/-죠</strong> confirms (rising), agrees (falling), suggests politely (앉으시죠) or softens a question.",
      "<strong>-(으)ㄹ걸요</strong> is the speaker's guess, never a question; with a falling tone, -(으)ㄹ걸 means \"I should have\".",
      "<strong>-(으)ㄹ래요</strong> is about I (statements) or you (questions); ask seniors with -(으)실래요?"
    ]
  },
  "6": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Give emphatic or formal reasons with -기 때문에, N 때문에 and N(으)로 인해(서)",
      "Explain being too busy with -느라고, respecting its subject and tense restrictions",
      "Describe unexpected mishaps with -는 바람에 and contrast it with -느라고",
      "Give credit with 덕분에 and assign blame with 탓에 / 탓이다",
      "Explain your own action by what you noticed, using -길래",
      "Hedge an uncertain cause with -아서 그런지"
    ],
    "summary": [
      "Korean reason connectors build in the <strong>kind of cause</strong> and limit <strong>what can follow</strong>.",
      "<strong>-기 때문에</strong> emphasises the reason and takes past tense, but sounds unnatural before commands; use -(으)니까 there.",
      "<strong>-느라고</strong>: action verbs, same subject, no tense on the connector, no commands, usually a negative or effortful result.",
      "<strong>-는 바람에</strong>: a sudden, unexpected cause (always -는), different subjects allowed, usually an unwelcome past result.",
      "<strong>덕분에</strong> gives credit, <strong>탓에</strong> assigns blame, plain 때문에 is neutral; 네, 덕분에요 is a courtesy formula.",
      "<strong>-길래</strong>: something you noticed (outside yourself) triggered your own action; also 무슨 일이길래…? in questions.",
      "<strong>(으)로 인해(서)</strong> belongs to news and notices; <strong>-아서 그런지</strong> means \"maybe because\".",
      "At work, <strong>apologise first</strong>, then give the reason, or it sounds like 핑계."
    ]
  },
  "7": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Say \"even if\" and \"no matter how\" with -아/어도 and 아무리 … -아도",
      "Choose between -아도, -더라도 and -(으)ㄴ/는데도 according to whether a situation is hypothetical or real",
      "Grant a point before disagreeing with -기는 하지만 and its spoken forms -긴 한데",
      "Compare two sides of an issue with -(으)ㄴ/는 반면에",
      "Express substitutions and trade-offs with N 대신에 and -는 대신에",
      "Talk through the pros and cons of a real decision, and read a short blog post weighing them"
    ],
    "summary": [
      "Concession patterns break an expectation (<strong>-아도, -더라도, -는데도, -기는 하지만</strong>); contrast patterns weigh two sides (<strong>-반면에, -대신에, -는데</strong>).",
      "<strong>-아/어도</strong> = even if / even though; 아무리 … -아도 = no matter how. It can be followed by commands and suggestions.",
      "<strong>-더라도</strong> leans hypothetical and sounds more determined; it overlaps heavily with -아도 but sounds odd for something already true.",
      "<strong>-(으)ㄴ/는데도</strong> is only for real facts, often with surprise or frustration, and cannot be followed by a command or suggestion.",
      "<strong>-기는 하지만</strong> (spoken -긴 한데) grants a point before the real \"but\"; past tense goes on 하다: 가기는 했지만.",
      "<strong>-(으)ㄴ/는 반면에</strong> sets two facts side by side, and is common in writing and careful speech.",
      "<strong>-는 대신에</strong> means \"instead of\" or \"in exchange / to make up for it\"; with nouns, N 대신에.",
      "Adjectives take -(으)ㄴ: 싼데도, 많은 반면에, 적은 대신에; 있다/없다 take -는."
    ]
  },
  "8": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Link actions in quick succession with -자마자 and completed steps with -고 나서",
      "Describe what happens during a period with -는 동안 and -는 중이다, and say \"until\" with -(으)ㄹ 때까지",
      "Mention stops and errands along a route with -는 길에 and -는 길이다",
      "Distinguish -다가 (action cut off, same subject) from -았/었다가 (action completed, then reversed or followed up)",
      "Say how long it has been since something happened with -(으)ㄴ 지 N 되다",
      "Tell and read a short travel story that uses several time connectors in sequence"
    ],
    "summary": [
      "In most time connectors the <strong>first clause takes no tense</strong>; the final verb sets the time: 도착하자마자, 여행하는 동안.",
      "<strong>-자마자</strong> = as soon as (different subjects allowed); <strong>-고 나서</strong> = after finishing, stressing completion.",
      "<strong>-는 동안</strong> = during a period and allows different subjects, unlike <strong>-(으)면서</strong> (one person, two actions).",
      "<strong>-는 중이다</strong> / N 중 = right in the middle of an activity; it sounds odd with long-term states like 살다 or 알다.",
      "<strong>-는 길에</strong> goes with movement verbs for things done along a route; <strong>-는 길이다</strong> = I'm on my way.",
      "<strong>-다가</strong>: A was in progress and unfinished when the same subject switched to B or something happened: 가다가 친구를 만났어요.",
      "<strong>-았/었다가</strong>: A was completed, then B, often reversing it: 창문을 열었다가 닫았어요, 갔다가 왔어요.",
      "<strong>-(으)ㄴ 지 N 됐어요</strong> counts time from the starting event: 한국에 온 지 3년 됐어요."
    ]
  },
  "9": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "State goals with -기 위해(서), N을/를 위해(서) and the modifier -기 위한 N",
      "Say \"so that\" about results and other people with -도록 and conversational -게, including -지 않도록 and -(으)ㄹ 수 있도록",
      "Choose correctly between -기 위해서, -도록, -게 and -(으)려고 by checking subject, verb type and what follows",
      "Give polite instructions and make resolutions with -도록 하세요 / -도록 하겠습니다",
      "Place plans on a certainty scale with -(으)ㄹ까 하다, -(으)려고 하다 and -기로 하다, and say \"I was just about to\" with -(으)려던 참이다",
      "Recognise formal -고자 in speeches and official writing, and talk about New Year's goals"
    ],
    "summary": [
      "<strong>-기 위해서</strong> = in order to: verbs only (adjectives need -아지다: 건강해지기 위해서) and the <strong>same subject</strong> in both clauses. Nouns take 을/를 위해서; before a noun, 위한.",
      "<strong>-도록</strong> aims at a result or state and allows different subjects: 아이가 잘 자도록 불을 껐어요. It also means \"until / to the extent that\": 밤새도록.",
      "<strong>-게</strong> works like -도록 in the \"so that\" sense but sounds conversational: 잘 보이게 크게 써 주세요.",
      "<strong>-(으)려고</strong> can't be followed by a command or suggestion; -기 위해서 and -도록 can.",
      "<strong>-도록 하세요</strong> is a soft, formal instruction; <strong>-도록 하겠습니다</strong> is a promise.",
      "Certainty scale: <strong>-(으)ㄹ까 하다</strong> (thinking of) &lt; <strong>-(으)려고 하다</strong> (intend) &lt; <strong>-기로 하다</strong> (decided/arranged, usually 했어요).",
      "<strong>-(으)려던 참이다</strong> = was just about to; often the reply when someone suggests exactly that.",
      "<strong>-고자 (하다)</strong> is formal purpose/intention for speeches, reports and official emails."
    ]
  },
  "10": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Choose between -는 것, -기 and -(으)ㅁ according to meaning, frame and register",
      "Put tense inside -는 것 using -(으)ㄴ 것 and -(으)ㄹ 것, and use the spoken contractions 게/걸/건/거",
      "Use the -기 frames -기 쉽다/어렵다/좋다/싫다/시작하다 and -기를 바라다, including 'prone to' -기 쉽다",
      "Read and write notices, memos and casual texts in -(으)ㅁ style, forming ㄹ-stem nouns like 삶 and 만듦",
      "Say how long, how much or how useful something is with -는 데 걸리다/들다/쓰다/좋다, spelling -는 데 apart from -는데",
      "Describe your habits and tendencies modestly with -는 편이다 and -(으)ㄴ 편이다"
    ],
    "summary": [
      "Particles attach only to nouns, so actions must be packaged as nouns: <strong>-는 것</strong>, <strong>-기</strong> or <strong>-(으)ㅁ</strong>.",
      "<strong>-는 것</strong> is the all-rounder of speech and carries tense (-는/-(으)ㄴ/-(으)ㄹ 것); in speech it contracts to 게, 걸, 건, 거예요.",
      "<strong>-기</strong> names the activity itself: lists, rules and goals, plus fixed frames like -기 쉽다, -기 시작하다 and -기를 바라다.",
      "-기 쉽다 means 'easy to' with deliberate actions but 'prone to' with things that happen to you (감기에 걸리기 쉬워요).",
      "<strong>-(으)ㅁ</strong> states a settled fact briefly — notices, forms, formal writing and 음슴체 texts; ㄹ-stems give 삶, 만듦, 앎.",
      "<strong>-는 데</strong> (with a space) means 'in doing' and pairs with 걸리다, 들다, 쓰다, 좋다 and 도움이 되다; <strong>-는데</strong> without a space is the connector.",
      "<strong>-는 편이다</strong> places you on a scale ('I tend to', 'fairly'); verbs need a degree word, and plain facts can't take it.",
      "In doubt in conversation, -는 거 is the safe default; let the frame choose -기, and save -(으)ㅁ for notes."
    ]
  },
  "11": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Fold questions into sentences with -(으)ㄴ/는지 for verbs, adjectives, 이다 and 있다/없다 in present and past",
      "Ask for information politely with 혹시 … 아세요? and … 알 수 있을까요?",
      "Talk about uncertain futures and decisions with -(으)ㄹ지, -(으)ㄹ지 말지 and -는지 안 -는지, and tell -(으)ㄹ지 모르다 from -(으)ㄹ지도 모르다",
      "Use 얼마나 -는지 모르다 for emphasis and a sentence-initial -는지 to guess a cause",
      "Express 'or' correctly with N(이)나, -거나, 또는 and 아니면, and 'whichever/-ever' with -든지",
      "Distinguish 아무 N(이)나 from 아무 N도, and 누구나/언제나 from 아무나/아무 때나"
    ],
    "summary": [
      "<strong>-(으)ㄴ/는지</strong> puts a question inside a sentence: verbs -는지, adjectives -(으)ㄴ지, 이다 인지, past -았는지.",
      "With a question word it means 'what/where/why…'; without one it means 'whether'. 'Whether or not' is -는지 안 -는지, N인지 아닌지 or -(으)ㄹ지 말지.",
      "Embedded questions with 혹시 are the polite way to ask strangers and staff for information.",
      "<strong>-(으)ㄹ지</strong> is for the future and undecided choices; for a clear 'might', keep the 도 of -(으)ㄹ지도 모르다.",
      "<strong>얼마나 -는지 몰라요</strong> means 'incredibly…', and a clause-initial -는지 guesses a cause (감기에 걸렸는지 목이 아파요).",
      "'Or': N(이)나 for nouns, -거나 for verbs, 또는 in formal writing, 아니면 in A-or-B questions.",
      "<strong>-든지</strong> offers options as equally fine and, after question words, means '-ever' (뭐든지, 언제든지). Spell it 든, not 던.",
      "<strong>아무 N(이)나</strong> = any at all; <strong>아무 N도</strong> + negative = none at all. 누구나 = everyone; 언제나 = always."
    ]
  },
  "12": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Build helper-verb constructions (-아 + helper, -고 + helper) with tense, honorifics and correct spacing",
      "Express finality with regret or relief using -아 버리다, and tell an unwanted outcome or determination with -고 말다",
      "Talk about preparing in advance with -아 놓다 and -아 두다, including the spoken forms 놨어요 and 뒀어요",
      "Distinguish -아 있다 (resulting state, intransitive/passive verbs) from -고 있다 (ongoing action; wearing verbs)",
      "Describe change with -아지다 on adjectives in past, progressive and future",
      "Place change on a timeline with -아 오다 (up to now) and -아 가다 (from now on, nearing completion)"
    ],
    "summary": [
      "Helper verbs are faded verbs that add attitude, aftermath or time; tense and politeness go on the helper.",
      "<strong>-아 버리다</strong> = done and gone, with regret or relief; it works in plans, suggestions and commands.",
      "<strong>-고 말다</strong> = in the end an (usually unwanted) outcome happened; with -겠다 it means 'I will, no matter what'. It is unrelated to -지 말다.",
      "<strong>-아 놓다 / -아 두다</strong> = do in advance and leave ready; 두다 leans toward keeping, as in 알아 두세요.",
      "<strong>-아 있다</strong> = a finished change whose result remains; only intransitive and passive verbs (앉아 있다, 열려 있다). Never ✗ 창문을 열어 있다.",
      "<strong>-고 있다</strong> = action in progress (가고 있어요 vs 가 있어요); with wearing verbs it normally means 'is wearing' (입고 있어요, never 입어 있어요).",
      "<strong>-아지다</strong> turns adjectives into 'become' verbs, always written as one word: 추워졌어요, 좋아지고 있어요.",
      "<strong>-아 오다</strong> = continuing from the past up to now; <strong>-아 가다</strong> = continuing from now on or nearing an end (다 돼 가요)."
    ]
  },
  "13": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Explain why the residence card (외국인등록증) comes first and what it unlocks",
      "Handle a community-centre visit, including 체류지 변경신고 and 확정일자",
      "Open a bank account and ask about transfer limits (한도) and a debit card",
      "Compare phone plans (선불/후불, 약정, 알뜰폰) and activate a line",
      "Understand rental listings (보증금/월세/전세/관리비) and ask the right questions at a 부동산",
      "Manage parcel deliveries and check in (접수) at a clinic, recycling B1 grammar in each situation"
    ],
    "summary": [
      "The <strong>외국인등록증</strong> (residence card, often still called the ARC) is the key that unlocks bank accounts, postpaid phones and online <strong>본인 인증</strong>.",
      "The neighbourhood office is officially <strong>행정복지센터</strong> but still widely called <strong>주민센터</strong>; foreign residents report a move with a <strong>체류지 변경신고</strong>.",
      "People say <strong>통장을 만들다</strong>; banks say <strong>계좌를 개설하다</strong>. New accounts often start with a low transfer <strong>한도</strong>.",
      "You <strong>개통하다</strong> a phone line; plans are <strong>선불</strong> or <strong>후불</strong>, often with a <strong>약정</strong> discount.",
      "Rents are quoted in 만 원: <strong>보증금 500에 월세 50</strong> = 5,000,000 won deposit and 500,000 won a month; ask what <strong>관리비</strong> includes.",
      "Protect your deposit: check the 등기부등본, use a licensed agent, register your address and get a <strong>확정일자</strong>, and get advice before paying large sums.",
      "At a clinic, <strong>예약</strong> is booking ahead, <strong>접수</strong> is checking in, and a first visit is <strong>초진</strong>.",
      "Procedures and rules change: confirm with the office, HiKorea or the 1345 helpline."
    ]
  },
  "14": {
    "level": "B1",
    "time": "60–75 minutes",
    "objectives": [
      "Distinguish rank (직급) from role (직책) and choose the right form of address",
      "Introduce yourself at work with team, name and rank, without 님 on your own title",
      "Use 보고 and 결재 vocabulary to report progress and submit documents for approval",
      "Write a business email with a standard subject, greeting, 다름이 아니라, request and sign-off",
      "Answer and transfer office phone calls and take a message politely",
      "Take part in meetings and 회식 with appropriate phrases, recycling B1 grammar in each situation"
    ],
    "summary": [
      "<strong>직급</strong> (rank: 사원, 대리, 과장, 차장, 부장) and <strong>직책</strong> (role: 팀장) are different; people are usually addressed by their role.",
      "Address superiors as title + 님 (<strong>과장님</strong>, <strong>김 과장님</strong>); introduce yourself as <strong>마케팅팀 김민수 대리입니다</strong>. 씨 never goes upward or with a title.",
      "Many companies have flattened titles (name + 님, 매니저, 프로): observe your team and copy.",
      "<strong>보고</strong> is reporting; <strong>결재</strong> is formal approval, which ends in <strong>승인</strong> or <strong>반려</strong>. Early <strong>중간보고</strong> is valued.",
      "Business email: subject, greeting, self-introduction, <strong>다름이 아니라</strong> + purpose, request (확인/회신 부탁드립니다), sign-off with <strong>드림</strong>.",
      "On the phone: 네, [team] [name]입니다 · 자리에 안 계신데요 · 메모 남겨 드릴까요? · 전화 드리라고 전해 드리겠습니다.",
      "At 회식, pour and receive with two hands, and leave with <strong>먼저 들어가 보겠습니다</strong>; declining alcohol politely is increasingly accepted."
    ]
  },
  "15": {
    "level": "B2",
    "time": "70–85 minutes",
    "objectives": [
      "Form common suffix passives with -이-, -히-, -리- and -기-, and recognise them as lexical items",
      "Rebuild an active sentence as a passive one, moving the object to subject and marking the agent with 에게, 에 or 에 의해",
      "Use -아/어지다 for verbs without a suffix passive and for things that happen on their own",
      "Choose between 되다, 받다 and 당하다 when making 하다-verbs passive",
      "Describe changed circumstances and announce news modestly with -게 되다",
      "Tell passive and causative readings of double-duty verbs such as 보이다, 업히다 and 안기다 apart from the sentence frame"
    ],
    "summary": [
      "Korean passives are mostly <strong>separate verbs</strong> built with <strong>-이/히/리/기-</strong>: 보이다, 닫히다, 열리다, 안기다. Which suffix a verb takes is <strong>lexical</strong>, and the stem-final-sound tendencies are only memory aids.",
      "Many verbs (주다, 만나다, 배우다, all 하다-verbs) have <strong>no suffix passive</strong>. They use <strong>-아/어지다</strong> or swap 하다 for <strong>되다</strong> (neutral), <strong>받다</strong> (received) or <strong>당하다</strong> (suffered).",
      "Korean uses the passive for things that <strong>happen by themselves</strong>, for <strong>perception</strong> (보이다, 들리다), and for <strong>unpleasant things that happen to you</strong>. It uses it less than English does for formality.",
      "Agents take <strong>에게/한테</strong> (people, animals), <strong>에</strong> (things, forces) or, in writing only, <strong>에 의해(서)</strong>. In speech, prefer dropping the agent or using an active sentence.",
      "In the adversity passive, the body part or belonging keeps 을/를: <strong>발을 밟혔어요</strong>, 지갑을 빼앗겼어요.",
      "<strong>-게 되다</strong> means \"it came about that…\" and makes announcements sound modest: 결혼하게 됐어요.",
      "Double passives such as <strong>쓰여지다 and 잊혀지다</strong> are common but non-standard. Write <strong>쓰이다, 잊히다</strong>.",
      "Some forms are both passive and causative (<strong>보이다, 업히다, 안기다, 읽히다, 감기다</strong>). An object plus a causer means the causative reading."
    ]
  },
  "16": {
    "level": "B2",
    "time": "70–85 minutes",
    "objectives": [
      "Form high-frequency suffix causatives with -이/히/리/기/우/구/추-, treating them as lexical items",
      "Mark the causee correctly: 을/를 for an intransitive base, 에게/한테 plus an object for a transitive base",
      "Contrast direct suffix causatives (입히다) with indirect -게 하다 (입게 하다) and prevention with -지 못하게 하다",
      "Use 시키다 to assign tasks, order food and cause feelings, and recognise 소개시키다 as a non-standard causative",
      "Ask for and offer favours with causative + -아/어 주다 (보여 주다, 태워 주다, 깨워 주다)",
      "Recognise lexicalised causatives such as 웃기다, 놀리다, 살리다, 맞히다 and tell 맞히다 from 맞추다"
    ],
    "summary": [
      "A causative <strong>adds a causer</strong>: 아기가 자요 → 엄마가 아기를 <strong>재워요</strong>. The passive does the opposite and removes the doer.",
      "Suffix causatives use <strong>-이/히/리/기/우/구/추-</strong> (먹이다, 입히다, 울리다, 웃기다, 깨우다, 달구다, 낮추다). Like passives, they are <strong>lexical</strong> and must be learned as words.",
      "Causee marking: intransitive base → <strong>을/를</strong> (아기를 재우다). Transitive base → <strong>에게/한테</strong> + object (아이에게 밥을 먹이다).",
      "Suffix causatives lean <strong>direct, hands-on</strong> (옷을 입혔어요). <strong>-게 하다</strong> leans <strong>indirect</strong>: make, let, or with -지 못하게, prevent.",
      "<strong>시키다</strong> assigns tasks and replaces 하다 (공부시키다, 감동시키다). <strong>소개시키다</strong> is common in speech but an unnecessary causative. Write 소개하다.",
      "Many causatives have their own meanings: <strong>웃기다</strong> funny, <strong>놀리다</strong> tease, <strong>살리다</strong> save, <strong>태우다</strong> give a ride, <strong>맞히다</strong> get right (not 맞추다).",
      "Causative + <strong>-아/어 주다</strong> makes everyday favours: 보여 주세요, 태워 줄게요, 깨워 주세요.",
      "Caregiving causatives (먹이다, 입히다, 재우다) suit children and dependants, not elders."
    ]
  },
  "17": {
    "level": "B2",
    "time": "75–90 minutes",
    "objectives": [
      "Explain the three conditions of -더-: you perceived it yourself, in the past, and took it in as an observer",
      "Share experiences, reviews and reports with -더라고요, choosing -더라고요 or -았더라고요 by what you saw at the time",
      "Apply the first-person restriction accurately, including its exceptions for your own feelings and for surprising discoveries about yourself",
      "Offer observations and gently contradict with -던데요",
      "Choose between the modifiers -(으)ㄴ, -던 and -았던 for finished, interrupted, habitual and recalled actions and past states",
      "Tell stories with -더니 (someone you observed) and -았더니 (your own action and what it led to)"
    ],
    "summary": [
      "-더- replays something you <strong>personally perceived in the past</strong>, as information you <strong>took in</strong>: 그 식당 맛있<strong>더라고요</strong>.",
      "The tense before -더- is the tense <strong>at the moment you watched</strong>: 문을 닫더라고요 (they were closing) vs 닫았더라고요 (already closed).",
      "<strong>First-person restriction:</strong> no -더- statements about your own deliberate actions (✗ 제가 도서관에 가더라고요).",
      "<strong>Exceptions:</strong> your own <strong>feelings and sensations</strong> (저는 슬프더라고요, 저한테는 맵더라고요) and <strong>surprising, uncontrolled discoveries about yourself</strong> (사진을 보니까 제가 눈을 감고 있더라고요). Other people's feelings need -어하다 or -어 보이다.",
      "<strong>-던데요</strong> reports an observation and leaves room for a reaction. It is ideal for soft disagreement: 생각보다 싸던데요.",
      "Modifiers: <strong>먹은</strong> (finished), <strong>먹던</strong> (unfinished or habitual), <strong>먹었던</strong> (completed and recalled). For adjectives, a past state needs -던 or -았던.",
      "<strong>-더니</strong>: I watched someone or something do A, then B. <strong>-았더니</strong>: I did A, and found or got B.",
      "-더- sits in a family of evidence markers: 오더라고요 (saw), 온대요 (heard), 오나 봐요 (infer), 오네요 (noticing now)."
    ]
  },
  "18": {
    "level": "B2",
    "time": "60–75 minutes",
    "objectives": [
      "Form -다면 correctly on action verbs, adjectives and nouns, and choose it over -(으)면 for genuinely hypothetical situations",
      "Use -(으)ㄹ 텐데 to give a confident guess as background for advice, and as a hanging wish or sigh",
      "Express regret about the past with -았/었더라면 … -았을 텐데 and -(으)ㄹ 걸 그랬다",
      "Say what you hope for with -았/었으면 좋겠다 and make soft requests with -았/었으면 하다",
      "Set practical conditions with -(으)려면 (goal), -아/어야 (necessary condition) and -거든 (when that happens, do this)",
      "Read a reflective 한다체 letter and write a short what-if paragraph of your own"
    ],
    "summary": [
      "<strong>-다면</strong> is built on the plain form (간다면, 먹는다면, 크다면, 학생이라면) and makes a condition explicitly hypothetical; -(으)면 stays the choice for real or general conditions.",
      "<strong>-(으)ㄹ 텐데</strong> gives a confident guess as background (추울 텐데 코트 입으세요) or hangs as a wish (돈이 있으면 좋을 텐데). For your own promise, use -(으)ㄹ 테니까 instead.",
      "<strong>-았/었더라면</strong> is the strongest counterfactual: only for a past that did not happen, usually followed by -았을 텐데 or -았을 거예요.",
      "The result of a past condition can be present: 그때 시작했더라면 지금쯤 잘할 텐데.",
      "<strong>-았/었으면 좋겠다</strong> looks past but expresses a present or future wish; -았으면 하다 is its softer, more formal cousin.",
      "Regret about your own choices: -았으면 좋았을 텐데 or -(으)ㄹ 걸 그랬다 (chat: -(으)ㄹ걸).",
      "<strong>-거든</strong> must lead into a command, suggestion, promise or intention; <strong>-아/어야</strong> (only if) can never lead into a command.",
      "<strong>-(으)려면</strong> states a goal, and the second clause says what the goal requires (-아야 하다, -(으)면 되다, 필요하다)."
    ]
  },
  "19": {
    "level": "B2",
    "time": "60–75 minutes",
    "objectives": [
      "Describe a rising scale with -(으)ㄹ수록 and -(으)면 -(으)ㄹ수록, including the adverb 갈수록",
      "Express extreme degree with -(으)ㄹ 정도로 and -(으)ㄹ 만큼, and proportion with -(으)ㄴ/는 만큼",
      "Tell near-miss stories with 하마터면 … -(으)ㄹ 뻔했다 and distinguish them from 거의",
      "Recommend things with -(으)ㄹ 만하다 and recognise when 먹을 만하다 is only faint praise",
      "Use -다시피 for shared knowledge (아시다시피, 보시다시피) and -다시피 하다 for 'practically'",
      "Knock down an expectation with -기는커녕 / N은커녕 followed by 도, 조차 or 만"
    ],
    "summary": [
      "<strong>-(으)ㄹ수록</strong> (one word) means 'the more…'; double it with -(으)면 for emphasis (보면 볼수록). No past tense goes before it.",
      "<strong>-(으)ㄹ 정도로</strong> marks an extreme point (눈물이 날 정도로); -(으)ㄹ 정도는 아니다 means 'not to that extent'.",
      "<strong>만큼</strong> overlaps with 정도로 for exaggeration, but only 만큼 expresses a needed amount (먹을 만큼) or proportion (노력한 만큼, 비싼 만큼).",
      "<strong>-(으)ㄹ 뻔했다</strong> reports something that nearly happened but did not, almost always in the past; 거의 -았다 means it really did mostly happen.",
      "<strong>-(으)ㄹ 만하다</strong> means 'worth doing' or 'good enough'. 가 볼 만하다 is a recommendation; 먹을 만하다 is often a polite shrug.",
      "<strong>-다시피</strong> works with knowledge and perception verbs (아시다시피, 보시다시피, 말씀드렸다시피); -다시피 하다 means 'practically' (살다시피 했다).",
      "<strong>-기는커녕 / N은커녕</strong> denies an expectation, and the second part names something lower or opposite, usually with 도, 조차 or 만.",
      "Don't confuse -(으)ㄹ 뻔했다 with the adjective 뻔하다 ('obvious, predictable')."
    ]
  },
  "20": {
    "level": "B2",
    "time": "60–75 minutes",
    "objectives": [
      "Use the humble verbs 드리다, 여쭙다/여쭈다, 뵙다/뵈다, 모시다 and 말씀드리다 with 께 for the person receiving the action",
      "Spell and conjugate 뵙다/뵈다 correctly, including 봬요, 뵀어요 and 뵐게요",
      "Choose between 저희 and 우리, and use 말씀 as both an honorific and a humble noun",
      "Produce the full 하십시오체 paradigm, including -(으)시겠습니까, -(으)시기 바랍니다 and -(으)시지요 for suggestions to superiors",
      "Understand announcement and ceremony formulas such as N이/가 있겠습니다 and -아/어 주시기 바랍니다",
      "Explain 압존법 and its current optional status at work, and correct 사물존대 errors like 커피 나오셨습니다"
    ],
    "summary": [
      "Korean respect has three independent levers: raising the subject (-(으)시-), lowering yourself toward a recipient (humble verbs, 저희), and raising the listener (speech level).",
      "<strong>Humble verbs</strong> — 드리다, 여쭙다/여쭈다, 뵙다/뵈다, 모시다, 말씀드리다 — honour the person receiving your action, who takes 께. 드리다 never describes a superior giving to you.",
      "뵈 + 어요 = <strong>봬요</strong> (not 뵈요); use 뵙- before consonant endings (뵙겠습니다) and 뵈- elsewhere (뵈러, 뵐게요).",
      "<strong>말씀</strong> is honorific for a superior's words and humble for your own; <strong>저희</strong> excludes the listener, and Korea is always <strong>우리나라</strong>.",
      "In 하십시오체, offer choices with -(으)시겠습니까, make formal requests with -(으)시기 바랍니다, and suggest to superiors with -(으)시지요 rather than -(으)ㅂ시다.",
      "Announcements rely on -겠습니다, N이/가 있겠습니다 and -아/어 주시기 바랍니다.",
      "<strong>압존법</strong> (dropping honorifics for someone above you in front of their superior) is traditional; NIKL guidance says it isn't needed at work, so honouring your superior is now the norm and 압존법 is optional.",
      "<strong>사물존대</strong> — putting -시- on products, prices or drinks — is a common service-speech error: say 커피 나왔습니다, 품절입니다. Indirect honouring of a person's own body, family or belongings remains correct."
    ]
  },
  "21": {
    "level": "B2",
    "time": "60–75 minutes",
    "objectives": [
      "Form the 한다체 present tense correctly for action verbs, adjectives, ㄹ-stems and 이다",
      "Recognise and produce 한다체 past, future, written questions (-는가/-(으)ㄴ가) and -자 suggestions",
      "Distinguish 한다체 from 반말 and explain why written 한다체 is not rude",
      "Rebuild telegraphic news headlines into full sentences",
      "Identify common news formulas such as 에 따르면, -다고 밝혔다 and -(으)ㄹ 것으로 보인다",
      "Apply a step-by-step strategy to read a short Korean news article"
    ],
    "summary": [
      "<strong>한다체</strong> is the plain style of newspapers, books, diaries and essays: a text with no specific listener, so it carries no rudeness.",
      "Present tense: action verbs take <strong>-ㄴ다</strong> after a vowel or ㄹ-stem (간다, 만든다) and <strong>-는다</strong> after a consonant (먹는다); adjectives stay in dictionary form (바쁘다).",
      "Past is -았다/었다 (formal writing often keeps 하였다, 되었다); future is -(으)ㄹ 것이다; weather forecasts use -겠다.",
      "Written, usually rhetorical questions use <strong>-는가</strong> (verbs) and <strong>-(으)ㄴ가</strong> (adjectives, 인가); suggestions use -자.",
      "Headlines drop particles and endings, ending on verbal nouns (상승, 예정, 검토), bare -아/어 (올라) or -나 questions.",
      "News formulas: 에 따르면, -는 것으로 나타났다, -다고 밝혔다, -(으)ㄹ 전망이다/예정이다, -(으)ㄴ/는 가운데, 이에 따라, 한편.",
      "Written connectors replace spoken ones: -(으)며 for -고, -아/어 for -아서, -(으)나 for -지만.",
      "Read the headline, then the lede, then jump to the final verb of each sentence and chop long sentences at their connectors."
    ]
  },
  "22": {
    "level": "B2",
    "time": "75–90 minutes",
    "objectives": [
      "State an opinion at the right strength, from 것 같아요 to -다고 생각합니다 and written -다고 본다",
      "Agree, disagree, concede and challenge politely in a discussion or debate",
      "Choose between formal and conversational connectors such as 따라서, 반면에, 또한 and 게다가",
      "Use essay patterns like -는 것이 중요하다, -(으)ㄹ 필요가 있다 and -아야 할 것이다",
      "Describe what TOPIK II writing questions 51–54 require and write an objective chart description for 53",
      "Outline a 600–700-character 한다체 opinion essay for TOPIK 54 with one paragraph per guiding question"
    ],
    "summary": [
      "An argument has four bricks: <strong>주장</strong> (claim), <strong>근거</strong> (reason), <strong>예시</strong> (example) and <strong>결론</strong> (conclusion), plus a concession with 물론 … -지만.",
      "Opinions reuse reported speech: 중요하다고 / 문제라고 / 줄여야 한다고 생각합니다.",
      "<strong>Hedge in speech, commit in writing</strong>: 것 같아요 and -지 않을까요? are polite in conversation but weaken an essay.",
      "반면에 contrasts two sides (whereas); for an unexpected result use 그러나/하지만.",
      "왜냐하면 opens a sentence that must close with <strong>-기 때문이다</strong>.",
      "따라서 and 그러므로 are the essay versions of 그래서; 또한 is the neutral essay version of 그리고/게다가.",
      "-아야 할 것이다 is a measured, formal \"we ought to\" — ideal for an essay's final sentence.",
      "TOPIK II writing: 51–52 fill blanks, 53 describes data in 200–300 characters, 54 is a 600–700-character 한다체 essay; plan one paragraph per guiding question."
    ]
  },
  "23": {
    "level": "B2",
    "time": "60–75 minutes",
    "objectives": [
      "Explain how Sino-Korean words are built from meaningful syllables",
      "Recognise ten high-frequency roots (학, 생, 대, 국, 인, 문, 수, 전, 동, 실) in new words",
      "Tell apart homophone roots such as 전 (electric / before / whole) using context",
      "Use the suffixes -자, -가, -사, -성, -화 and -적 to form and understand new words",
      "Choose the correct negative prefix (불/부-, 무-, 비-, 미-) and apply the 부 sound rule",
      "Guess the meaning of an unfamiliar Sino-Korean word and confirm it in a dictionary"
    ],
    "summary": [
      "More than half of dictionary words are <strong>Sino-Korean</strong>; each syllable carries a meaning, so most two-syllable nouns are two meanings joined.",
      "Hanja are an <strong>optional aid</strong>: Koreans name a character by meaning + sound (學 = 배울 학), and dictionaries list the hanja for checking.",
      "Many roots share one sound — 전 can be 電 electric, 前 before or 全 whole — so let the partner syllable and context decide.",
      "Person and profession suffixes: -자 (기자), -가 (작가), -사 (의사, 변호사, and 社 in 회사).",
      "-성 makes -ness/-ity (가능성), -화 makes -ization (세계화), -적 makes -ic/-al and takes 이다: 효과적인 방법.",
      "Negative prefixes: 불/부- (not), 무- (without), 비- (non-), 미- (not yet); 不 is read <strong>부</strong> before ㄷ or ㅈ (부족).",
      "Sino-Korean synonyms usually sound more formal than native words: 잠 → 수면, 집 → 주택.",
      "Guess from roots, test the guess against the sentence, then confirm in the dictionary."
    ]
  },
  "24": {
    "level": "B2",
    "time": "60–75 minutes",
    "objectives": [
      "Distinguish the three layers of fixed expression: 관용어, 속담 and 사자성어",
      "Understand and use common body-part idioms such as 발이 넓다, 눈이 높다 and 귀가 얇다, with correct honorifics",
      "Recognise a dozen high-frequency proverbs and explain their meaning",
      "Cite a proverb naturally with frames like -다는 말이 있잖아요 and -다더니",
      "Break down 사자성어 syllable by syllable and use them with 이다, 하다 and noun frames",
      "Choose the right register for an expression in conversation versus a formal essay"
    ],
    "summary": [
      "<strong>관용어</strong> are fixed phrases (often body part + verb); the words are fixed, but the ending conjugates freely: 발이 넓은 사람, 발이 넓으세요.",
      "Body parts follow a loose logic: 눈 = standards, 입 = talking and taste, 귀 = being persuaded, 손 = effort and generosity, 발 = social reach.",
      "<strong>속담</strong> are complete folk sayings in plain form; Koreans cite them with frames such as -다는 말이 있잖아요 or -다더니 (\"just as they say\").",
      "Be careful aiming a proverb at a senior — it can sound like a lecture. Use them about yourself or shared situations.",
      "<strong>사자성어</strong> are four hanja syllables; knowing each syllable (일석이조 = one stone, two birds) is the best memory aid.",
      "Most 사자성어 are nouns: 금시초문이에요, 작심삼일로 끝나다, 막상막하의 승부; a few take 하다 (우왕좌왕하다).",
      "Choose 이에요/예요 by the last Korean syllable: 작심삼일이에요, 일석이조예요.",
      "In a formal essay, one well-chosen proverb or 사자성어 adds polish; stacking several sounds memorised."
    ]
  },
  "25": {
    "level": "B2",
    "time": "60–75 minutes",
    "objectives": [
      "Recognise the signature features of 경상도, 전라도, 충청도 and 제주 speech and restate them in 표준어",
      "Explain the 경상도 question system (-나 for yes/no, -노 for question-word questions)",
      "Decode common 줄임말, 신조어 and chat shorthand such as ㅇㅋ, ㄱㅅ and 갑분싸",
      "Judge the register of a slang item and avoid crude or senior-inappropriate forms",
      "Use Konglish and loanwords with their Korean meanings (노트북, 원룸, 서비스)",
      "Anticipate the features of drama and variety-show Korean, from contractions to 사극 speech"
    ],
    "summary": [
      "<strong>표준어</strong> is based on educated Seoul speech; real Korean varies by region, generation and borrowing. Recognise widely, produce carefully.",
      "경상도 questions: <strong>-나</strong> for yes/no (밥 뭇나?), <strong>-노</strong> with a question word (어디 가노?); 와 = 왜, 억수로 = very.",
      "전라도 signatures: 거시기, 허벌나게, -당께 (\"I'm telling you\"), softening -잉; 충청도 uses -유 for -요; 제주어 (혼저 옵서예) is so distinct it is often treated as a separate language.",
      "줄임말 take the first syllable of each word: 소확행, 얼죽아, 갑분싸. Some become mainstream (치맥, 혼밥, 워라밸); many fade quickly.",
      "Slang has register: mainstream items are safe casually, young/online items belong with friends, and crude prefixes like 개- are for recognition only.",
      "Chat shorthand (ㅇㅋ, ㄱㅅ, ㅈㅅ) and the -음 ending are for friends — write 네, 알겠습니다 to a senior.",
      "Konglish words are Korean vocabulary with Korean meanings: 노트북 = laptop, 원룸 = studio, 서비스 = on the house.",
      "Dramas and variety shows exaggerate: enjoy their contractions and captions, but keep 표준어 for formal speech and all TOPIK writing."
    ]
  },
  "26": {
    "level": "B2",
    "time": "75–90 minutes",
    "objectives": [
      "Describe the structure of the paper-based TOPIK II (듣기, 쓰기, 읽기), its scoring out of 300 and the level 3–6 thresholds",
      "Recognise the main listening and reading question types and apply a tactic to each",
      "Complete 51- and 52-style blanks by matching both the logic and the register of the text",
      "Write a 200–300 character graph description for question 53 using a fixed 한다체 phrase bank",
      "Plan a 600–700 character opinion essay for question 54 that answers every sub-question in order",
      "Build a personal level-3 or level-4 score target and an eight-week study plan"
    ],
    "summary": [
      "TOPIK II is one exam: 1교시 듣기 (50 Qs, 60 min) + 쓰기 (4 Qs, 50 min), 2교시 읽기 (50 Qs, 70 min), each out of 100 — <strong>300 in total</strong>.",
      "Level 3 = <strong>120+</strong>, level 4 = <strong>150+</strong> (5 = 190+, 6 = 230+). You are collecting points, not answering everything.",
      "Always confirm the current format, dates and rules on <strong>topik.go.kr</strong> — formats change, and the internet-based TOPIK IBT has its own format.",
      "Listening and reading run roughly easy to hard: secure the early questions, read the next question ahead, and never chase a missed item.",
      "51–52 reward matching logic and register; 52, 53 and 54 must be in <strong>한다체</strong>.",
      "53 is formulaic: survey → results → change → reasons/outlook, with phrases like N(으)로 나타났다 and 계속될 것으로 예상된다 — and no personal opinion.",
      "54 (worth 50 points) needs an outline, answers to every sub-question and at least 25 minutes; an unfinished organised essay beats a blank one.",
      "Writing is the fastest lever from 3급 to 4급; study your weakest section first and track progress with timed mock tests."
    ]
  }
};
