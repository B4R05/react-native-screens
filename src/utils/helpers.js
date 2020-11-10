export const matchAuthor = (authors, authorId) =>
  authors.length ? authors.find(author => author.id === authorId) : [];
