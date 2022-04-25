const app = document.getElementById('root')

const container = document.createElement('div')
container.setAttribute('class', 'container')

var img = document.createElement("img");
img.src = "https://www.recoveryandwellbeing.co.uk/images/NHSLogo.png";
var src = document.getElementById("header");
src.appendChild(img);

app.appendChild(container)

var request = new XMLHttpRequest()
request.open('GET', 'https://api.covwarkpt.nhs.uk/cwpt.interviews/api/practices', true)
request.onload = function () {
  // JSON Data
  var data = JSON.parse(this.response)
  if (request.status >= 200 && request.status < 400) {
    data.forEach(practise => {
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      const h1 = document.createElement('h1')
      h1.textContent = practise.name

      //Dont need to display, just store for link
      const h2 = document.createElement('h2')
      h2.textContext = practise.id

      const p = document.createElement('p')
      practise.addressLine1 = practise.addressLine1
      p.textContent = `${practise.addressLine1}`

      //Link to individual practise page through id
      const btn = document.createElement("button");
      btn.innerHTML = "Visit";
      // button.onclick = ""
      document.body.appendChild(btn);

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
    })
  } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Error`
    app.appendChild(errorMessage)
  }
}

request.send();