---
title: TabBarView
tag: tabs
---

import {MediaScroller} from '@site/src/components/MediaScroller/MediaScroller';

export const items = [
  {
    type: "video",
    src: "https://video.wixstatic.com/video/91d9b3_8b62e04e72e044d1a1092335867c5767/720p/mp4/file.mp4",
    label: "TabBarView demo video",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_2b75a7e77c4e4e4aac84d7962d999261~mv2.png",
    alt: "TabBarView image 1",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_ec2aea86b8ae45afaf9f4ffa22802f73~mv2.png",
    alt: "TabBarView image 2",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_ac00394d19dd46c7bda228ce739375bc~mv2.png",
    alt: "TabBarView image 3",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_9727fa9bc9554a8f803d236f87f9615c~mv2.png",
    alt: "TabBarView image 4",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_1568e52cfcf040e2956cab50df25a93a~mv2.png",
    alt: "TabBarView image 5",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_c89935d391d040afbf451c9e6d619e37~mv2.png",
    alt: "TabBarView image 6",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_f23bd2b27fdf42e89022c76098cd5665~mv2.png",
    alt: "TabBarView image 7",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_03583ff49a6d4926899ec1c12c3024c5~mv2.png",
    alt: "TabBarView image 8",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_be588fbc9aa34f2b8481c18b9fb6ce55~mv2.png",
    alt: "TabBarView image 9",
  },
];

# TabBarView

<MediaScroller items={items} />

## Назначение
`TabBarView` — компонент нижней навигации, предназначенный для **переключения между основными разделами приложения**. Используется как постоянный элемент навигации верхнего уровня и обеспечивает быстрый доступ к ключевым экранам.

Компонент отображается фиксированно внизу экрана и управляет активным разделом приложения.

---

## Способы использования

### Основная навигация
Используется для:
- переключения между независимыми разделами;
- навигации верхнего уровня;
- быстрого возврата к ключевым экранам.

### Контейнер навигации
Используется как контейнер для:
- вложенных навигационных стеков;
- экранов с собственной иерархией.

---

## Параметры

### Элементы вкладок
- `items` — список вкладок.
- `selectedIndex` — активная вкладка.
- `isEnabled` — доступность вкладки.

### Контент вкладки
- `title` — текст подписи.
- `icon` — основная иконка.
- `selectedIcon` — иконка активного состояния.
- `badge` — числовой или статусный индикатор.

### Визуальное оформление
- `layoutStyle` — способ отображения (`icon-only`, `icon+title`).
- `alignment` — выравнивание элементов.
- `backgroundStyle` — стиль фона.
- `divider` — разделительная линия сверху.

---

## Варианты отображения

### Базовые варианты

1. `Icon only`  
   Только иконки без текста.

2. `Icon + Title`  
   Иконка с подписью.

3. `With Badges`  
   Вкладки с индикаторами уведомлений.

---

### Расширенные варианты

1. `Scrollable Tabs`  
   Горизонтальная прокрутка при большом количестве вкладок.

2. `Fixed Tabs`  
   Равномерное распределение вкладок по ширине.

3. `Highlighted Active Tab`  
   Усиленное визуальное выделение активной вкладки.

---

## Состояния (State Machine)

### Базовые состояния
- `Default` — стандартное состояние.
- `Selected` — активная вкладка.
- `Disabled` — недоступная вкладка.

### Состояния уведомлений
- `BadgeVisible` — отображается бейдж.
- `BadgeHidden` — бейдж скрыт.

### Модификаторы
- `WithIcons` — используются иконки.
- `WithTitles` — отображаются подписи.
- `WithDivider` — отображается разделитель.

---

## Поведение

- Переключение вкладок происходит без потери состояния разделов.
- Повторное нажатие на активную вкладку возвращает к корневому экрану раздела.
- Бейджи обновляются независимо от состояния вкладки.
- Активная вкладка визуально доминирует над неактивными.
- Компонент адаптируется под смену темы.

---

## Ограничения и правила

- Рекомендуемое количество вкладок — от 3 до 5.
- Не использовать вкладки для линейной навигации.
- Подписи должны быть короткими и понятными.
- Иконки должны быть консистентны по стилю.
- Компонент используется только для верхнего уровня навигации.

---

## Рекомендации по использованию

Подходит для:
- основных разделов приложения;
- пользовательских дашбордов;
- приложений с постоянной навигацией.

Не рекомендуется для:
- пошаговых сценариев;
- временной навигации;
- экранов с единственным разделом.
