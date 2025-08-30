import { ReactNode } from 'react'

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <section className='pt-[56px] md:pt-[92px]'>
        {children}
      </section>
    </div>
  )
}
