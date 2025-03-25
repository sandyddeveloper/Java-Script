let a = [1, 2, 3, 4];

function Pop(a) {
    if (a.length === 0) return undefined; 
    
    let lastEle = a[a.length - 1]; 
    a.length = a.length - 1; 
    
    return lastEle; 
}

let removed = Pop(a); 
console.log(a); 
console.log(removed); 
