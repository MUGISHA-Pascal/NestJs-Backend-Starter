import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const user1 = await prisma.user.upsert({
    where: { email: 'johndoe@gmail.com' },
    update: {},
    create: {
      username: 'John Doe',
      password: 'johndoepassword',
      email: 'johndoe@gmail.com',
    },
  });
  const user2 = await prisma.user.upsert({
    where: { email: 'johndoe2@gmail.com' },
    update: {},
    create: {
      username: 'John Doe2',
      password: 'johndoepassword2',
      email: 'johndoe2@gmail.com',
    },
  });
  const post1 = await prisma.article.upsert({
    where: { title: 'Prisma Adds Support for MongoDB' },
    update: { authorId: user2.id },
    create: {
      title: 'Prisma Adds Support for MongoDB',
      body: 'Support for MongoDB has been one of the most requested features since the initial release of...',
      description:
        "We are excited to share that today's Prisma ORM release adds stable support for MongoDB!",
      published: false,
      authorId: user2.id,
    },
  });
  const post2 = await prisma.article.upsert({
    where: { title: "What's new in Prisma? (Q1/22)" },
    update: { authorId: user1.id },
    create: {
      title: "What's new in Prisma? (Q1/22)",
      body: 'Our engineers have been working hard, issuing new releases with many improvements...',
      description:
        'Learn about everything in the Prisma ecosystem and community from January to March 2022.',
      published: true,
      authorId: user1.id,
    },
  });

  console.log({ user1, user2, post1, post2 });
}
main();
