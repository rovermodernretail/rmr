// This is where it all goes :)
$('#rover2').typeIt({
    strings: ["modern retail"],
    autoStart: false,
    speed: 50,
    loop: true,
    loopDelay: 8000,
    startDelay: 1150,


  });

(function() {

    var quotes = $(".quotes");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(5000)
            .delay(3000)
            .fadeOut(3000, showNextQuote);
    }

    showNextQuote();

})();


(function() {

    var quotes = $(".quotes1");
    var quoteIndex = -1;

    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(5000)
            .delay(3000)
    }

    showNextQuote();

})();
