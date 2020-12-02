window.addEventListener("load", function () {
    document.querySelector('button').addEventListener("click", function () {

    var artyom = new Artyom();
    artyom.addCommands([
        {
        indexes: ["Hey Furtwangen"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Antwort: Hey wie kann ich dir behilflich sein?";
            artyom.say("Hey! Wie kann ich dir behilflich sein");
            }
        },
    
    {
        indexes: ["Was steht heute an"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Antwort: Heute steht eine Vorlesung an: 09:45 Uhr Streaming Anwendungen.";
            artyom.say("Heute steht eine Vorlesung an: 09:45 Uhr Streaming Anwendungen");
            }
        },
    {
        indexes: ["Habe ich neue E-Mails"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Antwort: Du hast eine neue, ungeöffnete E-Mail in deinem Postfach.";
            artyom.say("Du hast eine neue ungeöffnete E-Mail in deinem Postfach");
            }
        },
    {
        indexes: ["Wann ist die nächste Abgabe fällig"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Antwort: Du hast aktuell keine zu erledigenden Abgaben.";
            artyom.say("Du hast aktuell keine zu erledigenden Abgaben");
            }
        },
    {
        indexes: ["Danke bis bald"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Antwort: Bis dann.";
            artyom.say("Bis dann");
            }
        },
    


]);
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
});
//# sourceMappingURL=playgroud-artyom-script.js.map