const eleGrid = document.querySelector('.grid')
const buttonGenera = document.querySelector('.button')


buttonGenera.addEventListener('click', function() {
    const level = document.querySelector('.difficoltà').value;

    if(level =='facile'){
        for(let i = 0; i < 100; i++){
            const eleCell = document.createElement('div')
            eleCell.classList.add('cellFacile')
            eleGrid.append(eleCell)
            eleCell.innerHTML +=i+1

            eleCell.addEventListener('click', function() {
                this.classList.toggle('active')
                console.log(i+1)
            });
        };
    };

    if(level == 'medio'){
        for(let i = 0; i < 81; i++){
            const eleCell = document.createElement('div')
            eleCell.classList.add('cellMedia')
            eleGrid.append(eleCell)
            eleCell.innerHTML +=i+1

            eleCell.addEventListener('click', function() {
                this.classList.toggle('active')
                console.log(i+1)
            });
        };
    };
    
    if(level == 'difficile'){
        for(let i = 0; i < 49; i++){
            const eleCell = document.createElement('div')
            eleCell.classList.add('cellDifficile')
            eleGrid.append(eleCell)
            eleCell.innerHTML +=i+1

            eleCell.addEventListener('click', function() {
                this.classList.toggle('active')
                console.log(i+1)
            });
        };
    };
});
    