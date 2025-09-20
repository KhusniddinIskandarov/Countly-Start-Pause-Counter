const container = document.querySelector('.container')
const heading1 = document.querySelector('h1')
const button = document.querySelectorAll('button')

let timeInterval

button.forEach((item) => {
    item.addEventListener('click', (e) =>{
        if(item.textContent == 'start') {
            heading1.style.color = 'green'
            timeInterval = setInterval(() => {
                heading1.textContent = Number(heading1.textContent) + 1
            }, 1000)
        } else if(item.textContent == 'pouse') {
            heading1.style.color = 'black'
            clearInterval(timeInterval)
        }     
    })
})