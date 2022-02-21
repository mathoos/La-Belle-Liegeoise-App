/* RETOUR EN HAUT DE LA PAGE QUAND ON CLIQUE SUR AJOUTER AU PANIER */



/* OUVRIR LE PANIER */

let basket = document.getElementById("basket");
let main = document.querySelector("main");

basket.addEventListener("click", () => {
  main.classList.add("main-visible")
})

let closing = main.querySelector("#fermer-panier > p");
closing.addEventListener("click", () => {
  main.classList.remove("main-visible")
})


// CHOIX 1 : LA PATE

var un = document.getElementById("un");
var li1 = un.querySelectorAll("ul > li");


// On fait une boucle pour attribuer la classe active sur le bouton sélectionné
for (var i = 0; i < li1.length; i++) {
  
  li1[i].addEventListener('click', function() {
    var active = document.getElementsByClassName("active");
    if (active.length > 0) {
      active[0].className = active[0].className.replace(" active", "");
    }
    this.className += " active";
    ajout()
  }) 
}

function ajout() {
  var button = li1[i]
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName("prout")[0].innerText
    ajoutCart(title)
}

function ajoutCart(title) {
    var cartRow = document.createElement('div')
    cartRow.style.backgroundColor = "blue"
    var cartRowContents = 
    `

      <span>${title}</span> 
   
    `
    cartRow.innerHTML = cartRowContents
    var cart1 = document.getElementById('cart1')
    cart1.textContent = cartRow.innerText

}



// CHOIX 2 : LA GOURMANDISE 

var deux = document.getElementById("deux");
var li2 = deux.querySelectorAll("ul > li");

for (var i = 0; i < li2.length; i++) {
  
  li2[i].addEventListener('click', function() {
    var active2 = document.getElementsByClassName("active2");
    if (active2.length > 0) {
      active2[0].className = active2[0].className.replace(" active2", "");
    }
    this.className += " active2";
    ajout2()
  }) 
}


function ajout2() {
  var button = li2[i]
    var button = event.target
    var shopItem = button.parentElement.parentElement
    console.log(shopItem)
    var title = shopItem.getElementsByClassName("prout")[0].innerText
    console.log(title)
    ajoutCart2(title)
}

function ajoutCart2(title) {
    var cartRow = document.createElement('div')
    var cart2 = document.getElementById('cart2')
    var cartRowContents = 
    `
      <span>${title}</span>    
    `
    cartRow.innerHTML = cartRowContents
    cart2.textContent = cartRow.innerText
    /*cart2.append(cartRow) 
    Utiliser la méthode append pour le bloc deux pour autoriser
    sélectionner plusieurs div */

}




//CHOIX 3 : CHOCOLAT

var trois = document.getElementById("trois");
var li3 = trois.querySelectorAll("ul > li");


for (var i = 0; i < li3.length; i++) {
  
  li3[i].addEventListener('click', function() {
    var active3 = document.getElementsByClassName("active3");
    if (active3.length > 0) {
      active3[0].className = active3[0].className.replace(" active3", "");
    }
    this.className += " active3";
    ajout3()
  }) 
}

function ajout3() {
  var button = li3[i]
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName("prout")[0].innerText
    ajoutCart3(title)
}

function ajoutCart3(title) {
    var cartRow = document.createElement('div')
    var cart3 = document.getElementById('cart3')
    var cartRowContents = 
    `
      <span>${title}</span>    
    `
    cartRow.innerHTML = cartRowContents
    cart3.textContent = cartRow.innerText


}


/* AJOUTER LA GAUFRE AU PANIER */

var button = document.getElementById("shop-item-button")
  button.addEventListener("click", () => {
    var cart1 = document.getElementById("cart1").innerText
    var cart2 = document.getElementById("cart2").innerText
    var cart3 = document.getElementById("cart3").innerText
    addItemToCart(cart1, cart2, cart3)



  })




function addItemToCart(cart1, cart2, cart3) {
    var cartRow = document.createElement("div")
    cartRow.classList.add("cart-row")
    var cartItems = document.getElementsByClassName('cart-items')[0]

    var cartRowContents = 
    `   
    <div class="img-gfr">
      <img src="./images/Vector.svg">
    </div>
    <div class="items">
      <span>- ${cart1}</span>
      <span>- ${cart2}</span>
      <span>- ${cart3}</span>
    </div>
    <div class="quantity">
      <input type="number" min="1" value="1">
    </div>
    <div class="bin-card">
      <img class="bin" src="./pictogrammes/close.svg">
    </div>
    `
    cartItems.append(cartRow)
    cartRow.innerHTML = cartRowContents
    cartRow.getElementsByClassName('bin')[0].addEventListener('click', removeCartItem)
}

/* Le produit est supprimé du panier quand on clique sur la poubelle */
var bin = document.getElementsByClassName('bin')
for (var i = 0; i < bin.length; i++) {
    var binButton = bin[i]
    binButton.addEventListener('click', removeCartItem)
    
}
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
}










