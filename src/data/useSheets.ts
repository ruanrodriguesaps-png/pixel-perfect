import { useCallback, useEffect, useState } from "react";

import { sheetRepository } from "./sheetRepository";
import { createEmptySheet } from "./sheetFactory";
import type { CharacterSheet } from "@/rpg/types";

export function useSheets() {
  const [sheets, setSheets] = useState<CharacterSheet[]>([]);
  const [carregando, setCarregando] = useState(true);

  const recarregar = useCallback(async () => {
    const list = await sheetRepository.list();
    setSheets(list);
    setCarregando(false);
  }, []);

  useEffect(() => {
    void recarregar();
  }, [recarregar]);

  const criar = useCallback(
    async (nome?: string) => {
      const sheet = await sheetRepository.save(createEmptySheet(nome));
      await recarregar();
      return sheet;
    },
    [recarregar],
  );

  const remover = useCallback(
    async (id: string) => {
      await sheetRepository.remove(id);
      await recarregar();
    },
    [recarregar],
  );

  return { sheets, carregando, recarregar, criar, remover };
}

export function useSheet(id: string) {
  const [sheet, setSheet] = useState<CharacterSheet | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;
    void sheetRepository.get(id).then((found) => {
      if (!ativo) return;
      setSheet(found);
      setCarregando(false);
    });
    return () => {
      ativo = false;
    };
  }, [id]);

  const atualizar = useCallback((patch: Partial<CharacterSheet>) => {
    setSheet((current) => {
      if (!current) return current;
      const next = { ...current, ...patch };
      void sheetRepository.save(next);
      return next;
    });
  }, []);

  return { sheet, carregando, atualizar };
}
