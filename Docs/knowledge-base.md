# Knowledge Base

Hier werden gelöste Probleme und Learnings dokumentiert.

## Probleme & Lösungen
- **NPM Execution Policy (Windows):** Das Ausführen von `npm` Befehlen in der PowerShell kann durch die Execution Policy blockiert werden. **Lösung:** Befehle via `cmd /c npm <command>` ausführen, um die PowerShell-Restriktionen zu umgehen.

## Learnings
- **Horizontale Scroll-Layouts für Sequenzen:** Bei der Visualisierung langer linearer Strukturen (wie einer 35m Hecke) bietet ein horizontal scrollbarer Bereich mit einer fixen "Boden"-Referenz (Garden Bed) und einer Meterskala die beste UX. **Wichtig:** Die vertikale Höhe muss kompakt gehalten werden (~200px), um übermäßigen Weißraum zu vermeiden, und Labels sollten außerhalb von Hintergrundelementen (wie dem braunen Beet-Streifen) platziert werden, um die Lesbarkeit zu gewährleisten.
- **Modern UI Patterns (Nature projects):** Für ökologische oder Natur-Projekte empfiehlt sich ein "Nature Green + Solar Gold" Farbschema (z.B. `#059669` und `#FBBF24`). Die Verwendung von Glassmorphism (`backdrop-filter: blur`) verleiht der Seite eine moderne Tiefe, ohne die organische Anmutung zu stören. SVG-Icons (z.B. Lucide-React) sollten Emojis immer vorgezogen werden, um einen professionellen Look zu garantieren.
- **Visuelle Hinweise bei Interaktivität:** Wenn Elemente (wie Pflanzenkarten) anklickbar sind, reicht ein bloßer Text im Header oft nicht aus. Ein deutlicher "Info-Badge" mit Animation (z.B. `pulse`), ein passendes Icon (z.B. `ExternalLink`) und Hover-Effekte (z.B. Erscheinen eines "Details"-Hinweises) erhöhen die Click-Through-Rate und die Nutzerführung erheblich.
