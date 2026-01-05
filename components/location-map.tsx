import { Map } from '@/components/ui/map'

export function LocationMap() {
  return (
    <div className="h-[400px] w-full overflow-hidden rounded-2xl ring-1 ring-zinc-200/50 ring-inset dark:ring-zinc-800/50">
      <Map center={[-49.0661, -26.9194]} zoom={13} />
    </div>
  )
}
