    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        location.reload();
        /* hier komt jouw code */
    })

    function main(){
         let dezeTextWordtHet = makeThisSentence();
         myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index1 = randomizer(arrayLength);
        let index2 = randomizer(arrayLength);
        let index3 = randomizer(arrayLength);
        let woord1 = onderwerp[index1];
        let woord2 = werkwoord[index2];
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
      let message = new SpeechSynthesisUtterance(textString);
      let voices = window.speechSynthesis.getVoices();
      message.voice = voices[1];
      message.pitch = 1; // range between 0 and 2
      message.rate = 1; // range between 0.1 (lowest) and 10 (highest) 
      window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["he", "Finn", "Robin"];
    const werkwoord = ["is", "thinks you are", "looks"];
    const restwoord = ["beautiful", "nice", "old"];
        
    let plaatjes = ["https://www.femalefirst.co.uk/image-library/square/500/s/shrekone.jpg", "https://surroundvision.co.uk/wp-content/uploads/2018/10/Parley-F_-tip-of-an-iceberg-500x500.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/35302887-bf5b-4c46-a9e0-fc72c65ffb50/d2zaii3-22e60a2b-a164-44bd-a487-cb16589a4799.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMzUzMDI4ODctYmY1Yi00YzQ2LWE5ZTAtZmM3MmM2NWZmYjUwXC9kMnphaWkzLTIyZTYwYTJiLWExNjQtNDRiZC1hNDg3LWNiMTY1ODlhNDc5OS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.fb91Avk8E4fWSu3PaYk-RrO-cUzkllv5hnT4NBp8vuY", "https://direct.rhapsody.com/imageserver/images/alb.321182006/500x500.jpg", "https://cdn.shortpixel.ai/client/q_glossy,ret_img,w_500,h_500/https://www.bedanktdoos.nl/wp-content/uploads/2020/06/Vlees-home-500x500-px-500x500.png"]
    let arrayLength = onderwerp.length;
