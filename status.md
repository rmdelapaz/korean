# Korean Language Course — Project Status

**Project Path:** `\\wsl$\Ubuntu\home\practicalace\projects\korean`  
**Planned Netlify URL:** https://rays-korean.netlify.app  
**Last Updated:** April 14, 2026

---

## Site Structure

| File | Role | Status |
|------|------|--------|
| `index.html` | Homepage — card grid with 16 lesson links, progress tracker | ✅ Complete |
| `site-nav.js` | Shared JS — injects header, dark mode toggle, prev/next nav, quiz interactivity, footer | ✅ Complete |
| `styles/main.css` | CSS — based on course_template + Spanish-pattern index/nav styles | ✅ Complete |
| `js/` | Empty directory (not used — site uses site-nav.js in root instead) | ⚠️ Can be removed |
| `favicon.png` | Site icon | ❌ **Needs copy:** `cp ~/projects/course_template/favicon.png ~/projects/korean/` |
| `favicon.ico` | Site icon (fallback) | ❌ **Needs copy:** `cp ~/projects/course_template/favicon.ico ~/projects/korean/` |
| `.git` | Git repo | ✅ Initialized |

---

## Lessons (16 total — all complete)

| # | File | Title |
|---|------|-------|
| 1 | `korean_hangul_consonants.html` | Hangul Consonants |
| 2 | `korean_hangul_vowels.html` | Hangul Vowels & Syllable Blocks |
| 3 | `korean_pronunciation.html` | Pronunciation Rules |
| 4 | `korean_greetings_essentials.html` | Greetings & Essential Phrases |
| 5 | `korean_numbers_time_dates.html` | Numbers, Time & Dates |
| 6 | `korean_family_descriptions.html` | Family & Personal Descriptions |
| 7 | `korean_food_dining.html` | Food & Dining |
| 8 | `korean_shopping_money.html` | Shopping & Money |
| 9 | `korean_directions_transportation.html` | Directions & Transportation |
| 10 | `korean_health_body.html` | Health & Body |
| 11 | `korean_hobbies_daily_life.html` | Hobbies & Daily Life |
| 12 | `korean_work_education.html` | Work & Education |
| 13 | `korean_technology_communication.html` | Technology & Communication |
| 14 | `korean_weather_seasons.html` | Weather & Seasons |
| 15 | `korean_emotions_relationships.html` | Emotions & Relationships |
| 16 | `korean_travel_culture.html` | Travel & Korean Culture |

Each lesson includes: vocabulary tables (Korean + romanization + English), grammar notes, cultural insights (blockquote callouts), practice dialogues, and interactive quizzes.

---

## Site Features

| Feature | Status |
|---------|--------|
| Light/Dark Mode Toggle | ✅ Via site-nav.js, localStorage persistence, prefers-color-scheme fallback |
| Sticky Nav Header | ✅ Injected by site-nav.js with Korean flag emoji |
| Prev/Next Lesson Navigation | ✅ Injected by site-nav.js on all lesson pages |
| Footer with Ray's House of Fun + Contact | ✅ Injected by site-nav.js |
| Card Grid Homepage | ✅ Responsive grid with lesson cards, numbers, descriptions, topic tags |
| Progress Tracker | ✅ On index.html (static "0 / 16" — not wired to localStorage yet) |
| Interactive Quizzes | ✅ Quiz interactivity handled by site-nav.js |
| Cultural Notes | ✅ Blockquote callouts in each lesson |
| Vocabulary Tables | ✅ Comprehensive Korean/English tables in every lesson |
| Practice Dialogues | ✅ In most lessons |
| Mobile Responsive | ✅ Via CSS media queries |

---

## Rayhome Updates (April 14, 2026)

All three rayhome files updated to include Korean as site #67:

| File | Change |
|------|--------|
| `rayhome/index.html` | ✅ Added "Korean Language Course" link in Language Topics section |
| `rayhome/updates.html` | ✅ Added Korean entry to SITES array (dated 2026-04-14) |
| `rayhome/search.html` | ✅ Added Korean entry to INDEX array with 16 keyword tags |
| `rayhome/status.md` | ✅ Updated to 67 total sites, Korean in Languages (6 sites), new Recent Changes entry |

---

## Remaining Tasks

1. **Copy favicons from template:**
   ```bash
   cp ~/projects/course_template/favicon.png ~/projects/korean/
   cp ~/projects/course_template/favicon.ico ~/projects/korean/
   ```

2. **First git commit** (repo is initialized but likely no commits yet):
   ```bash
   cd ~/projects/korean
   git add .
   git commit -m "Initial commit: 16-lesson Korean language course"
   ```

3. **Deploy to Netlify:**
   - Create new site on Netlify
   - Set custom domain: `rays-korean.netlify.app`
   - Connect to git repo or drag-and-drop deploy

4. **Optional cleanup:**
   ```bash
   rmdir ~/projects/korean/js   # empty directory, not used
   ```

---

## Future Enhancements

- Wire progress tracker on index.html to localStorage (track visited lessons like course_template does)
- Add more practice dialogues and exercises to later lessons (10-16 are lighter on exercises)
- Add audio pronunciation hints or IPA notation
- Create a review/flashcard lesson
- Add Mermaid diagrams for grammar concepts (sentence structure, verb conjugation patterns)
- Add Korean keyboard input practice section

---

## Design Decisions

- **CSS:** Based on `course_template/styles/main.css` variable system with Spanish-pattern additions for index page (card grid, hero, progress tracker, site-header injection)
- **Nav pattern:** Uses `site-nav.js` (like Spanish, Kapampangan) rather than course_template's inline nav — simpler per-page HTML, single file to maintain
- **Color scheme:** Blue primary (`#3b82f6`) + rose accent (`#e11d48`) — inspired by Korean flag colors
- **Content approach:** Each lesson has vocab tables, grammar notes, cultural insights, practice dialogues, and quizzes
- **Lesson order:** Hangul first (lessons 1-3), then practical conversation topics (4-16), building from basics to advanced

---

## WSL Path Note
- **Works:** `\\wsl$\Ubuntu\home\practicalace\projects\korean`
- **Does NOT work:** `\\wsl.localhost\Ubuntu\...`
