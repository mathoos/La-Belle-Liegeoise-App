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
      <span>${cart1}</span>
      <span>${cart2}</span>
      <span>${cart3}</span>
    `
    cartItems.append(cartRow)
    cartRow.innerHTML = cartRowContents
}



// CHOIX 1 : LA PATE

var un = document.getElementById("un");
var li1 = un.querySelectorAll("ul > li");


// On fait une boucle pour attribuer la classe active sur le bouton sélectionné
for (var i = 0; i < li1.length; i++) {
  
  li1[i].addEventListener('click', function() {
    var active = document.getElementsByClassName("active");
    // Si la classe active n'est pas déjà associée à une balise
    if (active.length > 0) {
      active[0].className = active[0].className.replace(" active", "");
    }

    // On ajoute la class active au bouton sur lequel on clique
    this.className += " active";
    ajout()
  }) 
}

function ajout() {
  var button = li1[i]
    var button = event.target
    var shopItem = button.parentElement.parentElement
    console.log(shopItem)
    var title = shopItem.getElementsByClassName("prout")[0].innerText
    console.log(title)
    ajoutCart(title)
}

function ajoutCart(title) {
    var cartRow = document.createElement('div')
    var cart1 = document.getElementById('cart1')
    var cartRowContents = 
    `
      <span>${title}</span>    
    `
    cartRow.innerHTML = cartRowContents
    cart1.textContent = cartRow.innerText
    /* cartItems.append(cartRow) 
    Utiliser la méthode append pour le bloc deux pour autoriser
    sélectionner plusieurs div */

}



// CHOIX 2 : LA GOURMANDISE 

var deux = document.getElementById("deux");
var li2 = deux.querySelectorAll("ul > li");

// On fait une boucle pour attribuer la classe active sur le bouton sélectionné
for (var i = 0; i < li2.length; i++) {
  
  li2[i].addEventListener('click', function() {
    var active = document.getElementsByClassName("active");
    // Si la classe active n'est pas déjà associée à une balise
    if (active.length > 2) {
      this.classList = this.classList.remove("active");  
    return;  
    }
    // On ajoute la class active au bouton sur lequel on clique
    this.classList.toggle("active");
    ajout()
  }) 
}

function ajout() {
  var button = li2[i]
    var button = event.target
    var shopItem = button.parentElement.parentElement
    console.log(shopItem)
    var title = shopItem.getElementsByClassName("prout")[0].innerText
    console.log(title)
    ajoutCart(title)
}

function ajoutCart(title) {
    var cartRow = document.createElement('div')
    var cart2 = document.getElementById('cart2')
    var cartRowContents = 
    `
      <span>${title}</span>    
    `
    cartRow.innerHTML = cartRowContents
    cart2.textContent = cartRow.innerText
    /*cart2.append(cartRow) */
    /*Utiliser la méthode append pour le bloc deux pour autoriser
    sélectionner plusieurs div */

}



// CHOIX 3 : LE CHOCOLAT

let trois = document.getElementById("trois");
let li3 = trois.querySelectorAll("ul > li");
let cart3 = document.getElementById("cart3");

// On fait une boucle pour attribuer la classe active sur le bouton sélectionné
for (var i = 0; i < li3.length; i++) {
  li3[i].addEventListener("click", function() {
    var active = document.getElementsByClassName("active3");

    // Si la classe active n'est pas déjà associée à une balise :
    if (active.length > 0) {
      active[0].className = active[0].className.replace(" active3", "");
    }

    // On ajoute la class active au bouton sur lequel on clique
    this.className += " active3";
    cart3.textContent = this.innerText
  });
}


