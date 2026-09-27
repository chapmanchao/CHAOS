import { cx } from '@/lib/cx'
import { publicAssetPath } from '@/lib/publicAsset'

/**
 * The CHAOS wordmark — rendered from the graffiti logo asset (`chaos-logo.png`).
 *
 * The mark is a wide (~1.9:1) wordmark, so each size is expressed as a fixed
 * height with the width left to follow the image's aspect ratio. It sheds no
 * parts as it shrinks — the whole wordmark simply scales.
 */
export type BrandSealSize = 'sm' | 'md' | 'lg' | 'xl'

/** Height per size; width follows the wordmark's aspect ratio. */
const SIZES: Record<BrandSealSize, string> = {
  sm: 'h-6',
  md: 'h-8',
  lg: 'h-[38px]',
  xl: 'h-20',
}

export type BrandSealProps = {
  size?: BrandSealSize
  className?: string
}

export function BrandSeal({ size = 'md', className }: BrandSealProps) {
  return (
    <img
      // Decorative: the product name sits next to the mark in the sidebar and
      // above it on the empty state, so announcing the brand twice is noise.
      aria-hidden="true"
      src={publicAssetPath('chaos-logo.png')}
      alt=""
      className={cx('flex-shrink-0 w-auto object-contain', SIZES[size], className)}
    />
  )
}
