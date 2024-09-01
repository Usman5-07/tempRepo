const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('res', (name, id)=>{
    console.log(`   name: ${name}  id: ${id}`);
})

customEmitter.on('res', (name, id)=>{
    console.log(`This response is on another line!!!   name: ${name}  id: ${id}`);
    
})

customEmitter.emit('res','Usman', '12')