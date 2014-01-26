$(document).ready(function() {
    var current_item;
    var arrowKeyDown = false;
    var navigation_keys = [37, 38, 39, 40];
    function estrai(callback) {
        $.getJSON("dizionario.json", function(json) {
                var keys = Object.keys(json);
                var img_indexes = [1, 2, 3];
                var rand_key = keys[Math.floor(Math.random() * keys.length)];
                var rand_img_index = img_indexes[Math.floor(Math.random() * img_indexes.length)];
                random_item = json[rand_key];
                $(".jumbotron img").attr({"src": "immagini/" + rand_key + rand_img_index + ".jpg",
                                          "alt": rand_key});
                callback(random_item);
        });
    }
    estrai(function(callback) {
        current_item = callback;
    });
    $('html').keydown(function(e){
        if ($.inArray(e.which, navigation_keys) !== -1 && !arrowKeyDown) {
            arrowKeyDown = true;
            if (e.which == current_item.tasto) {
                $(".jumbotron").before('<div class="alert alert-success">Ottimo lavoro!</div>');
                $('.jumbotron').addClass("alert alert-success");
                setTimeout(function() {
                    $('.jumbotron').removeClass("alert alert-success");
                    $('.alert').remove();
                    estrai(function(callback) {
                        current_item = callback;
                    });
                },1000);

            }
            else {
                $(".jumbotron").before('<div class="alert alert-danger">Riprova!</div>');
                $('.jumbotron').addClass("alert alert-danger");
                setTimeout(function() {
                    $('.jumbotron').removeClass("alert alert-danger");
                    $('.alert').remove();
                },1000);
            }
        }
    }).keyup(function(e) {
        if ($.inArray(e.which, navigation_keys) !== -1) {
            arrowKeyDown = false;
        }
    });
});