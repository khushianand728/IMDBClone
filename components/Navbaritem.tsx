"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
export default function Navbaritem({title,param}) {
  const searchParams= useSearchParams()
  const genre=searchParams.get('genre')
  return (
    <div>
      <Link
       className={`hover:text-amber-600 font-semibold ${genre === param ? 'underline':''}`}
      
      href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
