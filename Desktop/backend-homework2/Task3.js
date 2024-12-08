const EventEmitter = require('node:events')
const emitter = new EventEmitter()

emitter.once('start', (time) => {
    console.log("Timer started...")
    emitter.emit('tick', time)
})

emitter.on('tick', (time) => {
    let date = Date.now()
    while(true) {
        if(Date.now() - date >= 1000){
            console.log(time)

            if(time === 0){
                break
            }

            return emitter.emit('tick', --time)
        }
    }
    emitter.emit('end')
})

emitter.once('end', () => {
    console.log("Timer ended")
})

class Timer {
    start(time){
        emitter.emit('start', time)
    }
}
module.exports=Timer