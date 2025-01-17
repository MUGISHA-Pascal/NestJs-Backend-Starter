import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { PostModule } from './post/post.module';
import { join } from 'path';
import { MessagesModule } from './messages/messages.module';
import { ChatGateway } from './gateways/chat.gateway';
@Module({
  imports: [
    AuthModule,
    UsersModule,
    AuthModule,
    PrismaModule,
    ArticlesModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: { path: join(process.cwd(), 'src/generated/graphql.ts') },
      sortSchema: true,
    }),
    PostModule,
    MessagesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ChatGateway],
})
export class AppModule {}
