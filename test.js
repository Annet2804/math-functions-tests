const { factorial } = require('./math');

function assertEqual(actual, expected, message) {
    if (actual !== expected) {
        console.error(`${message} | Очікувалось: ${expected}, Отримано: ${actual}`);
        process.exit(1);
    } else {
        console.log(`${message}`);
    }
}

// Тести факторіалу
assertEqual(factorial(0), 1, 'Факторіал 0 = 1');
assertEqual(factorial(1), 1, 'Факторіал 1 = 1');
assertEqual(factorial(5), 120, 'Факторіал 5 = 120');
assertEqual(factorial(6), 720, 'Факторіал 6 = 720');

console.log("Тести пройдено !");