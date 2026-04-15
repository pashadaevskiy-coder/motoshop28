# 🚀 Инструкция по установке и запуску

## Быстрый старт

### 1. Установка зависимостей

Открой терминал в папке проекта и выполни:

```bash
npm install
```

**Важно**: Убедись что у тебя установлен Node.js версии 16+.

Проверь версию:
```bash
node --version
npm --version
```

### 2. Запуск dev-сервера

После успешной установки зависимостей:

```bash
npm run dev
```

Сервер запустится на http://localhost:3000

### 3. Сборка для production

```bash
npm run build
```

Собранные файлы будут в папке `dist/`

---

## 📁 Структура проекта

```
motorcycle-shop/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header/          # Шапка сайта
│   │   ├── Hero/            # Герой-секция
│   │   ├── Catalog/         # Каталог
│   │   │   ├── FilterBar/      # Фильтры
│   │   │   ├── MotorcycleGrid/ # Сетка карточек
│   │   │   └── MotorcycleCard/ # Карточка товара
│   │   ├── ProductModal/    # Модалка товара
│   │   ├── WhyUs/           # Почему мы
│   │   ├── Testimonials/    # Отзывы
│   │   ├── HowToBuy/        # Как купить
│   │   ├── FinalCTA/        # Финальный CTA
│   │   └── Footer/          # Подвал
│   ├── data/
│   │   └── motorcycles.js   # Данные о мотоциклах
│   ├── utils/
│   │   └── formatters.js    # Утилиты форматирования
│   ├── styles/
│   │   └── index.css        # Глобальные стили
│   ├── App.jsx              # Главный компонент
│   ├── main.jsx             # Точка входа
│   └── index.js             # Barrel exports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── .gitignore
├── README.md
├── SETUP.md
└── architecture.md
```

---

## ⚙️ Настройка Telegram ссылок

**ВАЖНО**: Перед запуском замени `username` на реальный Telegram username!

### Где нужно заменить:

1. **src/data/motorcycles.js**
   ```javascript
   export const TELEGRAM_LINK = 'https://t.me/REAL_USERNAME';
   ```

2. **src/components/Header/Header.jsx**
   - Строка 30: `href="https://t.me/username"`
   - Строка 67: `href="https://t.me/username"`

3. **src/components/Hero/Hero.jsx**
   - Строка 33: `href="https://t.me/username"`
   - Строка 38: `href="https://t.me/username"`

4. **src/components/Catalog/MotorcycleCard/MotorcycleCard.jsx**
   - Строка 60: `href={telegramLink}` (формируется динамически)

5. **src/components/ProductModal/ProductModal.jsx**
   - Строка 78: `href={telegramLink}`

6. **src/components/FinalCTA/FinalCTA.jsx**
   - Строка 33: `href="https://t.me/username"`

**Совет**: Используй поиск по проекту (Ctrl+Shift+F) для `t.me/username` и замени все вхождения.

---

## 🎨 Кастомизация дизайна

### Цвета

Все цвета настраиваются в `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      'accent-orange': '#ff4500',      // основной акцент
      'accent-orange-hover': '#ff6b00', // hover
      'accent-red': '#dc2626',         // красный акцент
      'bg-card': '#111111',            // фон карточек
      // ...
    }
  }
}
```

### Шрифты

В `index.html` подключены Google Fonts:
- Inter (основной)
- Bebas Neue (заголовки)

Можно заменить на другие шрифты, отредактировав:
1. Ссылки на Google Fonts в `index.html`
2. `fontFamily` в `tailwind.config.js`

---

## 🐛 Возможные проблемы

### 1. Ошибка "Cannot find module 'react'"

**Решение**: Установи зависимости:
```bash
npm install
```

### 2. Стили Tailwind не работают

**Решение**:
- Убедись что `src/index.css` импортирует Tailwind:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```
- Проверь `tailwind.config.js` - в `content` должны быть пути к файлам:
  ```javascript
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  ```

### 3. Изображения не загружаются

**Причина**: Используются внешние ссылки. Некоторые могут быть недоступны.

**Решение**:
- Скачай изображения и положи в `public/images/`
- Обнови пути в `src/data/motorcycles.js`

### 4. Dev-сервер не запускается

**Решение**:
- Проверь порт 3000 - может быть занят
- Попробуй другой порт: `npm run dev -- --port 3001`
- Удали `node_modules` и `package-lock.json`, затем `npm install` заново

---

## 📱 Адаптивность

Сайт полностью адаптивен (mobile-first). Основные breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 768px
- **Desktop**: > 768px

Проверь отображение на:
- Мобильные (375px, 414px)
- Планшет (768px, 1024px)
- Десктоп (1280px, 1920px)

---

## 🚀 Деплой

### Netlify / Vercel

1. Собери проект: `npm run build`
2. Загрузи папку `dist/` на хостинг
3. Настрой домен

### GitHub Pages

1. Собери проект
2. Скопируй файлы из `dist/` в ветку `gh-pages`
3. В настройках репозитория включи GitHub Pages

---

## 📝 Что дальше?

1. **Замени Telegram username** на реальный
2. **Добавь реальные изображения** мотоциклов (скачай и положи в `public/`)
3. **Настрой аналитику** (Google Analytics, Yandex Metrika)
4. **Добавь favicon** в `public/`
5. **Протестируй** на разных устройствах и браузерах
6. **Оптимизируй изображения** (сжатие, WebP)
7. **Настрой SEO** (meta-теги уже есть, можно добавить sitemap)

---

## 🆘 Поддержка

При возникновении проблем:
1. Проверь консоль браузера (F12)
2. Проверь терминал на ошибки
3. Убедись что все зависимости установлены
4. Проверь версию Node.js (должна быть 16+)

---

**Удачи!** 🏍️

После настройки Telegram и изображений сайт будет полностью готов к использованию.