const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return [this.title, this.author, this.pages, this.read]
    }
}

function addBookToLibrary(){

}

const opForm = document.querySelector('.opForm');
const addButton  = document.querySelector('.addButton')
const form = document.querySelector('form')

opForm.addEventListener('click', ()=>{
    toggleForm();
})

addButton.addEventListener('click', (e)=>{
    e.preventDefault();
    toggleForm();
})

function toggleForm(){
    form.classList.toggle('hidden');
    opForm.classList.toggle('hidden');
}

const b1 = new Book('title', 'author', 10, 'read')
myLibrary.push(b1)

const card = document.querySelector('.card')

card.innerText = myLibrary[0].info()