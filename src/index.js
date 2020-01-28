let a = 9;
let b = 28;
[a,b] = [b,a];
console.log(a);
console.log(b);
// import express from 'express'
const express = require('express')
// import add_test from './test-file'
const app = express()


app.listen(3002, ()=>{
    console.log('listening')
})