
// 1. 
// element.innerHTML = "namaPerubahan";
// ini berfunsi untuk mengubah isi dari sebuah tag yang sudah kita seleksi

    const judul = document.getElementById('judul');
    judul.innerHTML = '<em>Muhamad Reza </em>';

    const sectionA = document.querySelector("section#a");

    sectionA.innerHTML = 'paragraf1';

// 2.
// element.style.<propertiCSS> = 
// kode tersebut bisa diartika juga dengan "cari elemen_apa lalu ubah/tambahkan style dengan properti css 
    const judul = document.querySelector('#judul');

    judul.style.color = 'lightblue';
    judul.style.backgroundColor = 'salmon';


// 3.
// attribute :

    // element.setAttribute()   : untuk menambah atribut pada html 
        const judul = document.getElementsByTagName('h1')[0];
        judul.setAttribute('name', 'tagJudul');

        const a = document.querySelector('section#a a');
        a.setAttribute('id', 'link');


    // element.getAttribute()   : untuk mengetahui isi dari sebuah atribut
        a.getAttribute('href') //gunakan ini di console
        judul.getAttribute('id') //gunakan ini di console


    // element.removeAttribute(): untuk menghilangkan sebuah atribut pada tag html
        a.removeAttribute('href') //gunakan ini di console


// 4.

    const p2 = document.querySelector('.p2');

// element.classList() :

    // element.classList.add()      = berfungsi untuk menambahkan class baru tanpa menimpa class sebelumnya
        p2.classList.add('label') //gunakan di console

    //element.classList.remove()    = berfungsi untuk menghapus sebuah class
        p2.classList.remove('p2') //gunakan di console

    //element.classList.toggle()        = analogi dari fungsi ini adalah, 
        p2.classList.toggle('judul') // = apakah class judul sudah ada? jika iya maka hapus classnya, jika belum maka tambahkan
                                     // = biasanya fungsi ini untuk membuat sebuah tombol, jika di klik = aktif dan sebaliknya


// 5.
// element.classList.item() = untuk mengetahui nama class pada sebuah element
    p2.classList.item(2) // itu berfungsi untuk mengetahui class apa yang ada di index ke-2


// 6.
// element.classList.contains() = untuk mengecek apakah di dalam suatu element terdapat class
    p2.classList.contains('dua') // yang artinya apakah ada class yang namanya 'dua'


// 7. 
// element.classList.replace()  = untuk mengganti suatu kelas
    p2.classList.replace('dua', 'empat') // yang artinya ganti nama dari class 'dua' menjadi class 'empat'