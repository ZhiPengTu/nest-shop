// import { JwtService } from '@nestjs/jwt';
// import { Injectable, Inject } from '@nestjs/common';


// import { UsersService } from '../services/users.service';
// import { User } from '../interfaces/user.interface';

// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly usersService: UsersService,
//     private readonly jwtService: JwtService,
//   ) { }

//   async createToken(payload: { account: string }): Promise<string | any> {
//     return '';
//     // return this.jwtService.sign(payload);
//   }

//   async validateUser(payload: { account: string }): Promise<User | any> {
//     return '';
//     // return await this.usersService.findOneByAccount(payload.account);
//   }
// }

import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

import { UsersService } from '../services/users.service';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(): Promise<string> {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    const user: JwtPayload = { email: 'user@email.com' };
    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return 'await this.usersService.findOneByEmail(payload.email);';
    // return await this.usersService.findOneByEmail(payload.email);
  }
}