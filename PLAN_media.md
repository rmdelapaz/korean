# Media & Interactivity Plan

Adding articulation diagrams, an audio layer, and interactive Hangul widgets to the
Korean course. Written 2026-07-09.

## Constraints discovered

- **No build step.** Plain static HTML, one stylesheet, one shared IIFE script.
  Everything added must be vanilla and committed as-is.
- **CSS is linked absolute** (`/styles/main.css`), **JS is linked relative**
  (`site-nav.js`). New scripts follow the relative pattern, at the repo root.
- **Dark mode is attribute-only**: `[data-theme="dark"]` on `<html>`, set by JS.
  There is no `@media (prefers-color-scheme)` block in the CSS. All new styling must
  therefore key off CSS custom properties, never hardcoded colours.
- **Korean text is not in a predictable column.** No table has a class, id, `lang`
  attribute, or `<thead>`. Korean sits in column 1 in most vocab tables, column 2 in
  `korean_food_dining.html` ("Popular Korean Dishes"), columns 2/4/6 in
  `korean_numbers_time_dates.html`, and is scattered across several columns in
  `korean_pronunciation.html`. **A script must detect Hangul by Unicode range**, never
  by column index or header text.
- **`<html lang="en">` on every page.** Nothing is language-tagged, so speech synthesis
  must set the utterance language explicitly or it will read Hangul with an English voice.
- **`add_footer_nav.py` owns the region** between `<!-- BEGIN footer-nav ... -->` and
  `<!-- END footer-nav -->`. Never hand-edit inside those markers; the script rewrites
  the whole span on every run.
- `.bak` files are gitignored build residue. Edit only the real `.html`.
- The empty `js/` directory is unreferenced. Left alone.

## Source corrections (verified against the Hunminjeongeum Haerye, 1446)

The existing "How Consonant Shapes Were Designed" section conflates three distinct
derivation mechanisms and repeats several folk-etymologies. Primary text:
<https://ko.wikisource.org/wiki/훈민정음> (制字解). Scholarly summary:
<https://en.wikipedia.org/wiki/Origin_of_Hangul>.

1. **Only five letters are pictographs (象形)**: ㄱ ㄴ ㅁ ㅅ ㅇ.
   - ㄱ 象舌根閉喉之形 — the tongue root closing the **throat**.
     (English Wikipedia renders 閉喉 as "blocking the upper palate". That is wrong;
     喉 is unambiguously throat/larynx. Use "throat".)
   - ㄴ 象舌附上腭之形 — the tongue touching the upper palate.
   - ㅁ 象口形 — the shape of the mouth.
   - ㅅ 象齒形 — the shape of a tooth.
   - ㅇ 象喉形 — the shape of the throat.

2. **Stroke addition (加畫)** derives the rest, on an explicit phonetic principle:
   `ㅋ比ㄱ，聲出稍厲，故加畫` — "compared to ㄱ, ㅋ issues forth somewhat more fiercely
   (厲), therefore a stroke is added." Chains:
   `ㄱ→ㅋ` · `ㄴ→ㄷ→ㅌ` · `ㅁ→ㅂ→ㅍ` · `ㅅ→ㅈ→ㅊ` · `ㅇ→ㆆ→ㅎ`.
   Note **ㆆ** (yeorin hieut) is the genuine intermediate step the current page omits.

3. **Doubling (各自並書)** produces the tense letters. This is a *separate* mechanism,
   not the tail of a stroke-addition chain. The 1446 document lists **six** doubled
   initials — ㄲ ㄸ ㅃ ㅆ ㅉ **and the now-obsolete ㆅ**.

4. **Variant letters (異體字)**: ㆁ, ㄹ, ㅿ. The Haerye explicitly excludes them:
   `半舌音ㄹ，半齒音ㅿ … 異其體，無加畫之義焉` — "they differ in form; there is no
   stroke-addition principle in them." This is why ㄹ is absent from the derivation tree.

5. **Folk-etymology to delete.** "ㅂ is the mouth seen from the side", "ㄷ is the tongue
   against the tooth ridge", "ㅎ is air flowing from the throat" have no basis in the
   source. All three are 加畫 letters and receive no pictographic gloss. They are
   *indirectly* motivated (ㅂ is labial via ㅁ; ㄷ is lingual via ㄴ), which is the more
   elegant fact and the one worth teaching.

6. **The three-way contrast is not "puff of air".** All three series are voiceless
   initially; they differ in voice onset time — tense ≈ 12 ms, lenis ≈ 30–50 ms,
   aspirated ≈ 80–100+ ms. Lenis is *not* unaspirated. And in Seoul Korean the
   lenis/aspirated VOT distinction is collapsing among younger speakers, with the cue
   shifting to F0 (pitch) on the following vowel. IPA: /k/ /kʰ/ /k͈/, affricates are
   alveolo-palatal /tɕ/, not /c/.

7. **Vowels are a different system.** Three bases — ㆍ (heaven, yang), ㅡ (earth, yin),
   ㅣ (human, neutral) — combined cosmologically, *and* grounded articulatorily:
   `ㆍ 舌縮而聲深` / `ㅡ 舌小縮` / `ㅣ 舌不縮而聲淺` (tongue retraction). Vowel harmony
   follows dot placement: outward/upward = yang (ㅗ ㅏ), inward/downward = yin (ㅜ ㅓ).
   (English Wikipedia's *Hangul* article swaps the yin/yang assignment. It is wrong.)

## Work items

### 1. Stylesheet — `styles/main.css` (append)
New classes, all built on existing custom properties:
`.jamo` / `.jamo-lg` (promote the ~40 inline `font-size:1.5rem` cells),
`.caption`, `.vt-grid`, `.vt-figure`, `.vt-svg`, `.audio-btn`, `.derivation`,
`.composer`, `.batchim-lab`. Override the global `svg { margin: 1rem auto }` rule
for diagram SVGs, which must not be block-centred inside a grid cell.

### 2. Audio layer — `audio.js`
- Feature-detect `speechSynthesis`; resolve a `ko-*` voice, handling the async
  `voiceschanged` event.
- If no Korean voice exists (common on Windows without the language pack), set a flag
  on `<html>` that hides every audio control, and surface one explanatory notice
  rather than letting buttons silently mispronounce Hangul with an English voice.
- Auto-attach a speaker button to any `<td>` containing Hangul
  (`가-힣` syllables, `㄰-㆏` compatibility jamo), extracting the
  Hangul run so parentheticals like `기역 (giyeok)` are not read aloud.
- `data-speak="…"` overrides the extracted text. Needed for the jamo tables: a bare ㄱ
  should be voiced as the syllable 가, not as the letter name.
- Expose `window.KoreanAudio` so the widgets can share one speech pipeline.

**Later, optional:** pre-render the plain/aspirated/tense minimal pairs (가/카/까,
다/타/따, 바/파/빠, 자/차/짜, 사/싸) as committed MP3s for consistent quality. Piper is
the right engine — `edge-tts` sounds better but calls a Microsoft endpoint whose output
isn't licensed for redistribution on a public site.

### 2a. Rolling the audio layer out to the other courses

`audio.js` now also ships in **russian, mandarin, french, spanish**. All five are
generated from `../_tools/build_audio.py`; each output is standalone (its CONFIG block
sits at the top and can be edited in place), matching how the courses already duplicate
`site-nav.js` with a one-line brand difference. Re-running the generator is idempotent.

Target text is identified three different ways, because the writing system decides what
is even possible:

| Course | Mode | How target text is found |
| --- | --- | --- |
| korean | `unicode` | Hangul syllables + jamo. Bare ㄱ is voiced as 가, since engines read a lone jamo as its letter *name* (기역). |
| russian | `unicode` | Cyrillic. The combining acute U+0301 (stress marks, `молоко́`) is captured then stripped before speaking. |
| mandarin | `unicode` | Han. Detection and extraction use **separate** patterns: CJK punctuation is spoken for prosody but must never, alone, mark a cell as target text. |
| french | `header` | Latin script — indistinguishable from the English gloss by character set. Each table's target columns are read from its `<th>` row. |
| spanish | `rules` | Latin script **and no `<th>` anywhere**. Per-table-shape selectors. |

Two findings that overturned the obvious approach:

- **French does not mark target words with `<strong>`.** Only 7 of its 105 tables do;
  a `td strong` rule covered ~7% of the course and also buttoned English row-labels
  ("Use with") in the Tu/Vous table. All 105 tables have a `<th>` row, and 85 name the
  French column, so the header is the real signal. The header regex errs toward
  precision: ambiguous headers (`Place`, `Example`, `Sound`) are skipped rather than
  guessed at, because **speaking an English cell in a French voice is worse than a
  missing button**. Grammar tables are caught by anchoring `^masculine|^feminine|
  ^plural|^singular`, which matches the column `Plural (m & f)` but deliberately not
  `Vous (formal / plural)`, whose cells hold English prose.
- **A matching header does not mean the column holds speech.** `french_france_vs_canada.html`
  has two tables headed `Feature | 🇫🇷 France | 🇨🇦 Canada`. The header rule matched the
  France/Canada columns, but their cells are English linguistic commentary with IPA —
  `"moi" may sound more like /mwɛ/ or even /mwɛ̃/ in some dialects`. A French voice read
  the whole cell, IPA and all. The discriminator is the **first** column: vocabulary
  tables lead with `English`, property-comparison tables lead with `Feature`. `header` mode
  now takes a `headerSkip` pattern that drops such a table whole. These were the only two
  in the course (26 bad buttons of 1106; the audit now reports zero).

  A second, smaller class: annotations that are printed but must not be spoken —
  `une voiture / un char (🇨🇦 informal)`. `stripSpoken` removes a parenthetical holding a
  flag emoji or nothing but a register label, so the cell still *shows* the note while the
  utterance is just `une voiture / un char`. It is anchored to exact labels, so meaningful
  parentheticals (gender markers, glosses) survive.

- **Spanish has two table shapes with opposite rules.** `.phrase-box` puts the target
  in the first cell's `<strong>`; `.conversation-flow` puts a *speaker label* there
  (`Mesero:`) and the spoken Spanish line in the second cell. Keying on the first-column
  `<strong>` alone put the button on the speaker's name and left the line silent — 78 of
  the course's 111 rows.

### 2b. Full Spanish coverage

The whole course has only 18 tables; most Spanish lives elsewhere. `rules` mode grew a
per-rule `pick` strategy (the Spanish is rarely the entire element) and a `requireTarget`
language gate. Coverage went from ~57 buttons to **234** across the 17 pages.

| Container | pick | Spanish is |
| --- | --- | --- |
| `.phrase-box td:first-child strong`, `.phrase-box li strong`, `.expression-box li strong` | `self` | the bolded word |
| `.conversation-flow tr td:nth-child(2)` | `self` + gate | the spoken line (cell 1 is the speaker) |
| `.conversation-flow li` | `beforeDash` | before ` - `, e.g. `Tengo... - I have...` |
| `.example-text` | `self` + gate | a whole Spanish paragraph |
| `.scenario-box p` | `afterStrong` | after the `<strong>Waiter:</strong>` label |
| `.practice-section li` | `vocabWord` | a drill word (see below) |
| `.tip-box li`, `.cultural-note li`, `.practice-section li`, `.final-note p` | `quotes` | each `"…"` run inside English prose |

Three traps, each of which produced a real bug before being caught in the browser:

1. **`spanish_ai_digital_learning.html` alternates languages inside one dialogue table.**
   The `"You:"` rows are English, the `"AI:"` rows Spanish — except one `"You:"` row that
   *is* Spanish. So the gate must run per line, not per speaker. `looksSpanish()` tests for
   Spanish-only orthography (`¿¡ñ` + accents) or a function word English does not share.
   The word list deliberately omits `me`, `no`, `a`, `en`, `se` — all real English words.
2. **The pronunciation drills invert word and respelling.** `mesa (MEH-sah) - table` puts
   the Spanish first; `es-tu-dian-te (student)` puts a *syllable-split* Spanish word first
   and the **English gloss** in the parens. Position is meaningless. The discriminator is
   capitalization: a respelling shouts its stressed syllable (`MEH-sah`, `ah-SOOL`), while
   a syllable split is all lowercase and gets its hyphens removed → `estudiante`. Getting
   this wrong made the page say "student" and "computer" in a Spanish voice.
3. **`<li><strong>Morning (15 min):</strong> …</strong>` is a study-plan label, not a drill
   item.** A digit in the parenthetical, or a colon straight after it, rejects it.

Verified across all 17 pages: 0 English strings spoken, 0 pronunciation respellings spoken,
0 nested buttons, 0 double-attached elements, 0 buttons inside `<canvas>`/`.mermaid`/`<svg>`.
A real voice (Microsoft Raul, es-MX) speaks the correct text at rate 0.85.

**Known gaps, deliberate.** `<canvas>` is a JS-drawn bitmap with no DOM text. `.mermaid`
source is rewritten to SVG at runtime. `<svg><text>` nodes bundle both languages in one
node (`el pelo - hair`). Bare `<ul>` commentary like `The pure vowels in "tacos"` is left
alone because `tacos`/`enchiladas` carry no Spanish orthography and admitting them would
mean loosening the gate enough to start speaking English. `index.html` gets no buttons (its
only Spanish is the `<h1>¡Bienvenidos!</h1>`).

Spanish uses a different CSS custom-property scheme (`--bg-card`, `--text-muted`,
`--accent`), so its stylesheet gets a small alias `:root` block rather than forking the
audio CSS. Verified to resolve correctly in both themes.

**Bug fixed in the original Korean build:** the `[data-speak]` opt-in selector matched
the `.vt-figure` diagram buttons, nesting a `<button>` inside a `<button>` — invalid
HTML that double-fired the delegated click handler. The opt-in now skips anything inside
a `button`/`a`. The `no-ko-voice` class was also renamed `no-tts-voice` across all five.

**Not done, and why:** `latin` and `kapampangan` have no TTS voice in any browser or OS
(Latin is conventionally approximated with Italian, which is wrong for the Classical
pronunciation this course teaches alongside Ecclesiastical). `esl` has no structural
distinction between the English being taught and the explanatory prose around it, so no
selector exists. `japanese` keeps its vocabulary in SVG `<text>` nodes with romaji in
parentheses, has no `site-nav.js`, and uses a different CSS token scheme. `trilingual`
mixes English/Spanish/Japanese on every page, has no dark mode, and its `main.css` is
only a reset.

### 3. Articulation diagrams — inline SVG
One hand-authored mid-sagittal vocal-tract cross-section, defined once in a hidden
`<svg><defs>` and instantiated five times via `<use>`. Each instance highlights the
articulator its letter depicts and overlays the jamo. Strokes use `currentColor` and
fills use custom properties, so both themes work with no duplicate markup.
Each figure is a `<button>` — clicking highlights the articulator and speaks the sound.

### 4. Rewrite of `korean_hangul_consonants.html`
Replace the "How Consonant Shapes Were Designed" section with a corrected three-part
structure (pictograph → stroke addition → doubling), the diagram grid, a derivation
tree showing the ㆆ step and the ityeja exclusion, and an honest treatment of the
three-way contrast including the VOT numbers. Fix the "Think Of" column, which
currently presents derived letters as independent pictographs.

### 5. Interactive widgets — `hangul-lab.js`
- **Jamo composer.** Unicode composes Hangul arithmetically:
  `0xAC00 + (L × 21 + V) × 28 + T`, over the standard 19 initials / 21 medials /
  28 finals. Click jamo, watch the syllable block assemble. Mounts on
  `<div data-widget="composer">`.
- **Batchim reducer.** Type a syllable, see the 27 possible finals collapse to 7
  sounds, with the firing rule highlighted. Mounts on `<div data-widget="batchim">`.

Both use event delegation. `site-nav.js` attaches one listener per quiz option at load
and would not wire dynamically-inserted DOM, so widgets must not depend on it.

### 2c. Tagalog, and the fallback-voice mechanism

`tagalog` (10 pages, 813 buttons). Two new pieces of machinery, both general:

**Fallback voices.** `langs` is now an ordered list and `nativeLangs` says which entries
are the real thing. Tagalog resolves `fil` → `tl` → `es`. No Filipino voice ships with any
major OS, and Tagalog shares Spanish's five-vowel system and most of its consonants, so a
Spanish voice is a defensible stand-in. When one is used, `<html>` gets `tts-fallback` and
a second notice appears saying so — the learner should never be told this is native.

`fallbackRules` rewrites the **utterance only**, never the page, closing the two gaps that
would otherwise make a Spanish voice wrong rather than merely accented:

| Written | Spoken to the voice | Why |
| --- | --- | --- |
| `hindi`, `bahay` | `jindi`, `bajay` | Spanish `<h>` is silent; `<j>` is [x]~[h] in Latin American voices |
| `Kumusta`, `kilo` | `cumusta`, `quilo` | Spanish spells /k/ as `<c>`/`<qu>`; bare `<k>` is a foreign letter |
| `mga` | `manga` | the plural marker is pronounced, not spelled |
| `ng` (linker) | `nang` | |
| `ikaw` | `icau` | Spanish `<u>` before a vowel is [w] |

Also `lowercase: true`, because engines spell ALL-CAPS words (`ISA`, `LOLO`) letter by
letter.

**Rescan.** Lesson 9 builds its 282-card vocabulary grid from JavaScript *after* load, so
the one-shot attach found nothing. `rescan: true` installs a debounced `MutationObserver`
that re-attaches, disconnecting itself while it works so its own buttons do not retrigger
it. Verified stable (564 → 564 buttons, no duplicates) and correct across the page's own
category filter and search rebuilds.

Detection notes: this course has genuinely semantic containers (`.pos-card li strong`,
`.root-word`, `.number-tagalog`, `.vocab-card .tagalog-word`) — more than Spanish offered.
Traps: `.example-box li` puts the *respelling* in `<strong>` (`BA-HAY (house)`), but here
the respelling is just the word hyphenated and shouted, so the new `syllabifiedWord` pick
recovers `bahay`. `.example-box p` and `.conversation-box p` put an English speaker label
in `<strong>` with the Tagalog in quotes. `.pronunciation` means a vowel letter in lesson 1
but an English respelling (`koo-MOOS-tah`) in lesson 9 — never selected. `.word-box` mixes
English (`I`, `eat`, `rice`) and Tagalog (`Kumakain`) under identical classes and is
skipped entirely; `Kumakain` is reachable via `.root-word` anyway.

Not a bug: `Stress` and `Excited` get buttons in lesson 7. They are Taglish loanwords the
course teaches as Tagalog adjectives. Lesson 8 gets zero buttons — it is an English
AI-strategy lesson with no Tagalog in it.

### 2d. Latin

`latin` (17 pages, 651 buttons). Latin turned out to be the easiest content and the
hardest voice problem.

**Detection.** All 83 tables have a `<th>` row, so `header` mode fits. Three traps, each
found by auditing every button rather than sampling:

- **Bare `/latin/` is wrong.** It also matches `Latin Meaning`, `Latin Presence` and
  `Latin-origin (formal)` — columns where "Latin" modifies an *English* noun. Those cells
  hold glosses (`"wise man"`) and English derivatives (`interrogate`). The pattern is now
  an allow-list: `^latin$` plus `^latin (term|root|origin|word|form|name)s?$`.
- **`Case` and `Nominative Forms`** head columns of *English* case names.
- **`<td><strong>` is not a signal here**, despite 313 of them. On `nouns_cases` the
  strongs are English case names, on `verbs_present` bare endings (`re`, `-ō / -m`), on
  `legacy_modern` section headings. Only `sentence_structure` has Latin in them. Checked
  before trusting the count.

`Example` columns *are* mostly pure Latin (`Puella videt.`) once the gloss is removed, so
two new template features earn them back: `stripSpoken` now also drops a trailing
parenthetical (`aqua (water)` → `aqua`, while `nox (noctis) (night)` keeps its genitive),
and a new **`rejectTest`** runs *after* stripping and vetoes what is still not Latin — a
quoted gloss, an `=` or `→` from a pronunciation note, more than one parenthetical
(`servus (slave), amīcus (friend)`), or an English function word. Precision-first: this
took 813 buttons with 27 leaks down to 651 with **zero**, and no page lost its audio.
`latin_alphabet_pronunciation.html` correctly gets none — its columns are English
respellings (`caesar → "kye-sar"`).

**Voices.** No Latin voice exists, and the right stand-in depends on which Latin:
Ecclesiastical *is* Italian phonology; Classical maps onto Spanish (five pure vowels, hard
`c`, and Spanish `<u>`-before-vowel = /w/ = Classical `<v>`). So `fallbackRules` became a
**map keyed by voice-language prefix**, and `fallbackNames` lets the notice name the
stand-in that actually won. On the lesson pages: an Italian voice speaks Ecclesiastical,
a Spanish voice speaks Classical (`vīta` → `uita`, `quis` → `cuis`, `Cicerō` → `quiquero`,
`habeō` → `jabeo`).

### 2e. Japanese — converting SVG text into DOM

`japanese` (17 pages, 465 buttons). The vocabulary was drawn as SVG `<text>`, so it was
invisible to the audio layer, to text search, to selection, to screen readers, and to dark
mode (the SVGs carry hardcoded light fills like `#FFF0F5`).

`../_tools/jp_svg_to_html.py` converts **45 of 51** SVG blocks into HTML grids. It does not
guess each block's semantics — some are tables, some conversation flows, some kanji
equations. It preserves the *geometry*: `<text>` runs are clustered into rows by y and
columns by x, then emitted as a CSS grid with the same placement. Reading order and
alignment survive; the colours come from the course's own tokens.

Six blocks are genuine drawings (IME state flows, keyboard layouts) and are listed in the
script's `KEEP` set. Converting those to a grid would destroy what they depict.

Things that mattered:

- **Nested `<g transform="translate()">` must be resolved first.** A `<text>`'s own x/y are
  relative to its group; clustering raw coordinates scrambles rows and columns entirely.
- Three titles contain a bare `&` ("Days, Months & Dates"), which is invalid XML. Escaped
  for the parse only.
- Once the text is real DOM, detection is the easy kind: kana and kanji are a distinct
  Unicode range, so the romaji and English glosses beside them are excluded by character
  set alone. Audited course-wide: **0 non-Japanese strings spoken.**
- The template gained `cellSelector` (this course's vocabulary lives in `.jp-cell` spans,
  not `<td>`) and an `anchor=None` mode that hangs the script tag on `</body>`, since this
  course has no `site-nav.js`.
- **Do not stack the grid to one column on mobile.** Several panels are two independent
  lists side by side (My Family / Your Family, Days / Months). Source order is row-major, so
  collapsing interleaves them — you would read 月曜日, 1月, 火曜日, 2月. The panel keeps its
  columns and scrolls inside its own box instead.

Originals are in `japanese/backup_pre_svg_conversion/`.

**Still unreachable: 84 Japanese strings painted into `<canvas>`** via `ctx.fillText()`
across 59 canvases (e.g. the "Colors with Full Romaji" panel in
`essential_vocab_romaji_reference.html`). Canvas has no DOM text, so no button can attach.
Converting those means replacing the drawing scripts, which is a separate job.

## Pronunciation readers

`spanish/spanish_reader.html` and `french/french_reader.html` (each lesson 17, registered
in the course's `add_footer_nav.py` LESSONS list). Both share the same TTS shell: chunked
sentence playback (Chrome truncates utterances past ~15s), word highlighting from
`boundary` events with a sentence-level fallback for remote voices that never fire them,
click-a-word, voice picker, rate slider. The engines are different because the languages
are.

**Spanish** (`spanish/reader.js`) is near-phonemic, so syllabification, stress and IPA are
all derived by rule. Measured 100% on a 30-word battery.

**French** (`french/reader.js`) is not, and the page is shaped around that:

- **No stress panel.** French has no lexical stress — it is phrasal, on the last full
  syllable of a rhythmic group. A "stressed syllable" column would teach something false.
  The page shows silent letters, nasal vowels and liaison instead.
- **Rule engine + lexicon**, measured 62/62 on the battery in `reader.js`'s test set
  (regular machinery: silent finals, e muet, nasals, `-tion`, `-ill-`, open/closed
  `eu`/`o`; lexicon for `femme`, `monsieur`, `fils`, `oignon`, …). Honest caveat card on
  the page: this is a good approximation, not an authority. The *audio* is unaffected — it
  comes from the system voice.
- **Liaison** is the feature a static table cannot teach. 19/19 on a liaison battery.
  Three classifications: obligatory (after determiners/pronouns/short prepositions),
  optional, forbidden (after `et`, or before an *h aspiré*). The linking sound is not the
  letter: `s`/`x` link as /z/, `d` as /t/.

Bugs worth remembering, all caught in the browser:

- The liaison test asked "is the final consonant in the silent-letter list?", which is
  empty for lexicon words — so `les amis` reported no liaison. It now asks whether the
  final letter's *sound* survives into the IPA.
- `h aspiré` was matched only in the singular, so `les haricots` linked wrongly; and the
  check sat after an early return, so `les héros` reported "none" instead of an explicit
  *forbidden*. A learner needs to see that the non-liaison is deliberate.
- `-ent` is nasal in a noun (`client`) and silent as a verb ending (`ils parlent`). No
  spelling rule can separate them, so `analyse()` takes the previous word and treats
  `-ent` as a verb ending after `ils`/`elles`.
- Syllables rendered lowercased until the scanner kept the original casing alongside the
  lowercase form it matches rules on.

**Tagalog** (`tagalog/reader.js`, lesson 10) is the most regular of the three. Its whole
exception lexicon is two words: the linker `ng` is /naŋ/ and the plural marker `mga` is
/maˈŋa/. Everything else is derived. 23/23 on the battery, with exactly one stress mark
per word.

The page exists for the thing the spelling hides. **Tagalog stress is phonemic but
unwritten**: `baka` is "cow" (BA-ka) or "maybe" (ba-KA), and ordinary orthography marks
neither. The engine assumes the default (penultimate) and tags every such word `assumed` —
it is a guess, not a reading. Dictionary diacritics, which the reader accepts, resolve it:

| Mark | Type | Stress | Final glottal |
| --- | --- | --- | --- |
| none | malumay | penultimate | no |
| ´ acute | mabilis | final | no |
| ` grave | malumi | penultimate | yes |
| ^ circumflex | maragsa | final | yes |

It also surfaces the two things spelling under-represents: `ng` is one letter for /ŋ/
(word-initially too — `ngayon` /ˈŋa.jon/), and every syllable needs an onset, so a
vowel-initial word actually opens with a glottal stop (`aso` /ˈʔa.so/, `ma.ˈʔa.ɡa/`).

Speech reuses the Spanish-voice fallback and its transliteration. Consequently **word-level
highlighting is disabled under a stand-in voice**: `boundary.charIndex` indexes the
transliterated string (`cumusta ca?`), whose offsets do not match the displayed text, so
the reader falls back to sentence highlighting. It re-enables automatically for a native
`fil`/`tl` voice.

Bug worth remembering: stress is a property of the whole word, not of each hyphenated
part, so `pag-ibig` initially came out with two stress marks (`ˈpaɡˈʔibiɡ`). The parts are
transcribed bare and the single mark is applied once, at the global stress index.

**Latin** (`latin/reader.js`, lesson 17) is the most accurate reader of the four, because
**stress is fully computable** — no dictionary, no user diacritic, no "assumed" hedge:

    1 syllable   stress it
    2 syllables  stress the penult, always
    3+           penult if HEAVY (long vowel, diphthong, or closed), else antepenult

The course text already writes 2,919 macrons, so the vowel length is present in the markup.
28/28 on the battery. Two rules the naive version gets wrong, both taught on the page:
**muta cum liquida** (a stop + `l`/`r` opens the next syllable, so `te·ne·brae` keeps a
light penult → TE·nebrae) and **`x`/`z` count double**, always closing the syllable before
them (`ex·er·ci·tus` → ex·ER·citus).

Both pronunciations are computed and toggled: `caelum` `/ˈkae̯.lʊm/` vs `/ˈtʃe.lum/`,
`gēns` `/ˈɡeːns/` vs `/ˈdʒens/`, `nātiō` `/ˈnaː.tɪ.oː/` vs `/ˈna.tsi.o/`. The one lexical
exception in Ecclesiastical is `mihi`/`nihil`, where `h` is `/k/`.

The reader carries all four respelling matrices (dialect × stand-in) and tells you whether
your installed voice *matches* the pronunciation you picked; a mismatch still speaks but is
styled as a warning. Bug worth remembering: in the Ecclesiastical→Spanish set, a blanket
`h → ''` ran after `c → ch` and ate the digraph straight back out, so `caelum` was respelled
`celum` and a Spanish voice said `/selum/` instead of `/tʃelum/`. The h-strip must run after
Latin's own `ph`/`th`/`ch` are consumed but *before* any new `ch` is created.

**Reader pages do not load `audio.js`.** They have no vocabulary containers to attach to
and ship their own richer voice notice; loading it only duplicated the fallback banner.
`build_audio.py` skips any `*_reader.html`.

Note when testing playback: Chrome clamps nested `setTimeout` in a background tab, so a
harness that chains `onend` with a 5 ms delay will appear to stall after two chunks. It is
not a bug in the queue. Also, assigning a plain object to `utterance.voice` throws
`TypeError` — stubbing a voice requires shimming `SpeechSynthesisUtterance` too.

## Deferred

- Animated stroke order (SVG `stroke-dashoffset`). Mechanical but ~24 letters of
  path authoring.
- Pre-rendered audio (see 2).
- Quiz coverage: `status.md` claims quizzes in every lesson; only lessons 1–8 have any
  (15 questions total). Lessons 9–16 have none.
- Progress tracker on `index.html` is static `0 / 16` and unwired to localStorage.

### 2f. Japanese — converting `<canvas>` text into DOM

The SVG pass left 59 `<canvas>` elements untouched. Text painted with `ctx.fillText()`
has no DOM node, so no button can attach and no screen reader can see it.

**Why static parsing was not an option.** A regex over the source finds 297 `fillText`
calls and 84 Japanese strings. The real number is **1544 runs and 581 Japanese strings**:
the vocabulary lives in data arrays (`{kanji: '赤', hiragana: 'あか', …}`) iterated in
loops, and the coordinates are computed. The text only exists at runtime.

**So the drawing code is executed, not read.** `_tools/canvas_extract.js` runs each
script under `node:vm` against a recording 2D context (a Proxy: `fillText` and `fillRect`
record, `save`/`restore` keep a real state stack so `font`/`fillStyle`/`textAlign` are
correct at each call, every other method is a no-op). `_tools/jp_canvas_to_html.py` then
clusters the recorded runs into rows (y, tol 9) and columns (x, tol 34) and emits the same
`.jp-figure/.jp-grid/.jp-cell` markup as the SVG pass — so the course CSS and the audio
layer's `cellSelector: '.jp-cell'` already handle it, with no changes to `audio.js`.

This was only safe because all 58 drawing scripts are **draw-only**: no event listeners,
no other page logic. Each is deleted once every canvas it draws has been replaced.

**Judgement calls.**
- 58 canvases converted, **1 kept**: `mobileEvolutionCanvas` is a real illustration —
  16 `fillRect`s drawing phone bodies along a timeline, and zero Japanese. Five others
  looked like "drawings" to the row/column heuristic but are just positioned labels
  (the IME flow `"sushi" → すし → 寿司`; the あいうえお row), so they converted.
- Checked whether the colour panels paint swatches worth preserving. They do not — the
  rects are background bands. Nothing visual is lost.
- Decorative emoji (🍥, 💥) are drawn large and were being classed as headings. A heading
  now has to contain letters or kana (`WORDY`), not just symbols.

**Two pre-existing markup bugs surfaced and were fixed as a byproduct** (both inside the
regions being replaced):
- `media_immersion_mastery.html` closed a script as `</script
    </canvas>` — a missing
  `>`. Browsers forgive it (the rest parses as bogus attributes) so it never showed.
- `essential_vocab_romaji_reference.html` and `everyday_vocabulary_essentials.html` each
  had one unbalanced `</canvas>` (5 opens, 6 closes). Removed once their canvas was gone.

**Result:** Japanese buttons went from 465 to **1045**, audited live across all 17 pages —
0 non-Japanese strings spoken, 0 nested buttons, 1 canvas left, page overflow 0 px on
mobile. Native `ja-JP` voice (Microsoft Ayumi) confirmed speaking `赤` and `赤い` at 0.85.
The full 46-character hiragana chart is now real DOM text, one button per kana.

Originals: `japanese/backup_pre_canvas_conversion/` (16 files).

**Known, not addressed:** mermaid diagrams on `mastering_hiragana.html` render pale text
on pale boxes in dark mode. Pre-existing, unrelated to this conversion.

### 2g. Japanese — audio buttons inside the mermaid diagrams

The last Japanese text with no button lived in 26 of the course's 34
`<div class="mermaid">` blocks, across 14 pages. Mermaid renders each block to inline
SVG at runtime, and two facts make the obvious approaches wrong:

- Mermaid **replaces the div's innerHTML**, so anything placed inside the div before the
  render is destroyed. (This is the same trap that silently deleted content in the
  Tagalog course, where stray `</mermaid>` tags left divs open.)
- The render happens *after* audio.js's scan (`rescan: false`), and the label lands in a
  `<foreignObject>` that mermaid has already sized to the label's measured width, with
  `overflow: hidden`. A button appended afterwards is clipped.

**What was verified before choosing** (in the browser, not assumed): all 34 diagrams are
flowcharts (`graph TD/LR/TB`), and flowcharts default to `htmlLabels: true`. The rendered
page has 0 SVG `<text>` nodes and 22 `<foreignObject>` elements on
`japanese_writing_systems.html` alone — every label is real HTML. Mermaid sanitizes labels
with DOMPurify, which keeps `<button>` along with its `type`, `class`, `title`,
`aria-label` and `data-*` attributes (checked: all five survive).

**Chosen approach: bake the button into the diagram source, not the rendered DOM.** The
button becomes part of the label text mermaid parses, so mermaid measures the label with
the button already in it and grows the node to fit — no clipping, no re-layout, no
observer. Rejected the alternatives: click-to-speak handlers on SVG `<text>` nodes are
moot (there are no `<text>` nodes), and converting 26 diagrams to `.jp-figure` markup
would have thrown away the arrows, which are the point of the diagram.

**audio.js is unchanged, and `rescan` stays `false`.** It already accommodates this:
its click handler is delegated on `document`, so a button that only exists after mermaid's
render still speaks; `attachOptedIn()` skips elements that are themselves `.audio-btn`,
so it never nests a second button inside ours; and `html.no-tts-voice .audio-btn
{ display: none }` hides these with all the rest when no Japanese voice is installed.

New tool: `_tools/jp_mermaid_audio.py`. Idempotent, backs up before writing, and refuses
to guess — it `sys.exit`s if it ever meets Japanese in an edge label (`-->|...|`) or in a
`{rhombus}`/`(rounded)` node, neither of which occurs today.

Each label line (split on `<br/>`) is treated the way audio.js treats a table cell: a
line holding kana or kanji gets exactly one button, appended at the line's end, speaking
that line's Japanese runs joined — mirroring `extractTarget()`. Per-line rather than
per-label matters: `赤い、青い、黒い<br/>Add い for adjective` must not let the stray `い`
of the second line leak into the first line's utterance. Five drill labels in
`mastering_hiragana.html` space a word out one kana at a time (`あ り が と う`); a voice
reads those spaces as five syllables, so an `OVERRIDES` table rejoins the word in the
utterance only, exactly as `makeButton()` does.

**Result:** Japanese buttons went from 1045 to **1148** (+103), audited live across all 17
pages in light, dark, and at 375 px — 0 non-Japanese strings spoken, 0 nested buttons, 0
clipped buttons, page overflow 0 px. All 1148 buttons were clicked with
`speechSynthesis.speak` instrumented: 1148 utterances reached the engine, every one with
`lang: ja-JP`, voice `Microsoft Ayumi - Japanese (Japan)` (`ja-JP`), rate 0.85.

Originals: `japanese/backup_pre_mermaid_audio/` (17 files).

**Cost:** a button widens its diagram by 0–22% (worst: `everyday_vocabulary_essentials`
#1, 1186 → 1404 px). Nothing overflows, because mermaid scales the SVG to the container.

**Known, not addressed (both pre-existing, and both confirmed against untouched
diagrams):**
- Mermaid diagrams render pale text on pale boxes in dark mode — `mermaid.initialize`
  sets no theme. The buttons themselves stay legible; they are the *most* readable thing
  in a dark-mode node.
- Wide diagrams shrink to illegibility on a 375 px viewport: `japanese_advanced_tips` #2
  is a 2161 px SVG scaled to 240 px (0.11×), so its own text renders ~3 px tall. 12 of
  the 103 new buttons land in the three widest diagrams and are correspondingly tiny. An
  untouched diagram on the same page scales to 0.41×, and the un-buttoned source of the
  worst offender still scales to 0.20× — the cause is the diagram's natural width, not
  the buttons.

### 2h. Kapampangan — the whole layer, plus mermaid and canvas

`kapampangan` (7 pages, **331 buttons**: 275 page body, 40 mermaid, 16 canvas). The last
language course with no audio layer at all, and not previously in `build_audio.py`.

**Fallback voice: Spanish**, exactly as Tagalog. No Filipino voice ships anywhere; the
machine has `es-MX`/`es-ES`, so the layer resolves `fil` → `tl` → `es`, sets
`tts-fallback`, and shows the "Using a Spanish voice" banner. Kapampangan-tuned
`fallbackRules` rewrite the utterance only: `ng`→`nang`, `h`→`j` (Spanish `h` is silent),
`k`→`c` / `k(?=[ei])`→`qu` (Spanish spells /k/ as c/qu), `w`→`u`. Tagalog's `mga`→`manga`
is dropped — Kapampangan has no productive `mga`. Verified: the mermaid button
`i, ing, ning, king` reaches Microsoft Raul (es-MX) as `i, ing, ning, quing` at rate 0.85.
(`id-ID` Indonesian is also installed and is a closer Austronesian relative; kept Spanish
for consistency with Tagalog, per the user.)

**Detection is structural (`mode: "rules"`)** — Latin script, so no character-set signal;
Kapampangan and English share containers, told apart by position. The reliable lexical
rule is that a `<strong>`/`<h4>` ending in a colon is an English label. Selectors target
the `<strong>`/`<h4>`/`<em>`/quoted spans by construction (child combinators, e.g.
`.example-phrase > p > strong`, so an English `<li><strong>` is never reached). The hard
part was the mixed containers (`.transformation-demo`, `.pattern-demo`, `.sentence-builder`)
that hold Kapampangan examples beside English translations, word-by-word breakdowns, and
"Structure:"/"Focus" notes. Two gates, tuned by auditing every button:

- **reject_test** (what is never Kapampangan): a trailing colon (`Meaning:`); a leading
  `Word:` note (`Structure: ...`); a `+` (word-by-word breakdown); a `(` (any gloss,
  respelling, or breakdown aside — real spoken Kapampangan never contains one); a
  hyphen-joined ALL-CAPS respelling syllable (`AH-ma`, `ka-lu-GU-ran`; `Mag-aral` survives);
  and an English-stopword list (`the/is/this/how/focus/system/structure/love/…`). English
  translations sit in the same container as the target ("This sisig is delicious!" beside
  "Masarap yang sisig a iti!"); none of these tokens occurs in a Kapampangan utterance.
- **target_test** gates only the `quotes` pick (dialogue): PURE grammatical words
  (`ya|ka|ku|na|ing|ning|king|naman|pu|…`), no content words. An English term quoted
  inside prose (`the "focus system."`) carries none and is not voiced; a Kapampangan
  quotation reliably carries one. Content words like "sisig" are deliberately excluded —
  they recur in the English glosses.

One new pick was added to the shared template: **`directText`** (an element's own direct
text nodes only), so a dictionary headword `<h4>Ama <span class="difficulty-badge">…` reads
"Ama", not "Ama Essential". Additive; no other course uses it. A **non-clobbering CSS
alias** (`CSS_ALIAS_KAPAMPANGAN`) maps only the tokens the audio CSS needs — unlike the
Tagalog alias it leaves `--radius-sm`/`--shadow-sm` alone, which this course already
defines. `main.css` owns `[data-theme="dark"]`, so light/dark are automatic.

**Canvas — kept, not destroyed.** All five canvases are illustrations (a food table, an
emotion wheel, an elder teaching under a tree, a verb-morphology diagram, a festival), each
painted with a few Kapampangan labels via `fillText` — invisible to screen readers and the
audio layer. Rather than convert to a grid (as the Japanese *text-only* canvases were),
each text-bearing canvas keeps its drawing and gains a `<figcaption class="canvas-caption">`
naming its terms; each term is a `.kp-term` span the audio layer buttons, its gloss a
separate span that is never spoken. `festivalCanvas` is left alone (both its labels are
English). 16 caption buttons (food 3, wheel 6, proverb 1, verb forms 6). New tool:
`_tools/kapampangan_canvas_caption.py`. Bound morphemes (`mag-`, `-an`) are not voiced.

**Mermaid — 40 curated buttons.** Same source-baking as Japanese, but Latin script means no
automatic target/gloss split, so `_tools/kapampangan_mermaid_audio.py` carries a hand-built
per-diagram allow-list: which node speaks what Kapampangan. English structural labels (VSO,
"Case Markers"), place names (Pampanga, Bataan) and language names (Sambal, Ilocano) are
absent, so the two intro diagrams (geography, family tree) correctly get zero buttons.

**Two pre-existing bugs fixed first (user-approved), because a diagram that renders as a
mermaid "Syntax error" box has no Kapampangan to button:**

1. **`kapampangan_grammar.html` closed a `.mermaid` div with `</mermaid>` instead of
   `</div>`.** The browser ignores the unknown end tag, so the div stayed open and swallowed
   the entire "Case Marking Particles" section (the markers `i, ing, ning, king` and their
   example sentences `Datang i Juan.`, `Masarap ing sisig.`); mermaid then deleted that
   content on render, and the diagram itself errored. This is the same trap the Tagalog
   course hit. Fixed to `</div>`: the diagram parses **and** a whole lesson section that
   users never saw is restored (its Kapampangan is now buttoned by the page-body rules).
2. **`kapampangan_basics.html` diagram 1 used multiple quoted segments in one label**
   (`["Mag-aral ya i Juan" <br/> "Studies he Juan" <br/> Juan studies]`), which mermaid
   cannot parse — the whole word-order diagram was a "Syntax error" box. Each label rewritten
   as one quoted string in the shape diagram 6 already uses (`["KP<br/>(gloss)<br/>English"]`).

**`build_audio.py` gained an optional site-name filter** (`build_audio.py kapampangan`) so a
one-course change does not rewrite every other course's `audio.js`. Only `kapampangan/` was
touched; `japanese`, `tagalog`, etc. are byte-identical.

**Verification** (audited every button on all 7 pages, light / dark / 375 px, with
`speechSynthesis.speak` instrumented): 331 buttons, 331 utterances, **0 spoken strings that
are not Kapampangan**, 0 nested buttons, 0 clipped mermaid buttons, page overflow 0 px.
Every utterance reaches an `es-*` voice at rate 0.85 with the fallback transliteration
applied. Both repaired diagrams render; all 9 diagrams and all 5 canvases are covered
(diagrams 8–9 and `festivalCanvas` intentionally empty). The English-vs-Kapampangan
separation was tuned across several audit passes — the leaks it caught and closed were
`"this sisig is delicious!"`, a `"masarap (delicious) + …"` breakdown, `"Love"`,
`"focus system."`, and three `"structure: nung + …"` notes.

Originals: `kapampangan/backup_pre_audio/` (7 pages + main.css).

**Known, not addressed (pre-existing, unrelated to this layer):**
- Mermaid diagrams render pale-on-pale in dark mode (`mermaid.initialize` sets no theme) —
  same as every other course. The buttons themselves stay legible.
- `kapampangan_mastery_celebration.html` has ~5 px of horizontal overflow at 375 px, present
  with the audio buttons hidden too, so not from this work.
- The showcase dialogue on the mastery page is intentionally modern Kapampangan with English
  loanwords (`business`, `bridge`, `relationship`); those are voiced as written, as Taglish.
