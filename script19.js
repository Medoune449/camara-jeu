//Chargement des images dans un tableau et ce sera affiché par ordre
let banderas = ["Eye.jpg", "Beard.jpg", "Tooth.jpg", "Skull.jpg", "Heart.jpg",
                "Foot.jpg", "Sweat.jpg", "The star.jpg", "Thumb.jpg", "Lips.jpg"];

//Enregistrement des options correct
let correcta = [1,1,0,0,2,2,1,0,2,1];

//Correction des images à affiher dans chaque jeu
let opciones = [];
//Chargement des différentes listes des options pour chaque image dans le jeu
opciones.push(["Ear", "Eye", "Eyebrow"]);//181
opciones.push(["Chin", "Beard", "Tongue"]);//182
opciones.push(["Tooth", "Skull", "Back"]);//183
opciones.push(["Skull", "Nostrils", "Belly"]);//184
opciones.push(["Stomach", "Arm", "Heart"]);//185
opciones.push(["Leg", "Hips", "Foot"]);//186
opciones.push(["Tear", "Sweat", "Muscle"]);//187
opciones.push(["The star", "Success", "The peace"]);//188
opciones.push(["Forearm", "Palms", "Thumb"]);//189
opciones.push(["Hair", "Lips", "Face"]);//190
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
                    alert("Very nice, your score is : 190");//le score augmente de 10 à chaque niveau
                    
              let targetURL ="niveau20.html";//jouer le niveau suivant
               let newURL =document.createElement('a');
               newURL.href =targetURL;
               document.body.appendChild(newURL);
               newURL.click();
              
    }else{
                   alert("Come on again !!!");
                   
              let targetURL ="niveau19.html";//rejouer le niveau 
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