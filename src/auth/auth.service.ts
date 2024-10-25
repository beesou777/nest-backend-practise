// import { ForbiddenException, Injectable } from '@nestjs/common';
// import { Role, User } from '@prisma/client';
// import { PrismaService } from 'src/prisma/prisma.service';
// import { SignupDto, SigninDto } from './dto'; // Update imports
// import * as argon2 from 'argon2';
// import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
// import { JwtService } from '@nestjs/jwt';
// import { ConfigService } from '@nestjs/config';

// @Injectable()
// export class AuthService {
//     constructor(
//         private prisma: PrismaService,
//         private jwt: JwtService,
//         private config: ConfigService
//     ) {}



//     async user(userId: number) {
//         const user = await this.prisma.user.findUnique({
//             where:{
//                 id:userId
//             }
//         })

//         if(!user) throw new ForbiddenException('User not found')
//         delete user.password
//         return user
//     }

