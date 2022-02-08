import React, { useState } from 'react'
import { XIcon } from '@heroicons/react/solid'
import ReactPlayer from 'react-player'

type Props = {
  buttonText: string
  videoKey: string
}

export default function VideoPlayer({ buttonText, videoKey }: Props) {
  const [showPlayer, setShowPlayer] = useState<boolean>(false)

  return (
    <>
      <div className="mt-12">
        <button
          onClick={() => setShowPlayer(true)}
          type="button"
          className="flex items-center px-5 py-4 font-semibold text-gray-900 transition duration-150 ease-in-out bg-orange-500 rounded hover:bg-orange-600"
        >
          <svg className="w-6 fill-current" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          </svg>
          <span className="ml-2">{buttonText}</span>
        </button>
      </div>

      <div>
        {showPlayer && (
          <div
            className="fixed inset-0 z-50 w-full h-screen bg-black opacity-90"
            onClick={() => setShowPlayer(false)}
            aria-hidden="true"
          />
        )}

        <div
          className={`fixed inset-x-[7%] top-20  left-0 overflow-hidden rounded transition duration-1000 md:inset-x-[13%] ${
            showPlayer ? 'z-50 block' : 'hidden'
          }`}
        >
          <div className="flex items-center justify-between bg-black p-3.5 text-right text-[#f9f9f9]">
            <span className="font-semibold">Trailer</span>
            <button
              type="button"
              className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg opacity-50 hover:bg-[#0F0F0F] hover:opacity-75"
              onClick={() => setShowPlayer(false)}
            >
              <XIcon className="h-5" />
            </button>
          </div>
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoKey}`}
              width="100%"
              height="100%"
              style={{ position: 'absolute', top: '0', left: '0' }}
              controls
              playing={showPlayer}
            />
          </div>
        </div>
      </div>
    </>
  )
}
