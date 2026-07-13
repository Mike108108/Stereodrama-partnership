# STEREODRAMA — Интерактивная презентация

Веб-презентация на русском языке о развитии платформы STEREODRAMA.  
6 полноэкранных слайдов с единой дизайн-системой, навигацией и progress bar.

## Технологии

- Vite
- React 19
- TypeScript
- CSS Modules

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:5173](http://localhost:5173) в браузере.

## Production-сборка

```bash
npm run build
npm run preview
```

## Навигация

| Действие | Управление |
|---|---|
| Следующий слайд | `→`, `Space`, `Enter`, свайп влево |
| Предыдущий слайд | `←`, свайп вправо |
| Переход к слайду | Клик по точкам навигации |
| Прямая ссылка | `#slide-1` … `#slide-6` |

## Структура проекта

```
src/
├── components/
│   ├── Card/              — переиспользуемая карточка
│   ├── DecorativeBackground/ — фоновые градиенты и кольца
│   ├── Navigation/        — стрелки и точки
│   ├── ProgressBar/       — нижний progress bar
│   ├── SlideLayout/       — общий layout слайда
│   └── SlideNumber/       — номер слайда
├── data/
│   └── slides.ts          — весь текстовый контент
├── hooks/
│   └── usePresentation.ts — логика навигации
├── slides/
│   ├── Slide1.tsx … Slide6.tsx
│   └── slides.module.css  — общие стили слайдов
└── styles/
    ├── variables.css      — CSS variables (цвета, типографика)
    └── global.css
```

## Редактирование контента

Весь текст находится в `src/data/slides.ts`. Измените нужные поля — слайды обновятся автоматически.

## Деплой на Netlify

### Вариант 1: через Git

1. Загрузите репозиторий на GitHub / GitLab / Bitbucket.
2. В [Netlify](https://app.netlify.com) нажмите **Add new site → Import an existing project**.
3. Выберите репозиторий.
4. Netlify автоматически подхватит настройки из `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Нажмите **Deploy site**.

### Вариант 2: через Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Вариант 3: drag & drop

```bash
npm run build
```

Перетащите папку `dist` на [app.netlify.com/drop](https://app.netlify.com/drop).

## Лицензия

Приватный проект STEREODRAMA.
