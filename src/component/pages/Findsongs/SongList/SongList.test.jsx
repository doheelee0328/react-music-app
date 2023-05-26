import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import SongLists from '../SongList/SongLists'

describe('SongList component', () => {
  it('should display song information correctly', () => {
    const filterSongs = [
      {
        songId: 1,
        name: 'Whistle',
        releaseDate: 'August 8, 2016',
        coverArt: 'song1.jpg',
        audio: 'song1.mp3',
      },
    ]
    render(<SongLists filterSongs={filterSongs} />)

    filterSongs.forEach(({ name, releaseDate, coverArt, audio }) => {
      const songName = screen.getByText(name)
      expect(songName).toBeInTheDocument()

      const songReleaseDate = screen.getByText(releaseDate)
      expect(songReleaseDate).toBeInTheDocument()

      const songImage = screen.getByAltText(name)
      expect(songImage.src).toContain(coverArt)

      const songAudio = screen.getByTestId('audio')
      const sourceElement = songAudio.querySelector('source')
      expect(sourceElement.src).toContain(audio)
    })
  })
})
