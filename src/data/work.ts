import { getCollection, type CollectionEntry } from 'astro:content';
import { profile, showDraftsOnHome } from './profile';

const byOrder = <T extends { data: { order: number; title: string } }>(a: T, b: T) =>
  a.data.order - b.data.order || a.data.title.localeCompare(b.data.title, 'ru');

const cases = (await getCollection('cases')).sort(byOrder);

export const publishedCases = cases.filter(({ data }) => data.status === 'published');

export function validatePublishedCase(entry: CollectionEntry<'cases'>) {
  if (!entry.body?.trim() || !entry.data.cover) {
    throw new Error(`Для публикации кейса «${entry.data.title}» нужны текст и обложка.`);
  }
}

export const homeCases = cases.filter(({ data }) =>
  data.showOnHome &&
  (data.status === 'published' || showDraftsOnHome) &&
  (Boolean(data.cover) || import.meta.env.DEV)
);

export const homeConcepts = (await getCollection('concepts')).sort(byOrder).filter(({ data }) =>
  import.meta.env.DEV || data.images.every(({ src }) => Boolean(src))
);

export const showWork = homeCases.length > 0;
export const showConcepts = homeConcepts.length > 0;
export const profileDescription = `${profile.name} — ${profile.role}. Проектирую текстовый редактор Saby.`;
