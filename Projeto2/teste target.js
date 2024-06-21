document.addEventListener("DOMContentLoaded", () => {
    const movable = document.getElementById('movable');
    const target = document.getElementById('target');
    const attractionRadius = 100;

    let isDragging = false;

    // Função para calcular a distância entre dois pontos
    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    }

    // Função para mover o elemento
    function moveElement(event) {
        if (isDragging) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            movable.style.left = `${mouseX - 25}px`;
            movable.style.top = `${mouseY - 25}px`;

            const targetRect = target.getBoundingClientRect();
            const movableRect = movable.getBoundingClientRect();
            
            const targetCenterX = targetRect.left + targetRect.width / 2;
            const targetCenterY = targetRect.top + targetRect.height / 2;

            const movableCenterX = movableRect.left + movableRect.width / 2;
            const movableCenterY = movableRect.top + movableRect.height / 2;

            const distance = getDistance(movableCenterX, movableCenterY, targetCenterX, targetCenterY);

            if (distance < attractionRadius) {
                movable.style.left = `${targetCenterX - 25}px`;
                movable.style.top = `${targetCenterY - 25}px`;
            }
        }
    }

    // Iniciar o arrasto
    movable.addEventListener('mousedown', () => {
        isDragging = true;
    });

    // Mover o elemento
    document.addEventListener('mousemove', moveElement);
});
