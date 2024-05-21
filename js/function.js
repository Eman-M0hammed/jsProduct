function createCard(element){
    let div = document.createElement('div');
    div.classList.add('card');
    
    let image = document.createElement('img');
    if(element.image.data){
        image.src = "http://localhost:1337"+ element.image.data.attributes.url;
    }else{
        
        image.src = "./images/logo.png";
    }
    image.setAttribute('alt', 'product image');

    let heading = document.createElement('h2');
    heading.innerHTML = element.title + ' ' + element.price + '$';

    let btn = document.createElement('button');

    btn.onclick = function(){
        addToCard(element);
    }

    btn.innerHTML = "Add To Card";

    div.appendChild(image)
    div.appendChild(heading)
    div.appendChild(btn);
    return div;

}


function addToCard(element){
    let cards = JSON.parse(localStorage.getItem('cards')) ?? [];

    let exist = cards.filter((item,index)=>{
        if(item.id==element.id){
        //    item.amount+=1;
            cards[index]['amount'] +=1; 
            return item;
        }
    });

    if(exist.length<=0){
        
        element['amount'] = 1;
        cards.push(element);
    }
    
    localStorage.setItem('cards', JSON.stringify(cards));

    let counter = document.getElementById('counter');
    counter.innerHTML = getCardCount();


}


function getCardCount(){
    let cards = JSON.parse(localStorage.getItem('cards')) ?? [] ;
    const summation = cards.reduce((sum, item) => sum + item.amount,0);
    // return cards.length;
    return summation;
}

function incrementItem(element){
    let cards = JSON.parse(localStorage.getItem('cards')) ?? [];
    let exist = cards.filter((item,index)=>{
        if(item.id==element.id){
        //    item.amount+=1;
            cards[index]['amount'] +=1;
            element.amount++; 
            return item;
        }
    });
    
    let card = document.getElementById('card_'+ element.id);
    card.querySelector('h3').innerHTML = "amount: "+element.amount;
    localStorage.setItem('cards', JSON.stringify(cards));

    let counter = document.getElementById('counter');
    counter.innerHTML = getCardCount();
}

function decrementItem(element){
    let cards = JSON.parse(localStorage.getItem('cards')) ?? [];
    let card = document.getElementById('card_'+ element.id);
    
    let exist = cards.filter((item,index)=>{
        if(item.id==element.id){
            //    item.amount+=1;
            cards[index]['amount'] -=1; 
            element.amount--;
            card.querySelector('h3').innerHTML = "amount: "+element.amount;
            if(element.amount<=0){
                card.remove();
                cards.splice(index,1);
            }

            return item;
        }
    });

    
    
    

    localStorage.setItem('cards', JSON.stringify(cards));

    let counter = document.getElementById('counter');
    counter.innerHTML = getCardCount();
}
