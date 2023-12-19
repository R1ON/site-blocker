## Запуск проекта

1. npm ci
2. docker compose up
3. npx prisma db push
4. npx prisma generate
5. npm run start:dev


## Полезные команды


### Nest

Инициализация nestjs: `npx @nestjs/cli new server`

Генерация модуля db: `npx nest g mo db`

Генерация сервиса db: `npx nest g s db`

Генерация контроллера db: `npx nest g co db`

Генерация гварда auth: `npx nest g gu auth`



#### Опции

`--flat` - генерация в текущую директорию

`--no-spec` - генерация без тестов

### Prisma

Инициализация prisma: `npx prisma init`

Применить изменения из schema.prisma в БД: `npx prisma db push`

Генерация клиент, для работы с prisma: `npx prisma generate`

Очистка БД: `npx prisma migrate reset`

Форматирование schema.prisma: `opt + cmd + L`

### Разное

Запуск докера с ре-билдом контейнера: `docker compose up --build`


```
- Модуль: представляет собой организационную единицу, которая группирует связанные компоненты. Он может содержать контроллеры, провайдеры, сервисы, провайдеры маршрутизации и другие функции. Модули помогают организовывать код приложения, улучшают его модульность и позволяют легко масштабировать приложение.

- Контроллер: отвечают за обработку HTTP-запросов, определение маршрутов и управление потоком данных между клиентом и сервером. Они являются мостом между входящими запросами и бизнес-логикой приложения. Контроллеры часто используют сервисы для выполнения операций над данными.

- Сервис: представляют собой классы, которые содержат логику бизнес-логики приложения. Они инкапсулируют операции над данными, взаимодействие с базой данных, запросы к внешним API и другие функции. Сервисы широко используются в контроллерах и других компонентах приложения для выполнения конкретных задач.
```
