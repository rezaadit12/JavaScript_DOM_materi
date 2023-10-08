// DOM Manipulation

// Method yang digunakan :

/*
    document.createElement()    = membuat element baru di tag html -> <p></p>
    document.createTextNode()   = membuat isi dari element html -><p>membuat_isi</p>
    node.appendChild()          = memasukan isi element html ke dalam tagnya
    node.insertBefore()         = artinya menyimpan element sebelum .... -> simpan LI baru sebelum LI ke-3
    parentNode.removeChild()    = menghapus salah satu element
    parentNode.replaceChild()   = mengganti salah satu element
*/


// 1. 
// document.createElement()
// document.createTextNode()
// node.appendChild()

        const pBaru = document.createElement('p');
        const teksPBaru = document.createTextNode('paragraf baru');

        pBaru.appendChild(teksPBaru);


        // simpan pBaru di akhir section A
        const sectionA = document.getElementById('a');
        sectionA.appendChild(pBaru);


        const LiBaru = document.createElement('li');
        const teksLiBaru = document.createTextNode('Item baru');

        LiBaru.appendChild(teksLiBaru);


        const ul = document.querySelector('section#b ul');
        const liLama = ul.querySelector('li:nth-child(2)');


// 2. node.insertBefore()

        ul.insertBefore(LiBaru, liLama);


// 3. parentNode.removeChild()

        const link = document.getElementsByTagName('a')[0];
        sectionA.removeChild(link);


// 4. parentNode.replaceChild()

        const sectionB = document.getElementById('b');
        const p4 = sectionB.querySelector('p');

        const h2Baru = document.createElement('h2');
        const teksh2Baru = document.createTextNode('Judul Baru');


        h2Baru.appendChild(teksh2Baru);

        sectionB.replaceChild(h2Baru, p4);
// ============================================================================



pBaru.style.backgroundColor = 'yellow';
LiBaru.style.backgroundColor = 'yellow';
h2Baru.style.backgroundColor = 'yellow';






