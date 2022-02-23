//Déclaration du tabeau
let donnee = [
    {name:'Mon premier',Checked:1},
    {name:'Mon deuxieme',Checked:1},
    {name:'Mon troisieme',Checked:1},
    {name:'Mon quatrieme',Checked:1},
];  
//Recupération données html
const container = document.querySelector("#container");
const aller = document.getElementById("aller");
const retour = document.getElementById("retour");
//Création données 
const centre = document.createElement('div');
var tout = document.createElement('div');
const prem = document.createElement('div');
const sec = document.createElement('div');
//attribution
centre.setAttribute("class","centre");
tout.setAttribute("id","tout");
prem.setAttribute("id","premier");
sec.setAttribute("id","second");
//fonction 
function premier(){
    const droite = document.createElement('table');//création tableau
    for (let i = 0; i< donnee.length; i++) {
      const row = document.createElement('p')
      row.innerHTML=donnee[i].name;
      droite.appendChild(row);       
      //événement      
      row.addEventListener('click',function(){
        this.style.background="blue"
      });
    }
    prem.appendChild(droite); 
}
//liaison des données
centre.appendChild(aller);
centre.appendChild(retour);
tout.appendChild(prem);
tout.appendChild(centre);
tout.appendChild(sec);
container.appendChild(tout);
//création d'événement
aller.addEventListener('click',function(){
    allpDroit = document.getElementsByTagName('p');
    for(let i=0; i<allpDroit.length;i++){
       const par = allpDroit[i].parentElement;
        if(allpDroit[i].style.background !=""){
            var para = document.createElement('p');
            para.innerHTML=allpDroit[i].innerText;
            second.appendChild(para);
            par.removeChild(allpDroit[i]);
        }
    }   
});
retour.addEventListener('click',function(){
    allpDroit = document.getElementsByTagName('p');
    for(let i=0; i<allpDroit.length;i++){
       const par = allpDroit[i].parentElement;
        if(allpDroit[i].style.background !=""){
            var para = document.createElement('p');
            para.innerHTML=allpDroit[i].innerText;
            second.appendChild(para);
            par.removeChild(allpDroit[i]);
        }
    }   
});
window.onload = premier;