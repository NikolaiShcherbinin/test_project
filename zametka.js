1. Интерполяция const perem = 3; console.log(`string${perem}`);
2. Префикс, постфикс: let incr = 10; console.log(incr++); Результат = 10; console.log(++incr); Результат = 11;
3. console.log(2*4 == '8'); Результат: true; console.log(2*4 === '8'); Результат: false

4. /*Callback functions*/
function learnJS(lang, callback){
    console.log(`Я учу ${lang}`);
    callback();
}
function back(){
    console.log('Я прошел данный урок');
}
learnJS('JavaScript', back); 


5. /*Объекты*/
 const obj = {
    name: 'Имя',
    lastName: 'Фамилия',
    age: 30,
    lang: {
        one: 'RU',
        two: 'ENG'
    }
};

//Перебор объекта for in
for (let key in obj){
    console.log(`Ключ: ${key} - Значение: ${obj[key]}`);
}
const {one, two} = obj.lang;
console.log(one);

const objCopy = obj //это ссылка, а не копия
const objCopy = Object.assing({}, obj) //а это поверхностная копия
//еще один новый способ содать копию это Развертывание с помощью спред оператора ...
const objCopy = {...obj};





6. /*Массивы*/
const mass = [1, 4, 6, 7, 10, 124];
//Перебор массива
for (let i=0; i<mass.length; i++){
    console.log(mass[i]);
}
//или (можно остановить на любой итерации при помощи break) for of
for (let value of mass){
    console.log(value);
}
//или (нельзя остановить на любой итерации при помощи break)
mass.forEach(function(value, index, link){
    console.log(`${index}: ${value} внутри массива ${link}`);
});
mass.pop() - удалит последний элемент массива
mass.push(12) - добавит в конец массива 12  
mass.sort() - сортирует значение массива как строки
mass.sort(compareNum) - вот так отсортирует по возразтанию как числа
function compareNum(a, b){
    return a - b;
}

const massCopy = mass //это ссылка, а не копия
const massCopy = mass.slice(); //а это поверхностная копия 
//еще один новый способ содать копию это Развертывание
const video = ['youtube', 'vimeo', 'rutube'],
	  blogs = ['wp', 'livejournal', 'blogger'], 
	  internet = [...video, ...blogs, 'vk', 'facebook']; // оператор ...(спред) развернет массивы на отдельные элементы и склеет их воедино, добавив необходимы данные




      let x = +"Infinity";
      console.log(false - true);







Hithub.com - Логин: NikolaiShcherbinin