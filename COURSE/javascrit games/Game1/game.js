document.addEventListener('DOMContentLoaded', () =>{

    // card array
    const cardArray = [
        {
            name: 'Fries',
            img:'images/fries.png'
        },
        {
            name: 'Hotdog',
            img:'images/hotdog.jpg'
        },
        {
            name: 'Pizza',
            img:'images/pizza.jpg'
        },
        {
            name: 'Hamburger',
            img:'images/hamburger.png'
        },
        {
            name: 'Ice-cream',
            img:'images/icecream.jpg'
        },
        {
            name: 'Milkshake',
            img:'images/milkshake.jpg'
        },
        {
            name: 'Fries',
            img:'images/fries.png'
        },
        {
            name: 'Hotdog',
            img:'images/hotdog.jpg'
        },
        {
            name: 'Pizza',
            img:'images/pizza.jpg'
        },
        {
            name: 'Hamburger',
            img:'images/hamburger.png'
        },
        {
            name: 'Ice-cream',
            img:'images/icecream.jpg'
        },
        {
            name: 'Milkshake',
            img:'images/milkshake.jpg'
        }
    ]
    const grid = document.querySelector('.grid');

    // creat my board
    function createBroad(){
        for(let i=0 ; i<cardArray.length ; i++){
            var card = document.createElement('img');
            card.setAttribute('src','images/galaxy.jpg');
            card.setAttribute('data-id', i);
           card.addEventListener('click', flipCard);
           grid.appendChild(card);
        }
    };
    cardArray.sort(() => 0.5 - Math.random());
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardWon = [];
    var resultDisplay = document.querySelector('#result');

    // check for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if(cardsChosen[0] === cardsChosen[1]){
            alert('you got it');
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            cardWon.push(cardsChosen);
        } else{
            cards[optionOneId].setAttribute('src', 'images/galaxy.jpg');
            cards[optionTwoId].setAttribute('src', 'images/galaxy.jpg');
            alert('Sorry Try Again');
            
        };
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardWon.length;
        if (cardWon.length === (cardArray.length)/2 ){
            resultDisplay.textContent= 'Congratulations ! You Win, You Found them All';
            alert('Thanks For Playing I Love You <3');
        }
    }

    // flip your card
    function flipCard(){
        var cardId = this.getAttribute('data-id');
         cardsChosen.push(cardArray[cardId].name);
         cardsChosenId.push(cardId);
         this.setAttribute('src', cardArray[cardId].img);
         if (cardsChosen.length === 2){
             setTimeout(checkForMatch, 500);
         }
    }
    createBroad();


















})