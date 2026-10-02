import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-20">
      <p className="text-sm font-semibold uppercase tracking-widest text-muted">Грешка 404</p>
      <h1 className="mt-3 font-serif text-4xl font-semibold sm:text-5xl">
        Оваа страница не постои.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">
        Можеби линкот е погрешен или страницата е преместена.
      </p>
      <Link
        to="/"
        className="mt-8 inline-block text-sm font-semibold text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        ← Назад на почетна
      </Link>
    </div>
  )
}