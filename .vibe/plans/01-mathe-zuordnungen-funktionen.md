---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Written by `lernapps plan` and the hooks. Never change a key or a value by hand.
# Archetype, null until chosen in Explore. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit.
phase: code
# prePushFailures: failed pre-push runs, written by the hook.
prePushFailures: 0
# failedChecks: failed rules and runs, written by lernapps check and the hooks.
failedChecks: {}
---

# Plan: mathe-zuordnungen-funktionen, first version

<!--
For you, the assistant. The process is in AGENTS.md; this plan holds the method.
- `npx --no -- lernapps plan next` prints the task to do now, `plan done` ticks it and prints the next one.
- You write only below Goal, Key decisions, Notes, Answers, Entry draft, Content method and Retrospective, in the
  creator's language. Delete the comment of a section once the section is filled.
- Work on the branch `work`, locally: push nothing before Commit.
-->

*Started 2026-11-23. Explore, Plan, Code, Commit.*

## Goal

Lernende (Stufen 5-6 und 7-8) erkunden, wie eine Größe von einer anderen abhängt: Sie stellen Zuordnungen als Term, Tabelle und
Graph dar (Dreifachansicht mit Schiebereglern), erkennen proportionale und antiproportionale Zuordnungen, stellen
Geradengleichungen auf und lösen lineare Gleichungssysteme grafisch und rechnerisch. Auftrag: lernapps/apps#395,
Schicht 3, Tiefe 5 des Mathe-Epics (#402).

## Key decisions

- Archetyp `explainer`, Format 2, `strand: mathematik/algebra`: Seiten erklären und üben abwechselnd; vorgegeben von Issue 395.
- Tragende Darstellung: Dreifachansicht Term – Tabelle – Graph als Vue-Komponente mit Schiebereglern (m, b), mit
  statischer Form (Bild + Tabelle + Text) für Lesende ohne JavaScript; Regler per Tastatur bedienbar (Pfeiltasten) und
  mit Textalternative, die Term, Tabelle und Graph in Worten wiedergibt. Grund: Issue und Überblick #402; ein Block kann das nicht.
- Sammel-Wiederholungen (Regeln Abschnitt 7) als normale Seiten mit Text, Definition, Beispiel und Selbsttest, weil der
  Block `recap` keine Aufgaben hat (Regeln 7.6; Fund fürs Werkzeug, siehe Notes).
- Zahlengerade (nicht Zahlenstrahl) auf allen Seiten ab Kapitel 2, weil negative Zahlen und vier Quadranten vorkommen;
  Kapitel 1 nutzt nur nicht-negative Zahlen und sagt „Zahlenstrahl“ (Regeln Abschnitt 2).
- Schreibweisen nach Regeln Abschnitt 2 (Komma, −, ·, :, geschütztes Leerzeichen); Funktionsterme als Formel gesetzt.
- Keine externen Links, keine Dritt-Inhalte; Bilder als SVG im Explainer.

## Notes

**Strang:** `mathematik/algebra` (Karte `https://lernapps.net/apps/map/mathematik.json`, gelesen; `explainerFocus: strand`). Die elf Bausteine
stehen alle im Strang `algebra`, keiner ist heute von einer App geübt (`practisedBy` leer). Karte, Regeln und Issue
reichen; Lehrplan nicht nötig (App mit Strang). Quellen geöffnet: nur die Karte (JSON), Issue 395, Regeln, Anweisung. Keine
zweiten Quellen; Fakten (Dreisatz, Steigung, Gleichungssysteme) leite ich selbst her und rechne sie nach.

**Kompetenzen je Kapitel** (id · Name der Karte · Stufe/Schritt · requires):

| Kap. | id | Name (Karte) | Stufe·Schritt | requires |
|---|---|---|---|---|
| 1 | `dreisatz` | Dreisatz | 5-6·4 | grundrechenarten-rechengesetze, messen-laenge-masse-geld-zeit (beide von außen) |
| 1 | `massstab` | Maßstab | 5-6·5 | dreisatz, umrechnung-groessen (von außen) |
| 2 | `zuordnungen` | Zuordnungen | 7-8·1 | koordinatensystem (von außen) |
| 2 | `proportionale-zuordnungen` | Proportionale Zuordnungen | 7-8·2 | zuordnungen, dreisatz |
| 2 | `antiproportionale-zuordnungen` | Antiproportionale Zuordnungen | 7-8·2 | zuordnungen, dreisatz |
| 3 | `funktionsbegriff` | Funktionsbegriff | 7-8·2 | zuordnungen |
| 3 | `funktionen-darstellung` | Darstellungen von Funktionen | 7-8·3 | funktionsbegriff |
| 4 | `lineare-funktionen` | Lineare Funktionen | 7-8·4 | proportionale-zuordnungen, funktionen-darstellung |
| 4 | `geradengleichungen` | Geradengleichungen | 7-8·5 | lineare-funktionen, lineare-gleichungen (von außen) |
| 5 | `lineare-gleichungssysteme` | Lineare Gleichungssysteme: grafisch | 7-8·5 | lineare-gleichungen (von außen), lineare-funktionen |
| 5 | `lgs-rechnerisch` | Lineare Gleichungssysteme: rechnerisch | 7-8·6 | lineare-gleichungssysteme |

Von außen (Recap, Regeln Abschnitt 7): Kapitel 1 `grundrechenarten-rechengesetze`, `messen-laenge-masse-geld-zeit`, `umrechnung-groessen`;
Kapitel 2 `koordinatensystem`; Kapitel 4 `lineare-gleichungen` (gilt auch für Kapitel 5). Abhängigkeiten laut Auftrag: #385, #393, #397, #398 (veröffentlicht vor mir).

**Seitenzuschnitt (Entwurf, ein Baustein je Seite, große Bausteine auf mehreren Seiten):**
- K1: `das-brauchst-du` (Recap) · `dreisatz-pfeile`, `dreisatz-ueber-eins` · `massstab-rechnen`, `massstab-zeichnung`
- K2: `das-brauchst-du` (Recap Koordinatensystem) · `zuordnungen-darstellen` · `proportional-erkennen`, `proportional-rechnen` · `antiproportional`, `proportional-oder-anti`
- K3: `funktion-begriff`, `keine-funktion` · `vier-quadranten`, `situation-tabelle-graph`, `graph-term-wechseln`
- K4: `das-brauchst-du` (Recap lineare Gleichungen) · `m-und-b` (Regler), `steigung-deuten` · `gerade-zwei-punkte`, `gerade-punkt-steigung`, `nullstelle-schnittpunkt`
- K5: `lgs-zwei-geraden`, `lgs-loesungszahl` · `lgs-gleichsetzen`, `lgs-einsetzen`, `lgs-addieren`, `lgs-deuten`
Die Zahl der Seiten kann sich im Plan ändern; Pflicht bleibt: jeder der 11 Bausteine hat mindestens 3 Aufgaben.

**Wie Lernende dorthin kommen (eine Zeile je Baustein; Fehlvorstellung, die die Rückmeldung fängt):**
- `dreisatz`: Sie ergänzen eine Pfeiltabelle (·3 links, ·3 rechts) und gehen über die Einheit; Fehler: Differenz statt Faktor („+2 links, also +2 rechts“), verkehrte Richtung.
- `massstab`: Sie messen auf einem gezeichneten Plan und rechnen mit Tabelle um; Fehler: Maßstab 1 : 500 als „mal 500 Meter“ lesen (Einheit cm→m vergessen), Verhältnis umgekehrt.
- `zuordnungen`: Sie lesen und erzeugen Tabelle, Graph, Wortbeschreibung derselben Zuordnung; Fehler: Graph als Bild des Weges lesen, Punkte verbinden, wo es nur Einzelwerte gibt.
- `proportionale-zuordnungen`: Sie bestimmen den Faktor k = y : x aus der Tabelle und zeichnen Gerade durch den Ursprung; Fehler: „Je mehr, desto mehr“ ist schon proportional (auch +2 +2).
- `antiproportionale-zuordnungen`: Sie finden gleiche Produkte (Rechtecke gleicher Fläche) und rechnen mit x · y = c; Fehler: „je mehr, desto weniger“ immer antiproportional (zum Beispiel Preis − Gutschein), Dreisatz in der falschen Richtung.
- `funktionsbegriff`: Sie prüfen Zuordnungen auf Eindeutigkeit (ein x, zwei y), nennen Definitions- und Wertemenge; Fehler: Funktion mit Rechenvorschrift verwechseln, Umkehrung ist auch Funktion.
- `funktionen-darstellung`: Sie wechseln zwischen Situation, Wertetabelle, Graph und Term (Füllgraphen, Weg-Zeit); Fehler: Weg-Zeit-Graph als Landkarte, Wertetabelle mit vertauschten Spalten.
- `lineare-funktionen`: Sie verändern m und b am Regler und sehen Term, Tabelle, Graph ändern sich; Fehler: m und b vertauscht, b als „Steigung“, negatives m als „fällt nicht“.
- `geradengleichungen`: Sie zeichnen ein Steigungsdreieck, stellen y = m·x + b aus zwei Punkten oder aus Punkt und Steigung auf, berechnen Nullstelle und Schnittpunkt; Fehler: m = Δx : Δy, Vorzeichen von b, Nullstelle mit b verwechselt.
- `lineare-gleichungssysteme`: Sie lesen den Schnittpunkt zweier Tarif-Geraden ab, grenzen in der Tabelle ein und sagen, wie viele Lösungen es gibt (0, 1, ∞); Fehler: Schnittpunkt als nur x-Wert nennen, parallele Geraden „keine Lösung“ nicht erkennen.
- `lgs-rechnerisch`: Sie lösen mit Gleichsetzen, Einsetzen, Addieren und prüfen mit der Probe; Fehler: Klammer beim Einsetzen vergessen, nur ein Wert bestimmt, beim Addieren nur eine Seite multipliziert.

**Übung nach Muster** (aus `references/mathematics.md`): `generated` mit Zufallszahlen und `mistakes` für Rechenaufgaben (Dreisatz, Maßstab, Faktor, Gleichung, Gleichungssystem); `number`, `single-choice`, `true-false` für Erkennen (proportional oder nicht, Funktion oder nicht); `matching` für Situation–Graph; Komponente `Dreifachansicht` mit Reglern zum Erkunden und ein Komponenten-Übungsblock „Gerade durch zwei Punkte ziehen“ später. Tabellen mit Pfeilen als `table` plus `image` (SVG).

**Scope:** in: Kapitel 1 bis 5 des Issues; Dezimalzahlen mit Komma; Definitionsmenge ℚ oder Intervall nur genannt, nicht vertieft; vier Quadranten (Zahlengerade-Konventionen laut #768, Annahme). Aus: quadratische/andere Funktionen (#396), Ähnlichkeit (#399), Termumformung (#393), Gleichungssysteme mit drei Variablen, nichtlineare Systeme, Funktionsscharen. Daten: Zahlen ganz oder mit höchstens zwei Dezimalstellen; Preise in ganzen Cent; keine Bruchzahlen als Steigung außer 1/2 (gesetzt als Bruch) in Aufgaben. Sprache: Deutsch.

**Funde fürs Werkzeug (an den Orchestrator):**
1. `init`-Befehl wurde im Auto-Modus abgelehnt, obwohl die Allow-Regel in `.claude/settings.json` steht.
2. Block/Seitentyp `recap` kann keine Aufgaben („no exercise, not even a short one“); Regeln Abschnitt 7 verlangt Selbsttest je Baustein mit Rückmeldung. Lösung hier: Recap als normale Seite oder `recap`-Seite mit Selbstcheck im Text; wird mit `lernapps check` geprüft, Befund folgt.
3. `recap` zeigt nur Karten-Sätze: Fachbegriffe erklären und Glossar gehen nur mit normalen Blöcken (`definition`, `example`).

## Explore

<!--
- Find out what the app teaches, for whom, how much and how it looks. Ask; write no code, run no `create`.
- An answer counts only in the creator's words under "Answers". At most 2 questions per message, one topic each.
-->

### Tasks

- [x] Check the start: the folder `.agents/skills/lernapps-app` exists (else stop and tell the creator that the folder
      was not started with `init`), and `git branch --show-current` prints `work` (else `git switch -c work`).
- [x] Load skill `lernapps-app`. Tell the creator in two sentences what a lernapps app is and where it will live: at
      their own address, free and public, and once listed as a copy on lernapps.net. Say that the technical part
      (GitHub) comes at the end and that you do it.
- [x] Interview: ask the topics "Goal" and "Learners" of "Answers".
- [x] Load skill `lernapps-map-assignment` and read the learning map of the subject as it says. The creator brings
      the content themselves (material, a word list, the pages): note under "Notes" which competencies of the map it
      covers. Else write the skill's assignment, with its story; the creator's yes answers the topics Content and
      Amount. A subject without a map: skip this task and say so.
- [x] Load skill `lernapps-exercise-patterns` and read its reference for the subject. Note under "Notes" how learners
      will practise what the goal names.
- [x] Choose the archetype as skill `lernapps-app` says: read the README of each archetype in question, then tell the
      creator in plain words what the chosen one can and cannot do. Write the archetype and its reason under "Key
      decisions".
- [x] Run `npx --no -- lernapps skills --archetype <name>` with the chosen archetype. It installs the archetype's
      skills and adds the archetype's tasks to this plan.
- [x] Load skill `lernapps-explainer-design`. An explainer has the look of the runtime: write "fixed by the
      archetype" under the topic "Look and feel" of "Answers".
- [x] Interview: ask every other topic of "Answers", in order. Leave out only a topic that an answer of the creator
      already covers, and note which answer. A topic nobody answered is asked once before you write an assumption
      with "(guess)".
- [x] Load skill `lernapps-content-research` and research as it says. Write under "Notes": the strand or subject, the
      competencies by chapter with their ids, the sources you opened.
- [x] Write under "Notes" which competency goes on which page and which pages form a chapter, as "Map the content" of
      skill `lernapps-explainer-design` says. Per page, name the prerequisites the app does not practise.
- [x] Write under "Notes", one line per competency: how learners get there (they derive it, they do not only read it
      off), and which misconception the feedback catches.
- [x] Write under "Notes" the scope: what is in, what is out and why, the data range (for example "all main-group
      elements", never a silent "1–20"), the languages.
- [x] **Checkpoint:** research. Show in plain words: the strand or why none, the competencies by chapter, the didactic
      approach, the scope, every "(guess)", the sources and what is unchecked, the archetype and its reason. Stop and
      wait. Changes: change them, then ask again.
      Creator: Orchestrator in Vertretung des Menschen: Recherche freigegeben, weiter mit dem Plan; Musterseite begründen, Lernenden-Prüfer Klasse 8 vorher

### Answers

<!-- The interview: per topic the creator's answer, in their words. Keep the topics. -->

Antworten des Orchestrators in Vertretung des Menschen (Auftrag und Issue lernapps/apps#395; noch keine eigenen Antworten des Menschen).

- Goal: „Ich verstehe, wie eine Größe von einer anderen abhängt, kann das in Tabelle, Graph und Term darstellen und Gleichungen und Gleichungssysteme grafisch und rechnerisch lösen.“ (Issue 395, Leitidee)
- Learners: Mathematik, Stufen 5-6 (Kapitel 1) und 7-8 (Kapitel 2 bis 5), Hessen (Annahme laut Regeln Abschnitt 2). Vorwissen von außen: Vorrangregeln und Rechengesetze, Länge/Masse/Geld/Zeit, Einheiten umrechnen, Koordinatensystem (erster Quadrant), lineare Gleichungen.
- Model and focus: Format 2 mit Strang `mathematik/algebra`; Schwerpunkt Dreifachansicht Term – Tabelle – Graph mit Schiebereglern, danach Übungen mit sofortiger Rückmeldung (Regeln Abschnitt 3).
- Hurdles: (Issue) Wer links verdoppelt, verdoppelt rechts; proportional heißt Gerade durch den Ursprung, antiproportional heißt Produkt bleibt gleich; ein x mit zwei y ist keine Funktion; m dreht, b verschiebt; Schnittpunkt als Tarif-Wechsel. Typische Fehler (Dreisatz mit falscher Richtung, Steigung als Δx : Δy, b mit Nullstelle verwechselt, Einsetzen ohne Klammer) hängen an den Aufgaben als `mistakes`.
- Content: ich schreibe es selbst nach Issue, Regeln und Karte; kein eigenes Material des Menschen.
- Amount: alle 11 Bausteine des Issues, 5 Kapitel, jeder Baustein mit mindestens 3 Aufgaben steigender Schwierigkeit.
- Languages: Deutsch (englische Seiten: keine, nicht verlangt).
- Look and feel: fixed by the archetype (ruhig wie ein Arbeitsblatt, Look der Laufzeit; kein Spiel, kein Punktestand; Dunkelmodus folgt dem Gerät).
- Terms: die Wörter der Karte (Dreisatz, Maßstab, Zuordnung, proportional, antiproportional, Funktion, Steigung m, y-Achsenabschnitt b, Gleichungssystem); „Zahlengerade“ ab Kapitel 2, „Zahlenstrahl“ in Kapitel 1.
- Finding the app: „Zuordnungen“, „lineare Funktionen“, „Dreisatz“, „Gleichungssysteme“, „Maßstab“, „Geradengleichung“, „Schnittpunkt“.

## Plan

<!--
- Map the confirmed content onto the archetype. No new content questions: a gap in the content goes back to Explore.
- The creator confirms the plan in one read. After the yes you work on your own.
-->

### Tasks

- [x] Map the content as "Map the content" of skill `lernapps-explainer-design` says, and write the result under
      "Content method".
- [x] Choose a pattern per competency as skill `lernapps-exercise-patterns` says, and add it to "Content method".
- [x] Add to "Content method" one line per page, as "Engagement" of skill `lernapps-explainer-design` says: the
      opening task, the change of activity, the reward, the story.
- [x] Add the tasks of Code, each one a piece of work that ends in a commit. First the pattern: one complete page or
      screen, `npx --no -- lernapps plan add --at pattern "<task>"`. Then the others, one call each:
      `npx --no -- lernapps plan add --at pages "<task>"`. Each task says what it builds and what it shows.
- [x] Draw a sketch of each screen, component or interactive exercise: a static SVG or image, or the steps with what
      learners see after each. Keep the files in `.vibe/sketches/`.
- [x] Show the creator, short: goal, competencies by chapter, the Code tasks, the sketches, and the content method in
      plain words (what learners see and do, what the app cannot do). At most 2 questions.
- [x] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes: change
      them, then ask again.
      Creator: Orchestrator in Vertretung: Plan und Content method bestätigt, weiter mit Code; Kurztest aus /tmp/epic kopieren

### Content method

<!-- One line each: the patterns and where; the figures and how they are made; the data files; each component, what it
checks and what it cannot; how a later agent adds a chapter. It becomes the content guide in Code. -->
<!-- An explainer: per figure, model and component its learning action in two to four sentences
(`explainer-representation-explained`); per page its prerequisites the app does not practise, and which get a recap
page, which a link. -->

**Geschichte (Szenen, keine Personen nötig):** Wiederkehrende Fälle (Issue): Handytarife, Taxifahrten, Füllen eines Beckens. K1 (5-6): kurze Szenen mit
erfundenen Kindern (Mia, Ben, Elif, Jonas; gemischt, ohne Marken), „Klassenfahrt-Stadtplan“. K2 bis K5 (7-8): Situation als
kurze Nachrichten oder Fallbeschreibung, Bilder nur wo sie etwas zeigen. Erzählfaden: Eine Klasse plant eine Klassenfahrt und
vergleicht Tarife (Handyvertrag, Taxi, Schwimmbad-Eintritt); die Schlussseite K5 löst die Tarif-Frage. Namen, Alter, Orte stehen einmal im Inhaltsleitfaden.

**Muster je Kompetenz (Name · Art · Form · Beispiel):**
1. *Pfeiltabelle* · berechnen/zuordnen · `table` + SVG-`image` mit Pfeilen (·k links, ·k rechts) · „3 Hefte kosten 4,50 €, ergänze“ · `generated` mit Mistake „+ statt ·“.
2. *Messen am Plan* · berechnen · SVG-Plan mit Maßstabsleiste (`image`), Strecke in cm gegeben, `generated` Wirklichkeit/Karte, Mistake „Einheit nicht umgerechnet“.
3. *Dreifachansicht* · lesen/deuten · Komponente `Dreifachansicht` (Regler, Tabelle, Graph, Term, Textalternative) + `nojs` mit Tabelle und Beschreibung.
4. *Erkennen* (proportional, antiproportional, Funktion) · beurteilen · `true-false`, `single-choice` mit `info` je Option, `matching` Situation–Graph.
5. *Herleiten* (Faktor, Steigung) · berechnen · `generated` mit Rechenweg in `steps`, `mistakes` je typischem Fehler.
6. *Aufstellen* (Geradengleichung, LGS) · berechnen · `generated` mit Zahlen aus der Aufgabe, Ergebnis als `number` je Teil, Probe im Test.
7. *Selbsttest im Recap* · Komponente `Kurztest` (Anzeige, kein Prüfen-Block): 1–2 Kurzaufgaben mit sofortiger Rückmeldung, Komma und Punkt, nojs-Text mit Lösungen.

**Komponenten (Begründung nach `prefer-built-in-block`):**
- `Dreifachansicht` (`.vue`, `.ts`, Test): zeigt eine Zuordnung zugleich als Term, Wertetabelle und Graph; Regler für *k* (proportional) bzw. *m* und *b* (linear); jede Änderung wirkt in allen drei Ansichten. Kein Block kann das. Regler sind `<input type="range">` mit Beschriftung, Pfeiltasten, `aria-valuetext`; ein `aria-live`-Satz fasst Term, Tabellenwerte und Graph in Worten zusammen („Die Gerade steigt: pro 1 nach rechts 2 nach oben und schneidet die y-Achse bei 1“). Graph: SVG mit Achsen, Gitter, Zahlengerade-Beschriftung, vier Quadranten ab Kapitel 3. Die Logik (Wertetabelle, Term als Text, Beschreibung) steht in `Dreifachansicht.ts` und wird getestet. Sie zeigt nichts, was eine Aufgabe löst.
- `Kurztest`: `recap` erlaubt keine Aufgaben, Regeln §7 verlangt Selbsttest. Eigenentwicklung (nicht von `mathe-saetze-entdecken` kopiert: Auftrag „liest deren Apps nicht“, das Repo gehört nicht zu meinem Zugriff).
- Weitere Komponenten nur nach Bedarf (Plan ergänzen). Zeichnen einer Geraden per Ziehen ist nicht geplant.

**Engagement je Seite (Eröffnung · Wechsel · Belohnung · Geschichte):** Jede Seite beginnt mit einer leichten Handlung (Tabelle ergänzen, Regler verschieben, Aussage beurteilen) vor der Erklärung; danach wechseln Ansehen, Tun, Lesen; höchstens 4 Textblöcke in Folge; jedes Kapitel endet mit einem Rückblick („Das kannst du jetzt“, Checkliste aus den Ich-kann-Sätzen) und der nächsten Frage der Geschichte. Abschnitts-ids auf allen Seiten gleich: `einstieg`, `erklaerung`, `beispiel`, `uebung`.

**Voraussetzungen von außen je Seite (Recap):** K1-Recap (`recap: [arithmetik/grundrechenarten-rechengesetze, groessen-und-messen/messen-laenge-masse-geld-zeit, groessen-und-messen/umrechnung-groessen]`) vor `dreisatz-pfeile`; K2-Recap `geometrie/koordinatensystem` vor `zuordnungen-darstellen`; K4-Recap `algebra/lineare-gleichungen` vor `geradengleichungen` (K5 nennt es im Text mit Link auf die Kartenseite). Fachbegriffe fett mit Beispiel und im Glossar (Regeln §7.2): Distributivgesetz, Klammer, Einheit, Umrechnungszahl, Koordinaten, x-/y-Achse, Gleichung, Lösung, Äquivalenzumformung.

**Seiten: Eröffnung · Wechsel · Belohnung · Geschichte** (Reihenfolge der Kapitel; Recap = `recap:` mit `Kurztest`):
- K1 Recap · Kurztest zuerst („Kannst du das?“) · Begriff, Beispiel, Kurztest je Baustein · Checkliste „Du bist bereit, wenn du …“ · Klasse plant Fahrt.
- `dreisatz-pfeile` · Tabelle ergänzen (Hefte, Preis), eine Zeile fehlt · Tabelle, Pfeile, Rechnen · du kannst „links mal 3 = rechts mal 3“ · Mia kauft Hefte.
- `dreisatz-ueber-eins` · „Was kostet 1 Heft?“ · Pfeil nach 1, dann Pfeil nach n · Dreisatz in drei Zeilen · Ben füllt ein Becken.
- `massstab-rechnen` · Strecke auf dem Plan messen (gegeben) · Maßstabsleiste, Tabelle Karte–Wirklichkeit · Weg in Metern · Weg zur Haltestelle.
- `massstab-zeichnung` · Zeichnung im Maßstab 1 : 50 lesen · Verkleinern, Vergrößern, Maßstab bestimmen · Zimmerplan · Elif zeichnet das Klassenzimmer.
- K2 Recap · Punkt im Koordinatensystem ablesen · Begriffe Achse, Koordinaten · Checkliste · Tarife kommen ins Spiel.
- `zuordnungen-darstellen` · Tabelle zur Wortbeschreibung passen · Tabelle, Graph, Wörter · du wechselst zwischen den drei · Taxi: Fahrpreis.
- `proportional-erkennen` (Muster) · Regler *k* bewegen: Was bleibt gleich? · Pfeiltabelle, Dreifachansicht, Merke · Gerade durch den Ursprung · Handy: Minutenpreis.
- `proportional-rechnen` · Preis für 7 Minuten ausrechnen · Faktor, Dreisatz über Faktor · Proportionalitätsfaktor · Taxi pro km.
- `antiproportional` · Rechtecke mit gleicher Fläche legen · Produkt bleibt gleich, Tabelle, Graph · *x* · *y* = *c* · Becken: mehr Pumpen, weniger Zeit.
- `proportional-oder-anti` · Drei Tabellen sortieren · Entscheidungsfragen · du erkennst, welche Zuordnung vorliegt · Schwimmbad.
- K3 `funktion-begriff` · Pfeildiagramm: Eindeutigkeit prüfen · Definition, Beispiele, Merke · du erklärst Funktion in einem Satz · Fahrpreis.
- `keine-funktion` · Zuordnung finden, die keine Funktion ist · Definitions-/Wertemenge, Gegenbeispiele · Funktion ja/nein begründet · Telefonnummern.
- `vier-quadranten` · Punkt mit negativen Koordinaten setzen · Zahlengerade zum Koordinatensystem erweitern · alle vier Quadranten lesen · Temperatur-Zeit.
- `situation-tabelle-graph` · Füllgraph zu Gefäß passen · Situation, Tabelle, Graph, Wörter · Wechsel zwischen den vier Ansichten · Becken füllen.
- `graph-term-wechseln` · Wertetabelle zum Term ergänzen · Term → Tabelle → Graph (Regler) · du wechselst beliebig · Taxi-Term.
- K4 Recap · Gleichung lösen, Probe machen · Begriffe Lösung, Äquivalenzumformung · Checkliste · Tarif-Frage kommt näher.
- `m-und-b` · Regler *m*, *b* bewegen: Was dreht, was verschiebt? · Dreifachansicht, Merke · du deutest *m* und *b* · Handytarif: Grundpreis und Minutenpreis.
- `steigung-deuten` · Steigungsdreieck ablesen · negative Steigung, Sachbezug · *m* in Worten · Becken leert sich.
- `gerade-zwei-punkte` · zwei Punkte in der Dreifachansicht, Gerade ziehen · Steigung aus Δ*y* : Δ*x*, *b* bestimmen · *y* = *m*·*x* + *b* aufstellen · Tarif aus zwei Messwerten.
- `gerade-punkt-steigung` · ein Punkt und *m* gegeben · Einsetzen und *b* bestimmen · Gleichung aus Punkt und Steigung · Taxi.
- `nullstelle-schnittpunkt` · Wo schneidet die Gerade die *x*-Achse? · Nullstelle, Schnittpunkt zweier Geraden berechnen · Nullstelle und Schnittpunkt · Wo ist der Tarif 0?
- K5 `lgs-zwei-geraden` · zwei Tarife im selben Koordinatensystem · Schnittpunkt ablesen, Tabelle eingrenzen · Tarif-Wechsel finden · Handytarif A gegen B.
- `lgs-loesungszahl` · Parallele Geraden erkennen · 0, 1 oder unendlich viele Lösungen · du sagst, wie viele Lösungen · Taxi A gegen Taxi B.
- `lgs-gleichsetzen` · Beide Terme gleichsetzen: „Wann kosten sie gleich viel?“ · Rechenweg zeilenweise · Gleichsetzungsverfahren · Tarif-Wechsel genau.
- `lgs-einsetzen` · Eine Gleichung nach *y* auflösen · Einsetzen, Probe · Einsetzungsverfahren · Preise von Eis und Getränk.
- `lgs-addieren` · Gleichungen untereinander addieren · Multiplizieren zum Ausgleichen · Additionsverfahren · Eintrittspreise Kinder/Erwachsene.
- `lgs-deuten` · Lösung im Sachzusammenhang sagen · drei Wege vergleichen · Entscheidung treffen · Die Klasse wählt den Tarif.

**Musterseite:** `zuordnungen/proportional-erkennen` (K2). Begründung: Sie trägt alles Neue zugleich: Pfeiltabelle, Dreifachansicht mit Regler (k), Gerade durch den Ursprung, die Fehlvorstellung „je mehr, desto mehr“, die Aufgabentypen `true-false`, `single-choice`, `generated`. Alle weiteren Seiten übernehmen daraus Aufbau und Komponente. K1 braucht nur Tabelle und Pfeile.

**Abhängigkeiten (Veröffentlichen erst nach):** #385, #393, #397, #398 (laut Auftrag); #396 und #399 bauen auf diesem Explainer auf.

**Baustein → Seite (Pflicht: je mindestens 3 Aufgaben):** `dreisatz`: dreisatz-pfeile, dreisatz-ueber-eins · `massstab`: massstab-rechnen, massstab-zeichnung · `zuordnungen`: zuordnungen-darstellen · `proportionale-zuordnungen`: proportional-erkennen, proportional-rechnen · `antiproportionale-zuordnungen`: antiproportional, proportional-oder-anti · `funktionsbegriff`: funktion-begriff, keine-funktion · `funktionen-darstellung`: vier-quadranten, situation-tabelle-graph, graph-term-wechseln · `lineare-funktionen`: m-und-b, steigung-deuten · `geradengleichungen`: gerade-zwei-punkte, gerade-punkt-steigung, nullstelle-schnittpunkt · `lineare-gleichungssysteme`: lgs-zwei-geraden, lgs-loesungszahl · `lgs-rechnerisch`: lgs-gleichsetzen, lgs-einsetzen, lgs-addieren, lgs-deuten.

**Schreibweisen-Zählung:** Stellen mit `a/b` in Rückmeldungen von `generated`/`mistakes` (Fund W28): bisher 0, werden hier gezählt.

**Wie ein späterer Agent ein Kapitel ergänzt:** Seite nach dem Muster der Musterseite; Zahlen in `generated` mit `where` und `mistakes`; Komponente `Dreifachansicht` mit `kind`, Wertebereich und Reglern; Inhaltsleitfaden `.agents/skills/app-content/SKILL.md`.


## Code

<!--
- Build the app, locally on `work`, on your own. After each task: `plan done`, then one commit with the work and this
  plan. The hooks check each commit; a failing check is fixed from its message, as skill `lernapps-cli` says.
- What you cannot decide: choose, write it under "Key decisions" with "(guess)", go on.
- The creator asks for a change: say your reading in one sentence first, then change every place it holds for
  (`feedback-applied-everywhere`).
-->

### Tasks

- [x] Load skill `lernapps-cli`. Create the app as its section "Create" says:
      `npx --no -- lernapps create --archetype explainer`.
- [x] Fill the content guide `.agents/skills/app-content/SKILL.md` from "Notes" and "Content method": every heading,
      no "FILL IN" left. Commit it before any content.
- [ ] Load skill `lernapps-explainer`.
- [ ] Load skill `lernapps-content-questions`. Read whole, with your file tool:
      `.agents/skills/lernapps-explainer/references/blocks.md` and
      `.agents/skills/lernapps-explainer/references/exercises.md`. A foreign language: also
      `references/language-tasks.md` in the same folder. A component in the plan: also `references/components.md`.
- [ ] Decide whether the app needs `scope`, as "`scope`" in
      `.agents/skills/lernapps-explainer/references/structure.md` says. Write the choice under "Key decisions".
- [ ] Komponente Dreifachansicht (.vue, .ts, Test): Wertetabelle, Term, Beschreibung, Graph mit Reglern k bzw. m und b, Tastatur, aria-live-Text, nojs.
- [ ] App-Grundgerüst: src/app.yaml (strand mathematik/algebra, 5 Kapitel, Quellen, Glossar-Begriffe), chapter.yaml je Kapitel, Platzhalter ersetzen.
- [ ] Musterseite zuordnungen/proportional-erkennen: Pfeiltabelle (SVG), Dreifachansicht mit k, Merke, mindestens vier Aufgaben (true-false, single-choice, generated mit mistakes), Rückblick.
<!-- tasks: pattern (3 added): the one page or screen that is the pattern for the others -->
- [ ] **Checkpoint:** the pattern page. Load skill `lernapps-learner-check` and do its learner check on the page. Fix
      what it finds. Then show the creator the page and ask whether the others may follow it. Stop and wait. A
      change: change the pattern first.
- [ ] Kapitel 1: Komponente Kurztest, Recap-Seite, dreisatz-pfeile, dreisatz-ueber-eins (Pfeiltabelle, generated mit Mistakes).
- [ ] Kapitel 1: massstab-rechnen, massstab-zeichnung (SVG-Plan mit Maßstabsleiste), Rückblick.
- [ ] Kapitel 2: Recap Koordinatensystem, zuordnungen-darstellen.
- [ ] Kapitel 2: proportional-rechnen, antiproportional (Rechtecke gleicher Fläche), proportional-oder-anti, Rückblick.
- [ ] Kapitel 3: funktion-begriff, keine-funktion.
- [ ] Kapitel 3: vier-quadranten, situation-tabelle-graph (Füllgraphen als SVG), graph-term-wechseln, Rückblick.
- [ ] Kapitel 4: Recap lineare Gleichungen, m-und-b, steigung-deuten.
- [ ] Kapitel 4: gerade-zwei-punkte, gerade-punkt-steigung, nullstelle-schnittpunkt, Rückblick.
- [ ] Kapitel 5: lgs-zwei-geraden, lgs-loesungszahl (Dreifachansicht mit zwei Geraden).
- [ ] Kapitel 5: lgs-gleichsetzen, lgs-einsetzen, lgs-addieren, lgs-deuten, Rückblick der App.
- [ ] Glossar und Selbstbeurteilung (selbsttest je Kapitel) prüfen, Recap-Begriffe im Glossar; Schreibweisen (Abschnitt 2 der Regeln) per Suche über alle Seiten.
- [ ] Lernenden-Prüfer (Klasse 8, Unteragent) über alle Seiten; Fachprüfer rechnet alle Aufgaben nach; Befunde im Plan unter Notes (Review), Änderungen danach hier nennen.
<!-- tasks: pages (12 added): the other pages or screens, after the pattern -->
- [ ] Update the content guide so that it describes the app as built (`app-content-matches`).
- [ ] Run `npx --no -- lernapps check` until it passes.
- [ ] Look at every screen and state, at 360 px and on a desktop, as "Look at the app" of skill `lernapps-cli` says.
      Compare each with its sketch.
- [ ] Do the whole-app check of skill `lernapps-learner-check`. Fix what it finds and write under "Notes" what you
      fixed.

## Commit

<!--
- Put the app on GitHub, publish it with the creator's yes, then list it. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing.
- The creator asked to stop before publishing (a trial): stop here and say so.
-->

### Tasks

- [ ] Load skill `lernapps-explainer-self-assessment`. Add the self-assessment as it says, or write under "Key
      decisions" why the app has none. Commit.
- [ ] Load skill `lernapps-github`. Set up the repository and Pages as it says. Ask for the repository's name and
      every click only the creator can make, in one message.
- [ ] Push `work`, open the preview pull request and see its checks to green, as skill `lernapps-github` says.
- [ ] **Checkpoint:** publish. Show what the app does and the preview link from the comment "Vorschau der App". Ask
      whether it may go online. Stop and wait for the yes.
- [ ] Load skill `lernapps-commit`. Publish as skill `lernapps-github` says: `work` into `main` as one squash commit,
      the run of `Pages` watched to its end.
- [ ] Open the address the job `deploy` printed and confirm that the app shows. Never use a derived address.
- [ ] Load skill `lernapps-listing`. Write the entry under "Entry draft" as it says, with the creator's answer to
      "Finding the app".
- [ ] Fill the retrospective.
- [ ] Commit this plan on `main` and push it: the listing check and the review read it there.
- [ ] **Checkpoint:** list. Open the listing pull request as skill `lernapps-listing` says, without asking first: the
      pull request is the review. See it to "bestanden", then show the creator the pull request and its result.
- [ ] If the plan changed since its last push, commit it on `main` and push again.

### Entry draft

<!-- YAML valid against the entry schema the listing skill names. Only known values, never invented. -->

```yaml
```

## Retrospective

<!-- At the end of Commit, before the listing pull request. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, messages or answers, and your choice. "None" if none. -->
