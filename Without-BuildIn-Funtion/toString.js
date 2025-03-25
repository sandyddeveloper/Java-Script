let arr = [1, 2, 3, 4, 5];
let result = ""; 

for (let i = 0; i < arr.length; i++) {
    result += arr[i]; 
    if (i < arr.length - 1) {  
        result += ","; 
    }
}

console.log(result); 
