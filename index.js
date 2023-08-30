function openModal(imageSrc, imageTitle) {
    const modalContainer = document.getElementById("modal-container");
    const modalImage = document.getElementById("modal-image");
    const modalCaption = document.getElementById("modal-caption");
 
    modalImage.src = imageSrc;
    modalCaption.innerText = imageTitle;
    modalContainer.style.display = "block";
 }
 
 function closeModal() {
    const modalContainer = document.getElementById("modal-container");
    modalContainer.style.display = "none";
 }

 document.addEventListener('keydown', function(event) {
   if (event.key === 'Escape') {
       closeModal();
   }
});

 
 const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {  // Show after scrolling down 300px
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

 
