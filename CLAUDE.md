# Exploring Interactions — Project Context

## Deployment
- **Live:** https://explorations.ankeriemer.de
- **Hosting:** GitHub Pages (repo: EnidKapelsen/explorations)
- **Branch:** main, root `/`
- **DNS:** 4x A-Records bei United Domains → GitHub Pages IPs
- **HTTPS:** aktiv (Let's Encrypt via GitHub)

## Struktur
- Statisches HTML/CSS/JS Portfolio, keine Build-Tools
- 6 Projektseiten in `projects/`, verlinkt von `index.html`
- Fonts: ABC Repro Variable (.woff2/.woff) in `ABC Repro/`
- Medien in `media/projects/[Projektname]/`

## Wichtig
- **Case sensitivity:** Ordner heisst `Dance the beat` (klein b) — GitHub Pages ist Linux (case-sensitive)
- **Pfade mit Leerzeichen:** In og:meta-Tags URL-encoded, in HTML src normal
- **.gitignore:** Schliesst ~720 MB Quelldateien aus (NEF, PSD, MOV, heic, große Videos). Root-Screenshots excluded, Projekt-Screenshots nicht
- **Backup:** `portfolio_v2_backup_20260312` im Projekte-Ordner (823 MB, vor Deployment)

## Projekt-Reihenfolge (Next-Navigation)
1. Compliment Smackdown → 2. Badeschluss → 3. Artist is not Present → 4. Memory Leaks → 5. Reading Experiment → 6. Dance the Beat → (loop)
