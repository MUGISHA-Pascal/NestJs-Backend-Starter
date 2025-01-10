import { Module } from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { ArticlesController } from './articles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserEntity } from 'src/users/entities/user.entity';

@Module({
  controllers: [ArticlesController],
  providers: [ArticlesService, UserEntity],
  imports: [PrismaModule],
})
export class ArticlesModule {}
