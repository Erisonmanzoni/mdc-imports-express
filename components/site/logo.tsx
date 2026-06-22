import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  showText = true,
}: {
  className?: string
  showText?: boolean
}) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      <span className="relative flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[color:var(--dourado)]/40 bg-[#f3ead9] shadow-[0_4px_20px_rgba(212,175,55,0.35)]">
        <Image
          src="/images/mdc-logo.png"
          alt="MDC Imports Express"
          width={120}
          height={150}
          priority
          className="h-full w-full scale-[1.55] object-cover object-top"
          style={{ objectPosition: '50% 26%' }}
        />
      </span>
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-base font-extrabold tracking-tight text-foreground sm:text-lg">
            MDC <span className="gold-gradient-text">IMPORTS</span>
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Express
          </span>
        </span>
      )}
    </div>
  )
}
