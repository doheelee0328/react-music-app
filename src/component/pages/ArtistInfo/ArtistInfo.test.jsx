import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import ArtistInfo from './ArtistInfo'

describe('ArtistInfo', () => {
  beforeEach(() => {
    render(<ArtistInfo></ArtistInfo>)
  })
  it('should have the right heading', () => {
    const title = screen.getByRole('heading', { name: 'Blackpink' })
    expect(title).toBeInTheDocument()
  })
})
