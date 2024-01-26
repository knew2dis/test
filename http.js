const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Welcome Bitches!!! Put Your Feet Up Niggas!!!')
        res.end()
    }
    else if(req.url === '/about'){
        res.write('Mind yo Damn Mothafucking Business!!! Damn, Nosey ass')
        res.end()
    }
    else {
        res.write(`
        <h1>Ohhhhh Snap Son</h1>
        <p>You don messed up A A ron</p>
        <a href="/">FUCK OUTTA HERE</a>
        `)
        res.end()
    }
})

/*res.write('Welcome to our motherfucking homepage')
res.end()*/

server.listen(5000)