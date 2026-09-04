import { createFileRoute } from "@tanstack/react-router";
import { Countdown } from "@/components/landing/Countdown";
import { ParabolasCarousel } from "@/components/landing/ParabolasCarousel";
import { bonuses, bonusesTotal, faqs, temas } from "@/components/landing/data";
import heroParabolas from "@/assets/hero-parabolas.webp.asset.json";
import logoParabolas from "@/assets/logo-parabolas-kids.webp.asset.json";
import temaEmocoes from "@/assets/tema-emocoes.jpg";
import temaFe from "@/assets/tema-fe.jpg";
import kitAtividades from "@/assets/kit-atividades.jpg";
import depoimento1 from "@/assets/Depoimento_1.webp.asset.json";
import depoimento2 from "@/assets/Depoimento_2.webp.asset.json";
import depoimento3 from "@/assets/Depoimento_3.webp.asset.json";
import depoimento4 from "@/assets/Depoimento_4.webp.asset.json";
import depoimento5 from "@/assets/Depoimento_5.webp.asset.json";
import depoimento6 from "@/assets/Depoimento_6.webp.asset.json";

const depoimentos = [
  { src: depoimento1.url, alt: "Depoimento de uma mãe partilhando o material 1001 Parábolas Kids com os filhos" },
  { src: depoimento2.url, alt: "Depoimento sobre o conteúdo completo das parábolas e bónus" },
  { src: depoimento3.url, alt: "Comentário de cliente satisfeito com a aquisição do material" },
  { src: depoimento4.url, alt: "Várias avaliações positivas de pais e educadores" },
  { src: depoimento5.url, alt: "Conversa de WhatsApp com elogios ao material e bónus" },
  { src: depoimento6.url, alt: "Comentário de cliente recomendando o material" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "1001 Parábolas Kids — Histórias para ensinar valores com fé" },
      {
        name: "description",
        content:
          "1001 parábolas bíblicas para crianças, em português de Portugal. Ensine um valor cristão em 10 minutos por dia. Pagamento único desde 4,90 €.",
      },
      { property: "og:title", content: "1001 Parábolas Kids — Ensinar valores com fé" },
      {
        property: "og:description",
        content:
          "Histórias curtas, versículo, lição, missão e oração. Pagamento único desde 4,90 €. Garantia de 15 dias.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function CTA({ label = "SIM! QUERO COMEÇAR AGORA" }: { label?: string }) {
  return (
    <div className="text-center">
      <a
        href="#planos"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-4 text-base font-extrabold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03] sm:text-lg"
      >
        {label} →
      </a>
      <p className="mt-3 text-sm text-brand-dark/70">
        Pagamento único desde 4,90 € · Acesso vitalício · Garantia de 15 dias
      </p>
    </div>
  );
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-4 py-14 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Index() {
  return (
    <main className="bg-brand-cream text-brand-dark">
      <Countdown />

      {/* HERO */}
      <Section className="bg-brand-cream">
        <div className="mx-auto max-w-4xl text-center">
          <img
            src={logoParabolas.url}
            alt="Logo 1001 Parábolas Kids"
            width={80}
            height={80}
            className="mx-auto mb-3 h-20 w-20"
          />
          <span className="inline-block rounded-full bg-brand-gold/25 px-4 py-1 text-sm font-bold text-brand-dark">
            Feito para famílias portuguesas
          </span>
          <h1 className="mt-4 text-4xl leading-tight font-bold sm:text-5xl">
            <span className="text-brand-green">1001 Parábolas Kids</span> para ensinar valores e
            princípios bíblicos às crianças em casa com apenas 10 minutos por dia
          </h1>
          <img
            src={heroParabolas.url}
            alt="Exemplos de parábolas kids com animais e valores bíblicos"
            width={1200}
            height={600}
            loading="eager"
            className="mx-auto mt-6 w-full max-w-3xl rounded-3xl shadow-xl"
          />
          <p className="mt-6 text-lg text-brand-dark/80">
            Histórias que fortalecem a fé e o propósito com{" "}
            <strong>10 minutos por dia</strong>.
          </p>
          <div className="mt-6 text-center">
            <p className="text-base font-extrabold uppercase tracking-wide text-brand-gold">
              Aproveite o desconto
            </p>
            <p className="mt-2 text-2xl font-bold text-red-600 line-through sm:text-3xl">
              De 6,90 €
            </p>
            <p className="text-sm font-semibold">para</p>
            <p className="text-4xl font-bold text-brand-green">4,90 €</p>
          </div>
          <p className="mt-3 text-sm font-bold text-brand-green">
            🛡️ Garantia incondicional de 15 dias — risco zero!
          </p>
          <p className="mt-1 text-sm font-bold text-red-600">
            Sem mensalidades. Paga uma vez e fica com acesso para sempre.
          </p>
          <div className="mt-8">
            <CTA />
          </div>
        </div>
      </Section>

      {/* INTRO */}
      <Section className="bg-brand-dark text-white">
        <p className="mx-auto max-w-3xl text-center text-xl font-semibold sm:text-2xl">
          Feito para pais, professores e catequistas que querem mais do que entreter:{" "}
          <span className="text-brand-gold">
            querem educar com fé e deixar um legado.
          </span>
        </p>
      </Section>

      {/* TEMAS */}
      <Section>
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Veja alguns exemplos destas parábolas incríveis
        </h2>
        <p className="mt-2 text-center text-lg text-brand-dark/80">divididas por temas:</p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {[
            { img: temaEmocoes, emoji: "🧘", t: "Controlo Emocional e Temperamento" },
            { img: temaFe, emoji: "🙏", t: "Fé e Confiança em Deus" },
          ].map((c) => (
            <article key={c.t} className="overflow-hidden rounded-3xl bg-white shadow-md">
              <img
                src={c.img}
                alt={`Parábolas Kids — ${c.t}`}
                width={800}
                height={1000}
                loading="lazy"
                className="h-72 w-full object-cover"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-bold">
                  <span className="text-brand-green">Parábolas Kids — </span>
                  {c.t} {c.emoji}
                </h3>
              </div>
            </article>
          ))}
        </div>

        <ParabolasCarousel />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {temas.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-brand-dark/5"
            >
              <div className="text-3xl">{t.emoji}</div>
              <h3 className="mt-2 text-base font-bold">
                <span className="text-brand-green">Parábolas Kids — </span>
                {t.title}
              </h3>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-lg font-bold text-brand-dark/80">…e muito mais!</p>

        <div className="mt-10">
          <CTA />
        </div>
      </Section>

      {/* BENEFÍCIOS */}
      <Section className="bg-white">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Principais benefícios deste material:
        </h2>
        <ul className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
          {[
            "10 minutos por dia bastam para ensinar um valor cristão",
            "Sem sair de casa, sem material extra — tudo pronto no seu telemóvel",
            "Fortalece o vínculo entre pais e filhos através da Palavra",
            "Pagamento único — sem mensalidades nem renovações",
            "Garantia de 15 dias: se não gostar, devolvemos o seu dinheiro",
            "Pronto para imprimir, usar no tablet ou no computador",
          ].map((b) => (
            <li key={b} className="flex gap-3 rounded-2xl bg-brand-cream p-4">
              <span className="font-bold text-brand-green">✓</span>
              <span className="text-brand-dark/80">{b}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* COMO FUNCIONA */}
      <Section>
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Como funciona — <span className="text-brand-green">simples assim</span>
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Escolha o seu plano",
              d: "Pagamento único de 4,90 € ou 7,90 €. Paga uma vez, acesso vitalício, sem fidelização.",
            },
            {
              t: "Receba o acesso no seu e-mail",
              d: "Acesse tudo no seu e-mail em poucos minutos e comece a usar hoje mesmo.",
            },
            {
              t: "Ensine com 10 minutos por dia",
              d: "Escolha uma parábola, leia com o seu filho e viva o valor daquele dia.",
            },
          ].map((s, i) => (
            <div key={s.t} className="rounded-3xl bg-white p-6 text-center shadow-sm">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-xl font-bold text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-brand-dark/80">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TESTEMUNHOS */}
      <Section className="bg-brand-dark text-white">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          O que dizem sobre este material:
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <a
              key={i}
              href={d.src}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 transition-transform hover:scale-[1.02]"
            >
              <img
                src={d.src}
                alt={d.alt}
                width={400}
                height={500}
                loading="lazy"
                className="h-auto w-full object-cover"
              />
            </a>
          ))}
        </div>
      </Section>

      {/* O QUE RECEBE */}
      <Section className="bg-white">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">O que recebe:</h2>
            <ul className="mt-6 space-y-3 text-brand-dark/80">
              {[
                "📘 Até 1001 Parábolas Kids para ensinar valores com fé e criatividade",
                "🧒 História curtinha e simbólica, com linguagem infantil",
                "📖 Versículo bíblico fácil de memorizar",
                "💛 Lição do dia com aplicação prática",
                "🎯 Missão Kids com desafio leve para viver o que aprendeu",
                "🙏 Oração curtinha para reforçar o valor no coração da criança",
              ].map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <ul className="mt-6 space-y-2">
              {[
                "Organizadas em 10 temas essenciais para a formação do carácter cristão",
                "Pronto para imprimir, usar em tablet, telemóvel ou computador",
                "Conteúdo completo e atualizações mensais incluídas",
                "Visual 100% adaptado ao universo infantil cristão",
              ].map((i) => (
                <li key={i} className="flex gap-2">
                  <span>✅</span>
                  <span className="text-brand-dark/80">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <img
            src={kitAtividades}
            alt="Kit de atividades imprimíveis do 1001 Parábolas Kids"
            width={900}
            height={700}
            loading="lazy"
            className="w-full rounded-3xl shadow-lg"
          />
        </div>
      </Section>

      {/* BÓNUS */}
      <Section>
        <h2 className="text-center text-3xl font-bold sm:text-4xl">
          Bónus <span className="text-brand-green">exclusivos</span> ao subscrever hoje:
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {bonuses.map((b) => (
            <div key={b.n} className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brand-dark/5">
              <h3 className="text-lg font-bold">
                🎁 Bónus <span className="text-brand-green">{b.n}</span> — {b.title}
              </h3>
              <p className="mt-2 text-brand-dark/80">{b.desc}</p>
              <p className="mt-4 text-sm">
                Valor: <span className="font-bold text-brand-gold">{b.value}</span>{" "}
                <span className="ml-2 rounded-full bg-brand-green px-3 py-1 text-xs font-extrabold text-primary-foreground">
                  INCLUÍDO NO PREMIUM
                </span>
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* PLANOS */}
      <Section id="planos" className="bg-white">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">Escolha o seu plano:</h2>
        <p className="mt-3 text-center text-brand-dark/80">
          Dois planos de pagamento único em euros. Paga uma só vez, sem mensalidades, e fica com acesso para sempre — com garantia de 15 dias.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* PLANO BÁSICO */}
          <div className="flex flex-col rounded-3xl bg-brand-cream p-8 ring-1 ring-brand-dark/10">
            <h3 className="text-2xl font-bold">395 Parábolas Kids</h3>
            <p className="mt-1 text-sm text-brand-dark/70">Para começar a ensinar em casa</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl font-bold text-brand-dark">4,90 €</span>
              <span className="pb-1 text-brand-dark/70">pagamento único</span>
            </div>
            <ul className="mt-6 space-y-2 text-brand-dark/80">
              <li>✅ 395 parábolas ilustradas</li>
              <li>✅ Versículo, lição, Missão Kids e oração</li>
              <li>✅ Ficheiros PDF prontos a imprimir</li>
              <li>✅ Acesso em telemóvel, tablet e computador</li>
            </ul>

            <p className="mt-6 text-sm font-bold">Bónus:</p>
            <ul className="mt-2 space-y-2">
              {bonuses.map((b, i) => (
                <li key={b.n} className="flex gap-2 text-sm">
                  {i === 0 ? (
                    <>
                      <span className="text-brand-green">✓</span>
                      <span className="text-brand-dark/80">
                        Bónus {b.n} — {b.title}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-red-600">✕</span>
                      <span className="text-red-600 line-through">
                        Bónus {b.n} — {b.title}
                      </span>
                    </>
                  )}
                </li>
              ))}
            </ul>

            <a
              href="https://checkout.escalepay.com/9086424"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-brand-green px-6 py-3 font-extrabold text-brand-green transition-colors hover:bg-brand-green hover:text-primary-foreground"
            >
              Obter acesso por 4,90 €
            </a>
            <p className="mt-3 text-center text-xs text-brand-dark/70">
              Pagamento único · Garantia de 15 dias
            </p>
          </div>

          {/* PLANO PREMIUM */}
          <div className="relative flex flex-col rounded-3xl bg-brand-dark p-8 text-white shadow-xl">
            <span className="absolute -top-3 left-8 rounded-full bg-brand-gold px-4 py-1 text-xs font-extrabold text-brand-dark">
              MAIS POPULAR
            </span>
            <h3 className="text-2xl font-bold">1001 Parábolas Kids · Premium</h3>
            <p className="mt-1 text-sm text-white/60">Tudo incluído, todos os bónus</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-5xl font-bold text-brand-gold">7,90 €</span>
              <span className="pb-1 text-white/60">pagamento único</span>
            </div>
            <ul className="mt-6 space-y-2 text-white/80">
              <li>✅ 1001 parábolas ilustradas (coleção completa)</li>
              <li>✅ Versículo, lição, Missão Kids e oração</li>
              <li>✅ Ficheiros PDF prontos a imprimir</li>
              <li>✅ Novos conteúdos todos os meses</li>
              <li>✅ +50 virtudes e valores cristãos abordados</li>
            </ul>

            <p className="mt-6 text-sm font-bold">Bónus incluídos:</p>
            <ul className="mt-2 space-y-2">
              {bonuses.map((b) => (
                <li key={b.n} className="flex gap-2 text-sm">
                  <span className="text-brand-gold">✓</span>
                  <span className="text-white/80">
                    Bónus {b.n} — {b.title}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="https://checkout.escalepay.com/7491727"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-brand-green px-6 py-3 font-extrabold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              Obter Premium por 7,90 €
            </a>
            <p className="mt-3 text-center text-xs text-white/60">
              Pagamento único · Garantia de 15 dias
            </p>
          </div>
        </div>

        {/* COMPARAÇÃO */}
        <div className="mt-12 overflow-x-auto rounded-3xl ring-1 ring-brand-dark/10">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-brand-cream">
              <tr>
                <th className="p-4">Comparação de planos</th>
                <th className="p-4 text-center">395 Parábolas · 4,90 €</th>
                <th className="p-4 text-center">Premium 1001 · 7,90 €</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-dark/10 bg-white">
              {[
                ["Número de parábolas", "395", "1001"],
                ["Missão Kids e oração", "sim", "sim"],
                ["PDF para imprimir", "sim", "sim"],
                ["Novos conteúdos mensais", "nao", "sim"],
                [`Bónus 1 — ${bonuses[0]!.title}`, "sim", "sim"],
                [`Bónus 2 — ${bonuses[1]!.title}`, "nao", "sim"],
                [`Bónus 3 — ${bonuses[2]!.title}`, "nao", "sim"],
                [`Bónus 4 — ${bonuses[3]!.title}`, "nao", "sim"],
              ].map(([label, a, b]) => (
                <tr key={label}>
                  <td className="p-4 text-brand-dark/80">{label}</td>
                  <td className="p-4 text-center">
                    {a === "sim" ? (
                      <span className="font-bold text-brand-green">✓</span>
                    ) : a === "nao" ? (
                      <span className="font-bold text-red-600">✕</span>
                    ) : (
                      <span className="font-bold">{a}</span>
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {b === "sim" ? (
                      <span className="font-bold text-brand-green">✓</span>
                    ) : (
                      <span className="font-bold">{b}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center text-sm text-brand-dark/70">
          ⚠️ Preços promocionais válidos apenas hoje · IVA incluído
        </p>
      </Section>

      {/* GARANTIA */}
      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 text-center shadow-sm">
          <div className="text-5xl">🛡️</div>
          <h2 className="mt-4 text-2xl font-bold">Garantia de satisfação de 15 dias</h2>
          <p className="mt-3 text-brand-dark/80">
            Tem 15 dias para experimentar todo o conteúdo sem qualquer risco. Se não gostar, basta
            pedir o reembolso por e-mail — sem burocracia e sem perguntas. Devolvemos o valor na
            totalidade.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white">
        <h2 className="text-center text-3xl font-bold sm:text-4xl">❓ Perguntas frequentes</h2>
        <div className="mx-auto mt-8 max-w-3xl space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl bg-brand-cream p-5 ring-1 ring-brand-dark/5"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-bold">
                {f.q}
                <span className="text-brand-green transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-brand-dark/80">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-10">
          <CTA label="QUERO GARANTIR O MEU ACESSO" />
        </div>
      </Section>

      <footer className="bg-brand-dark px-4 py-10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} 1001 Parábolas Kids. Todos os direitos reservados.</p>
        <p className="mt-2">
          Conteúdo protegido por direitos de autor. Reprodução não autorizada sujeita a penalizações
          legais.
        </p>
      </footer>
    </main>
  );
}
