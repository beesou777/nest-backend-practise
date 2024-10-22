import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}
    
    @Post('signup')
    @ApiOkResponse({type:AuthDto})
    signup(@Body() dto:AuthDto){
        return this.authService.signup(dto)
    }
    @HttpCode(HttpStatus.OK)
    @Post('signin')
    @ApiOkResponse({type:AuthDto})
    signin(@Body() dto:AuthDto){
        return this.authService.signin(dto)
    }
}
 