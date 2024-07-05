import prisma from '@/lib/prisma'
import Reload from './reload'
import Image from 'next/image'
import { timeAgo } from '@/lib/utils'
export const dynamic = 'force-dynamic'

export default async function Table() {
  const startTime = Date.now()
  // const wisata = await prisma.dtw.findMany({
  //   orderBy: {
  //   id: 'asc',
  // },
  // })
  const duration = Date.now() - startTime

  return (
    <div className="bg-white p-12 shadow-lg ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-full mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Daya Tarik Wisata</h2>
          <p className="text-sm text-gray-500">
            {/* Fetched {wisata.length} users in {duration}ms */}
          </p>
        </div>
        <Reload/>
      </div>
      <div className="divide-y divide-gray-900/5">
        {/* {wisata.map((dtw) => (
          <div
            key={dtw.id}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <Image
                src={dtw.imageUrl}
                alt={dtw.title}
                unoptimized
                width={128}
                height={128}
                className="rounded ring-1 ring-gray-900/5"
              />
              <div className="space-y-1">
                <p className="font-medium leading-none">{dtw.title}</p>
                <p className="text-sm text-gray-500">{dtw.description}</p>
              </div>
            </div>
            <p className="text-sm text-gray-500">{dtw.address}</p>
          </div>
        ))} */}
      </div>
    </div>
  )
}