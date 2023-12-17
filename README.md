## Полезные команды


### Nest
Инициализация nestjs: `npx @nestjs/cli new server`
Генерируем модуль db: `npx nest g mo db`
Генерируем сервис db: `npx nest g s db`

### Prisma
Инициализация prisma: `npx prisma init`
Применить изменения из schema.prisma в БД: `npx prisma db push`
Генерируем клиент, для работы с prisma: `npx prisma generate`
Форматирование schema.prisma: `opt + cmd + L`

### Разное
Запуск докера с ре-билдом контейнера: `docker compose up --build`
