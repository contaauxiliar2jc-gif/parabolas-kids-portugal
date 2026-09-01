import { useEffect, useState } from "react";

function endOfToday() {
  const d = new Date();
  d.setHours(23, 59, 59, 999);
  return d.getTime();
}

const pad = (n: number) => String(n).padStart(2, "0");

export function Countdown() {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, endOfToday() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const h = left === null ? 0 : Math.floor(left / 3600000);
  const m = left === null ? 0 : Math.floor((left % 3600000) / 60000);
  const s = left === null ? 0 : Math.floor((left % 60000) / 1000);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 bg-brand-dark px-4 py-2 text-center text-sm text-white/80">
      <span>⏰ Desconto disponível até: hoje —</span>
      <span className="flex items-center gap-1 font-bold text-white">
        {[pad(h), pad(m), pad(s)].map((v, i) => (
          <span key={i} className="flex items-center gap-1">
            {i > 0 && <span className="text-white/60">:</span>}
            <span className="rounded-md bg-white/15 px-2 py-0.5 tabular-nums">{v}</span>
          </span>
        ))}
      </span>
    </div>
  );
}
