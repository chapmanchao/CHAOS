import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { describe, expect, it } from 'vitest'

import { BrandSeal } from './BrandSeal'

const SIZES = ['sm', 'md', 'lg', 'xl'] as const

describe('BrandSeal', () => {
  it('is decorative and hidden from assistive tech', () => {
    // The product name always sits beside the mark (sidebar) or under it
    // (empty state); announcing the brand again reads it twice.
    const { container } = render(<BrandSeal />)
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders the graffiti wordmark asset', () => {
    // The mark is the graffiti CHAOS logo bitmap, not an inline vector.
    const { container } = render(<BrandSeal />)
    const img = container.firstElementChild!
    expect(img.tagName).toBe('IMG')
    expect(img.getAttribute('src')).toMatch(/chaos-logo\.png/)
  })

  it('carries an empty alt so it stays purely decorative', () => {
    // aria-hidden already silences it; an empty alt keeps it out of the
    // accessibility tree even where aria-hidden is ignored.
    const { container } = render(<BrandSeal />)
    expect(container.firstElementChild).toHaveAttribute('alt', '')
  })

  it('scales by a fixed height at every size, width left to the aspect ratio', () => {
    // The whole wordmark simply scales — no part is shed — so each size is a
    // fixed height with w-auto letting the width follow the image.
    const heights: Record<(typeof SIZES)[number], string> = {
      sm: 'h-6',
      md: 'h-8',
      lg: 'h-[38px]',
      xl: 'h-20',
    }
    for (const size of SIZES) {
      const { container, unmount } = render(<BrandSeal size={size} />)
      const img = container.firstElementChild!
      expect(img.className).toContain(heights[size])
      expect(img.className).toContain('w-auto')
      unmount()
    }
  })

  it('merges a caller className onto the mark', () => {
    const { container } = render(<BrandSeal className="opacity-50" />)
    expect(container.firstElementChild!.className).toContain('opacity-50')
  })
})
