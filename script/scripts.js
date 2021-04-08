    // Задаю переменную, которая принимает значения ru или en
let lang = 'en';
    // Решение через if
if (lang === 'ru') {
    console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
} else if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}
    // Решение через switch-case
switch (lang) {
    case ('ru'):
        console.log('Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье');
        break;
    case ('en'):
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
}
    // Решение через многомерный массив
let arr = {
    'ru': ['Понедельник, вторник, среда, четверг, пятница, суббота, воскресенье'],
   'en': ['Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday']
};
console.log(arr[lang]);

    // Решение второй задачи через несколько тернарных операторов
let namePerson = 'Сергей',
    change;
change = namePerson === 'Артем' ? 'Директор' : namePerson === 'Максим' ? 'Преподаватель' : 'Студент';
console.log(change);