import { Module } from '@nestjs/common';
import { PostService } from './services/post.service';
import { PostResolver } from './resolvers/post.resolver';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [PostResolver, PostService],
  imports: [PrismaModule],
})
export class PostModule {}
