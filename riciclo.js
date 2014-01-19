$(document).ready(function() {
    var current_item;
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
        if (e.which == current_item.tasto) {
            alert("BRAVO!");
            estrai(function(callback) {  
                current_item = callback;
            });
        }
        else {
            alert("SBAGLIATO!");
        }
    });
});