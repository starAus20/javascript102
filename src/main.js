"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

// Espera a que el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('items');
    const image = document.getElementById('displayImage');
    const photographer = document.getElementById('photographer'); // <-- Cambiado
    const description = document.getElementById('description');   // <-- Cambiado
    const score = document.getElementById('score');               // <-- Cambiado
    const btnInc = document.getElementById('increaseScore');
    const btnDec = document.getElementById('decreaseScore');

    // Llenar el select con los nombres
    Object.entries(itemData).forEach(([key, item]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = item.name;
        select.appendChild(option);
    });

    // Función para mostrar los datos del ítem seleccionado
    function mostrarItem(key) {
        const item = itemData[key];
        if (!item) return;
        image.src = item.image;
        photographer.value = item.photographer;   // <-- Cambiado
        description.value = item.description;     // <-- Cambiado
        score.value = item.score;                 // <-- Cambiado
    }

    // Mostrar el primer ítem por defecto
    select.value = Object.keys(itemData)[0];
    mostrarItem(select.value);

    // Cambiar datos al seleccionar otro ítem
    select.addEventListener('change', () => {
        mostrarItem(select.value);
    });

    // Aumentar puntaje
    btnInc.addEventListener('click', () => {
        const key = select.value;
        itemData[key].score++;
        score.value = itemData[key].score;        // <-- Cambiado
    });

    // Disminuir puntaje
    btnDec.addEventListener('click', () => {
        const key = select.value;
        itemData[key].score--;
        score.value = itemData[key].score;        // <-- Cambiado
    });
});

