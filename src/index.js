let a = 9;
let b = 28;
[a,b] = [b,a];
console.log(a);
console.log(b);
import express from 'express'

const app = express()

app.listen(3000, ()=>{
    console.log('listening')
})