

// 4. document.querySelector() -> element
    const p4 = document.querySelector('#b p');
    p4.style.color = "green";
    p4.style.fontSize = "20px";


    const li2 = document.querySelector('section#b ul li:nth-child(2)');
    li2.style.color = "red";


// 5. document.querySelectorAll() -> NodeList
    const paragraf = document.querySelectorAll('p');
    for(let i = 0; i < paragraf.length; i++){
        paragraf[i].style.color = 'green'
    }



// bisa juga mengubah node rootnya :

    // jika ingin menjalankannya comment dulu kodingan berikut:
        // const sectionA = document.querySelector('section#b');
        // const p4 = sectionA.getElementsByTagName('p')[0];

        // p4.style.color = "gold";