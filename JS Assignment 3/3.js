let string = 'INDIA';


let arr = string.split('');

arr.splice(3, 1, 'O', 'N', 'E', 'S', 'I', 'A');

let result = arr.join('');

console.log(result);  
