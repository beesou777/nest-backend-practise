import { Controller, Get, Post, Body, Put, HttpCode, HttpStatus, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { ChangePasswordDto, CreateUserDto,ForgotPasswordDto,ResetPassword,SigninUserDto, UpdateUserDto } from './dto';
import { AuthGuard } from './guards/auth.guard';
import { Throttle } from '@nestjs/throttler';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  createUser(@Body() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  @Throttle({default:{limit:5,ttl:60000}})
  @HttpCode(HttpStatus.OK)
  @Post('signin')
  signIn(@Body() dto: SigninUserDto) {
    return this.usersService.signIn(dto);
  }


  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK)
  @Get('profile')
  getProfile(@Req() req: Record<string, any>): Promise<any> {
      const userId = req?.user.sub;
      if (!userId) throw new UnauthorizedException("User ID not found");
      return this.usersService.getUserProfile(+userId);
  }

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Put('update')
  updateUser(@Req() req : Record<string, any>, @Body() data: Partial<UpdateUserDto>) {
    const userId = req?.user.sub;
    if (!userId) throw new UnauthorizedException("User ID not found");
    return this.usersService.updateUser(+userId, data);
  }

  @Throttle({default:{limit:30,ttl:60000}})
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Put('change-password')
  changePassword(@Req() req: Record<string, any>, @Body() data: ChangePasswordDto) {
    const userId = req?.user.sub;
    if (!userId) throw new UnauthorizedException("User ID not found");
    return this.usersService.changePassword(+userId, data);
  }

  @Throttle({default:{limit:30,ttl:60000}})
  @HttpCode(HttpStatus.CREATED)
  @Post('forgot-password')
  forgotPassword(@Body() dto: ForgotPasswordDto) {
    if (!dto.email) throw new UnauthorizedException("User does not exist");
    return this.usersService.forgotPassword(dto);
  }

  @Throttle({default:{limit:30,ttl:60000}})
  @HttpCode(HttpStatus.CREATED)
  @Post('reset-password')
  resetPassword(@Body() dto: ResetPassword) {
    return this.usersService.resetPassword(dto);
  }
}
