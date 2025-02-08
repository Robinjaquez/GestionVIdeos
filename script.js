$(document).ready(function() {
    // Seleccionar elementos por etiqueta
    $('video').each(function(index, element) {
        console.log('Video element:', element);
    });

    // Seleccionar elementos por clase
    $('.video-radio').change(function() {
        var videoId = $(this).attr('id').replace('radio', 'video');
        var videoElement = $('#' + videoId)[0];
        if (this.checked) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
    });

    // Seleccionar elementos por ID y cambiar CSS con jQuery
    $('#video1').css('border', '2px solid red');
    $('#video2').css('border', '2px solid green');
    $('#video3').css('border', '2px solid blue');

    // Clic en elementos de video para cambiar el borde
    $('video').click(function() {
        $(this).css('border', '2px solid yellow');
    });

    // Hover para cambiar el texto de un elemento
    $('#hover-text').hover(
        function() {
            $(this).text('¡Estás pasando el ratón sobre mí!');
        }, function() {
            $(this).text('Pasa el ratón sobre este texto');
        }
    );

    // Show y Hide con botones
    $('.toggle-button').click(function() {
        var target = $($(this).data('target'));
        if (target.is(':visible')) {
            target.hide();
        } else {
            target.show();
        }
    });
});