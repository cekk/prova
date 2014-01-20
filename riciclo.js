$(document).ready(function() {
    var current_item;
    var navigation_keys = [37, 38, 39, 40];
    function estrai(callback) {
        $.getJSON("dizionario.json", function(json) {
                var keys = Object.keys(json);
                var rand_key = keys[Math.floor(Math.random() * keys.length)];
                random_item = json[rand_key];
                $(".jumbotron img").attr({"src": random_item.immagine,
                                          "alt": rand_key});
                callback(random_item);
        });
    }
    estrai(function(callback) {
        current_item = callback;
    });
    $('html').keydown(function(e){
        if ($.inArray(e.which, navigation_keys) === -1) {
            if (e.which == current_item.tasto) {
                $(".jumbotron").before('<div class="alert alert-success">Bravo!</div>');
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
                $(".jumbotron").before('<div class="alert alert-danger">Sbagliato!</div>');
                $('.jumbotron').addClass("alert alert-danger");
                setTimeout(function() {
                    $('.jumbotron').removeClass("alert alert-danger");
                    $('.alert').remove();
                },1000);
            }
        }
    });
});