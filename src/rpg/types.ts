/**
 * Modelos de domínio de Herdeiros RPG.
 * Camada pura: sem React, sem persistência. Pronta para Supabase depois.
 */

export type AttributeKey = "corpo" | "mente" | "espirito";

export type AttributeValue = 1 | 2 | 3 | 4 | 5;

export type DieFaces = 4 | 6 | 8 | 10 | 12 | 20;

export interface Ability {
  id: string;
  nome: string;
  descricao: string;
  custo: string;
  efeito: string;
  observacoes: string;
}

export interface Nomenclature {
  id: string;
  nome: string;
  descricao: string;
  custoPf: string;
  dano: string;
  alcance: string;
  efeitos: string;
  observacoes: string;
}

export interface InventoryItem {
  id: string;
  item: string;
  quantidade: number;
  descricao: string;
}

export interface Resource {
  atual: number;
  max: number | null;
}

export interface CharacterSheet {
  id: string;
  /** Preparado para vincular a um usuário autenticado no futuro. */
  ownerId: string | null;
  atualizadoEm: string;

  // Identificação
  nome: string;
  linhagem: string;
  caminho: string;
  ego: string;

  // Recursos
  pv: Resource;
  pf: Resource;
  karma: Resource;
  exaustao: Resource;

  // Atributos
  atributos: Record<AttributeKey, AttributeValue>;

  // Combate
  esquiva: string;
  bloqueio: string;
  deslocamento: string;
  iniciativa: string;

  // Narrativa
  ancoraSentimental: string;
  machucado: string;
  historia: string;

  // Outros
  passiva: string;
  habilidades: Ability[];
  nomenclaturas: Nomenclature[];
  inventario: InventoryItem[];
}
