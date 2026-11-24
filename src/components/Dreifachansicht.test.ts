import { expect, test } from "vite-plus/test";
import { curve, describe, format, markName, sliderOk, table, term, valueText, visible } from "./Dreifachansicht.ts";

const prop = (a: number) => ({ kind: "proportional" as const, a, b: 0 });
const lin = (a: number, b: number) => ({ kind: "linear" as const, a, b });
const anti = (a: number) => ({ kind: "antiproportional" as const, a, b: 0 });

test("numbers are written with a comma and a real minus sign, without trailing zeros", () => {
  expect(format(2.5)).toBe("2,5");
  expect(format(-3)).toBe("−3");
  expect(format(1.2 + 0.1)).toBe("1,3");
  expect(format(-0.001)).toBe("0");
  expect(format(4)).toBe("4");
});

test("the table follows the term for every kind", () => {
  expect(table(prop(2), [0, 1, 5]).map((r) => r.y)).toEqual([0, 2, 10]);
  expect(table(lin(-1, 3), [0, 2, 4]).map((r) => r.y)).toEqual([3, 1, -1]);
  expect(table(anti(12), [1, 2, 3, 4]).map((r) => r.y)).toEqual([12, 6, 4, 3]);
});

test("antiproportional has no value at x = 0 and the table says so", () => {
  expect(table(anti(12), [0, 1])[0]?.y).toBeUndefined();
});

test("the term is plain text with · and :, a minus for a negative intercept, no zero parts", () => {
  expect(term(prop(2))).toBe("y = 2 · x");
  expect(term(anti(12))).toBe("y = 12 : x");
  expect(term(lin(1.5, 2))).toBe("y = 1,5 · x + 2");
  expect(term(lin(2, -3))).toBe("y = 2 · x − 3");
  expect(term(lin(2, 0))).toBe("y = 2 · x");
  expect(term(lin(0, 4))).toBe("y = 4");
  expect(term(lin(-1, 0))).toBe("y = −1 · x");
});

test("the description says rise or fall, the intercept and the product, in words", () => {
  expect(describe(lin(2, 1), "min", "€")).toContain("steigt");
  expect(describe(lin(2, 1), "min", "€")).toContain("y-Achse bei 1 €");
  expect(describe(lin(-2, 1), "min", "€")).toContain("fällt");
  expect(describe(lin(-2, 1), "min", "€")).toContain("2 € weniger");
  expect(describe(lin(0, 3), "min", "€")).toContain("waagerecht");
  expect(describe(prop(2), "min", "€")).toContain("Ursprung");
  expect(describe(anti(12), "", "")).toContain("immer 12");
});

test("a slider announces its name and value", () => {
  expect(valueText("k", 2.5)).toBe("k = 2,5");
});

test("a line is cut at the window; a line outside it has no points", () => {
  const pts = visible(lin(1, 0), 0, 10, 0, 5);
  expect(pts).toEqual([
    { x: 0, y: 0 },
    { x: 5, y: 5 },
  ]);
  expect(visible(lin(0, 9), 0, 10, 0, 5)).toEqual([]);
  expect(visible(prop(1), -5, 5, -5, 5)).toHaveLength(2);
});

test("the curve of an antiproportional relation stays in the window and never touches x = 0", () => {
  const pts = visible(anti(12), 0, 12, 0, 12);
  expect(pts.length).toBeGreaterThan(10);
  expect(pts.every((q) => q.x > 0 && q.y <= 12)).toBe(true);
  expect(curve(anti(12), 0, 12)[0]?.x).toBeGreaterThan(0);
});

test("a slider start value must lie on its step between its limits", () => {
  expect(sliderOk(2, 0, 5, 0.5)).toBe(true);
  expect(sliderOk(2.2, 0, 5, 0.5)).toBe(false);
  expect(sliderOk(6, 0, 5, 1)).toBe(false);
  expect(sliderOk(1, 0, 5, 0)).toBe(false);
});

test("a marked point is named with its coordinates in German writing", () => {
  expect(markName({ x: 2, y: 7, name: "A" })).toBe("A (2|7)");
  expect(markName({ x: -1, y: 2.5, name: "B" })).toBe("B (\u22121|2,5)");
});

test("the curve of an antiproportional relation starts at the top edge of the window and ends at the right edge", () => {
  const pts = visible(anti(12), 0, 12, 0, 12);
  expect(pts[0]?.x).toBeCloseTo(1, 6);
  expect(pts[0]?.y).toBeCloseTo(12, 6);
  expect(pts[pts.length - 1]?.x).toBeCloseTo(12, 6);
  expect(pts.every((q) => q.y <= 12 + 1e-9 && q.y >= 0)).toBe(true);
});
