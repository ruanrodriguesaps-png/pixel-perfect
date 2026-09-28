import type { CharacterSheet } from "@/rpg/types";

export function createEmptySheet(nome = "Nova Ficha"): CharacterSheet {
  return {
    id: crypto.randomUUID(),
    ownerId: null,
    atualizadoEm: new Date().toISOString(),
    nome,
    linhagem: "",
    caminho: "",
    ego: "",
    pv: { atual: 0, max: 0 },
    pf: { atual: 0, max: 0 },
    karma: { atual: 0, max: null },
    exaustao: { atual: 0, max: null },
    atributos: { corpo: 1, mente: 1, espirito: 1 },
    esquiva: "",
    bloqueio: "",
    deslocamento: "",
    iniciativa: "",
    ancoraSentimental: "",
    machucado: "",
    historia: "",
    passiva: "",
    habilidades: [],
    nomenclaturas: [],
    inventario: [],
  };
}
