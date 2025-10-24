function typeWriter(element, text, speed = 50) {
    return new Promise((resolve) => {
        let i = 0;
        element.innerHTML = '';
        element.classList.add('typing');

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Убираем курсор после завершения
                setTimeout(() => {
                    element.style.borderRight = 'none';
                }, 500);
                resolve();
            }
        }
        type();
    });
}

// Последовательная анимация
async function startAnimations() {
    const nameElement = document.getElementById('name');
    const subtitleElement = document.getElementById('subtitle');
    const descriptionElement = document.getElementById('description');

    // Сохраняем оригинальные тексты
    const originalTexts = {
        name: nameElement.textContent,
        subtitle: subtitleElement.textContent,
        description: descriptionElement.textContent
    };

    // Очищаем элементы
    nameElement.textContent = '';
    subtitleElement.textContent = '';
    descriptionElement.textContent = '';

    // Запускаем анимации последовательно
    await typeWriter(nameElement, originalTexts.name, 70);
    await typeWriter(subtitleElement, originalTexts.subtitle, 70);
    await typeWriter(descriptionElement, originalTexts.description, 70);
}

// Запускаем когда страница загрузится
window.addEventListener('load', function() {
    setTimeout(startAnimations, 1000);
});