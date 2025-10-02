const { geometricMean } = require('./math');

function assertEqual(actual, expected, message) {
    if (Math.abs(actual - expected) > 0.0001) {
        console.error(`${message} | Очікувалось: ${expected}, Отримано: ${actual}`);
        process.exit(1);
    } else {
        console.log(`${message}`);
    }
}

// Тести середнього геометричного
assertEqual(geometricMean([1, 1, 1]), 1, 'Середнє геометричне [1,1,1] = 1');
assertEqual(geometricMean([2, 8]), 4, 'Середнє геометричне [2,8] = 4');
assertEqual(geometricMean([1,3,9,27]), 6.062, 'Середнє геометричне [1,3,9,27] ≈ 6.062');
console.log("Усі тести пройдено!");
