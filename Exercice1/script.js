//Recupération des éléments créer au niveaux du html :
const container = document.getElementById('container');
const ajout = document.getElementById('one');
const parent = document.querySelector('#parent');

function actualise(){

    //création d'éléments en utilisant creatElement: 
    var main = document.createElement('div');
    var bar = document.createElement('div');
    var icone = document.createElement('div');
    var textarea = document.createElement('textarea');
    var edit = document.createElement('img');
    var sup = document.createElement('img');

    main.setAttribute("id", "main");
    textarea.setAttribute("id", "myTextarea");
    textarea.setAttribute("max-cols","70");
    textarea.setAttribute("max-rows","50");
    icone.setAttribute("class", "icone");
    bar.setAttribute("class", "bar");
    sup.setAttribute("src","sup.png");
    sup.setAttribute("class","sup");
    edit.setAttribute("src","edit.png");
    edit.setAttribute("class","edit");

    icone.appendChild(edit);
    icone.appendChild(sup);
    bar.appendChild(icone);
    main.appendChild(bar);
    main.appendChild(textarea);
    parent.appendChild(main);
    container.appendChild(parent);

   // main.innerHTML=`<textarea id="myTextarea"></textarea>`; // création d'un textarea

    edit.addEventListener('click', function(){ //création d'événement 
        textarea.focus();//faire clignoter une barre sur le textarea
    });

    sup.addEventListener('click', function(){  //création événement de l'icone
        let supprime = main.remove(); //travail à faire
      });   
    
};
//affichage
console.log();
//création d'événement 
ajout.addEventListener('click',actualise);


  