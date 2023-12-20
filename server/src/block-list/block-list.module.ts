import { Module } from '@nestjs/common';
import { BlockListService } from './block-list.service';
import { BlockListController } from './block-list.controller';
import { DbModule } from '../db/db.module';

@Module({
  imports: [DbModule],
  providers: [BlockListService],
  controllers: [BlockListController],
  exports: [BlockListService]
})
export class BlockListModule {}

// Попробуй добавить второй элемент в блок лист и получишь ошибку
//
// Invalid `this.dbService.blockListItem.create()` invocation in
// /Users/romanmaksimov/Desktop/job/site-blocker/server/src/block-list/block-list.service.ts:32:41
//
//   29 async addItem(userId: number, data: AddBlockItemDto) {
//   30   const blockListId = await this.getBlockListId(userId);
//   31
// → 32   return this.dbService.blockListItem.create(
// Unique constraint failed on the fields: (`blockListId`)
// PrismaClientKnownRequestError:
// Invalid `this.dbService.blockListItem.create()` invocation in
// /Users/romanmaksimov/Desktop/job/site-blocker/server/src/block-list/block-list.service.ts:32:41
//
//   29 async addItem(userId: number, data: AddBlockItemDto) {
//   30   const blockListId = await this.getBlockListId(userId);
//   31
// → 32   return this.dbService.blockListItem.create(
// Unique constraint failed on the fields: (`blockListId`)
