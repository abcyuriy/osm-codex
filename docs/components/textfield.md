---
title: TextField
tag: input
---

import {MediaScroller} from '@site/src/components/MediaScroller/MediaScroller';

export const items = [
  {
    type: "video",
    src: "https://video.wixstatic.com/video/91d9b3_a91fb7f701584901aec85d3f6f5ad8e8/720p/mp4/file.mp4",
    label: "TextField demo video",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_149a3e3646bc409892fc5da64ba4a178~mv2.png",
    alt: "TextField image 1",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_62f9c4dcbd2648a5bb694705ac2c0dbf~mv2.png",
    alt: "TextField image 2",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_a7721ecd4e3e4d649edb28203455d609~mv2.png",
    alt: "TextField image 3",
  },
  {
    type: "image",
    src: "https://static.wixstatic.com/media/91d9b3_2f1faf4485d443c99fb55b7987d3f23d~mv2.png",
    alt: "TextField image 4",
  },
];

# TextField

<MediaScroller items={items} />

## Назначение
`TextField` — базовый компонент ввода текста, расширяющий стандартное поведение `UITextField` и `SwiftUI.TextField`. Поддерживает **много состояний**, **встроенные индикаторы**, **валидацию**, **служебный текст** и **токенизированную стилизацию**. Используется как основной элемент пользовательского ввода в формах, поиске, настройках и сценариях авторизации.

---

## Способы создания

### Программная конфигурация
`TextField(configuration:)`

Используется, когда требуется:
- управление состояниями;
- кастомная валидация;
- управление иконками и служебным текстом;
- интеграция с дизайн-токенами.

### Через SwiftUI
`FluentTextField(...)`

Используется для:
- декларативных форм;
- простых сценариев ввода;
- реактивного биндинга данных.

---

## Параметры

### Контент
- `text` — текущее значение поля.
- `placeholder` — плейсхолдер.
- `label` — заголовок поля (floating / static).
- `helperText` — вспомогательный текст под полем.
- `errorText` — текст ошибки.

### Тип ввода
- `keyboardType` — тип клавиатуры.
- `textContentType` — системная семантика.
- `autocapitalization` — автокапитализация.
- `autocorrection` — автокоррекция.
- `isSecure` — защищённый ввод.

### Иконки и элементы
- `leadingIcon` — иконка слева.
- `trailingIcon` — иконка справа.
- `clearButton` — кнопка очистки.
- `revealButton` — переключатель secure-режима.

### Поведение
- `isEditable` — возможность редактирования.
- `isEnabled` — доступность компонента.
- `isFocused` — фокус ввода.
- `onFocusChange` — callback фокуса.
- `onTextChange` — callback изменения текста.

---

## Состояния (State Machine)

### Базовые состояния
- `Default` — обычное состояние.
- `Focused` — активный ввод.
- `Filled` — поле содержит значение.
- `Disabled` — недоступно для ввода.
- `ReadOnly` — только чтение.

### Валидация
- `Valid` — значение корректно.
- `Invalid` — ошибка ввода.
- `Warning` — предупреждение.
- `RequiredEmpty` — обязательное поле без значения.

### Дополнительные модификаторы
- `WithHelper` — отображается helper text.
- `WithError` — отображается текст ошибки.
- `WithIcons` — активны иконки.
- `Secure` — защищённый ввод.
- `Clearable` — доступна очистка.

---

## Поддерживаемые конфигурации

1. `Label + Placeholder`  
   Заголовок и плейсхолдер.

2. `Floating Label`  
   Лейбл перемещается при фокусе или вводе.

3. `Leading Icon + TextField`  
   Поле с контекстной иконкой.

4. `TextField + Trailing Action`  
   Очистка, раскрытие пароля, инфо-иконка.

5. `Error State with Helper Text`  
   Ошибка с пояснением.

6. `Disabled / ReadOnly Field`  
   Неинтерактивные состояния.

7. `Secure Entry Field`  
   Пароли и чувствительные данные.

---

## Поведение

- Плейсхолдер скрывается при вводе.
- Floating-label фиксируется при наличии текста.
- Цвета и отступы управляются токенами.
- Иконки реагируют на состояние поля.
- Валидация может быть синхронной и асинхронной.
- Поле корректно реагирует на смену темы.

---

## Ограничения и правила

- `errorText` имеет приоритет над `helperText`.
- `Disabled` блокирует все интерактивные элементы.
- Secure-режим запрещает копирование текста.
- Максимальная длина текста контролируется извне.
- Высота компонента фиксирована дизайн-системой.

---

## Рекомендации по использованию

Подходит для:
- форм ввода данных;
- логина и регистрации;
- поиска и фильтрации;
- настроек пользователя.

Не рекомендуется для:
- многострочного ввода;
- отображения статического текста;
- сложных редакторов контента.
