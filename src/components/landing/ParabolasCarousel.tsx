import { useRef } from "react";
import lagartinha from "@/assets/A_lagarticha_ansiosa.webp.asset.json";
import raposa from "@/assets/A_raposa_mandona.webp.asset.json";
import jacare from "@/assets/que_se_irritaa_facil.webp.asset.json";
import borboleta from "@/assets/A_borboleta_que_enfrentou_o_ento.webp.asset.json";
import tartaruga from "@/assets/A_tartaruga_que_guardava_tudo_no_casco.webp.asset.json";
import preguica from "@/assets/bicho-preguica.webp.asset.json";

const slides = [
  { src: lagartinha.url, alt: "Parábola A Lagartinha Ansiosa" },
  { src: raposa.url, alt: "Parábola A Raposinha Mandona" },
  { src: jacare.url, alt: "Parábola O Jacaré Que Se Irritava Fácil" },
  { src: borboleta.url, alt: "Parábola A Borboletinha Que Enfrentou o Vento" },
  { src: tartaruga.url, alt: "Parábola A Tartaruguinha Que Guardava Tudo no Casco" },
  { src: preguica.url, alt: "Parábola O Bicho-Preguiça Que Queria Ir Mais Rápido" },
];

export function ParabolasCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="relative mt-10">
      <div
        ref={ref}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
      >
        {slides.map((s) => (
          <img
            key={s.src}
            src={s.src}
            alt={s.alt}
            loading="lazy"
            className="w-[78%] shrink-0 snap-center rounded-3xl shadow-lg sm:w-[48%] lg:w-[32%]"
          />
        ))}
      </div>

      <div className="mt-2 flex justify-center gap-3">
        <button
          type="button"
          aria-label="Parábola anterior"
          onClick={() => scrollBy(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-xl font-bold text-primary-foreground shadow-md"
        >
          ‹
        </button>
        <button
          type="button"
          aria-label="Próxima parábola"
          onClick={() => scrollBy(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green text-xl font-bold text-primary-foreground shadow-md"
        >
          ›
        </button>
      </div>
    </div>
  );
}
