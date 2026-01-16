---
title: TwoLineTitleView
tag: title
---

import {MediaScroller} from '@site/src/components/MediaScroller/MediaScroller';

export const items = [
  {
    type: "video",
    src: "https://video.wixstatic.com/video/91d9b3_bee6de7cdc6c4d27bb6684737c52759e/720p/mp4/file.mp4",
    label: "TwoLineTitleView demo video",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_586c95df8ae840059446596b69a9652f~mv2.png",
    alt: "TwoLineTitleView image 1",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_09ef2ade30174445bb835908f9debda1~mv2.png",
    alt: "TwoLineTitleView image 2",
  },
];

# TwoLineTitleView

<MediaScroller items={items} />

## Назначение
`TwoLineTitleView` — кастомный заголовок для `Navigation Bar`, поддерживающий отображение **двух строк текста** (title + subtitle) и набор визуальных индикаторов. Используется в случаях, когда стандартного заголовка недостаточно и требуется отразить контекст, статус или интерактивное состояние.

---

## Способы создания

### Программная конфигурация
`TwoLineTitleView.setup(...)`

Используется, когда требуется:
- управление иконками;
- управление интерактивностью;
- точный контроль выравнивания и индикаторов.

### Через UINavigationItem
Создание на основе `UINavigationItem` (navigation subspec).

Используется для:
- стандартных навигационных сценариев;
- простых комбинаций текста и индикаторов.

---

## Параметры

### Текст
- `title` — основная строка заголовка.
- `subtitle` — вторичная строка (опциональная).

### Выравнивание
- `centered` — текст центрирован относительно navigation bar.
- `leading` — текст выровнен по левому краю.

### Иконки и индикаторы
- `leadingIcon` — иконка слева от текста.
- `trailingIcon` — иконка справа от текста.
- `disclosureIndicator` — индикатор перехода (`>`).
- `menuIndicator` — индикатор меню (`˅`).

### Интерактивность
- `isTappable` — весь заголовок является активной зоной нажатия.
- `onTap` — callback, вызываемый при нажатии.

---

## Поддерживаемые конфигурации

1. `Title + Subtitle`  
   Две строки текста без иконок.

2. `Title + Leading Icon`  
   Основной заголовок с иконкой слева.

3. `Tappable Title View`  
   Заголовок и подзаголовок с активной зоной нажатия.

4. `Title + Subtitle + Menu Indicator`  
   Используется для контекстных селекторов.

5. `Leading-aligned Title + Trailing Icon`  
   Текст выровнен влево, иконка справа.

6. `Centered Title + Trailing Icon`  
   Центрированный текст с дополнительным визуальным маркером.

7. `Leading Icon + Centered Text + Trailing Icon`  
   Иконки по краям, текст по центру.

8. `Leading Title + Disclosure Indicator`  
   Используется для навигационных переходов.

---

## Поведение

- Компонент размещается в `Navigation Bar` как `titleView`.
- Все иконки и индикаторы входят в единый layout.
- При включённой интерактивности вся область компонента кликабельна.
- Нажатие обрабатывается единым событием.
- Layout адаптируется под доступную ширину.

---

## Ограничения и правила

- `title` не перекрывается иконками или индикаторами.
- `subtitle` всегда визуально вторичен.
- При нехватке пространства текст корректно сокращается.
- Иконки наследуют текущий `tintColor`.
- Высота компонента соответствует стандартной высоте navigation bar.

---

## Рекомендации по использованию

Подходит для:
- экранов с изменяемым контекстом;
- навигационных селекторов;
- отображения статуса или области приложения;
- брендированных navigation-заголовков.

Не рекомендуется для:
- статических экранов без контекста;
- сценариев без навигационного взаимодействия.
