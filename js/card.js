let cards = JSON.parse(localStorage.getItem('cards')) ?? [];
let cardsSection =  document.getElementById('cards_section');
cards.forEach(function(item){
    let newCard = createCard(item);
    newCard.removeChild(newCard.lastElementChild);
    newCard.setAttribute('id', 'card_'+item.id);
    let amount = document.createElement('h3');
    amount.innerHTML = "amount: "+item.amount;

    let increament = document.createElement('button');
    let decreament = document.createElement('button');
    increament.innerHTML = "+";
    decreament.innerHTML = "-";
    newCard.appendChild(amount);
    newCard.appendChild(increament);
    newCard.appendChild(decreament);

    increament.onclick = function(){
        incrementItem(item);
    }
    decreament.onclick = function(){
        decrementItem(item);
    }
    cardsSection.appendChild(newCard);
});
