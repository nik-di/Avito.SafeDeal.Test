# Avito.SafeDeal.Test - Тестовое задание в команду SafeDeal Авито.

### [Открыть сайт](https://nik-di.github.io/Avito.SafeDeal.Test/)

#### [На главную ветку](https://github.com/nik-di/Avito.SafeDeal.Test/tree/master)

`Версия 0.2.3`

### Задание

Необходимо сверстать адаптивную страницу со списком фотографий. ​
При клике на фотографии открывается модальное окно с фотографией, списком комментариев и формой добавления комментариев. ​

Список запросов:

GET `https://boiling-refuge-66454.herokuapp.com/images` - получение списка фотографий.

GET `https://boiling-refuge-66454.herokuapp.com/images/:imageId` - получения большого изображения и списка комментариев.

POST `https://boiling-refuge-66454.herokuapp.com/images/:imageId/comments` - добавление комментария.

Макет в Figma `https://www.figma.com/file/3VP0QDK3kjdfbkj8TRrtsx/Test-task?node-id=0%3A1`.

#### Установка
1. Скачать репозиторий:
```git clone https://github.com/nik-di/Avito.SafeDeal.Test.git```
2. Установить npm-зависимости:
```npm i```
3. Произвести сборку проекта:
```npm run build```
4. Запустить проект на локальном сервере:
```npm run start```
