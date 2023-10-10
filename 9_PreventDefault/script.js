

// prevet default adalah fungsi untuk mencegah aksi default
// seperti tag a, jika kita tekan tanpa mengisi hrefnya maka
// halaman browser akan di refresh 

// dengan prevent default aksi tersebut bisa dicegah



// cara pertama
const close = document.querySelectorAll('.close');


// cara kedua
close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
        e.preventDefault();
    });
});




/**
 * DOM Traversal method selain parentElement
 * 
 * 1. parentNode                -> node
 * 2. parentElement             -> element
 * 3. nextSibling               -> node
 * 4. nextElementSibling        ->element
 * 5. previousSibling           -> node
 * 6. previousElementSibling    -> element
 * 
 */