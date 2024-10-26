import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './utility/constants';
import { MailService }  from './services/send-reset-password';
@Module({
  imports:[
    JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '7d' },
  }),
  ],
  controllers: [UsersController],
  providers: [UsersService,MailService]
})
export class UsersModule {}
