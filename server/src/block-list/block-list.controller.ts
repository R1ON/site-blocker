import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AddBlockItemDto, BlockItemDto, BlockListDto, BlockListQueryDto } from './dto';
import { AuthGuard } from '../auth/auth.guard';
import { SessionInfo } from '../auth/session-info.decorator';
import { GetSessionInfoDto } from '../auth/dto';
import { BlockListService } from './block-list.service';

@ApiTags('block-list')
@Controller('block-list')
@UseGuards(AuthGuard)
export class BlockListController {
  constructor(private blockListService: BlockListService) {}

  @Get()
  @ApiOkResponse({ type: BlockListDto })
  getList(
    @Query() query: BlockListQueryDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockListDto> {
    return this.blockListService.getByUser(session.id, query);
  }

  @Post('item')
  @ApiOkResponse({ type: BlockListDto })
  addBlockItem(
    @Body() body: AddBlockItemDto,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockItemDto> {
    return this.blockListService.addItem(session.id, body);
  }

  @Delete('item/:id')
  @ApiOkResponse({ type: BlockItemDto })
  async removeBlockItem(
    @Param('id', ParseIntPipe) id: number,
    @SessionInfo() session: GetSessionInfoDto,
  ): Promise<BlockItemDto> {
    return this.blockListService.removeItem(session.id, id);
  }
}
