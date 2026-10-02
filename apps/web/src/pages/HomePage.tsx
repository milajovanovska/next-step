import { Link } from 'react-router-dom'

type ModeCardProps = {
  to: string
  eyebrow: string
  title: string
  description: string
}

function ModeCard({ to, eyebrow, title, description }: ModeCardProps) {
  return (
    <Link
      to={to}
      className="group flex flex-col rounded-md border border-line bg-card p-6 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:p-8"
    >
      <span className="text-xs font-semibold uppercase tracking-widest text-muted">
        {eyebrow}
      </span>
      <span className="mt-3 font-serif text-2xl font-semibold">{title}</span>
      <span className="mt-3 text-muted">{description}</span>
      <span className="mt-6 text-sm font-semibold text-accent">
        Започни <span aria-hidden="true">→</span>
      </span>
    </Link>
  )
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">
        Не знаеш што сакаш? Во ред е, на вистинското место си!
      </p>

      <h1 className="mt-4 max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-6xl">
        Ајде прво да те запознаеме.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-muted">
        Не мора да имаш идеја што сакаш да студираш. Со неколку прашања ќе ти
        предложам реални насоки, а потоа ќе видиш што можеш да студираш, каде, колку
        чини и што треба да направиш за да аплицираш.
      </p>

      <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6">
        <ModeCard
          to="/assessment/chat"
          eyebrow="Начин 1"
          title="Разговор со NEXTSTEP"
          description="Пишувај природно, со свои зборови. Асистентот ќе те прашува и ќе разбира што велиш."
        />
        <ModeCard
          to="/assessment/classic"
          eyebrow="Начин 2"
          title="Класичен прашалник"
          description="Јасни прашања со понудени одговори. Ги избираш само прашањата што се релевантни за тебе."
        />
      </div>

      <p className="mt-8 max-w-2xl text-sm text-muted">
        Двата начина градат ист профил. Можеш да префрлиш од еден на друг во секое
        време, без да ги изгубиш одговорите.
      </p>
    </div>
  )
}