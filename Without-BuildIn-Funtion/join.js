let a = ["Hello", "World", "JS"]
let b = " "
let c = a[0]

for (let i = 1; i < a.length; i++) {  
    c += b + a[i]; 
}

console.log(c)
