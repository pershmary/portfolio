import type { ImageMetadata } from 'astro';

type Contact = {
  label: string;
  href: string;
};

type Portrait = {
  image: ImageMetadata;
  alt: string;
};

type Profile = {
  name: string;
  greeting: string;
  role: string;
  bio: string;
  contacts: Contact[];
  portrait?: Portrait;
  resume?: Contact;
};

export const profile: Profile = {
  name: 'Мария Першина',
  greeting: 'Привет! Я',
  role: 'UX/UI дизайнер в B2B',
  bio: 'Работаю в "Тензоре" - мы делаем экосистему для бизнеса под брендом Saby. Проектирую текстовый редактор, который используется практически везде в Saby: собственный редактор документов, заметки, корпоративный мессенджер, создание новостей и еще 50+ мест внедрения. Активно внедряю вайбкодинг в рабочие и личные проекты',
  contacts: [
    { label: 'Email', href: 'mailto:mariabaranova97@yandex.ru' },
    { label: 'Telegram', href: 'https://t.me/mariaa_pershina' },
  ],
};

export const showDraftsOnHome = true;
