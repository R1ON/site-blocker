## Полезные команды


### Nest
1. Инициализация nestjs: `npx @nestjs/cli new server`
2. Генерируем модуль db: `npx nest g mo db`
3. Генерируем сервис db: `npx nest g s db`

### Prisma
1. Инициализация prisma: `npx prisma init`
2. Применить изменения из schema.prisma в БД: `npx prisma db push`
3. Генерируем клиент, для работы с prisma: `npx prisma generate`
4. Форматирование schema.prisma: `opt + cmd + L`

### Разное
1. Запуск докера с ре-билдом контейнера: `docker compose up --build`
