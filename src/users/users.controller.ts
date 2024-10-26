import { Controller, Get, Post, Body, Put, HttpCode, HttpStatus, UseGuards, Req, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users.service';
import { ChangePasswordDto, CreateUserDto,SigninUserDto, UpdateUserDto } from './dto';
import { AuthGuard } from './guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(HttpStatus.CREATED)
  @Post('signup')
  createUser(@Body() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

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

  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.CREATED)
  @Put('change-password')
  changePassword(@Req() req: Record<string, any>, @Body() data: ChangePasswordDto) {
    const userId = req?.user.sub;
    if (!userId) throw new UnauthorizedException("User ID not found");
    return this.usersService.changePassword(+userId, data);
  }
}
