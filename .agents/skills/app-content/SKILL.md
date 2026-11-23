---
name: app-content
description: Use for any content work in this app - researching, writing, extending, correcting or reviewing its competencies, chapters, pages, rounds, questions, exercises, figures, terms or sources. This app's own content decisions; they take precedence over the generic lernapps content skills. Load it before you change any content.
---

# Content guide of this app

Explainer "Zuordnungen und lineare Funktionen" (Mathematik, Strang `algebra`, Format 2). Auftrag: Issue lernapps/apps#395,
Epic #402 (gemeinsame Regeln des Mathe-Epics gelten, besonders Schreibweisen und Sammel-Wiederholung).

## Curriculum

- Hessen (Annahme), Gymnasium, Stufen 5-6 (Kapitel 1) und 7-8 (Kapitel 2 bis 5). Orientierung allein die Lernlandkarte
  Mathematik (`https://lernapps.net/apps/map/mathematik.json`): Strang `algebra`, keine Lehrplan-Seite zitiert.
- Kein eigenes Material des Menschen; alle Texte und Aufgaben sind eigene.

## Competencies

Ids und „Ich kann …“-Sätze der Karte, nicht umformuliert. Seiten liegen unter `src/<kapitel>/<seite>.yaml`.

- Kapitel `dreisatz-massstab` (5-6)
  - `dreisatz` „Ich kann Sachaufgaben mit dem Dreisatz lösen.“: `dreisatz-pfeile`, `dreisatz-ueber-eins`
  - `massstab` „Ich kann mit Maßstäben rechnen und Zeichnungen im passenden Maßstab lesen und anfertigen.“: `massstab-rechnen`, `massstab-zeichnung`
  - Recap `das-brauchst-du`: `arithmetik/grundrechenarten-rechengesetze`, `groessen-und-messen/messen-laenge-masse-geld-zeit`, `groessen-und-messen/umrechnung-groessen`
- Kapitel `zuordnungen` (7-8)
  - `zuordnungen` „Ich kann Zuordnungen zwischen Größen in Tabellen, Schaubildern und mit Worten darstellen und beschreiben.“: `zuordnungen-darstellen`
  - `proportionale-zuordnungen` „Ich kann proportionale Zuordnungen erkennen, darstellen und mit dem Proportionalitätsfaktor rechnen.“: `proportional-erkennen` (Musterseite), `proportional-rechnen`
  - `antiproportionale-zuordnungen` „Ich kann antiproportionale Zuordnungen erkennen, darstellen und von proportionalen unterscheiden.“: `antiproportional`, `proportional-oder-anti`
  - Recap `das-brauchst-du`: `geometrie/koordinatensystem`
- Kapitel `funktionen` (7-8)
  - `funktionsbegriff` „Ich kann erklären, was eine Funktion ist, und Funktionsterm, Graph, Definitionsmenge und Wertemenge unterscheiden.“: `funktion-begriff`, `funktion-term-graph`
  - `funktionen-darstellung` „Ich kann zwischen Funktionsgleichung, Wertetabelle und Graph wechseln.“: `vier-quadranten`, `situation-tabelle-graph`, `graph-term-wechseln`
- Kapitel `geraden` (7-8)
  - `lineare-funktionen` „Ich kann lineare Funktionen mit Gleichung, Tabelle und Graph beschreiben und Steigung und Achsenabschnitt deuten.“: `m-und-b`, `steigung-deuten`
  - `geradengleichungen` „Ich kann die Gleichung einer Geraden aus zwei Punkten oder aus Punkt und Steigung bestimmen und Nullstelle und Schnittpunkt berechnen.“: `gerade-zwei-punkte`, `gerade-punkt-steigung`, `nullstelle-schnittpunkt`
  - Recap `das-brauchst-du`: `algebra/lineare-gleichungen`
- Kapitel `gleichungssysteme` (7-8)
  - `lineare-gleichungssysteme` „Ich kann Gleichungssysteme mit zwei Gleichungen und zwei Variablen zeichnerisch lösen und sagen, wie viele Lösungen sie haben.“: `lgs-zwei-geraden`, `lgs-loesungszahl`
  - `lgs-rechnerisch` „Ich kann ein Gleichungssystem mit dem Einsetzungs-, Gleichsetzungs- oder Additionsverfahren lösen.“: `lgs-gleichsetzen`, `lgs-einsetzen`, `lgs-addieren`, `lgs-deuten`

Exercise ids: `<seitenid>-<kurzname>`, nur Kleinbuchstaben und Bindestriche, je Seite mindestens vier Aufgaben.

## Content structure

- Jede Seite: `title`, `description`, `competencies` (genau eine id; Recap-Seiten `recap:` mit Liste), `blocks`.
- Abschnitts-ids auf jeder Seite gleich: `einstieg` (leichte Handlung vor der Erklärung, Ziel der Seite in einem Satz),
  `erklaerung`, `beispiel` (ein `example`-Kasten), `uebung`. Titel sagen, was der Abschnitt tut („Regler bewegen“ nur, wenn
  Lernende etwas bedienen). Höchstens 350 Wörter Text je Seite, höchstens 4 Textblöcke hintereinander, Bild, Tabelle,
  Komponente oder Aufgabe in den ersten 4 Blöcken.
- Übungen steigen: erkennen, dann anwenden mit anderen Zahlen, dann neue Situation (Rückwärtsfrage, Sachaufgabe). Ein
  Kapitel schließt mit einem Rückblick („Das kannst du jetzt“, Ich-kann-Sätze der Karte) und sagt, was als Nächstes kommt.
- Recap-Seiten (Regeln Abschnitt 7): Kopf „Das brauchst du für dieses Kapitel“; je Baustein ein Abschnitt (Name der
  Karte als Überschrift), Fachbegriffe fett mit Beispiel (`definition` und `example`), Kurztest (Komponente `Kurztest`) und der
  Satz „Wenn das nicht klappt: Wiederhole den Baustein <Name> auf der Lernlandkarte: <Kartenseite>“; Schluss: Checkliste
  „Du bist bereit, wenn du …“. Kartenseite: `https://lernapps.net/apps/map/mathematik/c/<baustein-id>/`.
- Geschichte: Eine Klasse (Mia, Ben, Elif, Jonas, alle 12 bis 14 Jahre, frei erfunden) plant eine Klassenfahrt und vergleicht
  Tarife (Handyvertrag, Taxi, Schwimmbad, Becken füllen). Kapitel 1 mit Szenen (Stadtplan der Fahrt), Kapitel 2 bis 5
  als kurze Nachrichten oder Fallbeschreibung. Keine Marken, keine realen Personen.

## Terminology

- Wörter der Karte: Dreisatz, Maßstab, Zuordnung, proportional, antiproportional, Funktion, Funktionsterm, Graph,
  Definitionsmenge, Wertemenge, Steigung *m*, y-Achsenabschnitt *b*, Nullstelle, Gleichungssystem, Gleichsetzungs-,
  Einsetzungs-, Additionsverfahren. Neue Wörter beim ersten Gebrauch im Text erklären; Fachbegriffe aus anderen Explainern
  (Distributivgesetz, Klammer, Einheit, Umrechnungszahl, Koordinaten, Achse, Gleichung, Lösung, Äquivalenzumformung) im
  Recap fett mit Beispiel und im Glossar (`definition`-Blöcke).
- Anrede „du“, kurze Sätze, kein „man“ in Arbeitsaufträgen.
- „Zahlenstrahl“ nur in Kapitel 1 (nicht-negative Zahlen), „Zahlengerade“ ab Kapitel 2 (negative Zahlen, vier Quadranten).
- Schreibweisen: Dezimalkomma (`3,5`), Minus `−` (U+2212, Klammer bei negativer Zahl in Rechnung: `5 + (−3)`), `·` und `:`,
  kein `*` oder `/` als Rechenzeichen, Einheit nach geschütztem Leerzeichen (`3 cm`), `15 %` mit geschütztem Leerzeichen,
  Zahlen ab fünf Stellen in Dreiergruppen (`12 345`), Variablen kursiv (*x*), Brüche gesetzt. Funktionsterme als Formel
  (`y = m \cdot x + b`). Eingabefelder akzeptieren Komma und Punkt.
- Rückmeldungen von `generated` und `mistakes` können keine Formeln setzen (Fund W28): dort `a/b` erlaubt, Stellen werden im Plan
  gezählt.

## Exercise patterns

Alle in `explainer-exercise-progression` nach Schwierigkeit geordnet; jede Aufgabe mit Rückmeldung, die den Fehlertyp nennt.

1. *Pfeiltabelle ergänzen* (`dreisatz`): `generated`, Tabelle im Text (zwei Zeilen), `answer` fehlender Wert, `mistakes`
   „addiert statt multipliziert“, „Richtung vertauscht“. Beispiel: `src/dreisatz-massstab/dreisatz-pfeile.yaml`, `uebung`.
2. *Messen am Plan* (`massstab`): `generated` mit Strecke in cm und Maßstab, Antwort in m oder km, `mistakes` „Einheit nicht umgerechnet“.
3. *Dreifachansicht erkunden* (`zuordnungen`, `proportional`, `lineare-funktionen`): Komponente `Dreifachansicht` mit
   Reglern; danach Fragen, die das Gesehene prüfen (`single-choice`, `number`).
4. *Erkennen* (proportional, antiproportional, Funktion): `true-false`, `single-choice` mit `info` je Option,
   `matching` Situation–Graph (Wörter bei Formeln dazu).
5. *Herleiten und rechnen* (Faktor, Steigung, Nullstelle): `generated` mit `steps`, `where` gegen krumme Werte.
6. *Aufstellen* (Geradengleichung, Gleichungssystem): `generated`, eine Eingabe je Teil (`number`: *m*, *b*, *x*, *y*), Probe im Test.
7. *Kurztest im Recap*: `Kurztest` mit genau einer richtigen Option und Grund in `info`.

Zufallsaufgaben: Division durch 0 und krumme Größen mit `where` ausschließen; Ergebnisse mit verlangter Genauigkeit.

## Figures

- SVG-Bilder (`image`) und die Komponente `Dreifachansicht`; nichts von außen.
- Pfeiltabelle: zwei Zeilen *x*/*y*, Bögen mit „· 3“ oben links, „· 3“ unten rechts; Alt-Text liest die Tabelle und die Pfeile vor.
- Graphen: Achsen mit Pfeilspitze und Beschriftung (*x* in Einheit, *y* in Einheit), Gitter, Zahlengerade-Beschriftung;
  Kapitel 1 und 2 nur erster Quadrant, ab Kapitel 3 vier Quadranten. Farbe nie allein: Linienart oder Beschriftung dazu.
- Alt-Text sagt, was die Figur zeigt; Bildunterschrift sagt, worauf zu achten ist; bei Aufgaben nie die Antwort (`explainer-figure-hides-answer`).
- `Dreifachansicht` (`src/components/Dreifachansicht.vue`, Logik `Dreifachansicht.ts`, Test `Dreifachansicht.test.ts`): zeigt Term, Wertetabelle und Graph
  (Gitter, Achsen mit Zahlengerade-Beschriftung, vier Quadranten möglich) und Regler. Pflicht-Props: `kind` (`proportional`, `linear`, `antiproportional`),
  `xLabel`, `yLabel`, `xUnit`, `yUnit`, `xs` (x-Werte der Tabelle), Fenster `xMin xMax yMin yMax`, Marken `tickX tickY`, Regler `a aMin aMax aStep aName`
  (k, m oder c). Optional: `b bMin bMax bStep bName` (zweiter Regler, linear), `fixed` (keine Regler), `fixedA` (nur Regler b), `hideTerm` (kein Term, die Seite
  nennt ihn noch nicht), `pointsOnly` (nur Punkte der Tabelle, keine Linie), `marks` (gegebene Punkte mit Namen, z. B. A und B), eine zweite Gerade
  (`a2 b2 a2Min a2Max a2Step b2Min b2Max b2Step a2Name b2Name lineName line2Name`, dargestellt gestrichelt). Regler sind `type="range"` mit Pfeiltasten,
  Beschriftung, `aria-valuetext`; der Satz unter dem Graphen (`aria-live`) und das `aria-label` des Graphen beschreiben Linie und Punkte. Die Tabelle liegt in einem
  fokussierbaren, scrollbaren Bereich. Der Schnittpunkt zweier Geraden wird nie angezeigt (er ist die Antwort der Aufgaben). Farben nur über `--page-*`.
  Jeder Block braucht `nojs` mit Tabelle und Beschreibung. Ein neues Verhalten gehört hierher, nicht in eine zweite Komponente.
- `Kurztest` (`src/components/Kurztest.*`, kopiert aus den gemeinsamen Dateien des Epics): eine Frage mit Optionen, Rückmeldung sofort, genau eine richtige Option, Grund
  in `info`. Nur auf den Recap-Seiten (`das-brauchst-du`); jeder Block hat `nojs` mit Frage, Antwort und Grund.
- Bildherkunft: alles selbst gezeichnet (SVG), Lizenz CC BY 4.0 wie der Text.

## Sources

- Lernlandkarte Mathematik, Issue lernapps/apps#395, gemeinsame Regeln des Epics. Keine Schulbücher, keine fremden Aufgaben,
  keine Dritt-Inhalte, keine externen Links (Aufgaben verlinken die Kartenseite des Bausteins, wo das Werkzeug einen Link verlangt).
- Fakten (Dreisatz, Steigung, Verfahren für Gleichungssysteme) selbst hergeleitet und nachgerechnet; der fachliche Prüfer rechnet nach.

## Data files

Alle in `src/data/`, je Datensatz ganzzahlig und mit Rechenprobe (die Prüfung steht im Plan): `proportional-paare` (k = y : x), `antiproportional-paare` (x · y = c),
`dreisatz-malnehmen`, `dreisatz-teilen`, `dreisatz-ueber-eins`, `massstab-wege`, `massstab-zeichnen`, `massstab-bestimmen`, `taxi-fahrten`, `steigung-dreiecke`,
`gerade-zwei-punkte`, `gerade-punkt-steigung`, `nullstellen`, `schnittpunkte`, `lgs-einsetzen`, `lgs-addieren`, `eintritt`. Jede Zeile gibt, was Rechenwege und
`mistakes` brauchen (Faktor, Zwischenwerte), damit `steps` jede Zahl zeigen. Ein Fehlerwert darf nie gleich der Antwort sein (der Build prüft es).

## Adding a chapter or round

1. Bausteine mit ids aus der Karte (`mathematik.json`) wählen; `requires` prüfen, Voraussetzungen von außen als `recap`-Seite.
2. Ordner `src/<kapitel>/` mit `chapter.yaml`; Kapitel in `chapters` von `src/app.yaml` eintragen.
3. Seiten nach dem Muster `src/zuordnungen/proportional-erkennen.yaml` (Abschnitte `einstieg`, `erklaerung`, `beispiel`, `uebung`), in `pages` eintragen.
4. Aufgaben aus den Mustern oben; `generated` mit `where` und `mistakes`; Rechenprobe im Test.
5. `npx vp build` nach jeder Seite, `npx vp check --fix` vor dem Commit, `npx --no -- lernapps check`, Commit.

## Rules learned from mistakes

- Zahlen in `generated`, die negativ sein können, erscheinen als Bindestrich (`-3`) statt als Minuszeichen (`−3`): das Minus von Hand in den Text schreiben
  (`x = −{{a}}`) und nur positive Zahlen ziehen. Rechenzeichen in `steps` nicht mit negativen Werten füllen.
- Überschriften (`title`) ohne geschützte Leerzeichen und ohne gruppierte Zahlen, sonst scheitert der Test der Überschriftenebenen.
- Nicht in Klartext-Zeilen: ein `: ` in einem `text`, `title` oder `caption` ohne Anführungszeichen bricht das YAML.

- Eine Plan-Aufgabe nie abhaken, bevor ihr Text im Plan steht (Skript brach ab, `plan done` lief trotzdem).
