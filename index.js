const hello  = document.querySelector("#hello")

hello.style.backgroundColor = "yellow"
hello.style.color = "blue"
hello.style.fontSize = "x-large"

hello.innerHTML ='Hello World inserted with javascript'

const helloworld = document.createElement("h2")
helloworld.innerText = 'Hello world created with Javascript'
document.body.appendChild(helloworld)

const hello2 =  document.createElement("p")
hello2.innerText = "Hello World created and appended using javascript"
document.getElementById("hello").appendChild(hello2)