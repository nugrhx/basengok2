import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from './components/table'
import TablePlaceholder from './components/tablePlaceholder'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center">
     
      <Suspense fallback={<TablePlaceholder />}>
        <Table />
      </Suspense>

      </div>
  )
}