const socket = io("ws://localhost:3500")

function sendMessage(e) {

    e.preventDefault()
    //sumbitting the form without reloading the page
    const input = document.querySelector('input')
    if(input.value)
    {
        socket.emit('message',input.value)
        input.value=""
        //clearing the input
    }
    input.focus()

}

document.querySelector("form").addEventListener('submit',sendMessage)


//listen for message
socket.on("message",(data)=>{
    const li = document.createElement("li")
    li.textContent=data
    document.querySelector('ul').appendChild(li)
})