---
title: Button
tag: button
---

import {MediaScroller} from '@site/src/components/MediaScroller/MediaScroller';

export const items = [
  {
    type: "video",
    src: "https://video.wixstatic.com/video/91d9b3_49dc53fa334847dfb713d3f7adfd564e/720p/mp4/file.mp4",
    label: "Button demo video",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_ecad14fa040e4dce89a0c84f0e089c4e~mv2.png",
    alt: "Button image 1",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_8216dc3858e640839197235564803120~mv2.png",
    alt: "Button image 2",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_5e87c42e09594709bc368775503a6ea1~mv2.png",
    alt: "Button image 3",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_139ef9f8a83e42568e5c94efe634dcdb~mv2.png",
    alt: "Button image 4",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_24a3b83ac2404cc0856a801c2e1e06de~mv2.png",
    alt: "Button image 5",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_e424d9f33bb848ac8f2308d9cd684846~mv2.png",
    alt: "Button image 6",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_9c4f972754d2448e917b7b74387678a5~mv2.png",
    alt: "Button image 7",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_d7e3a1f3086a4fde867759b548d5470d~mv2.png",
    alt: "Button image 8",
  },
];

# Button

<MediaScroller items={items} />

## Назначение
Интерактивный элемент для запуска действий, навигации и подтверждений. Поддерживает различные визуальные стили, размеры и семантические роли.

---

## Структура
- Основная область нажатия  
- Контент:
  - Текст
  - Иконка
  - Текст + иконка
- Опциональный фон и/или обводка

---

## Варианты оформления

### Accent
Основное действие, максимальный визуальный приоритет.

- `accent`
- `accent + icon`
- `accent icon-only`

Используется для ключевых действий на экране.

---

### Outline
Вторичное действие с акцентом на контент, а не на фон.

- `outline accent`
- `outline neutral`
- `outline danger`

Фон прозрачный, используется обводка.

---

### Subtle
Минимальный визуальный вес, интеграция в контент.

- `subtle`
- `subtle accent`
- `subtle danger`

Часто используется в списках и вторичных сценариях.

---

### Transparent
Текстовая кнопка без контейнера.

- `transparent neutral`
- `transparent accent`

Используется для inline-действий.

---

### Floating
Кнопка с тенью и визуальным отделением от фона.

- `floating accent`
- `floating subtle`

Применяется для действий поверх контента.

---

### Danger
Семантика разрушительного действия.

- `danger`
- `danger outline`
- `danger subtle`

Цвет и визуальный стиль указывают на риск.

---

## Размеры

- `large`
- `medium`
- `small`

Размер влияет на:
- высоту кнопки
- внутренние отступы
- размер текста и иконки

---

## Контентные конфигурации

### Только текст
Классическая кнопка с текстовой меткой.

---

### Текст + иконка
Иконка располагается слева от текста и выравнивается по центру.

---

### Только иконка
Квадратная или круглая кнопка, используется для компактных действий.

---

### Многострочный заголовок
Поддержка переноса текста на несколько строк.
Высота кнопки адаптируется под контент.

---

## Состояния

### Default
Базовое состояние, доступно для взаимодействия.

---

### Hover / Focus
Визуальное усиление при наведении или фокусе.

---

### Pressed
Кратковременное состояние при нажатии.

---

### Disabled
Недоступное состояние:
- сниженная контрастность
- отсутствие реакции на взаимодействие

---

## Поведенческие особенности

- Область нажатия всегда соответствует минимальным требованиям доступности
- Контент центрируется по вертикали и горизонтали
- Состояния визуально согласованы между всеми стилями
- Цветовая семантика сохраняется независимо от размера

---

## Использование

- `accent` — основное действие на экране
- `outline` — альтернативное действие
- `subtle` — вторичное или вспомогательное действие
- `transparent` — inline-действие в тексте или заголовках
- `floating` — действие поверх контента
- `danger` — действия с необратимыми последствиями

---

## Ограничения

- Не рекомендуется использовать более одной `accent`-кнопки в одном логическом блоке
- `icon-only` требует обязательного текстового описания для доступности
- `danger` используется только для подтверждённых рискованных действий
