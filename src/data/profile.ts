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
  location: string;
  role: string;
  headline: string;
  bio: string[];
  contacts: Contact[];
  portrait?: Portrait;
  resume?: Contact;
};

export const profile: Profile = {
  name: 'Мария Першина',
  greeting: 'Привет! Я',
  location: 'Пермь',
  role: 'UX/UI-дизайнер B2B',
  headline: 'Проектирую сложные интерфейсы и делаю их понятными.',
  bio: [
    'Работаю в «Тензоре» над текстовым редактором Saby. Он используется в документах, заметках, корпоративном мессенджере и ещё в 50+ местах внедрения.',
    'Активно внедряю вайбкодинг в рабочие и личные проекты.',
  ],
  contacts: [
    { label: 'Email', href: 'mailto:mariabaranova97@yandex.ru' },
  ],
};

export const showDraftsOnHome = true;
