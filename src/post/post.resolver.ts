import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { Post as DBPost } from '@prisma/client';
@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation('createPost')
  createPost(
    @Args('createPostInput') createPostInput: CreatePostInput,
  ): Promise<DBPost> {
    return this.postService.create(createPostInput);
  }

  @Query('getPosts')
  getPosts() {
    return this.postService.findAll();
  }

  @Query('getPost')
  getPost(@Args('id') id: number): Promise<DBPost> {
    return this.postService.findOne(id);
  }

  @Mutation('updatePost')
  updatePost(
    @Args('updatePostInput') updatePostInput: UpdatePostInput,
  ): Promise<DBPost> {
    return this.postService.update(updatePostInput.id, updatePostInput);
  }

  @Mutation('removePost')
  removePost(@Args('id') id: number) {
    return this.postService.remove(id);
  }
}
