import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { AddBlockItemDto, BlockListQueryDto } from './dto';

@Injectable()
export class BlockListService {
  constructor(private dbService: DbService) {}

  create(userId: number) {
    return this.dbService.blockList.create({
      data: {
        ownerId: userId,
      },
    });
  }

  getByUser(userId: number, query: BlockListQueryDto) {
    return this.dbService.blockList.findUniqueOrThrow( {
      where: { ownerId: userId },
      include: {
        items: {
          where: { data: { contains: query.q, mode: 'insensitive' } },
          orderBy: { createdAt: 'desc' },
        },
      },
    });
  }

  async addItem(userId: number, data: AddBlockItemDto) {
    const blockListId = await this.getBlockListId(userId);
    
    console.log('blockListId, userId', blockListId, userId);

    return this.dbService.blockListItem.create({
      data: { blockListId, ...data },
    })
  }

  async removeItem(userId: number, itemId: number) {
    const blockListId = await this.getBlockListId(userId);

    return this.dbService.blockListItem.delete({
      where: { blockListId, id: itemId },
    });
  }

  async getBlockListId(userId: number): Promise<number> {
    const blockList = await this.dbService.blockList.findUniqueOrThrow({
      where: { ownerId: userId },
    });

    return blockList.id;
  }
}
