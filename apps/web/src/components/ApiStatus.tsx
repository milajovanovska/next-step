import { useQuery } from '@tanstack/react-query'

type Health = {
  status: string
  app: string
  time: string
}

async function fetchHealth(): Promise<Health> {
  const res = await fetch('/api/health')
  if (!res.ok) throw new Error('Бекендот не одговара')
  return res.json()
}
export default function ApiStatus() {
  const { data, isError, isPending } = useQuery({
    queryKey: ['health'],
    queryFn: fetchHealth,
    retry: false,
  })

  let text = 'Проверувам врска со бекендот…'
  let dot = 'bg-stone-400'

  if (data) {
    text = `${data.app}: ${data.status}`
    dot = 'bg-emerald-600'
  } else if (isError) {
    text = 'Бекендот не одговара'
    dot = 'bg-red-600'
  }

  return (
    <p className="flex items-center gap-2 text-xs text-muted" aria-live="polite">
      <span className={`inline-block h-2 w-2 rounded-full ${dot}`} aria-hidden="true" />
      <span>{isPending ? 'Проверувам врска со бекендот…' : text}</span>
    </p>
  )
}