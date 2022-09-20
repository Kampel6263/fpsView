const block1 = document.getElementById('block1')

const block2 = document.getElementById('block2')
const block3 = document.getElementById('block3')
const block4 = document.getElementById('block4')

const button = document.getElementById('button')


const input1 = document.getElementById('fps1')
const input2 = document.getElementById('fps2')
const input3 = document.getElementById('fps3')
const input4 = document.getElementById('fps4')

let fps1 
let fps2 
let fps3 
let fps4 

const getFps = () =>{
const input1 = document.getElementById('fps1')
const input2 = document.getElementById('fps2')
const input3 = document.getElementById('fps3')
const input4 = document.getElementById('fps4')

const set = document.getElementById('set')



 fps1 = input1.value
 fps2 = input2.value
 fps3 = input3.value
 fps4 = input4.value

 block1.innerText =  input1.value
 block2.innerText =  input2.value
 block3.innerText =  input3.value
 block4.innerText =  input4.value
}

getFps()

const getMilliseconds = (fps) =>{
    
    return fps != 0 ? (1000/fps) : 999999
} 




let left = 0

let main



let block1I

let block2I

let block3I

let block4I

let isStarted = false

const start = () =>{
    getFps()

   
    button.innerText = 'Stop'
    main = setInterval(()=>{
        left = left > (window.innerWidth * 0.75) ? 0 : left + 1
    }, 0)
    block1I = setInterval(()=>{
        block1.style.left =  left + 'px'
       
    }, getMilliseconds(fps1))
    block2I = setInterval(()=>{
        block2.style.left =  left + 'px'
    }, getMilliseconds(fps2))
    block3I = setInterval(()=>{
        block3.style.left =  left + 'px'
    }, getMilliseconds(fps3))
    block4I = setInterval(()=>{
        block4.style.left =   left + 'px'
    }, getMilliseconds(fps4))
    isStarted = true
}

const stop = () =>{
    button.innerText = 'Start'
    clearInterval(main)
    clearInterval(block1I)
    clearInterval(block2I)
    clearInterval(block3I)
    clearInterval(block4I)
    left = 0
    isStarted = false
}

button.addEventListener('click' , ()=>{

    if(isStarted){
       stop()
    } else {
        start()
    }
})

set.addEventListener('click', ()=>{
    stop()
    start()
})



