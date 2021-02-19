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
        indexes: ["Welche Veranstaltungen habe ich heute"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Antwort: Du hast heute zwei Veranstaltungen. Marketing und Interface Design.";
            artyom.say("Du hast heute zwei Veranstaltungen  Marketing und Interface Design");
            }
        },
    {
        indexes: ["Um wie viel Uhr sind diese Veranstaltungen"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Antwort: Marketing um 08:45 Uhr. Interface Design um 14:00 Uhr. Soll ich eine Erinnerung stellen?";
            artyom.say("Marketing um 8:45 Uhr Interface Design um 14:00 Uhr Soll ich eine Erinnerung stellen");
            }
        },
    {
        indexes: ["Erinnerung stellen"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Antwort: Okey. Kann ich dir sonst noch behilflich sein?.";
            artyom.say("Okey kann ich dir sonst noch behilflich sein");
            }
        },
    {
        indexes: ["Keine Erinnerung"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Okey. Kann ich dir sonst noch behilflich sein?";
            artyom.say("Okey kann ich dir sonst noch behilflich sein");
            }
        },
   
     {
        indexes: ["Was sind die nächsten Aufgaben"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Du hast eine Abgabe für den 14.02.2021 in Marketing.";
            artyom.say("Du hast eine Abgabe für den 14.02.2021 in Marketing");
            }
        },
    
    {
        indexes: ["Was ist das für eine Aufgabe"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Es handelt sich um eine Ausarbeitung zum Thema: Kundenwert. Soll ich eine Erinnerung stellen?";
            artyom.say("Es handelt sich um eine Ausarbeitung zum Thema Kundenwert Soll ich eine Erinnerung stellen");
            }
        },
    
    {
        indexes: ["Habe ich neue E Mails"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Du hast keine neuen E-Mails.";
            artyom.say("Du hast keine neuen E Mails");
            }
        },

    {
        indexes: ["Was gibt es neues"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Es gibt keine Neuigkeiten.";
            artyom.say("Es gibt keine Neuigkeiten");
            }
        },

    {
        indexes: ["Was gibt es heute in der Mensa"],
        action: function (i) {
            document.getElementById('Ergebnisse').innerHTML ="Okey. Kann ich dir sonst noch behilflich sein?";
            artyom.say("Okey kann ich dir sonst noch behilflich sein");
            }
        },

        artyom.addCommands({
            indexes: ["Was gibt es heute in der Mensa"],
            action: function () {
              const answer =
                'Mensaplan.';
                document.getElementById("answer").innerHTML = answer;
                artyom.say(answer);
              const image = "<img src=mensaplan.jpg></img>"
          document.getElementById("showImage").innerHTML = image;
          }
          });
    


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