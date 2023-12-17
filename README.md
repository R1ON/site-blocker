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

### Prisma

Инициализация prisma: `npx prisma init`

Применить изменения из schema.prisma в БД: `npx prisma db push`

Генерация клиент, для работы с prisma: `npx prisma generate`

Форматирование schema.prisma: `opt + cmd + L`

### Разное

Запуск докера с ре-билдом контейнера: `docker compose up --build`
