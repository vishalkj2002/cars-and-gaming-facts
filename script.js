const facts = {
    cars: [
        "The first car was created by Karl Benz in 1885",
        "The average car has around 30,000 parts",
        "The most expensive car in the world is the Rolls-Royce Boat Tail, valued at $28 million",
        "Ferrari produces fewer than 10,000 cars per year to maintain exclusivity",
        "The first car accident occurred in 1891"
    ],
    gaming: [
        "The first video game console, the Magnavox Odyssey, was released in 1972",
        "The Nintendo Switch became the fastest-selling console in U.S. history",
        "The gaming industry generates more revenue than movies and sports combined",
        "Minecraft has sold over 238 million copies, making it the best-selling game ever",
        "The first gaming tournament took place at Stanford University in 1972 for Spacewar!"
    ],
    carsGaming: [
        "Gran Turismo holds the Guinness World Record for the most cars in a racing game series",
        "Need for Speed is the most successful racing game franchise of all time",
        "The first racing video game was Gran Trak 10, released by Atari in 1974",
        "Forza Motorsport games scan real cars with precision technology to create accurate 3D models",
        "The development of racing games has helped create better car design simulators for real automotive manufacturers"
    ]
};

function createFactSection(title, factsList) {
    return `
        <div class="category">
            <h2>${title}</h2>
            <ul>
                ${factsList.map(fact => `<li>${fact}</li>`).join('')}
            </ul>
        </div>
    `;
}

function filterFacts(category) {
    const container = document.getElementById('facts-container');
    container.innerHTML = '';
    
    document.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        container.innerHTML = 
            createFactSection('Cars', facts.cars) +
            createFactSection('Gaming', facts.gaming) +
            createFactSection('Cars in Gaming', facts.carsGaming);
    } else if (category === 'cars') {
        container.innerHTML = createFactSection('Cars', facts.cars);
    } else if (category === 'gaming') {
        container.innerHTML = createFactSection('Gaming', facts.gaming);
    } else if (category === 'cars-gaming') {
        container.innerHTML = createFactSection('Cars in Gaming', facts.carsGaming);
    }
}

// Initialize with all facts
filterFacts('all');
