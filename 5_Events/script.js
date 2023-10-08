/*
        Event pada javascript merepresentasikan sebuah
        kejadian yang terjadi di dalam DOM.

        kejadian tersebut bisa dilakukan oleh user contohnya
        seperti: (mouse event, keyboard event, dll).


        Cara 'mendengarkan' event

                - Event Handler
                        - Inline HTML attribute
                        - Element method

                - addEventListener()



        perbedaannya antara event handler dan addEventListener adalah

                jika kita memberikan lebihd dari satu perubahan lalu
                kita menggunakan evet handler maka perubahan yang
                yang terakhir dilakukan akan menimpa perubahan sebelumnya

*/




// =========== praktek versi 1
// ===========

const p3 = document.querySelector('.p3');
function ubahWarnaP3(){
        p3.style.backgroundColor = 'red';
}


function ubahWarnaP2(){
        p2.style.backgroundColor = 'green';
}

const p2 = document.querySelector('.p2');
p2.onclick = ubahWarnaP2;




const p4 = document.querySelector('section#b p');

p4.addEventListener('click', function(){
        const ul = document.querySelector('section#b ul');
        const liBaru = document.createElement('li');

        const teksLiBaru = document.createTextNode('Item Baru');

        liBaru.appendChild(teksLiBaru);
        ul.appendChild(liBaru);
});



// ====== perbedaan menggunakan event handler dan addEventListener======

// const p3 = document.querySelector('.p3');

p3.onclick = function(){
        p3.style.backgroundColor = "lightblue";
}

p3.onclick = function(){
        p3.style.color = "red";
}

// jika menggukanan event handler maka function p3 yang pertama akan ditimpa
// dan akan menjalankan function p3 yang kedua

p3. addEventListener('click', function(){
        p3.style.backgroundColor = 'lightblue';
});

p3. addEventListener('click', function(){
        p3.style.color = 'red';
});


// sedangkan menggunakan addEventListerner kedua function tersebut tetap dijalankan


/**
 *  Daftar Event 
 *     -> Mouse Event
 *     -> Keyboard Event
 *     -> Resources Event
 *     -> Focus Event
 *     -> View Event
 * 
 *     -> dll....
 * 
 * Dan setiap kategorinya memiliki banyak event
 *     -> click
 *     -> dblclick
 *     -> mouseover
 *     -> mouseenter
 *     -> mouseup
 *     -> wheel 
 * 
 *     -> dll.....
 * 
 * 
 * JIKA INGIN MENGETAHUI SELENGKAPNYA KUNJUNGI SITUS BERIKUT: 
 * 
 *      -> https://developer.mozilla.org/en-US/docs/Web/Events
 *
 */