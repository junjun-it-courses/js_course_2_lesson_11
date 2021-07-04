const demoArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


function forEach(arr, func) {

    for(let i = 0; i <= arr.length - 1; i++) {

        arr[i] = func(arr[i], i, arr)

    }

}

function square(currentValue, index, array) {
    return currentValue ** 2;
}


forEach(demoArr, square)
console.log(demoArr);


// function map(arr, func) {
//     const result = [];
//
//     for(let i = 0; i <= arr.length - 1; i++) {
//
//         result[i] = func(arr[i], i, arr);
//
//     }
//
//     return result
// }
//
//
// console.log(demoArr)
// console.log(map(demoArr, square))
//



