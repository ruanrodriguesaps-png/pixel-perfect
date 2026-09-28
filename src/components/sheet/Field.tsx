interface FieldProps {
  rotulo: string;
  valor: string;
  onChange: (value: string) => void;
  placeholder?: string;
  multilinha?: boolean;
  linhas?: number;
}

const inputClass =
  "w-full rounded-lg border border-input bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary/70";

export function Field({
  rotulo,
  valor,
  onChange,
  placeholder,
  multilinha,
  linhas = 4,
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
        {rotulo}
      </span>
      {multilinha ? (
        <textarea
          value={valor}
          rows={linhas}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className={`${inputClass} resize-y leading-relaxed`}
        />
      ) : (
        <input
          value={valor}
          placeholder={placeholder}
          onChange={(event) => onChange(event.target.value)}
          className={inputClass}
        />
      )}
    </label>
  );
}
