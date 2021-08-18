const sectionResults = document.createElement('section');
const body = document.getElementById('body');
body.appendChild(sectionResults);

const coin = {
    state: 0,

    flip: function () {
      this.state = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
      return this.state
    },
  
    toString: function () {
      coin.flip();
      if(this.state === 0){
          return "Heads";
        }
      if(this.state === 1){
        return "Tails";
        }
    },
  
    toHTML: function () {
      const image = document.createElement("img");
      let coinSelected = coin.toString();
      image.src = `./coinObject/img/${coinSelected}.png`;
      image.alt = `${coinSelected}`;
      console.log(coinSelected);
      return image;
    },
  };

  function display20Flips() {
    const results = [];
    const divToStringResults = document.createElement('div');
    const ulResults = document.createElement('ul');
    const h2Results = document.createElement('h2');

    divToStringResults.classList.add('divResultToString')
    sectionResults.appendChild(divToStringResults);
    h2Results.classList.add('stringResults');
    divToStringResults.appendChild(h2Results);
    ulResults.classList.add('ulResultsString')
    divToStringResults.appendChild(ulResults);

    h2Results.innerText = 'Resultado das moedas em strings:'
    
    for (let i = 1; i <= 20; i++){
      let coinSelected = coin.toString();
      results.push(coinSelected);
      const liResults = document.createElement('li');
      ulResults.appendChild(liResults);
      liResults.innerText = `${coinSelected}`;
    }
    return results;
  }

  function display20Images() {
    const results = [];
    const divToHtmlResults = document.createElement('div');
    const ulResults = document.createElement('ul');
    const h2Results = document.createElement('h2');

    divToHtmlResults.classList.add('divResultToHtml')
    sectionResults.appendChild(divToHtmlResults);
    h2Results.classList.add('imagesResults');
    divToHtmlResults.appendChild(h2Results);
    ulResults.classList.add('ulResultsImages')
    divToHtmlResults.appendChild(ulResults);
    
    h2Results.innerText = 'Resultado das moedas em imagens:'

    for (let i = 1; i <= 20; i++){
      let coinSelected = coin.toHTML();
      results.push(coinSelected.alt);
      const liResults = document.createElement('li');
      ulResults.appendChild(liResults);
      liResults.appendChild(coinSelected);
    }
    return results;
  }

  display20Flips();
  display20Images();