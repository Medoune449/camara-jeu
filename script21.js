//Chargement des images dans un tableau et ce sera affiché par ordre
let banderas = ["Builder.jpg", "Glazier.jpg", "Plumber.jpg", "Heating engineer.jpg", "Pen.jpg",
                "Hammer.jpg", "On fire.jpg", "Brick.jpg", "Cement.jpg", "Lead.jpg"];

//Enregistrement des options correct
let correcta = [2,2,1,0,1,0,2,0,1,1];

//Correction des images à affiher dans chaque jeu
let opciones = [];
//Chargement des différentes listes des options pour chaque image dans le jeu
opciones.push(["Carpenter", "Glazier", "Builder"]);//201
opciones.push(["Locksmith", "Plumber", "Glazier"]);//202
opciones.push(["Heating engineer", "Plumber", "Estate agent"]);//203
opciones.push(["Heating engineer", "A wall", "A door"]);//204
opciones.push(["Chisel", "Pen", "Hammer"]);//205
opciones.push(["Hammer", "Saw", "Vacuum"]);//206
opciones.push(["Torch", "Stool", "On fire"]);//207
opciones.push(["Brick", "Cement", "Glass"]);//208
opciones.push(["Limestone", "Cement", "Lead"]);//209
opciones.push(["Plaster", "Lead", "Mortar"]);//210
//variable qui enregistre la position actuelle
let posActual = 0;//toujours égale à 0
//variable qui stocke le montant correct jusqu'à présent
let cantidadAcertadas = 0;//toujours égale à 0


function comenzarJuego(){
    //réintialisation des variables
    posActual = 0; //toujours égale à 0
    cantidadAcertadas = 0;//toujours égale à 0
    

    //activation des écrans nécessaires
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarBandera();


}

//function qui charge les images suivantes et ses options
function cargarBandera(){
    //Vérification des images si elles sont terminés
    if(banderas.length <= posActual){
        terminarJuego();
    }
    else{//je charge les options
        //nettoyage des classes qui ont été assignées
        limpiarOpciones();

        document.getElementById("imgBandera").src = "img/" + banderas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//Réponses correct
        //Ajout des classes pour colorier l'option choisit correct en vert
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//Réponses incorrect
        //Ajout des classes pour colorier l'option choisit incorrect en rouge
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";


        //l'option correct
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Attendre pendant 1 seconde après l'affichage de chaque image suivante et ses options
    setTimeout(cargarBandera,1000);
}
function terminarJuego(){
    //Masquons les écrans et montrons l'écran final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //Ajouts des résultats
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadas;
     
     //score maximale de réponse correct est de 10
    if(cantidadAcertadas==10) { 
                    alert("Great, your score is : 210");//le score augmente de 10 à chaque niveau
                    
              let targetURL ="niveau22.html";//jouer le niveau suivant
               let newURL =document.createElement('a');
               newURL.href =targetURL;
               document.body.appendChild(newURL);
               newURL.click();
              
    }else{
                   alert("Oh no !!!");
                   
              let targetURL ="niveau21.html";//rejouer le niveau 
               let newURL =document.createElement('a');
               newURL.href =targetURL;
               document.body.appendChild(newURL);
               newURL.click();             

    }
}

function volverAlInicio(){
    //Masquons les écrans et activons celui initial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
    }