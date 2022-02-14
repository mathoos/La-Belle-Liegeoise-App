

// CHOIX 1

let un = document.getElementById("un");
let li1 = un.querySelectorAll("ul > li");
let cart1 = document.getElementById("cart1");

// On fait une boucle pour attribuer la classe active sur le bouton sélectionné
for (var i = 0; i < li1.length; i++) {
  li1[i].addEventListener("click", function() {
    
    var active = document.getElementsByClassName("active");

    // Si la classe active n'est pas déjà associée à une balise
    if (active.length > 0) {
      active[0].className = active[0].className.replace(" active", "");
    }

    // On ajoute la class active au bouton sur lequel on clique
    this.className += " active";
    cart1.textContent = this.innerText

    
  });
}




// CHOIX 2

let deux = document.getElementById("deux");
let li2 = deux.querySelectorAll("ul > li");
let cart2 = document.getElementById("cart2");



// On fait une boucle pour attribuer la classe active sur le bouton sélectionné
for (var i = 0; i < li2.length; i++) {
  li2[i].addEventListener("click", function() {
    var active = document.getElementsByClassName("active2");

    // Si la classe active n'est pas déjà associée à une balise :
    if (active.length > 2) {
      this.classList = this.classList.remove("active2");  
    return;  
    }
    // On ajoute la class active au bouton sur lequel on clique
    this.classList.toggle("active2");
    cart2.textContent = this.innerText;

  });
}


// CHOIX 3

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


