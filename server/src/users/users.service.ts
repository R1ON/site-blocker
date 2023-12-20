import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { AccountService } from '../account/account.service';
import { BlockListService } from '../block-list/block-list.service';

@Injectable()
export class UsersService {
  constructor(
    private dbService: DbService,
    private accountService: AccountService,
    private blockListService: BlockListService,
  ) {}

  findByEmail(email: string) {
    return this.dbService.user.findFirst({ where: { email } });
  }

  async createUser(email: string, hash: string, salt: string) {
    const user = await this.dbService.user.create({ data: { email, hash, salt } });

    await this.accountService.createAccount(user.id);
    await this.blockListService.create(user.id);

    return user;
  }
}
