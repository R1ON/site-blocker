import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';
import { AccountService } from '../account/account.service';

@Injectable()
export class UsersService {
  constructor(
    private dbService: DbService,
    private accountService: AccountService,
  ) {}

  findByEmail(email: string) {
    return this.dbService.user.findFirst({ where: { email } });
  }

  async createUser(email: string, hash: string, salt: string) {
    const user = await this.dbService.user.create({ data: { email, hash, salt } });

    await this.accountService.createAccount(user.id);

    return user;
  }
}
