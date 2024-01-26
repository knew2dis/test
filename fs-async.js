/*const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
     }
     const first = result
     console.log(first)
     readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the resuly: ${first}, ${second}`, (err, resul)=>{
            if(err){
                console.log(err)
                return
            }
            console.log('done with this task')
        })
        })
     })
console.log('starting next task')*/
const fs = require('fs')
console.log('START')
fs.readFile('./content/first.txt', 'utf8', (err, result)=>{
    if(err){
        console.log('error')
        return
    }
    const first = result
    console.log(first)
    fs.readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log('error')
            return
        }
        const second = result
        console.log(second)
        fs.writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=>{
            if(err){
                console.log('error')
                return
            }
            const test = result
            console.log(test)
            console.log('Done with this task')
        })
    })
})
console.log('STARTING NEXT TASK')
