const socket = new WebSocket("ws://localhost:4000")

function sendMessage(e) {

    e.preventDefault()
    //sumbitting the form without reloading the page
    const input = document.querySelector('input')
    if(input.value)
    {
        socket.send(input.value)
        input.value=""
        //clearing the input
    }
    input.focus()

}

document.querySelector("form").addEventListener('submit',sendMessage)

socket.addEventListener("message",({data})=>{
    const li = document.createElement("li")
    li.textContent=data
    document.querySelector('ul').appendChild(li)
})