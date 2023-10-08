// DOM Selection


// 1. document.getElementById() -> element
    const judul = document.getElementById('judul');

    judul.style.color = 'red';
    judul.style.backgroundColor = '#4444';
    judul.innerHTML = "Muhamad Reza Aditya";


// 2. document.getElementsByTageName() -> HTMLCollection
    const p = document.getElementsByTagName('p');

    for(let i = 0; i < p.length; i++){
        p[i].style.backgroundColor = "lightBlue";
    }

    const h1 = document.getElementsByTagName('h1')[0];
    h1.style.fontSize = '40px';


// 3. document.getElementsByClassName() -> HTMLCollection
    const p1 = document.getElementsByClassName('p1');

    p1[0].innerHTML = "Diubah menggunakan javascript";


