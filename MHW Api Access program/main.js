document.querySelector('button').addEventListener('click', getFetch)

function clearList(list) {
    while(list.firstChild) {
        list.firstChild.remove()
    }
}

function getFetch() {
    const choice = document.querySelector('input').value;
    clearList(monstWeak)
    let url = `https://mhwapi.herokuapp.com/api/${choice}`
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#monstName').innerText = data.name
            document.querySelector('#monstType').innerText = data.type
            document.querySelector('#monstPic').src = data.img
            document.querySelector('#logo').src = data.logo
            document.querySelector('#desc').innerText = data.desc
            document.querySelector('#weakTitle').innerText = 'WEAKNESSES'
            data.weakness.forEach(el => {
                console.log(el.element)
                const li = document.createElement('li')
                li.textContent = el.element
                document.querySelector('#monstWeak').appendChild(li)
            })
        })
}

