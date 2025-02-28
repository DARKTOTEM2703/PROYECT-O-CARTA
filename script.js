$(document).ready(function() {
    var envelope = $('#envelope');
    
    envelope.click(function() {
        if (envelope.hasClass("close")) {
            open();
        } else {
            close();
        }
    });

    function open() {
        envelope.addClass("open").removeClass("close");
    }

    function close() {
        envelope.addClass("close").removeClass("open");
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const images = ['img/1.png', 'img/2.png', 'img/3.png'];
    let currentIndex = 0;
    const rotatingImage = document.getElementById('rotating-image');
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      rotatingImage.src = images[currentIndex];
    }, 2000); // Cambia la imagen cada 2 segundos
});
