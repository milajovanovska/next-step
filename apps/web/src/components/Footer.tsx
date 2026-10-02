import ApiStatus from './ApiStatus'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="max-w-2xl text-sm text-muted">
          NEXTSTEP ти помага да ги истражиш опциите, а одлуката е секогаш твоја.
        </p>

        {import.meta.env.DEV && (
          <div className="mt-4">
            <ApiStatus />
          </div>
        )}
      </div>
    </footer>
  )
}