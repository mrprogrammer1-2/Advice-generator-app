const api = 'https://api.adviceslip.com/advice'

const initApp = async ()=> {
    await fetch(api).then(response=> response.json())
    .then(
        data=> {
            addToHtml(data)
        }
        )
}

initApp()


function addToHtml(data) {
    const quots = document.querySelector(".quots q");
    const adviceNum = document.querySelector(".advice-num")
    quots.innerHTML = ''
    adviceNum.innerHTML = ''

    quots.innerHTML = data.slip.advice
    adviceNum.innerHTML = data.slip.id
}

document.getElementById("generate").addEventListener("click", initApp)

