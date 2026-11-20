import type { ImageMetadata } from 'astro';
import portrait from '../assets/portfolio/maria-pershina.webp';

type Contact = {
  label: string;
  href: string;
  icon?: 'email' | 'telegram';
};

type Portrait = {
  image: ImageMetadata;
  alt: string;
};

type Profile = {
  name: string;
  greeting: string;
  role: string;
  bio: string[];
  contacts: Contact[];
  portrait?: Portrait;
  resume?: Contact;
};

export const profile: Profile = {
  name: 'Мария Першина',
  greeting: 'Привет! Я',
  role: 'UX/UI дизайнер в B2B',
  portrait: { image: portrait, alt: 'Мария Першина' },
  bio: [
    'Проектирую текстовый редактор для экосистемы Saby',
    'Активно внедряю вайбкодинг в рабочие и личные проекты',
  ],
  contacts: [
    { label: 'Email', icon: 'email', href: 'mailto:mariabaranova97@yandex.ru' },
    { label: 'Telegram', icon: 'telegram', href: 'https://t.me/mariaa_pershina' },
  ],
};

export const showDraftsOnHome = true;
