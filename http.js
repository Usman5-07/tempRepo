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