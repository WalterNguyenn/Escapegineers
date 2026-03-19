'use client'

import Image from 'next/image'
import { useState, type ReactNode } from 'react'

type RoomId = 'mung-office'

const ROOMS: Record<
  RoomId,
  { label: string; story: ReactNode; gallery: { src: string; alt: string }[] }
> = {
  'mung-office': {
    label: "Mung Chang's Office",
    story: (
      <div className="space-y-4 font-body text-light-muted dark:text-dark-muted">
        <p>
          Students of Purdue are placed in an escape room wherein they have to compete for the
          final internship interview with President Mung Chiang. After a few bits of introduction
          video, Chiang locks the door behind him and announces over an intercom, &quot;The final
          test has begun.&quot;
        </p>
        <p>
          This room is transformed into a challenge of puzzles inspired by engineering. Each puzzle
          works as individual entries from Chiang&apos;s private engineering logs. Each entry
          focuses on one different aspect of engineering, whether it be mechanical, electrical,
          computer, and more.
        </p>
        <p>
          In order to win this ultimate prize, players must be able to unlock a chest that contains
          Purdue Pete&apos;s hammer along with a replica liberty bell. Ringing this bell with the
          hammer signals the players&apos; victory, thus proving that they are ready to &quot;earn
          the internship.&quot;
        </p>
      </div>
    ),
    gallery: [
      { src: '/images/MungChang2.png', alt: 'Mung Chiang office escape room set' },
      { src: '/images/Breadboardingdisplay.jpg', alt: 'Breadboard puzzle display' },
      { src: '/images/MungChangPlans1.png', alt: 'Room planning and puzzle notes' },
    ],
  },
}

export default function RoomDocumentation() {
  const [roomId, setRoomId] = useState<RoomId>('mung-office')
  const room = ROOMS[roomId]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-heading text-3xl font-bold text-light-gold dark:text-dark-gold">
          Room Story &amp; Inspiration
        </h2>
        <label className="flex flex-col gap-1 text-sm font-body text-light-muted dark:text-dark-muted sm:items-end">
          <span className="sr-only">Select room</span>
          <span className="hidden sm:inline">Choose a room</span>
          <select
            value={roomId}
            onChange={(e) => setRoomId(e.target.value as RoomId)}
            className="rounded-md border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-surface px-3 py-2 font-body text-light-text dark:text-dark-text shadow-sm focus:outline-none focus:ring-2 focus:ring-light-gold dark:focus:ring-dark-gold"
          >
            {Object.entries(ROOMS).map(([id, { label }]) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      {room.story}

      <div className="grid gap-4 sm:grid-cols-3">
        {room.gallery.map(({ src, alt }) => (
          <div
            key={src}
            className="relative aspect-[4/3] overflow-hidden rounded-lg border border-light-border dark:border-dark-border bg-light-card dark:bg-dark-surface"
          >
            <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 640px) 33vw, 100vw" />
          </div>
        ))}
      </div>
    </div>
  )
}
