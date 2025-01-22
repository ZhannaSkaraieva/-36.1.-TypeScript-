"use strict";
//export { sumArray, createUser, OrderStatus, getOrderStatus }
console.log('Завдання #1. ....................................');
function sumArray(number) {
    return number.reduce((a, b) => a + b, 0); // 0 — начальное значение для суммы, добавляем в качестве второго аргумента.
}
; // если массив пустой, сумма будет равна 0.
// Вивід до консолі для демонстрації
console.log(sumArray([1, 2, 3, 4])); // Повинно вивести 10
console.log(sumArray([])); // Повинно вивести 0
console.log('Завдання #2. ....................................');
function createUser(name, age, isActive) {
    const newUser = { name, age, isActive }; //для обьекта задается тип (User) т.е. типизируем резульат 
    return newUser;
}
const newUser = createUser('Анна', 25, true);
console.log(newUser);
console.log('Завдання #3. ....................................');
/*Задача: Розробити функцію getOrderStatus, яка приймає статус замовлення як параметр і повертає рядок з описом статусу.
 *
 * Мета: Створення функції, здатної ідентифікувати статус замовлення і надавати користувачеві зрозуміле пояснення щодо поточного стану замовлення.
 *
 * Вимоги до реалізації:
 * 1. У коді має бути присутній enum OrderStatus з необхідними статусами.
 * 2. enum OrderStatus повинен мати статуси: 'Pending', 'Shipped', 'Delivered', 'Cancelled'.
 * 3. Функція має використовувати enum OrderStatus для визначення можливих статусів замовлення.
 * 4. Функція має приймати один параметр типу OrderStatus і повертати рядок з описом статусу.
 * 5. Функція повинна правильно обробити кожен статус замовлення, повертаючи відповідне повідомлення:
 * -  'Pending' -> 'Замовлення очікує на обробку',
 * -  'Shipped' -> 'Замовлення було відправлено',
 * -  'Delivered' -> 'Замовлення доставлено',
 * -  'Cancelled' -> 'Замовлення скасовано'
 * -  прокинути помилку з текстом 'Невідомий статус замовлення' в будь-якому іншому випадку.
 * 6. Параметри функції та її тип повернення мають бути явно типізовані.
 */
/*enum OrderStatus {
  Pending='Замовлення очікує на обробку',
  Shipped='Замовлення було відправлено',
  Delivered='Замовлення доставлено',
  Cancelled='Замовлення скасовано',
}

function getOrderStatus(OrderStatus: string): string {
  return orderStatus: OrderStatus = [
    OrderStatus.Pending,
    OrderStatus.Shipped,
    OrderStatus.Delivered,
    OrderStatus.Cancelled,
  ]
  
}

// Приклад виклику функції
console.log(getOrderStatus(OrderStatus.Pending))
console.log(getOrderStatus(OrderStatus.Shipped))
console.log(getOrderStatus(OrderStatus.Delivered))
console.log(getOrderStatus(OrderStatus.Cancelled))
*/
