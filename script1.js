//Chargement des images dans un tableau et ce sera affiché par ordre
let banderas = ["Abdou-Diouf.jpg", "Christophe-Colomb.jpg", "Sidy-Lamine-Niasse.jpg", "René-Caillié.jpg", "Léopold-Sédar-Senghor.jpg",
                "Alboury-Ndiaye.jpg", "Birago-Diop.jpg", "Martin-Luther-King.jpg", "Samory-Touré.jpg", "Aimé-Césaire.jpg"];

//Enregistrement des options correct
let correcta = [2,2,1,1,0,1,0,2,1,0];

//Correction des images à affiher dans chaque jeu
let opciones = [];
//Chargement des différentes listes des options pour chaque image dans le jeu
opciones.push(["Nelson Mandela", "Aimé Césaire", "Abdou Diouf"]);//1
opciones.push(["Lénine", "Karl Marx", "Christophe Colomb"]);//2
opciones.push(["Ahmed Khalifa Niasse", "Sidy Lamine Niasse", "Abdoulaye Wade"]);//3
opciones.push(["Léopold II", "René Caillié", "Mao ZeDong"]);//4
opciones.push(["Léopold Sédar Senghor", "Martin Luther King", "Birago Diop"]);//5
opciones.push(["Jean Bédel Bokassa", "Alboury Ndiaye", "Kankan Moussa"]);//6
opciones.push(["Birago Diop", "Idrissa Seck", "Ousmane Tanor Dieng"]);//7
opciones.push(["Adolf Hitler", "Ursula Von Der Leyen", "Martin Luther King"]);//8
opciones.push(["Ferdinand Oyono", "Samory Touré", "Camara Laye"]);//9
opciones.push(["Aimé Césaire", "Lamine Gueye", "Jean Jacques Rousseau"]);//10
//variable qui enregistre la position actuelle
let posActual = 0;//toujours égale à 0
//variable qui stocke le montant correct jusqu'à présent
let cantidadAcertadas = 0;//toujours égale à 0


function comenzarJuego(){
    //réintialisation des variables
    posActual = 0;//toujours égale à 0
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
                    alert("Congratulations, your score is : 10 ");//le score augmente de 10 à chaque niveau
                    
              let targetURL ="niveau2.html";//jouer le niveau suivant
               let newURL =document.createElement('a');
               newURL.href =targetURL;
               document.body.appendChild(newURL);
               newURL.click();
              
    }else{
                   alert("Sorry for you");
                   
              let targetURL ="index.html";//rejouer le niveau
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