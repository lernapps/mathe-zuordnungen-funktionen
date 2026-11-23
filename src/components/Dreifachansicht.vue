<script setup lang="ts">
// The triple view: one relation as a term, a table of values and a graph, with sliders. A change at a slider changes all
// three at once. The words under the graph say the same as the graph (aria-live), so that the view works without seeing
// it. Logic: Dreifachansicht.ts. The page's German texts name the quantities; the app is German only.
import { computed, ref } from "vue";
import { describe, format, table, term, valueText, visible, type Params } from "./Dreifachansicht.ts";

const props = defineProps<{
  /** proportional: y = k · x; linear: y = m · x + b; antiproportional: y = c : x. */
  kind: "proportional" | "linear" | "antiproportional";
  /** The name of the x quantity with its unit for the axis and the table, e.g. "Minuten (min)". */
  xLabel: string;
  yLabel: string;
  /** The units alone, e.g. "min" and "€". */
  xUnit: string;
  yUnit: string;
  /** The x values of the table. */
  xs: number[];
  /** The window of the graph and the distance of the marks on the axes. */
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  tickX: number;
  tickY: number;
  /** The slider a (k, m or c): start value and limits. */
  a: number;
  aMin: number;
  aMax: number;
  aStep: number;
  /** The slider b (linear only). */
  b?: number;
  bMin?: number;
  bMax?: number;
  bStep?: number;
  /** The names of the sliders, e.g. "k", "m", "b". */
  aName: string;
  bName?: string;
}>();

const a = ref(props.a);
const b = ref(props.b ?? 0);
const p = computed<Params>(() => ({ kind: props.kind, a: a.value, b: b.value }));

const rows = computed(() => table(p.value, props.xs));
const words = computed(() => describe(p.value, props.xUnit, props.yUnit));

const W = 320;
const H = 240;
const padL = 40;
const padR = 14;
const padT = 12;
const padB = 34;
const sx = (x: number) => padL + ((x - props.xMin) / (props.xMax - props.xMin)) * (W - padL - padR);
const sy = (v: number) => padT + ((props.yMax - v) / (props.yMax - props.yMin)) * (H - padT - padB);
const axisX = computed(() => sy(Math.min(Math.max(0, props.yMin), props.yMax)));
const axisY = computed(() => sx(Math.min(Math.max(0, props.xMin), props.xMax)));

function marks(min: number, max: number, tick: number): number[] {
  const out: number[] = [];
  for (let v = Math.ceil(min / tick) * tick; v <= max + 1e-9; v += tick) out.push(Math.round(v * 1000) / 1000);
  return out;
}
const xMarks = computed(() => marks(props.xMin, props.xMax, props.tickX));
const yMarks = computed(() => marks(props.yMin, props.yMax, props.tickY));

const line = computed(() =>
  visible(p.value, props.xMin, props.xMax, props.yMin, props.yMax)
    .map((q) => `${sx(q.x).toFixed(1)},${sy(q.y).toFixed(1)}`)
    .join(" "),
);
const dots = computed(() =>
  rows.value
    .filter((r) => r.y !== undefined && r.y >= props.yMin && r.y <= props.yMax)
    .map((r) => ({ cx: sx(r.x), cy: sy(r.y as number) })),
);
const showB = computed(() => props.kind === "linear" && props.bName !== undefined);
</script>

<template>
  <div class="dreifach">
    <p class="dreifach-term" aria-live="polite">
      <span class="dreifach-title">Term:</span> <strong>{{ term(p) }}</strong>
    </p>

    <div class="dreifach-sliders">
      <label class="dreifach-slider">
        <span>{{ aName }} = {{ format(a) }}</span>
        <input
          v-model.number="a"
          type="range"
          :min="aMin"
          :max="aMax"
          :step="aStep"
          :aria-valuetext="valueText(aName, a)"
        />
      </label>
      <label v-if="showB" class="dreifach-slider">
        <span>{{ bName }} = {{ format(b) }}</span>
        <input
          v-model.number="b"
          type="range"
          :min="bMin ?? -5"
          :max="bMax ?? 5"
          :step="bStep ?? 1"
          :aria-valuetext="valueText(bName ?? 'b', b)"
        />
      </label>
    </div>

    <table class="dreifach-table">
      <caption>
        Tabelle
      </caption>
      <tbody>
        <tr>
          <th scope="row">{{ xLabel }}</th>
          <td v-for="r in rows" :key="r.x">{{ format(r.x) }}</td>
        </tr>
        <tr>
          <th scope="row">{{ yLabel }}</th>
          <td v-for="r in rows" :key="r.x">{{ r.y === undefined ? "–" : format(r.y) }}</td>
        </tr>
      </tbody>
    </table>

    <svg class="dreifach-graph" :viewBox="`0 0 ${W} ${H}`" role="img" :aria-label="`Graph. ${words}`">
      <g class="dreifach-grid">
        <line v-for="m in xMarks" :key="'gx' + m" :x1="sx(m)" :x2="sx(m)" :y1="padT" :y2="H - padB" />
        <line v-for="m in yMarks" :key="'gy' + m" :x1="padL" :x2="W - padR" :y1="sy(m)" :y2="sy(m)" />
      </g>
      <g class="dreifach-axes">
        <line :x1="padL" :x2="W - padR" :y1="axisX" :y2="axisX" />
        <line :x1="axisY" :x2="axisY" :y1="padT" :y2="H - padB" />
      </g>
      <g class="dreifach-ticks">
        <text v-for="m in xMarks" :key="'tx' + m" :x="sx(m)" :y="H - padB + 14" text-anchor="middle">
          {{ format(m) }}
        </text>
        <text v-for="m in yMarks" :key="'ty' + m" :x="padL - 6" :y="sy(m) + 4" text-anchor="end">
          {{ format(m) }}
        </text>
        <text :x="W - padR" :y="H - 4" text-anchor="end">{{ xLabel }}</text>
        <text :x="padL + 4" :y="padT + 10">{{ yLabel }}</text>
      </g>
      <polyline v-if="line" class="dreifach-line" :points="line" fill="none" />
      <circle v-for="(d, i) in dots" :key="i" class="dreifach-dot" :cx="d.cx" :cy="d.cy" r="4" />
    </svg>

    <p class="dreifach-words" aria-live="polite">{{ words }}</p>
  </div>
</template>

<style scoped>
.dreifach {
  margin: 1rem 0;
  padding: 0.75rem 1rem;
  border: 1px solid var(--page-border);
  border-radius: 0.4rem;
}

.dreifach-sliders {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.5rem;
  margin: 0.5rem 0;
}

.dreifach-slider {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  min-width: 10rem;
  flex: 1 1 10rem;
}

.dreifach-slider input {
  min-height: 44px;
  accent-color: var(--page-accent);
}

.dreifach-table {
  border-collapse: collapse;
  margin: 0.5rem 0;
  max-width: 100%;
  display: block;
  overflow-x: auto;
}

.dreifach-table caption {
  text-align: left;
  font-weight: 600;
  padding-bottom: 0.25rem;
}

.dreifach-table th,
.dreifach-table td {
  border: 1px solid var(--page-border);
  padding: 0.25rem 0.5rem;
  text-align: right;
  white-space: nowrap;
}

.dreifach-table th {
  text-align: left;
}

.dreifach-graph {
  width: 100%;
  max-width: 28rem;
  height: auto;
  color: var(--page-text);
}

.dreifach-grid line {
  stroke: var(--page-border);
  stroke-width: 1;
}

.dreifach-axes line {
  stroke: var(--page-text);
  stroke-width: 1.5;
}

.dreifach-ticks text {
  fill: var(--page-text);
  font-size: 11px;
}

.dreifach-line {
  stroke: var(--page-accent);
  stroke-width: 3;
}

.dreifach-dot {
  fill: var(--page-background);
  stroke: var(--page-accent);
  stroke-width: 2;
}

.dreifach-words {
  margin: 0.5rem 0 0;
}
</style>
