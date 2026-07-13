export interface SlideMeta {
  id: number;
  hash: string;
  label: string;
}

export const TOTAL_SLIDES = 6;

export const slideMeta: SlideMeta[] = [
  { id: 1, hash: 'slide-1', label: 'Сейчас всё работает' },
  { id: 2, hash: 'slide-2', label: 'Рост сложности' },
  { id: 3, hash: 'slide-3', label: 'Одна форма' },
  { id: 4, hash: 'slide-4', label: 'Преимущества' },
  { id: 5, hash: 'slide-5', label: 'Развитие без риска' },
  { id: 6, hash: 'slide-6', label: 'Варианты сотрудничества' },
];

/* ── Slide 1 ── */

export type ServiceIconId = 'tilda' | 'bothelp' | 'tables' | 'mail' | 'manual';

export interface ServiceItem {
  name: string;
  icon: ServiceIconId;
}

export const slide1 = {
  title: 'Сейчас всё работает',
  paragraphs: [
    'Сайт и бот уже помогают запускать и продвигать спектакли.',
    'Но информация хранится и обновляется в нескольких разных сервисах.',
  ],
  services: [
    { name: 'Tilda', icon: 'tilda' },
    { name: 'BotHelp', icon: 'bothelp' },
    { name: 'Таблицы', icon: 'tables' },
    { name: 'Рассылки', icon: 'mail' },
    { name: 'Ручные обновления', icon: 'manual' },
  ] satisfies ServiceItem[],
  takeaway: 'Сегодня система справляется с текущим объёмом.',
};

/* ── Slide 2 ── */

export const slide2 = {
  titleLines: [
    'Чем больше спектаклей, тем сложнее',
    'всё контролировать',
  ],

  mainText:
    'Сайт и бот обновляются отдельно, поэтому растут нагрузка и риск ошибок.',

  exampleLabel: 'РЕАЛЬНЫЙ ПРИМЕР',

  exampleText:
    'После публикации страницы спектакля его добавили в афишу и слайдер на главной. Позже дата изменилась, но обновление внесли только на странице спектакля. В афише и слайдере осталась старая дата',

  places: [
    {
      title: 'Страница спектакля',
      status: 'обновили',
      emphasized: true,
    },
    {
      title: 'Афиша',
      status: 'забыли обновить',
      emphasized: false,
    },
    {
      title: 'Слайдер на главной',
      status: 'забыли обновить',
      emphasized: false,
    },
  ],

  takeaway:
    'Собственная автоматизированная система сводит риск ошибок синхронизации к 0%',
};

/* ── Slide 3 ── */

export const slide3 = {
  titleLines: [
    'Один раз заполняем — система делает',
    'остальное',
  ],

  formLabel: 'ФОРМА',

  formFields: [
    {
      type: 'text',
      label: 'Название спектакля',
      value: 'Гамлет',
      span: 'full',
    },
    {
      type: 'textarea',
      label: 'Описание',
      value: 'Краткое описание спектакля для сайта и афиши.',
      span: 'full',
    },
    {
      type: 'date',
      label: 'Дата спектакля',
      value: '14 октября 2026',
      span: 'half',
    },
    {
      type: 'select',
      label: 'Площадка',
      value: 'Основная сцена',
      span: 'half',
    },
    {
      type: 'url',
      label: 'Ссылка на билеты',
      value: 'stereodrama.ru/tickets',
      span: 'full',
    },
    {
      type: 'upload',
      label: 'Афиша',
      value: 'poster-a3.pdf',
      span: 'half',
    },
    {
      type: 'upload',
      label: 'Обложка',
      value: 'cover.jpg',
      span: 'half',
    },
  ],

  formFooterLabel: 'Заполняется один раз',
  formFooterAction: 'Сохранить',

  resultLabel: 'РЕЗУЛЬТАТ',

  resultItems: [
    'Страница спектакля',
    'Архив',
    'Главная страница',
    'Афиша',
    'Данные для рассылок',
    'Новости',
  ],

  resultNote: 'Информация обновляется на всем сайте',

  takeaway:
    'Данные спектакля вводятся один раз и автоматически используются во всех разделах и каналах.',
};

/* ── Slide 4 ── */

export const slide4 = {
  title: 'Что даст собственная платформа',

  groups: [
    {
      index: '01',
      label: 'РАБОТА',
      benefits: [
        'Быстрые публикации',
        'Меньше ошибок',
        'Меньше ручных действий',
      ],
    },
    {
      index: '02',
      label: 'ПРОДВИЖЕНИЕ',
      benefits: [
        'Больше свободы в дизайне',
        'Лучше для продвижения и SEO',
        'Единый стиль во всех каналах',
      ],
    },
    {
      index: '03',
      label: 'МАСШТАБ',
      benefits: [
        'Единая база спектаклей и аудитории',
        'Предсказуемые расходы при росте',
        'Проще подключать новые сервисы',
      ],
    },
  ],
};

/* ── Slide 5 ── */

export type Slide5StageIconId =
  | 'layers'
  | 'panels-top-left'
  | 'database'
  | 'workflow'
  | 'bot';

export interface Slide5Stage {
  index: string;
  title: string;
  icon: Slide5StageIconId;
  current: boolean;
}

export const slide5 = {
  title: 'Развитие без риска',

  description:
    'Мы не ломаем то, что уже работает. Текущий сайт и бот продолжают работать, пока новая система создаётся параллельно.',

  stages: [
    {
      index: '01',
      title: 'Текущая система',
      icon: 'layers',
      current: true,
    },
    {
      index: '02',
      title: 'Новый сайт и админка',
      icon: 'panels-top-left',
      current: false,
    },
    {
      index: '03',
      title: 'Единая база',
      icon: 'database',
      current: false,
    },
    {
      index: '04',
      title: 'Автоматизации',
      icon: 'workflow',
      current: false,
    },
    {
      index: '05',
      title: 'Собственный бот',
      icon: 'bot',
      current: false,
    },
  ] satisfies Slide5Stage[],

  takeaway: 'Переход происходит постепенно в течение года.',
};

/* ── Slide 6 ── */

export const slide6 = {
  title: 'Два варианта сотрудничества',

  description:
    'Поддерживать текущую систему или параллельно создавать собственную платформу.',

  offers: [
    {
      index: '01',
      label: 'ПОДДЕРЖКА',
      price: '15 000 ₽',
      period: 'в месяц',
      title: 'Поддержка текущего сайта и бота',
      accent: false,
      features: [
        'Изменения на сайте',
        'Страницы спектаклей',
        'Архив',
        'Рассылки',
        'Простые сценарии и опросы',
      ],
    },
    {
      index: '02',
      label: 'РАЗВИТИЕ',
      price: '25 000 ₽',
      period: 'в месяц',
      title: 'Поддержка и развитие собственной платформы',
      accent: true,
      features: [
        'Всё из первого варианта',
        'Поэтапная разработка собственной платформы',
        'Автоматизация публикаций',
        'Единая база',
        'Подготовка к росту проекта',
      ],
    },
  ],

  takeaway: 'Можно начать с поддержки и перейти к развитию, когда будете готовы.',
};
