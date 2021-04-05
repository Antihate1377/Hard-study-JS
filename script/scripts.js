let num = 266219,
    composition = 1;
    // Перевожу num в строку и разбиваю на массив
num = String(num).split('');
    // Через цикл считаю произведение всех цифр в начальном числе
for (let i = 0; i < num.length; i++) {
    composition *= num[i];
    console.log('Current composition is ' + composition + '. Wait please...');
}
console.log('Final composition is ' + composition + '. Operation is completed.');
console.log('Exponentiation of the resulting number... Result is ' + composition ** 3);
    // Перевожу произведение в кубе в строку и извлекаю в переменную twoNumber две первых цифры
let twoNumber = String(composition ** 3).substring(0, 2);
console.log('First two numbers of result are ' + twoNumber);