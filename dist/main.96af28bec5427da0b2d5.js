/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (() => {

eval("\n//export { sumArray, createUser, OrderStatus, getOrderStatus }\nconsole.log('Завдання #1. ....................................');\nfunction sumArray(number) {\n    return number.reduce((a, b) => a + b, 0); // 0 — начальное значение для суммы, добавляем в качестве второго аргумента.\n}\n; // если массив пустой, сумма будет равна 0.\n// Вивід до консолі для демонстрації\nconsole.log(sumArray([1, 2, 3, 4])); // Повинно вивести 10\nconsole.log(sumArray([])); // Повинно вивести 0\nconsole.log('Завдання #2. ....................................');\nfunction createUser(name, age, isActive) {\n    const newUser = { name, age, isActive }; //для обьекта задается тип (User) т.е. типизируем резульат \n    return newUser;\n}\nconst newUser = createUser('Анна', 25, true);\nconsole.log(newUser);\nconsole.log('Завдання #3. ....................................');\n/*Задача: Розробити функцію getOrderStatus, яка приймає статус замовлення як параметр і повертає рядок з описом статусу.\n *\n * Мета: Створення функції, здатної ідентифікувати статус замовлення і надавати користувачеві зрозуміле пояснення щодо поточного стану замовлення.\n *\n * Вимоги до реалізації:\n * 1. У коді має бути присутній enum OrderStatus з необхідними статусами.\n * 2. enum OrderStatus повинен мати статуси: 'Pending', 'Shipped', 'Delivered', 'Cancelled'.\n * 3. Функція має використовувати enum OrderStatus для визначення можливих статусів замовлення.\n * 4. Функція має приймати один параметр типу OrderStatus і повертати рядок з описом статусу.\n * 5. Функція повинна правильно обробити кожен статус замовлення, повертаючи відповідне повідомлення:\n * -  'Pending' -> 'Замовлення очікує на обробку',\n * -  'Shipped' -> 'Замовлення було відправлено',\n * -  'Delivered' -> 'Замовлення доставлено',\n * -  'Cancelled' -> 'Замовлення скасовано'\n * -  прокинути помилку з текстом 'Невідомий статус замовлення' в будь-якому іншому випадку.\n * 6. Параметри функції та її тип повернення мають бути явно типізовані.\n */\n/*enum OrderStatus {\n  Pending='Замовлення очікує на обробку',\n  Shipped='Замовлення було відправлено',\n  Delivered='Замовлення доставлено',\n  Cancelled='Замовлення скасовано',\n}\n\nfunction getOrderStatus(OrderStatus: string): string {\n  return orderStatus: OrderStatus = [\n    OrderStatus.Pending,\n    OrderStatus.Shipped,\n    OrderStatus.Delivered,\n    OrderStatus.Cancelled,\n  ]\n  \n}\n\n// Приклад виклику функції\nconsole.log(getOrderStatus(OrderStatus.Pending))\nconsole.log(getOrderStatus(OrderStatus.Shipped))\nconsole.log(getOrderStatus(OrderStatus.Delivered))\nconsole.log(getOrderStatus(OrderStatus.Cancelled))\n*/\n\n\n//# sourceURL=webpack://-36.1.-typescript-/./src/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/main.ts"]();
/******/ 	
/******/ })()
;