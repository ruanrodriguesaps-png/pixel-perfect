import type { CharacterSheet } from "@/rpg/types";

/**
 * Contrato de persistência de fichas.
 * Hoje: localStorage. Depois: Supabase (mesma interface, outra implementação).
 */
export interface SheetRepository {
  list(): Promise<CharacterSheet[]>;
  get(id: string): Promise<CharacterSheet | null>;
  save(sheet: CharacterSheet): Promise<CharacterSheet>;
  remove(id: string): Promise<void>;
}

const STORAGE_KEY = "herdeiros.sheets.v1";

function readAll(): CharacterSheet[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as CharacterSheet[]) : [];
  } catch {
    return [];
  }
}

function writeAll(sheets: CharacterSheet[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(sheets));
}

export const localSheetRepository: SheetRepository = {
  async list() {
    return readAll().sort((a, b) => b.atualizadoEm.localeCompare(a.atualizadoEm));
  },
  async get(id) {
    return readAll().find((sheet) => sheet.id === id) ?? null;
  },
  async save(sheet) {
    const next = { ...sheet, atualizadoEm: new Date().toISOString() };
    const all = readAll();
    const index = all.findIndex((item) => item.id === sheet.id);
    if (index >= 0) all[index] = next;
    else all.unshift(next);
    writeAll(all);
    return next;
  },
  async remove(id) {
    writeAll(readAll().filter((sheet) => sheet.id !== id));
  },
};

export const sheetRepository: SheetRepository = localSheetRepository;
