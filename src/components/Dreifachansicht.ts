// Logic of the triple view "Term – Tabelle – Graph": one relation between two quantities as a term, a table of values and a
// graph, driven by sliders. Pure functions; the component only draws what they return.
export type Kind = "proportional" | "linear" | "antiproportional";

export type Params = {
  kind: Kind;
  /** The slider value a: the factor k (proportional), the slope m (linear) or the constant c (antiproportional). */
  a: number;
  /** The y-intercept b (linear only). */
  b: number;
};

const NBSP = " ";
const MINUS = "−";

/** A number in German writing: comma, real minus sign, at most two decimals, no trailing zeros. */
export function format(n: number): string {
  const rounded = Math.round(n * 100) / 100;
  const text = String(Object.is(rounded, -0) ? 0 : rounded).replace(".", ",");
  return text.startsWith("-") ? MINUS + text.slice(1) : text;
}

/** The value y for x, or undefined where the relation has none (antiproportional at 0). */
export function y(p: Params, x: number): number | undefined {
  if (p.kind === "proportional") return p.a * x;
  if (p.kind === "linear") return p.a * x + p.b;
  return x === 0 ? undefined : p.a / x;
}

/** The table of values: one entry per x, y undefined where there is none. */
export function table(p: Params, xs: number[]): { x: number; y: number | undefined }[] {
  return xs.map((x) => ({ x, y: y(p, x) }));
}

/** The term as plain text with · and :, for the screen and the screen reader. */
export function term(p: Params): string {
  if (p.kind === "proportional") return `y = ${format(p.a)} ${"·"} x`;
  if (p.kind === "antiproportional") return `y = ${format(p.a)} : x`;
  const m = p.a === 0 ? "" : `${format(p.a)} ${"·"} x`;
  if (p.a === 0) return `y = ${format(p.b)}`;
  if (p.b === 0) return `y = ${m}`;
  return `y = ${m} ${p.b < 0 ? MINUS : "+"} ${format(Math.abs(p.b))}`;
}

/** The graph as words, so that the view works without seeing it. */
export function describe(p: Params, xUnit: string, yUnit: string): string {
  const x = (n: number) => `${format(n)}${NBSP}${xUnit}`.trim();
  const yy = (n: number) => `${format(n)}${NBSP}${yUnit}`.trim();
  if (p.kind === "proportional") {
    if (p.a === 0) return `Die Gerade liegt auf der x-Achse. Zu jedem x gehört y = 0.`;
    return `Die Gerade geht durch den Ursprung. Zu ${x(1)} mehr gehören ${yy(p.a)} mehr.`;
  }
  if (p.kind === "antiproportional") {
    return `Das Produkt aus x und y ist immer ${format(p.a)}. Wird x größer, wird y kleiner: die Kurve fällt und berührt die Achsen nicht.`;
  }
  const where = `Sie schneidet die y-Achse bei ${yy(p.b)}.`;
  if (p.a === 0) return `Die Gerade verläuft waagerecht bei ${yy(p.b)}.`;
  const dir = p.a > 0 ? "steigt" : "fällt";
  return `Die Gerade ${dir}: Zu ${x(1)} mehr gehören ${yy(Math.abs(p.a))} ${p.a > 0 ? "mehr" : "weniger"}. ${where}`;
}

/** The text a slider announces: its name and its value. */
export function valueText(name: string, value: number): string {
  return `${name} = ${format(value)}`;
}

/** The points of the graph for the SVG: a line needs two, the curve many; undefined values are left out. */
export function curve(p: Params, xMin: number, xMax: number): { x: number; y: number }[] {
  if (p.kind !== "antiproportional") {
    return [xMin, xMax].map((x) => ({ x, y: y(p, x) ?? 0 }));
  }
  const points: { x: number; y: number }[] = [];
  const from = Math.max(xMin, 0.1);
  for (let i = 0; i <= 60; i++) {
    const x = from + ((xMax - from) * i) / 60;
    const value = y(p, x);
    if (value !== undefined) points.push({ x, y: value });
  }
  return points;
}

/** Whether a start value lies between the limits of its slider on a step of it. */
export function sliderOk(value: number, min: number, max: number, step: number): boolean {
  if (!(step > 0) || min > max || value < min || value > max) return false;
  const steps = (value - min) / step;
  return Math.abs(steps - Math.round(steps)) < 1e-9;
}

/** The part of the graph inside the window [xMin, xMax] × [yMin, yMax]: a line is cut at the edges, a curve keeps its points inside. */
export function visible(p: Params, xMin: number, xMax: number, yMin: number, yMax: number): { x: number; y: number }[] {
  if (p.kind === "antiproportional") {
    return curve(p, xMin, xMax).filter((q) => q.y >= yMin && q.y <= yMax);
  }
  let from = xMin;
  let to = xMax;
  if (p.a !== 0) {
    const x1 = (yMin - (p.kind === "linear" ? p.b : 0)) / p.a;
    const x2 = (yMax - (p.kind === "linear" ? p.b : 0)) / p.a;
    from = Math.max(from, Math.min(x1, x2));
    to = Math.min(to, Math.max(x1, x2));
  } else {
    const level = p.kind === "linear" ? p.b : 0;
    if (level < yMin || level > yMax) return [];
  }
  if (from > to) return [];
  return [from, to].map((x) => ({ x, y: y(p, x) ?? 0 }));
}
