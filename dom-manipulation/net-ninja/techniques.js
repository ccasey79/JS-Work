
document.addEventListener('DOMContentLoaded', function(){
    let list = document.querySelector('#book-list ul');

// Add books (items) from a form

// let addForm = document.forms('#add-book');
// addForm.addEventListener('submit', function(e){
// 	e.preventDefault();
//     const value = addForm.querySelector('input[type="text"]').value; 
// });

let hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(){
        if(hideBox.checked) {
            list.style.display = 'none';
        } else {
            list.style.display = 'block';
        }
    });

let searchBar = document.forms['search-books'].querySelector('input');
    searchBar.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase();
        const books = document.getElementsByTagName('li');
        Array.from(books).forEach(function(book){
            const title = book.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) != -1) {
                book.style.display = 'block';
            } else {
                book.style.display = 'none';
            }
        });
    });
})



