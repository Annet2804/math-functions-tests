function geometricMean(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Введіть масив чисел довжиною > 0");
    }
    let product = 1;
    for (let num of numbers) {
        if (num < 0) throw new Error("Середнє геометричне визначене тільки для невід'ємних чисел");
        product *= num;
    }
    return Math.pow(product, 1 / numbers.length);
}

module.exports = { geometricMean };