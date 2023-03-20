const form = document.getElementById('prediction-form');
const resultContainer = document.getElementById('result');
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = form.elements['patient-name'].value;
        const age = form.elements['age'].value;
        const sex = form.elements['sex'].value;
        const race = form.elements['race'].value;
        // Make a random prediction
        const isRecurrenceLikely = Math.random() >= 0.5;
        
        setTimeout(() => {
            // Update result container
            resultContainer.textContent = `${name}'s Result: ${isRecurrenceLikely ? 'Recurrence is Likely' : 'Safe'}`;
            resultContainer.classList.add('is-visible');
            form.reset();
        }, Math.floor(Math.random() * 2000) + 3000);
    });