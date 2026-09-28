import type { DieFaces } from "./types";

export const AVAILABLE_DICE: DieFaces[] = [4, 6, 8, 10, 12, 20];

export interface RollResult {
  id: string;
  faces: DieFaces;
  quantidade: number;
  resultados: number[];
  total: number;
  notacao: string;
  criadoEm: number;
}

function rollOne(faces: DieFaces): number {
  return Math.floor(Math.random() * faces) + 1;
}

export function rollDice(faces: DieFaces, quantidade: number): RollResult {
  const qtd = Math.min(20, Math.max(1, Math.round(quantidade)));
  const resultados = Array.from({ length: qtd }, () => rollOne(faces));

  return {
    id: crypto.randomUUID(),
    faces,
    quantidade: qtd,
    resultados,
    total: resultados.reduce((sum, value) => sum + value, 0),
    notacao: `${qtd}d${faces}`,
    criadoEm: Date.now(),
  };
}
