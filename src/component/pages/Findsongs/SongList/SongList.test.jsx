import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import { songs } from '../ArtistSongs/ArtistSongs'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import SongLists from '../SongList/SongLists'

describe('SongList component', () => {
  beforeEach(() => {
    render(<SongLists />)
  })
})
