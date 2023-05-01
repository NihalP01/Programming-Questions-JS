// Write a function in JavaScript that takes an array of objects as input, where each object represents a book with a title and an author. The function should return an array of authors, where each author appears only once in the array, in alphabetical order. For example, if the input array is [{title: "To Kill a Mockingbird", author: "Harper Lee"}, {title: "1984", author: "George Orwell"}, {title: "Pride and Prejudice", author: "Jane Austen"}, {title: "To Kill a Mockingbird", author: "Harper Lee"}], the function should return ["George Orwell", "Harper Lee", "Jane Austen"].

function authorName(book) {
  const authorNames = [];
  book.map((item) => {
    if (!authorNames.includes(item.author)) {
      authorNames.push(item.author);
    }
  });
  return authorNames;
}

const books = [
  {
    title: 'New',
    author: 'Author',
  },
  {
    title: 'New2',
    author: 'Author2',
  },
  {
    title: 'New3',
    author: 'Author3',
  },
  {
    title: 'New4',
    author: 'Author3',
  },
];

console.log(authorName(books));
