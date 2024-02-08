const main = document.querySelector('main')
const myLibrary = {
    books: [],
    remove: (book)=>{
        const index = myLibrary.books.findIndex(e=>e==book);
        myLibrary.books.splice(index, 1)
    }
};

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return [this.title, this.author, this.pages, this.read]
    }
    this.createElements = function(){
        const article = document.createElement('article')
        article.className = 'book'
        main.appendChild(article)
        const remove = document.createElement('button');
        remove.setAttribute('type', 'button');
        remove.textContent = '-';
        remove.addEventListener('click', (e)=>{
            main.removeChild(article);
            myLibrary.remove(this);
        })
        article.appendChild(remove)
        const toggleRead = document.createElement('button');
        toggleRead.textContent = "Read";
        toggleRead.addEventListener('click', (e)=>{
            this.toggleRead();
            read.textContent = this.read;
        })
        const title = document.createElement('p');
        const author = document.createElement('p');
        const pages = document.createElement('p');
        const read = document.createElement('p');
        title.textContent = this.title;
        author.textContent = this.author;
        pages.textContent = this.pages;
        read.textContent = this.read;
        article.appendChild(title);
        article.appendChild(author);
        article.appendChild(pages);
        article.appendChild(read);
        article.appendChild(toggleRead)
        return article;
    },
    this.toggleRead = function(){
        this.read = this.read == true ? false : true;
    }
}

function createBook(){
    const inputs = document.querySelectorAll('input');
    const values = Array.from(inputs).map((e)=>{
        return e.value != 'on' ? e.value : e.checked;
    })
    const newBook = new Book(...values);
    return newBook;
}

function addBookToLibrary(){
    const newBook = createBook()
    myLibrary.books.push(newBook);
    const bookElement = newBook.createElements()
}

const opForm = document.querySelector('.opForm');
const addButton  = document.querySelector('.addButton')
const form = document.querySelector('form')

opForm.addEventListener('click', ()=>{
    toggleForm();
})

addButton.addEventListener('click', (e)=>{
    e.preventDefault();
    addBookToLibrary();
    form.reset();
    toggleForm();
})

function toggleForm(){
    form.classList.toggle('hidden');
    opForm.classList.toggle('hidden');
}

const b1 = new Book(
    'Harry Potter and the Philosopher\'s Stone',
    'J. K. Rowling',
    224,
    true
)
const b2 = new Book(
    'Harry Potter and the Chamber of Secrets',
    'J. K. Rowling',
    352,
    true
)
const b3 = new Book(
    'Harry Potter and the Prisoner of Azkaban',
    'J. K. Rowling',
    464,
    false
)

b1.createElements();
b2.createElements();
b3.createElements();

myLibrary.books.push(b1)
myLibrary.books.push(b2)
myLibrary.books.push(b3)