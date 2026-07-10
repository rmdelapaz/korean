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

## Deferred

- Animated stroke order (SVG `stroke-dashoffset`). Mechanical but ~24 letters of
  path authoring.
- Pre-rendered audio (see 2).
- Quiz coverage: `status.md` claims quizzes in every lesson; only lessons 1–8 have any
  (15 questions total). Lessons 9–16 have none.
- Progress tracker on `index.html` is static `0 / 16` and unwired to localStorage.
