document.getElementById('addCircleBtn').addEventListener('click', function() {
    const container = document.querySelector('.esquerda');
    const formContainer = document.querySelector('.baixo');
    if (!document.querySelector('.pin')) { 
        const pin1 = document.createElement('div');
        const pin2 = document.createElement('div');
        pin1.classList.add('pin');
        pin1.classList.add('posicao1');
        pin2.classList.add('pin');
        pin2.classList.add('posicao2');
        container.appendChild(pin1);
        container.appendChild(pin2);
        //-------------------------
        /*
        const Square_id_01 = document.createElement('img');
        Square_id_01.src = "img/quadrado.webp";
        formContainer.appendChild(Square_id_01);
        const house = document.createElement('img');
        house.src = "img/Sem Título-3.png";
        house.style.position = 'abosolute';
        house.style.cursor = 'move';
        formContainer.appendChild(house);
        */
    }
});

document.getElementById('removeCircleBtn').addEventListener('click', function() {
    const pin1 = document.querySelector('.pin');
    if (pin1) {
        pin1.remove();
        pin2.remove();
        Square_id_01.remove();
    }
});

//---------------------------
    const formContainer = document.querySelector('.baixo');
    const house = document.createElement('img');
    const transparente = document.createElement('div');
    transparente.addClassName = "transparente";
    house.src = "img/Sem Título-3.png";
    house.style.width = '450px';
    house.style.height = '450px';
    house.style.cursor = 'move';
    house.style.position = 'absolute';  
    house.style.opacity = '0.5';
    house.style.pointerEvents = 'none';
    formContainer.appendChild(transparente);
    transparente.appendChild(house);


    let offsetX, offsetY;

    house.addEventListener('mousedown', (e) => {
        offsetX = e.clientX - house.offsetLeft;
        offsetY = e.clientY - house.offsetTop;
        isDragging = true;
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            house.style.left = (e.clientX - offsetX) + 'px';
            house.style.top = (e.clientY - offsetY) + 'px';
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
    });      