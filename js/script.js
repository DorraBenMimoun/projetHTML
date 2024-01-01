// Sélection des éléments du bouton de recherche et du formulaire de recherche

let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');
// Gestionnaire d'événements pour le clic sur le bouton de recherche

searchBtn.onclick = () => {
   // Ajout ou suppression de la classe 'fa-times' pour l'icône du bouton de recherche
   searchBtn.classList.toggle('fa-times');
   // Ajout ou suppression de la classe 'active' pour le formulaire de recherche
   searchForm.classList.toggle('active');
   // Réinitialisation des autres éléments (icône du menu et menu lui-même)
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}
// Sélection des éléments du bouton de menu et du menu de navigation

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');
// Gestionnaire d'événements pour le clic sur le bouton de menu

menuBtn.onclick = () => {
   // Ajout ou suppression de la classe 'fa-times' pour l'icône du bouton de menu
   menuBtn.classList.toggle('fa-times');
   // Ajout ou suppression de la classe 'active' pour le menu de navigation
   navbar.classList.toggle('active');
   // Réinitialisation des autres éléments (icône de recherche et formulaire de recherche)
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
}
// Gestionnaire d'événements pour le défilement de la fenêtre
window.onscroll = () => {
   // Réinitialisation de tous les éléments lors du défilement
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}