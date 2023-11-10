document.getElementById('voirToutesCategories').addEventListener('click', function() {
    // Code à exécuter lorsque le bouton est cliqué
    afficherToutesCategories();
});

function afficherToutesCategories() {
    // Code pour afficher toutes les catégories
    // Par exemple, afficher des éléments masqués ou charger davantage de catégories via une requête AJAX
    console.log("Afficher toutes les catégories !");
}

const trendingSwiper = new Swiper(".trending__swiper", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 50,
  });
  
  const testimonialSwiper = new Swiper(".testimonial__swiper", {
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  