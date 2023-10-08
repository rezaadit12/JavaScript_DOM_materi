const merah = document.querySelector('input[name=sMerah]')
const hijau = document.querySelector('input[name=sHijau]')
const biru = document.querySelector('input[name=sBiru]')
const h1 = document.getElementsByClassName('h1')[0];

h1.addEventListener('click', function(){
        
        const button1 = document.createElement('button');
        const textButton = document.createTextNode("Random background");

        button1.appendChild(textButton);
        button1.setAttribute('type', 'button');
        document.body.appendChild(button1);

        buttonResult = document.getElementsByTagName('button')[0];

        buttonResult.onclick = function(){
                const r = Math.round(Math.random() * 255 + 1);
                const g = Math.round(Math.random() * 255 + 1);
                const b = Math.round(Math.random() * 255 + 1);
                document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
        }
});


merah.addEventListener('input', function(){
        const r = merah.value;
        const g = hijau.value;
        const b = biru.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

hijau.addEventListener('input', function(){
        const r = merah.value;
        const g = hijau.value;
        const b = biru.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

biru.addEventListener('input', function(){
        const r = merah.value;
        const g = hijau.value;
        const b = biru.value;
        document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})


document.body.addEventListener('mousemove', function(event){
        const x = Math.round((event.clientX / window.innerWidth) * 255);
        const y = Math.round((event.clientY / window.innerHeight) * 255);

        document.body.style.backgroundColor = 'rgb('+ x +','+ y +',100)'
})


