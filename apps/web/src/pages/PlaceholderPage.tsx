import { Link } from 'react-router-dom'

type PlaceholderPageProps = {
  title: string
  description: string
  phase: string
}

export default function PlaceholderPage({ title, description, phase }: PlaceholderPageProps) {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted">
        Наскоро · {phase}
      </p>
      <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">{title}</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">{description}</p>
      <Link
        to="/"
        className="mt-8 inline-block text-sm font-semibold text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        ← Назад на почетна
      </Link>
    </div>
  )
}