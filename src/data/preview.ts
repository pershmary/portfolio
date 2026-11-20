import type { ImageMetadata } from 'astro';

const previews = import.meta.env.DEV
  ? import.meta.glob<{ default: ImageMetadata }>('../assets/work-preview/*.webp')
  : {};

export async function previewImage(key: string) {
  return (await previews[`../assets/work-preview/${key}.webp`]?.())?.default;
}
