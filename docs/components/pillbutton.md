---
title: PillButton
tag: chip
---

import {MediaScroller} from '@site/src/components/MediaScroller/MediaScroller';

export const items = [
  {
    type: "video",
    src: "https://video.wixstatic.com/video/91d9b3_adba06c0a88a451c8567887282db96f1/720p/mp4/file.mp4",
    label: "PillButton demo video",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_a7155a4b685e481eb0c2a81cd78138fe~mv2.png",
    alt: "PillButton image 1",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_4a9afe3eaae140e493dd7b0aa9fbd62d~mv2.png",
    alt: "PillButton image 2",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_2aab7ddd50cf49cda7ef5e3cdb96a023~mv2.png",
    alt: "PillButton image 3",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_01298bcd5dc0474b84285f7818f2d246~mv2.png",
    alt: "PillButton image 4",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_471759ff9de7426caac1828a17140f34~mv2.png",
    alt: "PillButton image 5",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_4371f6948745495c884f017e1c2c0dd9~mv2.png",
    alt: "PillButton image 6",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_8a6f5bb8c50d4f39a9752643ac5812ed~mv2.png",
    alt: "PillButton image 7",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_8adde54cbab34f77956dba618500a027~mv2.png",
    alt: "PillButton image 8",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_e2d32e10911a4089a4afc93595f7c17f~mv2.png",
    alt: "PillButton image 9",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_38aa25b3e6024c2090b2ecbf182d9d21~mv2.png",
    alt: "PillButton image 10",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_eea6993cda394eaea6e908bc18365d05~mv2.png",
    alt: "PillButton image 11",
  },
];

# PillButton

<MediaScroller items={items} />

## Назначение
`PillButton` — компактная кнопка-переключатель в форме «пилюли», предназначенная для **выбора, фильтрации и быстрого действия**. Используется как самостоятельный интерактивный элемент или как часть `PillButtonBar`.

Компонент ориентирован на частые взаимодействия и хорошо подходит для плотных интерфейсов.

---

## Способы использования

### Самостоятельная кнопка
Используется для:
- выполнения локального действия;
- включения/отключения состояния;
- быстрого выбора параметра.

### Элемент группы
Используется как часть `PillButtonBar`:
- для фильтрации;
- для множественного выбора;
- для переключения режимов.

---

## Параметры

### Контент
- `title` — текст кнопки.
- `icon` — иконка (опционально).
- `badge` — индикатор количества или статуса (опционально).

### Поведение
- `isSelected` — состояние выбора.
- `isEnabled` — доступность кнопки.
- `isToggle` — режим переключателя.
- `onTap` — действие при нажатии.

### Визуальное оформление
- `size` — размер кнопки.
- `style` — визуальный стиль (neutral / brand).
- `contentPadding` — внутренние отступы.
- `shape` — форма с полностью скруглёнными углами.

---

## Варианты отображения

### Базовые варианты

1. `Text only`  
   Кнопка содержит только текст.

2. `Icon only`  
   Кнопка содержит только иконку.

3. `Icon + Text`  
   Комбинация иконки и текста.

---

### Контекстные варианты

1. `With Badge`  
   Кнопка с индикатором состояния.

2. `Selectable`  
   Используется как элемент выбора.

3. `Action`  
   Используется как одноразовое действие.

---

## Состояния (State Machine)

### Базовые состояния
- `Default` — обычное состояние.
- `Selected` — выбранное состояние.
- `Disabled` — недоступное состояние.

### Состояния взаимодействия
- `Pressed` — состояние нажатия.
- `Focused` — состояние фокуса.

### Модификаторы
- `WithIcon` — отображается иконка.
- `WithBadge` — отображается бейдж.
- `Toggleable` — поддерживает переключение.

---

## Поведение

- При выборе кнопка изменяет визуальное состояние.
- В режиме `toggle` повторное нажатие снимает выбор.
- Размер кнопки адаптируется под контент.
- Активное состояние визуально доминирует.
- Компонент корректно реагирует на смену темы.

---

## Ограничения и правила

- Текст кнопки должен быть коротким.
- Не использовать для длинных действий или форм.
- Не смешивать действие и выбор в одном сценарии.
- Использовать бейджи только при необходимости.
- Не использовать как основной элемент навигации.

---

## Рекомендации по использованию

Подходит для:
- фильтров и тегов;
- быстрых переключателей;
- компактных панелей управления.

Не рекомендуется для:
- критичных подтверждающих действий;
- сценариев с большим объёмом текста;
- пошаговых пользовательских потоков.
