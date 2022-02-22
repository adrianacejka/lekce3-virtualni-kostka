

function hodKostkou() {

    let cislo = Math.floor(Math.random() * 6 + 1);
    console.log(cislo);

    let kostka = document.querySelector('#kostka');
    let audio = document.querySelector('audio');
    
    
    if (cislo === 6) {
        // document.querySelector('#zprava').textContent = '6! Vyhrál jsi!';
        document.querySelector('#zprava').innerHTML = '<span class="sestka">6!</span> Vyhrál jsi!';
        
        kostka.src = 'obrazky/' + cislo + '.png';
        audio.play();
    } else {
        document.querySelector('#zprava').textContent = 'Hodil jsi ' + cislo + ', házej znovu!';
        kostka.src = 'obrazky/' + cislo + '.png';
    } 
    
}

    




