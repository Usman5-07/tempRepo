const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/home'){
        res.end(`<h1>This is home Page</h1>
            <a href="/about"><h1>About</h1></a>`)
        // res.end('Welcome to First Server')
    }

    if(req.url === '/about'){
        res.end(`<h1>About Page</h1>
            <a href="/home"><h1>Home</h1></a>
            `)
        // res.end(`<h1>About Page </h1>`)
    }
})

server.listen(5000)

const server1 = http.createServer()

server1.on('request',(req, res)=>{
    res.end('This is event emitted')
})

server1.listen(5001, ()=>{
    console.log('Server is listening at 5001....');
    
})