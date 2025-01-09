import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Request,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req, @Res() res) {
    const token = await this.authService.login(req.user);
    await res.setHeader('Authorization', `Bearer ${token}`);
    return res
      .status(HttpStatus.OK)
      .json({ message: 'login successful', token });
  }
  @UseGuards(LocalAuthGuard)
  @Post('logout')
  async logout(@Req() req, @Res() res) {
    req.logout((err) => {
      if (err) {
        console.error('Error during logout:', err);
        return res
          .status(HttpStatus.INTERNAL_SERVER_ERROR)
          .json({ message: 'Logout failed' });
      }

      res.status(HttpStatus.OK).json({ message: 'Logout successful' });
    });
  }
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
