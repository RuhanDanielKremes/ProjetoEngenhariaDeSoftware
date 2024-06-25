const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let shapes = [];

function createShape(initial = false) {
    const size = Math.random() * 20 + 10; // Tamanho aleatório entre 10 e 30
    const x = Math.random() * canvas.width;
    const y = initial ? Math.random() * canvas.height : canvas.height + size; // Se inicial, posição aleatória na tela, senão abaixo da tela
    const speed = Math.random() * 0.5 + 0.5; // Velocidade de 0.5 a 1
    const rotationSpeed = Math.random() * 0.05 - 0.025; // Rotação de -0.025 a 0.025 radianos por frame
    const shapeType = Math.random() < 0.33 ? 'circle' : (Math.random() < 0.5 ? 'triangle' : 'square'); // Tipo de forma aleatório

    return { x, y, size, speed, rotationSpeed, angle: 0, shapeType };
}

function updateShapes() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    shapes.forEach(shape => {
        shape.y -= shape.speed;
        shape.angle += shape.rotationSpeed;

        if (shape.y + shape.size < 0) {
            shape.y = canvas.height + shape.size; // Reinicia abaixo da tela
            shape.x = Math.random() * canvas.width; // Nova posição horizontal aleatória
        }

        drawShape(shape);
    });

    requestAnimationFrame(updateShapes);
}

function drawShape(shape) {
    ctx.save();
    ctx.translate(shape.x, shape.y);
    ctx.rotate(shape.angle);
    ctx.fillStyle = 'gray';

    switch (shape.shapeType) {
        case 'circle':
            ctx.beginPath();
            ctx.arc(0, 0, shape.size / 2, 0, 2 * Math.PI);
            ctx.fill();
            break;
        case 'triangle':
            ctx.beginPath();
            ctx.moveTo(-shape.size / 2, shape.size / 2);
            ctx.lineTo(shape.size / 2, shape.size / 2);
            ctx.lineTo(0, -shape.size / 2);
            ctx.closePath();
            ctx.fill();
            break;
        case 'square':
        default:
            ctx.fillRect(-shape.size / 2, -shape.size / 2, shape.size, shape.size);
            break;
    }

    ctx.restore();
}

function init() {
    for (let i = 0; i < 50; i++) {
        shapes.push(createShape(true)); // Cria formas inicialmente distribuídas pela tela
    }
    updateShapes();
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

init();