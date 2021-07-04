const array = ['apple', 'banana', 'grapefruit', 'orange', 'potato', 'cucumber', 'melon', 'cherry'];

// arr.splice(startIndex, deleteCount) - Удаление элемента(ов) с массива

// console.log(array);
// array.splice(4, 2); // начиная с позиции 4, удалить 2 элемент
// console.log(array);
// console.log(array.length);


// arr.splice() возвращает удаленные элементы
// let removedVals = array.splice(4, 2)
// console.log(removedVals)
// console.log(array)

// Записываем удаленные элементы в переменную
// Внутри массива элементы были удалены и записаны в переменную

// let removedElements = array.splice(4, 2)
// console.log('Удаленные элементы: ', removedElements);
// console.log(array);
// console.log(array.length);


// Можно заменить удаленные элементы новыми переданными в метод
// Удаляем 2 элементы с начала массива и заменяем их другими

// console.log(array);
// array.splice(2, 0, 'My custom fruit', 'Another fruit',  'Another fruit 2');
// console.log(array);
// console.log(array.length);



// Отрицательные индексы - если индекс отрицательный
// то начинается исчисление с конца массива


// начиная с индекса -1 (перед последним элементом)
// удалить 0 элементов,
// затем вставить числа 3 и 4

// let arr = [1, 2, 5];
// arr.splice(1, 0, 3, 4);
// alert( arr ); // 1,2,3,4,5