import Image from 'next/image'
import { HeartHandshake, Puzzle, UserRound } from 'lucide-react'
import { Reveal } from './reveal'

const differentials = [
  {
    icon: UserRound,
    title: 'Atendimento Individualizado',
    text: 'Você fala direto com quem desenvolve. Conhecemos sua empresa a fundo para criar a solução certa.',
    style: 'bg-brand-gradient text-white',
    iconStyle: 'bg-white/20 text-white',
    textStyle: 'text-white/85',
  },
  {
    icon: Puzzle,
    title: 'Soluções Flexíveis Sob Medida',
    text: 'Nada de pacotes engessados: cada projeto é desenhado conforme o momento e o orçamento do seu negócio.',
    style: 'bg-white text-ink border border-border',
    iconStyle: 'bg-gradient-to-br from-indigo-brand to-electric text-white',
    textStyle: 'text-muted-foreground',
  },
  {
    icon: HeartHandshake,
    title: 'Parceria e Suporte Contínuo',
    text: 'Seguimos juntos depois da entrega, com suporte, monitoramento e evolução constante da sua presença web.',
    style: 'bg-gradient-to-br from-turquoise to-electric text-white',
    iconStyle: 'bg-white/20 text-white',
    textStyle: 'text-white/85',
  },
]

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-mesh-light py-20 md:py-28">
      <Image
        src="/images/logo-quality-arts-icone.png"
        alt=""
        aria-hidden="true"
        width={648}
        height={523}
        className="pointer-events-none absolute -right-24 -bottom-20 w-[28rem] opacity-[0.05]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-6 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rotate-6 rounded-[2.5rem] bg-gradient-to-br from-electric/25 via-turquoise/20 to-indigo-brand/25" />
          <div className="relative rounded-[2rem] border border-white bg-white p-10 shadow-[0_40px_80px_-35px_rgb(0_74_143/0.5)]">
            <Image
              src="/images/logo-quality-arts-vertical.png"
              alt="Logomarca vertical Quality Arts Soluções Web"
              width={844}
              height={841}
              className="h-auto w-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-4 rounded-2xl bg-gold-gradient px-5 py-3 font-heading font-extrabold text-ink shadow-xl animate-float">
            Santa Rita do Sapucaí - MG
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-electric/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-electric">
              <span className="size-1.5 rounded-full bg-turquoise" />
              Nossa Essência
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight text-ink md:text-4xl lg:text-5xl">
              Nosso Foco é Você e o <span className="text-gradient-brand">Seu Sucesso na Web.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-6 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                Acreditamos que desenvolver relacionamentos pessoais com nossos clientes é crucial para criar uma solução
                adequada através dos nossos serviços de comunicação. Orgulhamo-nos da nossa capacidade de oferecer a
                atenção individual que merecem. Quanto mais conhecemos sobre você e sua empresa, melhor podemos ajudá-lo a
                atingir seus objetivos.
              </p>
              <p>
                Na Quality Arts nosso foco está em você: nossa equipe adora o que faz e prospera aprendendo mais sobre seus
                negócios, atividades e necessidades na WEB para liderar sua empresa rumo ao sucesso sólido.
              </p>
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {differentials.map((d, i) => (
              <Reveal as="li" key={d.title} delay={150 + i * 100}>
                <div
                  className={`h-full rounded-2xl p-5 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl ${d.style}`}
                >
                  <span className={`grid size-11 place-items-center rounded-xl ${d.iconStyle}`}>
                    <d.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-bold leading-snug">{d.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${d.textStyle}`}>{d.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
