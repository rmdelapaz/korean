# Korean A1/A2 — Audit & Build Roadmap

_Written 2026-09-23 before the A1/A2 restructure. Read this before touching the course._

## 0. Which standard?

Korean has no CEFR exam of its own. The two Korean-native frameworks a beginner course is measured
against are:

- **TOPIK I** (한국어능력시험 I), levels **1급 and 2급** — the government proficiency test. Level 1 ≈
  CEFR A1, level 2 ≈ CEFR A2.
- The **NIKL International Standard Curriculum for Korean** (국제 통용 한국어 교육과정, National
  Institute of Korean Language) grades **1–2**, which the King Sejong Institute textbooks
  (세종한국어 1–4) implement. Grades 1–2 are the curriculum behind TOPIK 1–2.

This course labels lessons **A1/A2** (so it lines up with the sibling Spanish/French/Tagalog courses)
and states the TOPIK / NIKL equivalence on the index, the can-do page and every lesson's meta line.

## 1. What the course was

16 hand-authored topic pages: 3 Hangul lessons (strong — the consonant page has a source-corrected
Haerye section and the `hangul-lab.js` syllable composer) followed by 13 topical phrasebooks.
`site-nav.js` (header/dark mode/quiz), `audio.js` (Korean TTS by Unicode detection),
`add_footer_nav.py` (footer prev/next). Flat 1–16 grid on `index.html`.

## 2. What was missing for a proper A1/A2 (TOPIK 1–2)

**A. No grammar track at all.** A grep over all 16 pages found:

| Grade 1–2 core item | Pages that teach it |
|---|---|
| object particle 을/를 | 0 |
| topic 은/는 vs subject 이/가 | 1 page, 2 passing mentions |
| -아요/어요 conjugation (how to build it) | 0 — only memorised forms |
| past tense -았/었어요 | 1 incidental form |
| future -(으)ㄹ 거예요 | 0 |
| 안 / 못 negation | 3 incidental forms, never explained |
| -고 싶다, -(으)ㄹ 수 있다, -아야 하다, -아도 되다 | 0–2 incidental |
| -(으)세요 / -지 마세요 / -아 주세요 | not taught |
| -고, -지만, -아서, -(으)니까, -(으)면 | 0 |
| irregular verbs (ㅂ ㄷ ㅡ 르 ㄹ ㅅ ㅎ) | 0 |
| honorific -(으)시- and 합니다 vs 해요 as a system | mentioned in greetings, never taught |
| noun-modifier -(으)ㄴ/-는/-(으)ㄹ | 0 |
| comparison 보다 / 제일 | 0 |

A learner finishing all 16 pages could recite phrases but could not **build or change a sentence** —
Korean grammar lives in particles and verb endings, and neither was taught. That is not TOPIK I.

**B. Topic gap.** No home / housing / daily-routine lesson — a grade-1 core topic (집, 하루 일과)
and the sibling courses all have one.

**C. Thin lessons, no written practice.** 13 of 16 pages are under 650 words (health 332, hobbies 340,
weather 380, work 385…). 8 pages have no quiz at all; **no page has a written exercise.**

**D. No learning layer.** No objectives box, summary, vocabulary review, spaced repetition,
flashcards, self-check quiz, journal or progress tracking (the index progress bar was static "0 / 16").

**E. No companions.** No glossary, cheat sheet, can-do checklist, graded readings or Anki deck.

**F. No level framing.** Flat grid, no A1 vs A2, no statement of what the course certifies.

## 3. How many lessons — derived, not copied

Per the course-size SOP the count comes from the material. Korean's A1/A2 grammar load is heavy in
ways a European language's is not:

1. **Particles do the work of word order and prepositions.** Two lessons: the identity/topic/subject
   core (이에요, 은/는, 이/가 — the single most-asked beginner question) and the place/time/people set
   (에, 에서, 에게/한테, 도, 만, 하고, 부터/까지, 있다/없다 + position nouns).
2. **Agglutinative conjugation with vowel harmony and contraction** (-아요/어요 → 가요, 봐요, 마셔요,
   해요) must be taught as a mechanism, once, before any tense can be.
3. **Speech levels and honorifics are grammar, not etiquette** — 합니다/해요/반말 and -(으)시- change
   every verb. No sibling course has an equivalent lesson.
4. **Seven irregular classes** (ㅂ ㄷ ㅡ 르 ㄹ ㅅ ㅎ) appear in the most common A1/A2 words (덥다, 춥다,
   듣다, 걷다, 바쁘다, 모르다, 살다, 낫다, 어떻다). They get their own lesson.
5. **Clause connectors are how Korean builds a sentence longer than five words** (-고, -지만, -아서,
   -(으)니까, -(으)면, -(으)ㄹ 때, -기 전에, -(으)ㄴ 후에).
6. **Noun modifiers** (-(으)ㄴ/-는/-(으)ㄹ) are a grade-2 requirement with no English analogue.

Tally: sentence core · present · particles · negation+questions · speech levels · past ·
future/wants/suggestions · can/must/may/requests · irregulars · connectors · modifiers+comparison
= **11 grammar lessons**. Merging any pair produces a 3,000-word page; splitting further pads.
Plus **1 new topic lesson** (home & daily routine). **16 + 11 + 1 = 28.**

(The equal count with French is a coincidence of two independent derivations: French spends its
extra lessons on articles and object pronouns, Korean on honorifics, irregulars and modifiers.)

## 4. Final order — grammar interleaved with the topics that use it

A1 = lessons 1–15 (TOPIK 1 / NIKL grade 1), A2 = 16–28 (TOPIK 2 / grade 2).

| # | Lesson | Kind | Slug | Level |
|---|--------|------|------|-------|
| 1 | Hangul Consonants | topic | `korean_hangul_consonants` | A1 |
| 2 | Hangul Vowels & Syllable Blocks | topic | `korean_hangul_vowels` | A1 |
| 3 | Pronunciation Rules | topic | `korean_pronunciation` | A1 |
| 4 | Greetings & Essential Phrases | topic | `korean_greetings_essentials` | A1 |
| 5 | Sentence Basics: 이에요, 은/는 & 이/가 | grammar | `korean_grammar_sentence_basics` | A1 |
| 6 | Numbers, Time & Dates | topic | `korean_numbers_time_dates` | A1 |
| 7 | Verbs & the Polite Present (-아요/어요, 을/를) | grammar | `korean_grammar_present_tense` | A1 |
| 8 | Family & Personal Descriptions | topic | `korean_family_descriptions` | A1 |
| 9 | Particles of Place, Time & People | grammar | `korean_grammar_particles` | A1 |
| 10 | Negation & Asking Questions | grammar | `korean_grammar_negation_questions` | A1 |
| 11 | Food & Dining | topic | `korean_food_dining` | A1 |
| 12 | Home, Household & Daily Routine | topic (NEW) | `korean_home_daily_routine` | A1 |
| 13 | Speech Levels & Honorifics | grammar | `korean_grammar_speech_levels` | A1–A2 |
| 14 | Shopping & Money | topic | `korean_shopping_money` | A1 |
| 15 | The Past Tense (-았/었어요) | grammar | `korean_grammar_past_tense` | A1–A2 |
| 16 | Directions & Transportation | topic | `korean_directions_transportation` | A2 |
| 17 | Wants, Plans & the Future | grammar | `korean_grammar_future_plans` | A2 |
| 18 | Hobbies & Daily Life | topic | `korean_hobbies_daily_life` | A2 |
| 19 | Can, Must & May: Ability, Obligation, Requests | grammar | `korean_grammar_modals_requests` | A2 |
| 20 | Health & Body | topic | `korean_health_body` | A2 |
| 21 | Irregular Verbs | grammar | `korean_grammar_irregular_verbs` | A2 |
| 22 | Weather & Seasons | topic | `korean_weather_seasons` | A2 |
| 23 | Connecting Clauses | grammar | `korean_grammar_connectors` | A2 |
| 24 | Work & Education | topic | `korean_work_education` | A2 |
| 25 | Describing: Modifiers & Comparisons | grammar | `korean_grammar_modifiers_comparisons` | A2 |
| 26 | Technology & Communication | topic | `korean_technology_communication` | A2 |
| 27 | Emotions & Relationships | topic | `korean_emotions_relationships` | A2 |
| 28 | Travel & Korean Culture | topic (capstone) | `korean_travel_culture` | A2 |

Grammar lesson coverage:

| # | Covers |
|---|--------|
| 5 | SOV order, noun + 이에요/예요, 이/가 아니에요, topic 은/는, subject 이/가, 은/는 vs 이/가 (new info vs contrast/topic), 이것/그것/저것, 여기/거기/저기, 뭐예요/누구예요 |
| 7 | dictionary form & stem, -아요/-어요/-해요 by vowel harmony, contraction rules (가요 봐요 와요 마셔요 배워요 돼요 줘요), object 을/를, 20 core verbs & adjectives, adjectives conjugate like verbs |
| 9 | 에 (destination/location with 있다/time), 에서 (place of action / from), 에게/한테/께, 에게서/한테서, 도, 만, 하고/와/과/(이)랑, 부터/까지, 에서…까지, 있어요/없어요, 위/아래/앞/뒤/옆/안/밖 + 에 |
| 10 | 안 + verb, -지 않아요, 못 + verb / -지 못해요, 안 vs 못, 하다-verb placement (공부 안 해요), 아니요/네 answering negatives, question intonation, 뭐/누구/어디/언제/왜/어떻게/몇/얼마/무슨/어느/어떤 |
| 13 | 합쇼체 -(스)ㅂ니다/-(스)ㅂ니까, 해요체, 반말 -아/어 (recognition), honorific -(으)시- (가세요, 하셨어요), special honorific verbs (계시다, 드시다, 주무시다, 말씀하시다, 드리다), honorific nouns & particles (께서, 께, 진지, 댁, 연세, 성함), who to use which with |
| 15 | -았/었/했어요 by vowel harmony + contraction, 이었어요/였어요, past negation, past with time words (어제, 지난주, 작년, 아까, ~전에), 합니다 past -았습니다 |
| 17 | -고 싶다 / -고 싶어하다, -(으)ㄹ 거예요 (plan/prediction), -(으)ㄹ게요 (promise), -(으)ㄹ까요? (shall we / I wonder), -(으)ㅂ시다 & -아요 as "let's", -(으)러 가다/오다, -(으)려고 하다 |
| 19 | -(으)ㄹ 수 있다/없다, 잘하다/못하다, -아야/어야 하다/되다, -아도/어도 되다, -(으)면 안 되다, -(으)세요 request, -지 마세요, -아/어 주세요, -아/어 줄래요? |
| 21 | ㅂ (덥다→더워요, 돕다→도와요), ㄷ (듣다→들어요, 걷다), ㅡ (바쁘다→바빠요, 쓰다→써요), 르 (모르다→몰라요, 부르다), ㄹ-drop (살다→사세요, 만들다→만드는), ㅅ (낫다→나아요, 짓다), ㅎ (어떻다→어때요, 빨갛다), regular look-alikes (입다, 받다, 웃다) |
| 23 | -고 (and/then), -지만 (but), -아서/어서 (because/and then — no past, no command), -(으)니까 (because — allows commands), -(으)면 (if/when), -(으)ㄹ 때, -기 전에, -(으)ㄴ 후에, -(으)면서, 그리고/그래서/그런데/하지만 |
| 25 | adjective modifier -(으)ㄴ, verb modifier -는 / past -(으)ㄴ / future -(으)ㄹ, 있다/없다 → -는 (맛있는), 보다 (더), 제일/가장, 만큼, -고 있다 (progressive), -아/어 보다 (try), -(으)ㄴ 적이 있다 (experience) |

## 5. Learning layer & companions (ported from the French course)

- `learn.js` + `styles/learn.css` — word field **`ko`**, localStorage namespace **`korean-`**, data
  globals `window.KOREAN_VOCAB` / `window.KOREAN_LESSON_INFO`. Local changes vs French: exercise
  answers compare with **all whitespace removed and NFC-normalised** (Korean spacing 띄어쓰기 is a
  beginner stumbling block, not what the exercise tests), and the Enter-to-check handler ignores
  IME composition (`e.isComposing`) so a Korean keyboard can finish a syllable.
- `vocab-data.js` — titles + slugs + levels + per-lesson `{ko, pron, en, cat?}`; **pron = Revised
  Romanization** as used throughout the existing pages.
- `lesson-content.js` — objectives + summary + time + level per lesson. The original pages'
  hand-written "What You'll Learn" and "Key Takeaways" boxes are **moved** here, not deleted.
- Companions: `glossary.html`, `cheatsheet.html`, `cando.html` (TOPIK 1 / TOPIK 2 descriptors),
  `readings.html`, `build_anki.py` → `korean_course.apkg`.
- Footer made attributed: `© 2026 Ray de la Paz. Korean Language Course. All rights reserved.`

## 6. Conventions future edits must follow

- **Exercise format:** a `.practice-section` wrapping a `ul`/`ol`; each `<li>` has `_____` (3+
  underscores) **and** an inline `(Answer: X)`; **one blank per li**; alternatives `a|b`. Spacing
  variants are not needed (the checker ignores spaces). Never put `___` in prose — use `…`.
- **Vocab** lives in `vocab-data.js` (single source for review, quiz, glossary, Anki). Re-run
  `python3 build_anki.py` whenever it changes. Write Hangul literally — no `\u` escapes.
- **Objectives/summary** come from `lesson-content.js`; never hand-write them into a page.
- **Order** is `add_footer_nav.py`'s `LESSONS` list; edit it and run
  `python3 add_footer_nav.py --apply --no-backup`.
- `<h1>` is `🇰🇷 Lesson N: Title` and must match the list position.

---

## 7. Final state (built 2026-09-23)

- **28 lessons** in the §4 order; A1 = 1–15, A2 = 16–28. 12 new pages (11 grammar + home & routine),
  16 existing pages given the depth pass (Grammar in Action, dialogues, Common Mistakes, FAQ, Going
  Further, Looking Ahead, exercises, 4-question quiz). Pages run ~2,000–3,700 words incl. tables.
- **Korean corrections made during the depth pass** (were wrong on the old pages): 좋다 aspiration rule
  (ㅎ+ㄷ→ㅌ, not ㅈ+ㅎ), 음악 does link [으막], 으름→음식, 삼 번→세 번 for "3 times", 명 is neutral (분 is
  honorific), 부인 ≠ one's own wife (아내), 한글날 is Hangul Day (추석 is "Korean Thanksgiving"),
  수고하셨습니다 usage, 화나다/놀라다 are verbs, 1339 helpline retired (→1330 / 119), 장마 runs to late July,
  삼복 explained correctly, several romanization fixes.
- `vocab-data.js` 995 words · `lesson-content.js` 168 objectives / 222 summary points ·
  `korean_course.apkg` 837 notes / 1,674 cards · glossary 775 unique rows · cando 74 descriptors
  (TOPIK 1 / TOPIK 2) · cheat sheet 88 phrases / 10 situations · readings 6 pieces / 18 questions.
- **118 exercise sets, 800 checkable blanks**, every lesson 4–5 sets + 4 quiz questions.
- **QA** (headless Chromium, local http.server): 33 pages 0 console errors in light and dark; 0px
  horizontal overflow at 390px; objectives below `<h1>`; every exercise group scores N/N; 0 answer-key
  leaks; prev/next chain + `<h1>` numbering 1→28 (L28 → cando); attributed footer on every page;
  dashboard renders 0/28 with 28 card ticks; 18/18 reading questions pass; 66 internal links all 200.

## 8. Vocabulary illustrations (added 2026-09-24)

136 WebP images in `images/vocab/`, **all reused** from the sibling courses (ESL, French, Spanish,
Tagalog, Kapampangan — one shared 512px house style), copied in and renamed to English-concept slugs.
Wired as `"img"` on **219 A1–A2 entries** in `vocab-data.js` (learn.js `vocabImg()` renders them on
the review cards and flashcards; the engine needed no change). Matched by English gloss against a
pool built from every course's own `vocab-data.js` `img` + `en`, then hand-reviewed on a contact
sheet. Rejected on review: Philippine jeepney for 요금 (fare), "read"/"reserve" (both just a book),
"love" (same ring as "expensive"), roast chicken for 닭 (the animal), and sense collisions such as
싸다 (only an "expensive" picture existed), 잔 (matched a mirror), 멋있다 (matched "cold").
**The B1–B2 tier deliberately has no images** — its vocabulary is grammar and abstract words.
