import type { AttributeKey, AttributeValue, DieFaces } from "./types";

export const ATTRIBUTE_LABELS: Record<AttributeKey, string> = {
  corpo: "Corpo",
  mente: "Mente",
  espirito: "Espírito",
};

export const ATTRIBUTE_KEYS: AttributeKey[] = ["corpo", "mente", "espirito"];

/** Escala oficial: 1=d4, 2=d6, 3=d8, 4=d10, 5=d12. */
const DIE_BY_VALUE: Record<AttributeValue, DieFaces> = {
  1: 4,
  2: 6,
  3: 8,
  4: 10,
  5: 12,
};

export function dieForAttribute(value: AttributeValue): DieFaces {
  return DIE_BY_VALUE[value];
}

export function dieLabelForAttribute(value: AttributeValue): string {
  return `d${dieForAttribute(value)}`;
}

export function clampAttribute(value: number): AttributeValue {
  return Math.min(5, Math.max(1, Math.round(value))) as AttributeValue;
}
