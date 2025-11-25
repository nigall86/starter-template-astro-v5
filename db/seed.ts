import { db, Author, Comment } from 'astro:db';

// https://astro.build/db/seed
export default async function () {
  await db.insert(Author).values([
    { id: 1, name: 'J. R. R. Tolkien' },
    { id: 2, name: 'H. G. Wells' },
  ]);

  await db.insert(Comment).values([
    { authorId: 1, content: 'Hope you like Astro DB!' },
    { authorId: 2, content: 'Enjoy!' },
  ]);
}
