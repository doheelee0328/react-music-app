import React from 'react'
import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { screen, render, cleanup } from '@testing-library/react'

import { MemoryRouter } from 'react-router-dom'

import matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)

import Navbar from './Navbar'

describe('PageWrapper component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    )
  })

  it('should display navbar 2 children', () => {
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    expect(nav.childNodes.length).toBe(2)
  })
})
