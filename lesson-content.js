/* lesson-content.js — per-lesson objectives, summaries, time and CEFR level.

   Consumed by learn.js to render the "What You'll Learn" box under every lesson title and
   the "Lesson Summary" box at the end (plus a time / CEFR / TOPIK meta line). This is the
   single source for both boxes: do NOT hand-write them into the lesson HTML, or every page
   will show two. Only <strong> is allowed as markup. Safe to hand-edit. */
window.KOREAN_LESSON_INFO = {
  "1": {
    "level": "A1",
    "time": "45–60 minutes",
    "objectives": [
      "Recognise all 19 consonant letters — 14 basic and 5 tense — and say their names",
      "Distinguish the plain, aspirated and tense series in pairs such as 달 / 탈 / 딸",
      "Explain how five pictograph letters generate the rest by stroke addition and doubling",
      "Predict how a consonant sounds at the start versus the end of a syllable",
      "Read and write simple words built with the vowel ㅏ, such as 바다 and 가방",
      "Romanize simple words with the Revised Romanization system"
    ],
    "summary": [
      "Korean has <strong>19 consonants</strong>: 14 basic letters plus 5 doubled (tense) letters.",
      "Five letters — ㄱ ㄴ ㅁ ㅅ ㅇ — are <strong>pictographs</strong> of the speech organs; most others are built from them by <strong>adding strokes</strong>, and ㄹ stands outside that system.",
      "A stroke marks a <strong>stronger sound</strong>: ㄱ → ㅋ, ㄴ → ㄷ → ㅌ, ㅁ → ㅂ → ㅍ, ㅅ → ㅈ → ㅊ.",
      "Tense consonants (ㄲ ㄸ ㅃ ㅆ ㅉ) are made by a separate mechanism: <strong>writing the letter twice</strong>.",
      "Korean contrasts <strong>plain, aspirated and tense</strong> consonants, and the contrast changes meaning: 달 moon, 탈 mask, 딸 daughter.",
      "ㅇ is <strong>silent at the start</strong> of a block and says <strong>ng</strong> at the end.",
      "Many consonants sound different as a final consonant (<strong>받침</strong>): 밥 is read <em>bap</em>.",
      "Mishearing the three-way contrast at first is normal — it is a listening skill that grows with practice."
    ]
  },
  "2": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Recognise and pronounce all 21 vowels — 10 basic and 11 compound",
      "Explain how the three base strokes ㆍ ㅡ ㅣ combine into every vowel",
      "Sort vowels into bright (ㅏ ㅗ) and dark (ㅓ ㅜ) groups, ready for verb endings in Lesson 7",
      "Assemble consonants and vowels into correctly shaped syllable blocks, using ㅇ as a silent placeholder",
      "Sound out and romanize real words and English loanwords such as 우유 and 커피",
      "Read ㅢ correctly in its three positions"
    ],
    "summary": [
      "Korean has <strong>21 vowels</strong>: 10 basic plus 11 compound.",
      "Every vowel is built from three strokes: <strong>ㆍ heaven, ㅡ earth, ㅣ person</strong>.",
      "<strong>Vertical</strong> vowels sit to the right of the consonant; <strong>horizontal</strong> vowels sit below; combined vowels wrap around.",
      "An extra stroke makes the \"y\" version: ㅏ→ㅑ, ㅓ→ㅕ, ㅗ→ㅛ, ㅜ→ㅠ.",
      "Korean is written in <strong>syllable blocks</strong>: consonant + vowel + optional final consonant (받침).",
      "Vowel-initial syllables use <strong>ㅇ as a silent placeholder</strong>: 아, 오, 우.",
      "ㅐ/ㅔ, and ㅙ/ㅚ/ㅞ, sound alike in modern speech — learn each word's <strong>spelling</strong>.",
      "<strong>Bright</strong> vowels (ㅏ ㅗ) and <strong>dark</strong> vowels (ㅓ ㅜ) will decide verb endings from Lesson 7."
    ]
  },
  "3": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Reduce any final consonant (받침), including double 받침, to one of the 7 final sounds",
      "Apply linking so a final consonant carries over to a following vowel, as in 한국어 [한구거]",
      "Predict nasalization and liquidization, as in 합니다 [함니다] and 설날 [설랄]",
      "Recognise aspiration around ㅎ and tensification after [k t p], as in 좋다 [조타] and 학교 [학꾜]",
      "Spot palatalization, as in 같이 [가치]",
      "Read everyday expressions such as 감사합니다 and 맛있어요 the way Koreans actually say them"
    ],
    "summary": [
      "Korean spelling keeps word parts visible; pronunciation changes <strong>predictably</strong> where syllables meet.",
      "All 27 받침 spellings reduce to just <strong>7 final sounds</strong>: ㄱ ㄴ ㄷ ㄹ ㅁ ㅂ ㅇ.",
      "<strong>Linking:</strong> 받침 + ㅇ → the consonant moves forward (한국어 → [한구거]); a final ㅎ drops instead (좋아요 → [조아요]).",
      "<strong>Nasalization:</strong> [k t p] become [ng n m] before ㄴ/ㅁ (한국말 → [한궁말], 합니다 → [함니다]).",
      "<strong>Liquidization:</strong> ㄴ next to ㄹ becomes ㄹ (설날 → [설랄]).",
      "<strong>Aspiration:</strong> ㅎ + ㄱ/ㄷ/ㅂ/ㅈ merge into ㅋ/ㅌ/ㅍ/ㅊ (축하 → [추카], 좋다 → [조타]).",
      "<strong>Tensification:</strong> after a [k t p] 받침, a plain consonant becomes tense (학교 → [학꾜]).",
      "<strong>Palatalization:</strong> ㄷ/ㅌ + 이 → ㅈ/ㅊ (같이 → [가치])."
    ]
  },
  "4": {
    "level": "A1",
    "time": "45–55 minutes",
    "objectives": [
      "Greet people and say goodbye correctly, choosing 안녕히 가세요 or 안녕히 계세요 by who is leaving",
      "Introduce yourself with your name and nationality using fixed phrases such as 저는 … 입니다",
      "Thank, apologise and get attention politely with 감사합니다, 죄송합니다 and 저기요",
      "Tell the formal 합니다 style from the informal polite 해요 style, and know why 반말 is risky",
      "Use 씨 and polite forms of address appropriately",
      "Pronounce common greetings naturally by applying the Lesson 3 sound rules"
    ],
    "summary": [
      "Use <strong>존댓말</strong> (polite speech) with strangers, elders and in formal settings; 반말 is for close friends.",
      "<strong>안녕하세요</strong> works as \"hello\" at any time, in any polite situation.",
      "There are <strong>two goodbyes</strong>: 안녕히 가세요 to the one leaving, 안녕히 계세요 to the one staying.",
      "Self-introductions use <strong>저는 [이름]입니다</strong> (formal) or 이에요/예요 (informal polite) — explained in Lesson 5.",
      "Add <strong>씨</strong> after a first name or full name — never after a surname alone, and never for yourself.",
      "Nationality = country name + <strong>사람</strong> (person): 미국 사람, 한국 사람.",
      "Many greetings change sound as you learned in Lesson 3: 감사합니다 is said <strong>[감사함니다]</strong>.",
      "Meal and work phrases such as 잘 먹겠습니다 and 수고하셨습니다 are everyday courtesy in Korea."
    ]
  },
  "5": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Explain why Korean puts the verb last and uses particles to mark each noun's role",
      "Say what something is with noun + 이에요/예요, choosing the form by 받침",
      "Say what something is not with 이/가 아니에요",
      "Choose between topic 은/는 and subject 이/가 for introductions, contrast and question words",
      "Point to things and places with 이것/그것/저것 and 여기/거기/저기",
      "Ask and answer 뭐예요?, 누구예요? and 어디예요? questions"
    ],
    "summary": [
      "Korean is <strong>SOV</strong>: the verb or 이에요 always comes last, and particles tag each noun's job.",
      "Noun with 받침 + <strong>이에요</strong>; noun without 받침 + <strong>예요</strong> (학생이에요, 의사예요).",
      "The negative is <strong>N이/가 아니에요</strong>, with 아니에요 as a separate word (and spelled 아니에요, not 아니예요).",
      "<strong>은/는</strong> marks the topic (\"as for…\") and contrast; <strong>이/가</strong> marks the subject and new information.",
      "Question words take 이/가 (<strong>누가</strong>, 어디가), and so do their answers (<strong>제가</strong>); 저 + 가 = 제가, 누구 + 가 = 누가.",
      "이 = near me, 그 = near you, 저 = far from both: 이것/그것/저것 and 여기/거기/저기; speech shortens them to 이거, 이건, 이게.",
      "Question words sit where the answer goes: 이게 뭐예요?, 저분은 누구예요?, 화장실이 어디예요?",
      "이에요 says what something <strong>is</strong>; 있어요/없어요 say whether something <strong>exists or is had</strong>."
    ]
  },
  "6": {
    "level": "A1",
    "time": "55–65 minutes",
    "objectives": [
      "Count and read numbers in both the Sino-Korean and Native Korean systems",
      "Choose the right number system for money, dates, minutes, hours, age and counting",
      "Build counted phrases with the Noun + Number + Counter pattern (커피 두 잔)",
      "Tell the time with Native hours and Sino minutes, including 오전/오후 and 반",
      "Say days of the week, months and full dates in year–month–day order",
      "Ask and answer 몇 시예요?, 몇 살이에요? and 며칠이에요? with 이에요/예요"
    ],
    "summary": [
      "Korean uses <strong>two number systems</strong>: Sino-Korean for measuring and labels, Native Korean for counting.",
      "<strong>Sino-Korean</strong>: dates, money, minutes, phone numbers, floors, and everything above 99.",
      "<strong>Native Korean</strong>: counting with counters, clock hours and age (살).",
      "Korean groups big numbers by <strong>four digits</strong> (만 = 10,000), and says 십/백/천/만 with no 일 in front.",
      "Counters are required: <strong>Noun + Number + Counter</strong> — 책 세 권, 친구 두 명.",
      "하나/둘/셋/넷/스물 shorten to <strong>한/두/세/네/스무</strong> before a counter.",
      "Time = <strong>Native hour + Sino minutes</strong> (두 시 삼십 분); 시 is o'clock, 시간 is a duration.",
      "Numbers take 이에요/예요 like any noun — check the last syllable: 세 시예요, 오천 원이에요."
    ]
  },
  "7": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Find the stem of any verb by removing -다 from the dictionary form",
      "Choose -아요, -어요 or -해요 using the stem's last vowel",
      "Apply the contraction rules to form 가요, 봐요, 와요, 마셔요, 배워요, 줘요 and 돼요",
      "Mark objects with 을/를 and build Subject–Object–Verb sentences",
      "Use descriptive verbs like 비싸요 and 맛있어요 without adding 이에요",
      "Say and ask about everyday actions with 20 core verbs and adjectives"
    ],
    "summary": [
      "Every verb has a dictionary form ending in <strong>-다</strong>; remove 다 to get the <strong>stem</strong>.",
      "Last stem vowel ㅏ or ㅗ → <strong>-아요</strong>; any other vowel → <strong>-어요</strong>; 하다 → <strong>해요</strong>.",
      "Vowel stems contract: 가요, 서요, 와요/봐요 (ㅘ), 배워요/줘요 (ㅝ), 마셔요 (ㅕ), 보내요, 돼요 (ㅙ).",
      "Consonant stems never contract: 먹어요, 읽어요, 앉아요, 좋아요.",
      "The object takes <strong>을</strong> after 받침 and <strong>를</strong> after a vowel, and comes before the verb.",
      "Adjectives are <strong>descriptive verbs</strong>: 비싸요 already means \"is expensive\", so never add 이에요, and never use 을/를 with them.",
      "좋아하다 takes an object (커피를 좋아해요); 좋다 takes a subject (커피가 좋아요).",
      "One form covers every person and can mean \"I eat\", \"I'm eating\" or \"I'll eat\"; raise your voice to make it a question."
    ]
  },
  "8": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Name close and extended family members, including mother's-side and father's-side terms",
      "Choose the correct sibling word (형/오빠/누나/언니) based on your own gender",
      "Introduce family members with 이에요/예요 and ask 누구예요?",
      "Describe people with the double-subject pattern (형은 키가 커요)",
      "Say what family members do and like with -아요/어요 and 을/를",
      "Use 우리 naturally for \"my\" family and count family members with 명"
    ],
    "summary": [
      "Sibling words depend on <strong>your gender</strong> and the sibling's age: 형/누나 (male speaker), 오빠/언니 (female speaker), 동생 for anyone younger.",
      "외- marks the <strong>mother's side</strong> (외할머니, 외삼촌); 이모 is mother's sister, 고모 father's sister.",
      "Koreans say <strong>우리 엄마</strong> (our mom) rather than 저의 엄마; 저희 is the humble version.",
      "Adjectives <strong>conjugate like verbs</strong>: 커요, 예뻐요, 친절해요 already contain \"is\".",
      "Describe features with <strong>Person 은/는 + Feature 이/가 + Adjective</strong>: 누나는 머리가 길어요.",
      "잘생겼어요 (\"is handsome\") uses a past-looking ending as a set phrase.",
      "아내 is your own wife; 부인 respectfully refers to someone else's wife.",
      "오빠/언니/형/누나 are also used warmly with close, slightly older friends."
    ]
  },
  "9": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Choose 에 for destinations, locations with 있다/없다, and points in time",
      "Use 에서 for the place where an action happens and for 'from' a place",
      "Mark people you give to, call or receive from with 에게/한테/께 and 에게서/한테서",
      "Add 도 (also) and 만 (only) correctly, replacing or stacking on other particles",
      "Say 'with' and 'and' using 하고, 와/과 and (이)랑 in the right register",
      "Describe where things are with 있어요/없어요, position words and 부터…까지 / 에서…까지"
    ],
    "summary": [
      "Korean particles are <strong>postpositions</strong>: they follow the noun they tag (학교에 = 'to school').",
      "<strong>에</strong> marks a point: where you go, where something simply is (with 있다/없다), and when (세 시에, 월요일에).",
      "오늘, 내일, 어제, 지금 and 매일 never take 에.",
      "<strong>에서</strong> marks the stage of an action (도서관에서 공부해요) or a starting place (학교에서 와요).",
      "People take <strong>에게/한테</strong> (to) and <strong>에게서/한테서</strong> (from); 께 is the honorific 'to'.",
      "<strong>도</strong> and <strong>만</strong> replace 은/는, 이/가, 을/를 but stack after 에/에서 (집에서도, 주말에만).",
      "하고 (everyday), 와/과 (written) and (이)랑 (casual) all mean 'with/and'; 부터…까지 is for time, 에서…까지 for places.",
      "Location = object + position word + 에 + 있어요: 책상 위에 있어요, 의자 밑에 있어요."
    ]
  },
  "10": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Negate verbs and adjectives with 안 and with stem + -지 않아요",
      "Place 안 and 못 correctly with noun + 하다 verbs (공부 안 해요) and spot the exceptions",
      "Choose between 안 (don't) and 못 (can't), and decline invitations politely with 못",
      "Use dedicated negatives such as 없어요, 몰라요 and 아니에요 instead of 안",
      "Ask yes/no questions with intonation and answer negative questions with 네/아니요 correctly",
      "Ask information questions with 뭐, 누구, 어디, 언제, 왜, 어떻게, 몇, 얼마, 무슨, 어느 and 어떤"
    ],
    "summary": [
      "<strong>안</strong> = don't/isn't (fact or choice); <strong>못</strong> = can't (ability or circumstance).",
      "Short forms put 안/못 right before the verb (안 먹어요); long forms use stem + <strong>-지 않아요 / -지 못해요</strong>.",
      "With action noun + 하다 verbs, 안/못 go in the middle: 공부 안 해요, 숙제 못 해요 — but 안 피곤해요, 안 좋아해요.",
      "Adjectives take 안, not 못: 안 비싸요.",
      "Some words have their own negatives: 있어요 → 없어요, 알아요 → 몰라요, 이에요 → 아니에요, 맛있어요 → 맛없어요.",
      "In 해요 style, a question is the statement with <strong>rising intonation</strong>.",
      "네 agrees with the words of the question: 커피 안 마셔요? — 네, 안 마셔요.",
      "Question words stay where the answer goes; remember 누구 + 가 = <strong>누가</strong> and 언제 takes no 에."
    ]
  },
  "11": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Name everyday Korean foods, drinks and popular dishes",
      "Order at a restaurant with 주세요, numbers and the 인분 counter",
      "Describe tastes with polite-present adjectives such as 맛있어요 and 매워요",
      "Say what, where and with whom you eat using 을/를, 에서, 하고, 도 and 만",
      "Explain food restrictions politely, choosing 안 (don't) or 못 (can't)",
      "Follow Korean table manners, including 잘 먹겠습니다 and 잘 먹었습니다"
    ],
    "summary": [
      "<strong>주세요</strong> = \"please give me\": put any food or drink in front to order (물 주세요).",
      "Barbecue is ordered by portion with Sino numbers + <strong>인분</strong>: 삼겹살 이 인분.",
      "Say <strong>잘 먹겠습니다</strong> before eating and <strong>잘 먹었습니다</strong> after.",
      "Eating is an action, so the place takes <strong>에서</strong>: 식당에서 먹어요.",
      "<strong>안 먹어요</strong> = I don't eat it (choice); <strong>못 먹어요</strong> = I can't eat it (allergy, ability).",
      "맛있어요 is pronounced [마시써요]; 매워요 and 싱거워요 are ㅂ-irregular forms to memorise.",
      "Rice and soup take the spoon, side dishes the chopsticks — never stand chopsticks upright in rice.",
      "Calling <strong>저기요!</strong> to a server is normal, 반찬 are usually refilled free, and tipping is not expected."
    ]
  },
  "12": {
    "level": "A1",
    "time": "45–55 minutes",
    "objectives": [
      "Name the main Korean housing types (아파트, 빌라, 원룸, 오피스텔, 주택) and what each really means",
      "Identify rooms, furniture and household appliances in Korean",
      "Describe where things are with landmark + position word + 에 있어요/없어요",
      "Talk about household chores with noun + 하다 verbs and 을/를",
      "Narrate a full daily routine with clock times, 에, 부터…까지 and 안/못",
      "Explain Korean home culture: the 현관, 온돌, 전세 vs 월세 and 분리수거"
    ],
    "summary": [
      "<strong>아파트</strong> is a high-rise complex flat, <strong>빌라</strong> a low-rise block, <strong>원룸/오피스텔</strong> a studio and <strong>주택</strong> a house.",
      "Rooms: 방, 거실, 부엌/주방, 화장실, 현관. Furniture and appliances: 침대, 책상, 소파, 냉장고, 세탁기.",
      "Position = <strong>landmark + position word + 에</strong>: 책상 위에, 침대 아래에, 소파 옆에, 냉장고 안에.",
      "Use <strong>에</strong> with 있다/없다 (집에 있어요) and <strong>에서</strong> for actions (거실에서 TV를 봐요).",
      "Chores are mostly noun + 하다: 청소해요, 빨래해요, 설거지해요. Negate them as 설거지 <strong>안</strong> 해요.",
      "Routine times: native hours + Sino minutes + 에: 일곱 시 반에 일어나요, 아홉 시부터 여섯 시까지 일해요.",
      "Shoes come off in the <strong>현관</strong>; 온돌 heats the floor; <strong>전세</strong> is a big returnable deposit with no monthly rent, while 월세 is deposit + monthly rent.",
      "<strong>분리수거</strong>: sort recyclables, bin food waste separately, and put general trash in 종량제 봉투."
    ]
  },
  "13": {
    "level": "A1–A2",
    "time": "55–65 minutes",
    "objectives": [
      "Distinguish the speech level (the listener) from the honorific -(으)시- (the subject)",
      "Build formal 합쇼체 statements and questions with -(스)ㅂ니다 / -(스)ㅂ니까",
      "Recognise 반말 by dropping 요 and using 이야/야, 응, 나 and 너",
      "Add -(으)세요 and -(으)십니다 to honour the person doing the action",
      "Use special honorific and humble verbs such as 계시다, 드시다, 주무시다 and 드리다",
      "Choose honorific nouns and particles (성함, 연세, 댁, 께서, 께) and never honour yourself"
    ],
    "summary": [
      "Two independent dials: the <strong>ending</strong> reflects the listener, and <strong>-(으)시-</strong> honours the subject.",
      "<strong>합쇼체</strong>: vowel stem + ㅂ니다, consonant stem + 습니다, ㄹ stem drops ㄹ (삽니다), noun + 입니다; questions end in -까?",
      "<strong>해요체</strong> is the safe everyday default with adults. When in doubt, use 해요.",
      "<strong>반말</strong> = 해요 form minus 요 (가, 먹어, 해; 학생이야, 친구야). Use it only when invited: 말 편하게 하세요.",
      "Honorific present: <strong>-(으)세요</strong> (가세요, 읽으세요, 사세요); formal -(으)십니다. The past -(으)셨어요 comes in Lesson 15.",
      "Special verbs replace the plain ones: 있다 → <strong>계시다</strong> (location) but 있으시다 (possession), 먹다 → 드시다, 자다 → 주무시다, 말하다 → 말씀하시다.",
      "Humble verbs lower you toward a senior: 주다 → <strong>드리다</strong>, 보다 → 뵙다, 묻다 → 여쭤보다.",
      "Honorific nouns and particles: 성함, 연세, 댁, 진지, 생신, 분; 이/가 → 께서, 에게 → 께. Never use -시- about yourself; use 저/제/저희."
    ]
  },
  "14": {
    "level": "A1",
    "time": "50–60 minutes",
    "objectives": [
      "Read and say Korean prices, grouping big numbers by 만",
      "Ask about price, size and color, and say what you want to buy",
      "Recognise the honorific and 합니다-style speech shop staff use with customers",
      "Answer staff politely in 해요 style without putting -시- on your own actions",
      "Use 에 (per), 하고, 도, 만, 안 and question words while shopping",
      "Know where bargaining is normal and how payment works in Korea"
    ],
    "summary": [
      "Money uses <strong>Sino-Korean</strong> numbers grouped by <strong>만</strong>: ₩23,500 = 이만 삼천오백 원.",
      "<strong>이거 얼마예요?</strong> is the key question; 한 개에 천 원 means \"1,000 won each\".",
      "Staff speak with honorifics — <strong>뭐 찾으세요?</strong>, 봉투 필요하세요? — and you answer in plain polite 해요 style.",
      "Never put the honorific <strong>-시-</strong> on your own actions: 저는 가방을 찾아요.",
      "Service Korean often over-honours things (커피 나오셨습니다) — recognise it, don't copy it.",
      "Bargain with <strong>좀 깎아 주세요</strong> at traditional markets (시장), not in department or convenience stores.",
      "Korea is very card-friendly; bags cost extra, so 봉투 필요 없어요 is useful.",
      "Size and color words: 작은/큰 사이즈, 빨간색, 파란색, 검은색, 흰색."
    ]
  },
  "15": {
    "level": "A1–A2",
    "time": "50–60 minutes",
    "objectives": [
      "Build the polite past of any regular verb or adjective with -았어요, -었어요 or 했어요",
      "Apply the present-tense contractions to the past (갔어요, 봤어요, 마셨어요, 배웠어요)",
      "Say what someone or something was with 이었어요 / 였어요 and 아니었어요",
      "Negate past actions with 안, 못, -지 않았어요 and -지 못했어요",
      "Place past time words correctly, knowing which take 에 (지난주에) and which don't (어제)",
      "Combine the past with the formal -았습니다 style and the honorific -(으)셨어요"
    ],
    "summary": [
      "The past tense adds a <strong>았 / 었</strong> block after the stem, chosen by the same vowel-harmony rule as the present.",
      "Shortcut: take the present form, drop 요 and add <strong>ㅆ어요</strong> — 가요 → 갔어요, 먹어요 → 먹었어요, 해요 → 했어요.",
      "Vowel stems contract just as in the present: 왔어요, 봤어요, 배웠어요, 마셨어요, 됐어요.",
      "Nouns take <strong>이었어요</strong> after a consonant and <strong>였어요</strong> after a vowel; the negative is 이/가 아니었어요.",
      "안 and 못 stay before the past verb; with 하다-verbs they go between noun and 했어요 (공부 안 했어요).",
      "어제, 그저께, 아까 take no 에; 지난주에, 지난달에, 작년에 do; 'ago' is time + <strong>전에</strong>.",
      "Formal past is always <strong>-었습니다</strong>; honorific 시 + 었 merges into <strong>셨</strong> (가셨어요, 드셨어요).",
      "밥 먹었어요? is a friendly greeting, and 잘했어요 is the all-purpose 'well done'."
    ]
  },
  "16": {
    "level": "A2",
    "time": "50–60 minutes",
    "objectives": [
      "Ask where a place is and how to get there with 어디예요? and 어떻게 가요?",
      "Understand spoken directions such as 쭉 가세요, 왼쪽으로 가세요 and 길을 건너세요",
      "Use (으)로 correctly for means of transport and direction (지하철로, 왼쪽으로)",
      "Choose 에 vs 에서 for going to, getting on and getting off at a place",
      "Describe a past journey with 탔어요, 갈아탔어요, 내렸어요 and 걸렸어요",
      "Handle a taxi ride and a subway trip with set phrases like 까지 가 주세요"
    ],
    "summary": [
      "<strong>어떻게 가요?</strong> (How do I get there?) and <strong>얼마나 걸려요?</strong> (How long does it take?) are the two most useful travel questions.",
      "<strong>(으)로</strong> marks means and direction: 으로 after a 받침, 로 after a vowel <em>or ㄹ</em> (지하철로, 왼쪽으로).",
      "You go <strong>to</strong> a place with 에 but get on, change and get off <strong>at</strong> a place with 에서.",
      "타다 takes 을/를: <strong>버스를 타요</strong>; 걸리다 expresses duration: 30분 걸려요.",
      "Directions use the honorific -(으)세요 as polite instructions; 돌다 → <strong>도세요</strong>.",
      "The past tense lets you narrate a trip: 탔어요 → 갈아탔어요 → 내렸어요.",
      "Get a <strong>T-money card</strong> and tap off buses too for transfer discounts.",
      "Taxi phrases: <strong>…까지 가 주세요</strong>, <strong>여기서 세워 주세요</strong>."
    ]
  },
  "17": {
    "level": "A2",
    "time": "55–65 minutes",
    "objectives": [
      "Say what you want to do with -고 싶어요, and report others' wishes with -고 싶어해요",
      "Talk about plans and make predictions with -(으)ㄹ 거예요",
      "Promise or volunteer with -(으)ㄹ게요 and tell it apart from -(으)ㄹ 거예요",
      "Suggest and offer with -(으)ㄹ까요?, -(으)ㅂ시다 and the 'let's' -아요",
      "Explain why you're going somewhere with -(으)러 가다/오다",
      "Express intentions with -(으)려고 해요, including 'I was going to' (-(으)려고 했어요)"
    ],
    "summary": [
      "Most endings here use the <strong>(으) cushion</strong>: add 으 after a consonant stem, not after a vowel or ㄹ (먹을, 갈, 만들).",
      "<strong>-고 싶어요</strong> = I want to; for a third person use <strong>-고 싶어해요</strong>.",
      "<strong>-(으)ㄹ 거예요</strong> states a plan or a prediction, for any subject; spell it 거예요.",
      "<strong>-(으)ㄹ게요</strong> is a first-person promise to the listener: 제가 할게요, 이따가 전화할게요.",
      "<strong>-(으)ㄹ까요?</strong> means 'shall we / shall I / do you think…?'; answer with the 'let's' -아요: 같이 가요!",
      "<strong>-(으)ㅂ시다</strong> is a formal 'let's' for groups — avoid it with bosses and elders.",
      "<strong>-(으)러 가다/오다</strong> gives the purpose of movement: 책을 사러 서점에 가요.",
      "<strong>-(으)려고 해요</strong> = I intend to; <strong>-(으)려고 했어요</strong> = I was going to."
    ]
  },
  "18": {
    "level": "A2",
    "time": "50–60 minutes",
    "objectives": [
      "Ask and answer 취미가 뭐예요? naturally",
      "Pair hobbies with the right verb: 치다, 하다, 타다, 추다, 찍다, 그리다",
      "Say what you like with noun + 을/를 좋아해요 and the chunk -는 것을 좋아해요",
      "Describe how often you do things with 매일, 자주, 가끔, 보통 and 거의 안",
      "Make plans and invitations with Lesson 17's -고 싶어요, -(으)ㄹ 거예요, -(으)ㄹ까요? and -(으)러 가요",
      "Talk about last weekend's activities in the past tense"
    ],
    "summary": [
      "<strong>취미가 뭐예요?</strong> → 제 취미는 등산이에요, or more casually 등산을 좋아해요.",
      "Korean chooses the verb by activity: <strong>기타를 쳐요</strong>, <strong>자전거를 타요</strong>, <strong>춤을 춰요</strong>, <strong>사진을 찍어요</strong>.",
      "Frequency words go before the verb: 가끔 노래방에 가요; <strong>거의 안</strong> = hardly ever.",
      "Invite with <strong>같이 …(으)ㄹ까요?</strong> and accept with 좋아요! or promise with <strong>-(으)ㄹ게요</strong>.",
      "<strong>-(으)러 가요</strong> = go somewhere in order to do something: 영화 보러 가요.",
      "듣다 → 들어요 and 부르다 → 불러요 are irregular (Lesson 21); learn them as chunks for now.",
      "Korean leisure: 노래방, PC방, 찜질방, 한강 치맥, and hobby clubs (동호회).",
      "Daily-routine verbs are in Lesson 12; this lesson is about free time."
    ]
  },
  "19": {
    "level": "A2",
    "time": "55–65 minutes",
    "objectives": [
      "Say what you can and can't do with -(으)ㄹ 수 있다/없다",
      "Describe skills with 잘하다, 못하다 and 잘 못하다",
      "Express obligation with -아야/어야 하다 and -아야/어야 되다",
      "Ask for and give permission with -아도/어도 되다, and say what you don't have to do",
      "Forbid actions and read signs with -(으)면 안 되다",
      "Make polite requests with -(으)세요, -지 마세요, -아/어 주세요 and -아/어 줄래요?"
    ],
    "summary": [
      "<strong>-(으)ㄹ 수 있어요/없어요</strong> = can / can't; ㄹ-stems add nothing (만들 수 있어요), and tense goes on 있다/없다 (갈 수 없었어요).",
      "For skills, Koreans often say <strong>잘해요</strong> (good at) or <strong>잘 못해요</strong> (not good at); modestly deflect compliments with 아직 잘 못해요.",
      "<strong>-아야/어야 해요</strong> and <strong>-아야/어야 돼요</strong> both mean have to; build them from the -아요/어요 form (가요 → 가야 해요).",
      "<strong>-아도/어도 돼요?</strong> asks permission (사진을 찍어도 돼요?); answer 네, 돼요 or 아니요, 안 돼요.",
      "<strong>-(으)면 안 돼요</strong> = must not; <strong>안 -아도 돼요</strong> = don't have to — opposite meanings.",
      "<strong>-(으)세요</strong> is a polite instruction; use honorific verbs like 드세요 and 주무세요 with elders and guests.",
      "<strong>-지 마세요</strong> asks someone not to do something — never 안 + -세요.",
      "<strong>-아/어 주세요</strong> frames a request as a favour; add <strong>좀</strong> to soften it, and use -아/어 줄래요? with peers."
    ]
  },
  "20": {
    "level": "A2",
    "time": "50–60 minutes",
    "objectives": [
      "Name about 20 body parts and build compounds like 발목 and 손가락",
      "Describe symptoms with body part + 이/가 아파요, 열이 나요 and 감기에 걸렸어요",
      "Choose the right clinic (내과, 이비인후과, 치과…) and handle a pharmacy visit",
      "Understand a doctor's advice given with -아야 해요, -(으)세요 and -지 마세요",
      "Ask permission with -아도 돼요? and recognise -(으)면 안 돼요",
      "Call for help in an emergency (119, 112, 1330)"
    ],
    "summary": [
      "<strong>Body part + 이/가 아파요</strong>: the body part is the subject, because 아프다 is descriptive.",
      "아프다 → <strong>아파요 / 아팠어요</strong> (ㅡ drops; full story in Lesson 21).",
      "You catch a cold <em>into</em> it: <strong>감기에 걸렸어요</strong>; you <strong>eat</strong> medicine: 약을 먹어요.",
      "Doctors advise with <strong>-아야 해요</strong> (must), <strong>-(으)세요</strong> (please do) and <strong>-지 마세요</strong> (don't).",
      "Ask permission with <strong>-아도/어도 돼요?</strong>; the answer may be <strong>-(으)면 안 돼요</strong>.",
      "Staff use honorifics about you (아프세요?, 드세요); you answer without them.",
      "In Korea you go directly to a specialist clinic, then take the 처방전 to a 약국.",
      "Emergencies: <strong>119</strong> ambulance/fire, <strong>112</strong> police, <strong>1330</strong> multilingual travel hotline."
    ]
  },
  "21": {
    "level": "A2",
    "time": "60–70 minutes",
    "objectives": [
      "Explain why irregular changes happen mainly before vowel-initial endings",
      "Conjugate ㅂ-irregulars (더워요, 추워요) and the 돕다/곱다 exception (도와요, 고와요)",
      "Conjugate ㄷ-irregulars (들어요, 걸어요) and ㅅ-irregulars (나아요, 지어요) without contracting",
      "Apply ㅡ-dropping (바빠요, 써요) and 르-doubling (몰라요, 불러요)",
      "Use ㄹ-stems correctly before ㄴ, ㅂ, ㅅ and with -(으) endings (사세요, 만들면)",
      "Recognise ㅎ-adjectives (어때요, 빨개요) and regular look-alikes such as 입다, 받다, 웃다, 좋다"
    ],
    "summary": [
      "Korean irregulars come in <strong>seven predictable families</strong>; most change only before endings that start with a vowel.",
      "<strong>ㅂ → 우</strong>: 덥다 → 더워요, 더우세요; only <strong>돕다/곱다</strong> take 와 (도와요, 고와요).",
      "<strong>ㄷ → ㄹ</strong> in a few verbs: 듣다 → 들어요, 걷다 → 걸으세요; but 받다, 닫다, 믿다 are regular.",
      "<strong>ㅡ drops</strong> before -아/어 (바빠요, 예뻐요, 써요); many grammars call this a regular sound rule.",
      "<strong>르 → ㄹㄹ</strong>: 모르다 → 몰라요, 부르다 → 불러요.",
      "<strong>ㄹ-stems</strong> drop ㄹ before ㄴ, ㅂ, ㅅ (사세요, 삽니다) and never take 으 (살면, 만들 수 있어요).",
      "<strong>ㅅ drops</strong> without contraction: 낫다 → 나아요, 짓다 → 지어요; 웃다, 씻다, 벗다 are regular.",
      "<strong>ㅎ-adjectives</strong> fuse into ㅐ: 어떻다 → 어때요, 빨갛다 → 빨개요; 좋다 and all ㅎ verbs are regular."
    ]
  },
  "22": {
    "level": "A2",
    "time": "50–60 minutes",
    "objectives": [
      "Ask about and describe the weather with 날씨가 어때요?, 비가 와요 and 바람이 불어요",
      "Conjugate ㅂ-irregular 덥다 and 춥다 in present, past, future and negative",
      "Tell ㅂ-irregulars from regular look-alikes such as 입다",
      "Choose between 춥다/차갑다 and 덥다/뜨겁다",
      "Give a simple forecast with -(으)ㄹ 거예요 and weather advice with -아야 해요 / -(으)세요",
      "Talk about Korea's four seasons, 장마 and 미세먼지"
    ],
    "summary": [
      "<strong>ㅂ + vowel → 우</strong>: 덥다 → 더워요, 더웠어요, 더울 거예요; 춥다 → 추워요, 추웠어요, 추울 거예요.",
      "Before a consonant nothing changes: <strong>덥지 않아요</strong>, 춥고…",
      "입다, 좁다, 잡다 are <strong>regular</strong>: 입어요.",
      "Rain and snow <strong>come</strong> (비가 와요, 눈이 와요); wind <strong>blows</strong> (바람이 불어요 → 불 거예요).",
      "<strong>춥다/덥다</strong> for weather and body; <strong>차갑다/뜨겁다</strong> for things you touch.",
      "흐리다 → 흐려요 and 맑다 → 맑아요 [말가요] are regular; 어떻다 → 어때요 is ㅎ-irregular.",
      "Temperatures: Sino-Korean number + 도; below zero = <strong>영하</strong>.",
      "장마 runs roughly late June to late July; 미세먼지 is worst in late winter and spring."
    ]
  },
  "23": {
    "level": "A2",
    "time": "55–65 minutes",
    "objectives": [
      "Link actions and descriptions with -고 (and / and then) and contrast them with -지만 (but)",
      "Explain causes with -아서/어서, keeping the first clause in present form",
      "Choose -(으)니까 instead of -아서 when a request, suggestion or past reason follows",
      "Use sequence -아서 for linked actions like 가서 먹어요 and tell it apart from -고",
      "Express conditions and time with -(으)면, -(으)ㄹ 때, -기 전에, -(으)ㄴ 후에 and -(으)면서",
      "Apply irregular-verb changes correctly before vowel-initial connectors (더워서, 들으니까, 바빠서, 사니까)"
    ],
    "summary": [
      "Korean joins clauses by attaching a <strong>connecting ending</strong> to the first stem; the final verb carries tense and politeness.",
      "<strong>-고</strong> lists (싸고 맛있어요) or sequences (먹고 가요); <strong>-지만</strong> means but and can take the past (추웠지만).",
      "Cause <strong>-아서/어서</strong> never takes the past (자서, not 잤어서) and cannot be followed by a command or let's.",
      "<strong>-(으)니까</strong> allows the past and is the natural choice before -(으)세요, -(으)ㅂ시다 and -(으)ㄹ까요?",
      "Thanks and apologies use -아서: 늦어서 죄송해요, 도와주셔서 감사합니다, 만나서 반가워요.",
      "Sequence -아서 links actions where the first sets up the second (도서관에 가서 공부해요); a command after it is fine.",
      "-(으)면 = if, -(으)ㄹ 때 = when, -기 전에 = before, -(으)ㄴ 후에 = after, -(으)면서 = while.",
      "Consonant-initial endings leave irregular stems alone (덥고); vowel-initial ones change them (더워서, 더우니까, 더울 때)."
    ]
  },
  "24": {
    "level": "A2",
    "time": "50–60 minutes",
    "objectives": [
      "Say what you do and where you work or study with 이에요/예요, 에서 일하다 and 에 다니다",
      "Name common jobs, company ranks and school levels in Korean",
      "Address colleagues by title + 님 and avoid 님 on your own title",
      "Talk about your studies and career plans with the past, -고 싶다, -(으)ㄹ 거예요 and N이/가 되다",
      "Describe work routines and obligations with -아야 하다 and connectors such as -지만, -아서 and -(으)ㄴ 후에",
      "Use office courtesies like 수고하셨습니다 and 먼저 가 보겠습니다 appropriately"
    ],
    "summary": [
      "<strong>무슨 일 하세요?</strong> asks what someone does; answer with <strong>저는 회사원이에요</strong> or <strong>회사에 다녀요</strong>.",
      "<strong>일하다</strong> takes 에서 (은행에서 일해요); <strong>다니다</strong> takes 에 (회사에 다녀요, 학교에 다녀요).",
      "Address colleagues by title + <strong>님</strong> (부장님, 과장님) — but never put 님 on your own title.",
      "<strong>N이/가 되다</strong> means 'to become N': 선생님이 되고 싶어요.",
      "<strong>수고하셨습니다</strong> thanks people for their work; the person leaving first says <strong>먼저 가 보겠습니다</strong>.",
      "School vocabulary: 초등학교, 중학교, 고등학교, 대학교, 대학원, 전공, 시험, 숙제, 학원.",
      "Culture: 회식 (team dinners) and 수능 (the November college entrance exam) shape Korean work and school life."
    ]
  },
  "25": {
    "level": "A2",
    "time": "55–65 minutes",
    "objectives": [
      "Build noun descriptions with adjective modifiers -(으)ㄴ, including irregulars (매운, 긴, 빨간)",
      "Use -는 with 있다/없다 adjectives such as 맛있는 and 재미있는",
      "Choose the verb modifier -는, -(으)ㄴ or -(으)ㄹ to show present, past or future",
      "Compare things with 보다, 더, 덜, 제일/가장 and 만큼",
      "Describe actions in progress with -고 있다 and suggest trying things with -아/어 보다",
      "Ask and answer about life experiences with -(으)ㄴ 적이 있다/없다"
    ],
    "summary": [
      "In Korean <strong>every description comes before the noun</strong>: 제가 어제 본 영화 = the movie I saw yesterday.",
      "Adjectives take <strong>-(으)ㄴ</strong> (큰, 작은, 매운, 긴, 빨간); 있다/없다 adjectives take <strong>-는</strong> (맛있는, 재미있는).",
      "Verbs show time in the modifier: <strong>-는</strong> present (먹는), <strong>-(으)ㄴ</strong> past (먹은), <strong>-(으)ㄹ</strong> future (먹을).",
      "ㄹ-stems drop ㄹ before ㄴ and take no 으: 사는, 만든, 만들, 아는.",
      "<strong>보다</strong> marks what is compared against; 더 = more, 덜 = less, 제일/가장 = most, 만큼 = as … as.",
      "<strong>-고 있다</strong> stresses an action in progress; the tense goes on 있다 (하고 있었어요).",
      "<strong>-아/어 보다</strong> means try doing; in the past it means have done/been (가 봤어요).",
      "<strong>-(으)ㄴ 적이 있다/없다</strong> talks about life experience, often as 먹어 본 적이 있어요."
    ]
  },
  "26": {
    "level": "A2",
    "time": "50–60 minutes",
    "objectives": [
      "Name everyday devices and internet terms such as 핸드폰, 충전기, 비밀번호 and 와이파이",
      "Pair tech nouns with the right verbs: 전화를 걸다, 사진을 찍다, 문자를 보내다, 핸드폰을 끄다",
      "Handle phone calls with 여보세요, 잘 안 들려요 and promises like 다시 전화할게요",
      "Describe your devices and apps with modifiers and comparisons from Lesson 25",
      "Recognise common KakaoTalk slang (ㅋㅋ, ㅇㅋ, ㄱㅅ) and know when it is too informal",
      "Explain the roles of KakaoTalk and Naver in Korean digital life"
    ],
    "summary": [
      "<strong>KakaoTalk (카톡)</strong> is Korea's everyday messaging app — 카톡 할게요 means 'I'll message you'.",
      "<strong>여보세요</strong> is for the phone; in person, say 안녕하세요.",
      "You call <em>to</em> a person: <strong>친구한테 전화했어요</strong>, not 친구를 전화했어요.",
      "Tech verbs come in pairs: 전화를 걸다/받다/끊다, 사진을 찍다, 문자를 보내다, 앱을 깔다.",
      "끄다 → <strong>꺼요</strong> and 누르다 → <strong>눌러요</strong> follow the irregular rules from Lesson 21.",
      "Modifiers make tech talk precise: <strong>제가 자주 쓰는 앱</strong>, <strong>어제 찍은 사진</strong>.",
      "Consonant slang like <strong>ㅋㅋㅋ</strong>, ㅇㅋ and ㄱㅅ is very informal — friends only.",
      "Naver (and Kakao Map) is the go-to for local search and directions in Korea."
    ]
  },
  "27": {
    "level": "A2",
    "time": "50–60 minutes",
    "objectives": [
      "Express your feelings with common emotion adjectives, including ㅂ- and ㅡ-irregulars (무서워요, 슬퍼요)",
      "Describe other people's feelings with -아/어하다 (친구가 슬퍼해요)",
      "Choose the right particle for 좋다 vs 좋아하다 and for 결혼하다, 사귀다 and 헤어지다",
      "Give reasons for feelings with -아서/어서 and compare moods with 보다",
      "Comfort, encourage and apologise with 힘내세요, 파이팅, 미안해요 and 죄송합니다",
      "Explain the Korean concept of 정 and the 선배/후배 relationship"
    ],
    "summary": [
      "Most feelings are adjectives; many are irregular: 기뻐요, 슬퍼요, 무서워요, 외로워요, 그리워요.",
      "<strong>화나다</strong> and <strong>놀라다</strong> are verbs, so 'I'm angry' is usually <strong>화났어요</strong>.",
      "State your own feelings directly, but describe others with <strong>-아/어하다</strong>: 친구가 슬퍼해요.",
      "Adjective ↔ 이/가, -하다 verb ↔ 을/를: <strong>고양이가 좋아요 = 고양이를 좋아해요</strong>.",
      "You marry, date and break up <em>with</em> someone: <strong>민수 씨하고 결혼했어요</strong>.",
      "<strong>보고 싶어요</strong> (I miss you) and <strong>힘내세요</strong> (hang in there) are everyday emotional lifelines.",
      "<strong>정</strong> is the deep bond that grows over time; 선배/후배 shapes school and work relationships."
    ]
  },
  "28": {
    "level": "A2",
    "time": "60–75 minutes",
    "objectives": [
      "Get through the airport, immigration and hotel check-in in Korean",
      "Ask for photos, permission, prices and recommendations while sightseeing",
      "Follow key customs — bowing, shoes off, age hierarchy and drinking etiquette",
      "Identify Korea's major holidays and their traditions, including 설날, 추석 and 한글날",
      "Combine grammar from the whole course — particles, tenses, negation, honorifics, modals, connectors and modifiers — in one travel narrative",
      "Plan your next steps beyond A2, including the TOPIK I exam"
    ],
    "summary": [
      "Travel essentials: 여권, 입국 심사, 환전, 예약했어요, 1박에 얼마예요?, 조식 포함이에요?",
      "Requests and permission carry travel Korean: <strong>사진 좀 찍어 주세요</strong>, <strong>여기서 사진 찍어도 돼요?</strong>",
      "Staff use honorifics about you (계실 거예요, 드실 수 있어요); you answer plainly about yourself (있을 거예요).",
      "Nights are counted with Sino-Korean numbers + 박: <strong>2박 3일</strong> = 2 nights, 3 days.",
      "<strong>설날</strong> and <strong>추석</strong> are the biggest holidays; <strong>한글날</strong> (Oct 9) celebrates Hangul — it is not Thanksgiving.",
      "Customs: both hands when giving or receiving, shoes off indoors, polite speech with elders, pour for others.",
      "Every grammar point from Lessons 5–25 combines naturally in a single travel story.",
      "Next milestone: review with the Can-Do checklist, Glossary, Readings and Cheat Sheet, then aim for <strong>TOPIK I</strong>."
    ]
  }
};
