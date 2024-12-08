const EventEmitter = require('node:events')
const emitter = new EventEmitter()

emitter.on('actionLogged', (action) => {
    console.log(`logged action ${action}`)
})

emitter.on('maxActions', () => {
    console.log('Maximum actions!')
})
class UserActionTracker extends EventEmitter{
    constructor(){
        super()
    }
    #actions = []

    logAction(action){
        this.#actions.push(action)
        emitter.emit('actionLogged', action)

        if(this.#actions.length >= 5){
            emitter.emit('maxActions')
        }
    }

    getActionCount(){
        return this.#actions
    }
}

module.exports=UserActionTracker
