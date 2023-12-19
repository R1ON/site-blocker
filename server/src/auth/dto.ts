import { ApiProperty } from '@nestjs/swagger';


const DEFAULT_DATA = {
  email: 'test@yandex.ru',
  password: '1234',
};


export class SignUpBodyDto {
  @ApiProperty({ example: DEFAULT_DATA.email })
  email: string;

  @ApiProperty({ example: DEFAULT_DATA.password })
  password: string;
}

export class SignInBodyDto {
  @ApiProperty({ example: DEFAULT_DATA.email })
  email: string;

  @ApiProperty({ example: DEFAULT_DATA.password })
  password: string;
}

export class GetSessionInfoDto {
  @ApiProperty()
  id: number;

  @ApiProperty({ example: DEFAULT_DATA.email })
  email: string;

  @ApiProperty()
  iat: number;

  @ApiProperty()
  exp: number;
}
