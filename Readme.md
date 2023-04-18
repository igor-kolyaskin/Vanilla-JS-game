# Игра Blast

https://brut-de-brut.github.io/Blast/dist

## **Описание игры**

### **Начальные условия**

В каждой клетке игрового поля размером N\*M случайным образом расположены игровые объекты (тайлы) одного из C цветов. На счётчике ходов (алый круг) отображается максимально допустимое количество ходов Y, ниже расположен индикатор очков (обнуляется для каждой новой игры).  
Индикатор прогресса в правом нижнем углу находится в начальном положении.

### **Цель игры**

Для победы необходимо набрать X или более очков, потратив не более Y ходов.

### **Игровой процесс**

За один ход можно кликнуть один из незаблокированных тайлов на игровом поле, при этом сгорает блок = (кликнутый тайл + его соседи) такого же цвета. В зависимости от размера сгоревшего блока к результату добавляются очки, индикация на счётчике очков обновляется.
Блок можно сжечь, если его размер не менее K тайлов (2 по умолчанию). В блоках меньшего размера тайлы некликабельны.
Если все ходы потрачены, а набрано недостаточное количество очков, засчитывается поражение.
Если количество очков достигло или превысило заданное значение, и не потрачены все ходы, засчитывается победа.

### **Бонусы**

_Супер тайл_  
Если размер сожжёного блока равен или больше L, на месте клика появляется супер-тайл (с рисунком вспышки). Клик на такой тайл сжигает его блок размером 3х3 вокруг него.

_Color-bang_\*

При клике на верхний пурпурный блок и последующем клике на тайл любого цвета сгорают все тайлы такого же цвета на всём игровом поле. Размер блока не ограничивается.

_Column-bang_\*

При клике на нижний пурпурный блок и последующем клике на тайл в любом столбце сгорают все тайлы этого столбца. Размер блока не ограничивается.

##### \* (игровая механика не реализована)

# Соответствие техническому заданию

## **Основное задание**

1\. Выполнена реализация на JavaScript

> ##### a-c. Фреймворки и движки не применялись
>
> ##### d. Поскольку в основе приложения лежит сильно упрощённая идеология React, интерфесы и наследование классов не использовались, соответственно принципы SOLID имеют очень ограниченное применение. Код написан на принципах DRY, YAGNI, KISS
>
> ##### e. Аналогично React, в классовых компонентах за отображение отвечает метод render, функциональные компоненты возвращают отрендеренный объект. Функционал компонента реализован в методах или функциях компонента, общая логика вынесена в директории bll и listeners
>
> ##### f. В игре реализованы состояния start, play, win, losing, refreshField, settings
>
> 2\. Реализована анимация для перемещения и сжигания тайлов  
> 3\. Отображается количество оставшихся ходов и набранных очков  
> 4\. Обработаны состояния выигрыша и проигрыша  
> 5\. Приложенный набор ассетов использован  
> 6\. Исходники выложены на github.com: <https://github.com/Brut-de-Brut/Blast/tree/main>  
> 7\. Ссылка на рабочий проект: <https://brut-de-brut.github.io/Blast/dist>

## **Дополнительное задание**

1\. Бустер-бомба: не реализовано. В качестве альтернативы создан плейсхолдер для color-bang  
2\. Телепорт-бомба: не реализовано. В качестве альтернативы создан плейсхолдер для column-bang  
3\. Реализована механика супер-тайла: сжигаются тайлы в радиусе 1 клетки, т.е. блок 3х3  
3+\. Реализована механика твин-тайла: он образует блок как с синими, так и с жёлтыми блоками одновременно (но не с другим твин-тайлом). Твин-тайл появляетя с вероятностью 5%

## **Плюсы**

1\. Написаны юнит-тесты Jest для двух утилит. При необходимости покрытие можно увеличить  
2\. Коммиты в репозитории разделены строго по назначению в соответствии с устоявшимися правилами для GitHub (например, [вот этими](https://gist.github.com/bibendi/7941823) или [ этими](https://www.conventionalcommits.org/ru/v1.0.0-beta.2/))  
3\. Использованы ES6 + Babel  
4\. Проект собран на webpack

## **Плюс Плюсы**

1\. Нажание на кнопку Settings (шестерёнка) открывает модальное окно с настройками. Игрок может изменить конфигурацию игрового поля, количество цветов и т.д.  
2\. Добавление новых настроек очень простое, с помощью объекта конфигурации  
3\. Установленные параметры сохранаются в localstorage  
4\. После каждого клика выводится сообщение о количестве кликабельных тайлов на обновлённом игровом поле, или сообщение о том, что кликабельных тайлов нет. В последнем случае появляется кнопка для обновления игрового поля без сброса текущего результата  
5\. При клике на блок меньше разрешённого размера выводится предупреждение, ход не засчитывается  
6\. В любой момент игрок может начать новую игру нажанием на кнопку Go!  
7\. Реализована возможность появления тайлов с заданной вероятностью