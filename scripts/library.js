class Library {
  constructor() {
    if (window.localStorage.getItem('stored') === null) {
      window.localStorage.setItem('stored', JSON.stringify([]));
    }
    this.books = JSON.parse(window.localStorage.getItem('stored'));
    this.booklist = document.getElementById('booklist');
    document.getElementById('add').addEventListener('click', () => { this.add(); });
    this.show();
    this.dateTime();
  }

  add() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const book = { title, author };
    this.books.push(book);
    window.localStorage.setItem('stored', JSON.stringify(this.books));
    document.getElementById('form').reset();

    this.show();
  }

  show() {
    const booklist = document.getElementById('booklist');
    while (booklist.firstChild) {
      booklist.removeChild(booklist.firstChild);
    }
    this.books.forEach((book) => {
      const bookshell = document.createElement('p');
      const removebutton = document.createElement('button');

      removebutton.innerHTML = 'Remove';

      booklist.appendChild(bookshell);
      bookshell.innerHTML = `"${book.title}" by ${book.author}`;
      bookshell.appendChild(removebutton);
      removebutton.addEventListener('click', () => { this.remove(); });
    });
  }

  remove() {
    this.books = this.books.filter((bok) => this.books.indexOf(bok));
    this.show();
    localStorage.setItem('stored', JSON.stringify(this.books));
  }
/* eslint-disable */
  dateTime() {
    const dt = luxon.DateTime.now().toLocaleString(luxon.DateTime.DATETIME_FULL);
    document.getElementById('datetime').innerHTML = dt;
  }
/* eslint-enable */
}

const library = new Library();
library.show();

const list = document.getElementById('listbook');
const addbook = document.getElementById('addbook');
const contact = document.getElementById('contactinfo');

document.getElementById('list').addEventListener('click', () => {
  list.style.display = 'flex';
  addbook.style.display = 'none';
  contact.style.display = 'none';
});

document.getElementById('addlink').addEventListener('click', () => {
  list.style.display = 'none';
  addbook.style.display = 'flex';
  contact.style.display = 'none';
});

document.getElementById('contactme').addEventListener('click', () => {
  list.style.display = 'none';
  addbook.style.display = 'none';
  contact.style.display = 'flex';
});
