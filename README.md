# HTML Education Project

![License](https://img.shields.io/github/license/qazsedc13/html-education)
![HTML5](https://img.shields.io/badge/HTML5-5-orange)
![CSS3](https://img.shields.io/badge/CSS3-3-blue)
![Static](https://img.shields.io/badge/Static-Site-green)

Учебный проект для изучения основ веб-разработки (HTML и CSS). Практический курс по созданию многостраничного веб-сайта с нуля. Включает структуру с заголовком, навигацией, формами регистрации/входа и CSS-оформлением.

---

## 🚀 Основные возможности

- **HTML5-разметка**: Изучение семантических тегов и структуры документа.
- **CSS3-стилизация**: Оформление элементов через внешние таблицы стилей.
- **Формы**: Регистрация и вход пользователей.
- **Навигация**: Меню с ссылками на разделы сайта.
- **Блочная вёрстка**: Использование `<div>` для создания макета.
- **Адаптивность**: Базовая поддержка различных размеров экранов.

---

## 🛠 Технологический стек

- **HTML5**: Семантическая разметка страниц.
- **CSS3**: Каскадные таблицы стилей.
- **Текстовый редактор**: Notepad++, VS Code, Sublime Text.
- **Веб-браузер**: Chrome, Firefox, Edge, Safari.

---

## 📋 Предварительные требования

- **Веб-браузер**: Любой современный браузер с поддержкой HTML5.
- **Текстовый редактор**: Блокнот или специализированный редактор кода.
- **ОС**: Windows, macOS или Linux.

---

## 🚀 Установка и запуск

### 1. Клонирование репозитория
```bash
git clone git@github.com:qazsedc13/html-education.git
cd html-education
```

### 2. Открытие сайта
```bash
# Перейдите в директорию сайта
cd www

# Откройте index.html в браузере
# Windows:
start index.html
# macOS:
open index.html
# Linux:
xdg-open index.html
```

---

## 💡 Работа с проектом

### Структура страницы
Главная страница `index.html` включает:
- **Header**: Логотип, название сайта
- **Поиск**: Поле для поиска по сайту
- **Авторизация**: Ссылки на регистрацию и вход
- **Навигация**: Меню разделов
- **Контент**: Основная информация

### Изучение CSS
Файл `css/style.css` содержит:
- Стили для хедера и навигации
- Оформление ссылок и кнопок
- Стили текстовых полей форм
- Базовую типографику

### Практические упражнения
Файл `first.html` в корне проекта — площадка для экспериментов с разметкой.

---

## 📁 Структура проекта

| Файл / Директория | Описание |
| :--- | :--- |
| `www/` | Основная директория сайта |
| `www/index.html` | Главная страница |
| `www/css/style.css` | Таблица стилей |
| `www/img/` | Изображения и иконки |
| `first.html` | Файл для упражнений |
| `image.jpeg` | Пример изображения |

---

## 📚 Уроки и темы

Проект включает множество веток с учебными материалами:

| Ветка | Тема |
| :--- | :--- |
| `lesson-4-comment` | HTML-комментарии |
| `lesson-5-teg-text` | Текстовые теги |
| `lesson-6/teg-next` | Продвинутые теги |
| `lesson-7/spisok` | Списки |
| `lesson-8-9/link` | Ссылки и навигация |
| `lesson-10/table` | Таблицы |
| `lesson-10/images` | Изображения |
| `lesson-12/head` | Тег head и мета-теги |
| `lesson-13/teg-div-and-span` | Блочные и строчные теги |
| `lesson-14/input` | Формы: input |
| `lesson-14/textarea` | Формы: textarea |
| `lesson-16/select` | Формы: select |
| `lesson-17/HTML5` | Семантические теги HTML5 |
| `lesson-18/verhnee` | Верхнее меню |
| `lesson-19/spec-teg-HTML5` | Специальные теги HTML5 |
| `lesson-css-1/perviy` | Введение в CSS |
| `lesson-css-4/psevdoclass` | Псевдоклассы CSS |
| `lesson-CSS-6` | Продвинутый CSS |
| `html5-css3/about` | О странице |
| `html5-css3/adapt` | Адаптивная вёрстка |
| `html5-css3/anounce-image` | Изображения в HTML5 |
| `html5-video-education` | Видео в HTML5 |
| `persona` | Создание сайта персона |
| `sozdanie_sajta-5` | Шаблон сайта |
| `sozdanie_sajta-7` | Кодировка .htaccess |
| `sozdanie_sajta-8` | Footer сайта |
| `sozdanie_sajta-9` | Боковая панель |
| `sozdanie_sajta-10` | Основная часть сайта |
| `sozdanie_sajta-11` | Создание блоков |
| `sozdanie_sajta-12` | Страница "О нас" |
| `sozdanie_sajta-13` | Обратная связь |
| `sozdanie_sajta-14` | Проверка полей JS+Ajax+PHP |
| `sozdanie_sajta-15` | Отправка форм |
| `sozdanie_sajta-16` | Вывод статей |
| `sozdanie_sajta-17` | Страницы статей |
| `sozdanie_sajta-19` | Адаптивность сайта |
| `atlant` | Сайт компании "Атлант" |

---

## 🔧 Управление проектом

**Предпросмотр в браузере:**
```bash
cd www
python -m http.server 8000
# Откройте http://localhost:8000
```

**Валидация HTML:**
Используйте [W3C Validator](https://validator.w3.org/).

---

## ⚠️ Устранение неполадок

**Страница не отображается:**
Убедитесь, что открываете файл из директории `www/`.

**CSS не применяется:**
Проверьте путь к файлу style.css в HTML:
```html
<link rel="stylesheet" href="css/style.css">
```

**Кодировка неверная:**
Добавьте meta-тег в `<head>`:
```html
<meta charset="UTF-8">
```

---

## 📄 Лицензия

Проект распространяется под лицензией **MIT**.

---

## 📬 Контакты

- **Автор**: [qazsedc13](https://github.com/qazsedc13)
- **Репозиторий**: [html-education](https://github.com/qazsedc13/html-education)

---

## 📚 Дополнительные ресурсы

- [MDN Web Docs - HTML](https://developer.mozilla.org/ru/docs/Web/HTML)
- [MDN Web Docs - CSS](https://developer.mozilla.org/ru/docs/Web/CSS)
- [W3C Schools](https://www.w3schools.com/)
- [W3C Validator](https://validator.w3.org/)
