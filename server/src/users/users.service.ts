import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service';

@Injectable()
export class UsersService {
  constructor(private dbService: DbService) {}

  findByEmail(email: string) {
    return this.dbService.user.findFirst({ where: { email } });
  }

  createUser(email: string, hash: string, salt: string) {
    return this.dbService.user.create({ data: { email, hash, salt } });
  }
}
