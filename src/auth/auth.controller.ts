// import { Controller, Get, HttpCode, HttpStatus, Post, Headers, ForbiddenException, Body } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { SignupDto, SigninDto } from './dto'; 
// import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

// @Controller('auth')
// @ApiTags('auth')
// export class AuthController {
//     constructor(private authService: AuthService) {}

//     @Post('signup')
//     @ApiOkResponse({ type: SignupDto }) 
//     signup(@Body() dto: SignupDto) {
//         return this.authService.signup(dto);
//     }

//     @HttpCode(HttpStatus.OK)
//     @Post('signin')
//     @ApiOkResponse({ type: SigninDto }) 
//     signin(@Body() dto: SigninDto) {
//         return this.authService.signin(dto);
//     }

//     @HttpCode(HttpStatus.OK)
//     @Get('user')
//     @ApiOkResponse({ type: SignupDto }) 
//     async user(@Headers() headers: Record<string, string>) {
//         const authorization = headers.authorization;
//         if(!authorization) {
//             throw new ForbiddenException('No token found');
//         }

//         const token = authorization.split(' ')[1];
//         const userId = this.authService.verifyJWT(token);
//         if(!userId) {
//             throw new ForbiddenException('Invalid token');
//         }
//         const user = await userId.then(userId => this.authService.user(userId.sub));
//         if(!user) {
//             throw new ForbiddenException('User not found');
//         }
//         return user
        
//     }
// }
