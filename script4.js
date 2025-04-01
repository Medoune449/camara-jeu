//Chargement des images dans un tableau et ce sera affiché par ordre
let banderas = ["Pelé.jpg", "Diégo Maradona.jpg", "Johan Cruyff.jpg", "Lionel Messi.jpg", "Cristiano Ronaldo.jpg",
                "Franz Beckenbauer.jpg", "Francesco Totti.jpg", "Michel Platini.jpg", "Alfredo Di Stefano.jpg", "Zinedine Zidane.jpg"];

//Enregistrement des options correct
let correcta = [0,2,0,1,0,2,0,1,1,2];

//Correction des images à affiher dans chaque jeu
let opciones = [];
//Chargement des différentes listes des options pour chaque image dans le jeu
opciones.push(["Pelé", "Lionel Messi", "Kylian Mbappé"]);//31
opciones.push(["David Beckham", "Franz Beckenbauer", "Diégo Maradona"]);//32
opciones.push(["Johan Cruyff", "George Best", "Eric Cantona"]);//33
opciones.push(["Raymond Kopa", "Lionel Messi", "Neymar Jr"]);//34
opciones.push(["Cristiano Ronaldo", "Sadio Mané", "Ronaldinho"]);//35
opciones.push(["Francesco Totti", "Frank Lampard", "Franz Beckenbauer"]);//36
opciones.push(["Francesco Totti", "Paul Pogba", "Alioune Cissé"]);//37
opciones.push(["Lamine Camara", "Michel Platini", "Balla Gaye 2"]);//38
opciones.push(["Luis Enrique", "Alfredo Di Stefano", "Marcelo"]);//39
opciones.push(["Karim Wade", "Donald Trump", "Zinedine Zidane"]);//40
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
                    alert("You are magic, your score is : 40");//le score augmente de 10 à chaque niveau
                    
              let targetURL ="niveau5.html";//jouer le niveau suivant
               let newURL =document.createElement('a');
               newURL.href =targetURL;
               document.body.appendChild(newURL);
               newURL.click();
              
    }else{
                   alert("Just a little more effort !!!");
                   
              let targetURL ="niveau4.html";//rejouer le niveau 
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