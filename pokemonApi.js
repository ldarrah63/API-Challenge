




 const container = document.querySelector(".container");
 let pokemonname = document.querySelector(".pokemonname");
 const pokemontype = document.querySelector(".pokemontype");
const pokemonweight = document.querySelector(".pokemonweight")
 fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
   .then(response => response.json(), e => {
     console.error(e);
     throw e;
   })
   .then(json => {
     Promise.all(json.results.map(data => fetch(data.url)))
       .then(arr => {
         arr.map(response => response.json())
           .forEach((result, index) => {
             result.then(data => {
               console.log(data);
              let pokemonName = data.name;
               let pokemonType1 = data.types[0].type.name;
               let pokemonWeight = data.weight;
               if (data.types.length == 2) {
                var pokemonType2 = data.types[1].type.name;
               }
            else var pokemonType2 = "";
            pokemontype.innerHTML += `${pokemonType1} Type -------- ${pokemonType2} Type <br>`;
            container.innerHTML += `Number: ${index+1} <br>`;
            pokemonweight.innerHTML += `Weight: ${pokemonWeight} lbs <br>`;
            pokemonname.innerHTML += `Name: ${pokemonName} <br>`;
            pokemontype.style.color = "green";
            
                })
               
               
               

               //container.innerHTML += `Number:  Name: ${pokemonName}  -- Type: ${pokemonType1} --- ${pokemonType2} -- LBS: ${pokemonWeight} <br>`;})
            
           })
       }).catch(e => {
         console.error(e)
         throw e;
       });
   }).catch(e => {
     console.error(e)
     throw e;
   });


   //somewhat works

function pokeSubmit(){
    var param = document.getElementById("pokeInput").value;
    var pokeURL = 'https://pokeapi.co/api/v2/pokemon?limit=151' + param;



    fetch(pokeURL)
    
    $.getJSON(pokeURL, function(data){
        console.log(data);
        console.log(JSON.stringify(data, null, "  "));
        var pokeID = data.national_id;
        var pokeName = data.name;
        var pokeType1 = data.types[0].name;
        if (data.types.length == 2) {
            var pokeType2 = data.types[1].name;
        }
        else var pokeType2 = null;

        var descriptionURI = "http://pokeapi.co" + data.descriptions[0].resource_uri;

        var pokeDescription = "";

        $.getJSON(descriptionURI, function(data2) {
            console.log(data2);
        }
        )
        console.log("Number:", pokeID);
        console.log("Name; ", pokeName);
        console.log("Type 1: ", pokeType1);
        console.log("Type 2: ", pokeType2);
    
    });
}



