// if (motTapeok) {
//   console.log("Bravo, vous avez correctement tapé ce mot");
// } else {
//   conseole.log("Echec, le mot n'est pas correct");
// }

//Dans ce morceau de code :
// nous déclarons une variable motUtilisateur ;
// à l’intérieur nous mettons le résultat de l’instruction prompt(“Entrez un mot :”). Cette instruction fera apparaître une petite popup sur la page ;
// l’utilisateur n’a plus qu’à répondre à la question, et ce mot se retrouve à l’intérieur de la variable motUtilisateur.
//let motUtilisateur = prompt("Entrez un mot:");
//console.log(motUtilisateur);

//L’étape suivante est de réellement comparer le mot de l’utilisateur, qui est stocké dans la variable motUtilisateur, avec le mot de l’application que nous allons stocker dans la variable motApplication.
// Dans notre cas, nous allons utiliser l’opérateur  ===  . Il va nous permettre de comparer si deux éléments ont exactement la même valeur. Nous allons donc vérifier si les deux mots sont les mêmes.
//const motApplication = "Bonjour"; // On peut mettre un autre mot ici
//let motUtilisateur = prompt("Entrez le mot" + motApplication);

//if (motUtilisateur === motApplication) {
//console.log("Bravo");
//} else {
//console.log("Vous avez fait une erreur de frappe.");
//}

// la structure conditionnelle switch/case.
// Il arrive parfois que l’on souhaite imbriquer beaucoup de if. Typiquement, cela arrive quand on veut faire un traitement différent pour chaque valeur d’une même variable, par exemple.
// Comme cela rend le code difficile à lire, nous utiliserons dans ce cas la structure conditionnelle switch/case.
// définir le test avec switch(laValeurATester);
// lister les valeurs possibles avec case.

// Tableau qui contient 3 mots que l'utilisateur devra taper
// const listeMots = ["Cachalot", "Pétunia", "Serveitte"];

// deuxième variable score, initialisée à 0, qui contiendra le nombre de mots correctement tapés par l’utilisateur.
// let score = 0;

// A l'aide de l'instruction prompt, on demande à l'utilisateur de taper le premier mot du tableau
// let motUtilisateur = prompt("Entrez le mot: " + listeMots[0]);

//structure conditionnelle pour savoir si le mot tapé par l’utilisateur est bien celui demandé par l’application.
// Si c’est le cas, on augmente la valeur de score de 1
// Au final, mon score devra être la somme de la validité de mes trois tests
// Le score devra donc évoluer entre zéro et trois
// if (motUtilisateur === listeMots[0]) {
//   score++;
// }

// J'enlève juste le let car la variable a déja au début été déclarée
// motUtilisateur = prompt("Entrez le mot: " + listeMots[1]);

// if (motUtilisateur === listeMots[1]) {
//   score++;
// }

// motUtilisateur = prompt("Entrez le mot: " + listeMots[2]);

// if (motUtilisateur === listeMots[2]) {
//   score++;
// }
// console.log(score);

//Les boucles
//Une boucle est une structure conditionnelle qui permet de répéter un certain nombre de fois du code, jusqu’à ce qu’un test ne soit plus vrai.
//La boucle for permet de répéter du code lorsque l’on sait d’avance combien de fois il faudra le répéter.
//La boucle while permet de répéter du code autant de fois qu’il le faut pour qu’une condition ne soit plus vraie.
// Par exemple, si nous voulons redemander un mot à l’utilisateur jusqu’à ce que ce mot soit correct.

// Boucle for:
//for (let compteur = 0; compteur < 3; compteur = compteur + 1) {
//   console.log(compteur);
// }
// ici nous définissons une nouvelle variable appelée “compteur”, et qui contient 0.
// Ceci est la condition d’arrêt.(compteur<3) La boucle continuera tant que compteur est plus petit que 3.
// À chaque tour de boucle, (compteur = compteur+1) on fait évoluer la valeur de compteur. Ici, on dit que compteur vaut la valeur précédente de compteur, plus 1.

//meilleure pratique pour le tour de boucle. i est un indice
// for (let i = 0; i < 3; i++) {
//   console.log(i);
// }
//boucle while
// on déclare la variable i, que l’on initialise à zéro, avant la boucle ;
// le while ne contient que la condition d’arrêt : tant que i est plus petit que 3 ;
// on incrémente i (i va gagner +1 à chaque tour de boucle).
// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// }

/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu.
 *
 *********************************************************************************/

/**
 * Cette fonction affiche dans la console le score de l'utilisateur
 * @param {number} score : le score de l'utilisateur
 * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
 */
function afficherResultat(score, nbMotsProposes) {
  // Nous récupérons le span pour ensuite le modifier
  let spanScore = document.querySelector(".zoneScore span");
  //   Nous voulons construire le texte que nous allons insérer à l'intérieur de ce span
  // Je veux mon score sur un total de nombre de mots proposés
  let affichageScore = `${score} / ${nbMotsProposes}`;

  //   Maintenant, il faut relier les deux

  spanScore.innerText = affichageScore;
}

/**
 * Cette fonction affiche une proposition, que le joueur devra recopier,
 * dans la zone "zoneProposition"
 * @param {string} proposition : la proposition à afficher
 */

//Pour remplacer le mot à proposer dans la div"zoneProposition"
function afficherProposition(proposition) {
  // Ici nous voulons d'abord récupérer notre div
  let zoneProposition = document.querySelector(".zoneProposition");
  //Nous voulons écrire à l'intérieur la proposition qui se trouve en paramètre de la fonction
  zoneProposition.innerText = proposition;
}

/**
 * Cette fonction construit et affiche l'email.
 * @param {string} nom
 * @param {string} email
 * @param {string} score
 */
function afficherEmail(nom, email, score) {
  let mailto = `mailto:${email}?subject=Partage du score Azertype&body=Salut, je suis ${nom} et je vais de réaliser le score ${score} sur le site d'Azertype !`;
  location.href = mailto;
}

/**
 * Cette fonction prend un nom en paramètre et valide qu'il est au bon format
 * ici : deux caractères au minimum
 * @param {string} nom 
 * @throws {Error}
 */
function validerNom(nom) {
  if (nom.length < 2) {
      throw new Error("Le nom est trop court. ")
  }
  
}

/**
* Cette fonction prend un email en paramètre et valide qu'il est au bon format. 
* @param {string} email 
* @throws {Error}
*/
function validerEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")
  if (!emailRegExp.test(email)) {
      throw new Error("L'email n'est pas valide.")
  }
  
}

function afficherMessageErreur(message) {
    
  let spanErreurMessage = document.getElementById("erreurMessage")
// Si spanerreurMessage n'existe pas, on va le faire
  if (!spanErreurMessage) {
      let popup = document.querySelector(".popup")
      spanErreurMessage = document.createElement("span")
      // On lui met un Id (pour ne pas risquer de la faire deux fois à chaque fois qu'on va appeler notre fonction afficherMessage d'erreur)
      spanErreurMessage.id = "erreurMessage"
      
      popup.append(spanErreurMessage)
  }
  
  spanErreurMessage.innerText = message
}

//Cette fonction permet de récupérer les informations dans le formulaire
 
//  de la popup de partage et d'appeler l'affichage de l'email avec les bons paramètres.
 @param {string} scoreEmail 



function gererFormulaire(scoreEmail) {
  try {
  let baliseNom = document.getElementById("nom")
  let nom = baliseNom.value
  validerNom(nom)

  let baliseEmail = document.getElementById("email")
  let email = baliseEmail.value
  validerEmail(email)
        afficherMessageErreur("")
        afficherEmail(nom, email, scoreEmail)

    } catch(erreur) {
        afficherMessageErreur(erreur.message)
    }
  }
    


  


/**
 * Cette fonction lance le jeu.
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */

// // À ce stade, le projet n’est plus fonctionnel, il n’est plus possible de jouer.
// Il faut intéragir directement en recontruisant ce qui a été supprimé. (les différentes fonctions) avec la page HTML

// Dans la fonction lancerJeu, je récupère le bouton de validation et j'écoute l'évènement click
//grâce à la méthode addEventListener
// Testez que cela fonctionne avec un console.log(“j’ai cliqué !”).
// Récupérez la balise inputEcriture et placez-la dans une variable.
// Récupérez la balise inputEcriture et placez-la dans une variable.
// Pour accéder à la valeur contenue dans la balise inputEcriture, utilisez la propriété value.
// Tester en écrivant quelque chose dans le champ, et en vérifiant que la valeur apparaît bien lorsque vous cliquez sur Envoyer.
function lancerJeu() {
  // Initialisations
  let score = 0;

  //Afficher les mots que l'utilisateur doit recopier
  //J'initialise un compteur
  let i = 0;

  let btnValiderMot = document.getElementById("btnValiderMot");
  let inputEcriture = document.getElementById("inputEcriture");
  let listeProposition = listeMots;
  // On va appeler la fonction qui nous sert à afficher une liste de mots

  afficherProposition(listeProposition[i]);
  btnValiderMot.addEventListener("click", () => {
    console.log(inputEcriture.value);

    //Pour gérer le score, nous écrivons un test pour comparer ce que nous proposons comme mot
    // Et ce qu'a ecrit l'utilisateur
    // Si les deu mots sont les mêmes alors on met à jour le score grâce à notre fonction ajouter résultat
    // On le met avant i++ pour comparer le mot proposé et non pas le prochain mot
    if (inputEcriture.value === listeProposition[i]) {
      score++;
    }

    // A chaque fois que l'utilisateur va cliquer, on va vouloir passer au mot d'après
    i++;

    afficherResultat(score, i);

    // Pour vider le champ à chaque fois
    inputEcriture.value = "";
    // Si dans la liste de mots, il n' ya plus de mots à afficher, alors écris: le jeu est fini

    if (listeProposition[i] === undefined) {
      afficherProposition("Le jeu est fini");
      //Nous voulons désactiver le bouton quand le jeu est fini
      btnValiderMot.disabled = true;
    } else {
      afficherProposition(listeProposition[i]);
    }
  });

  // il y a deux boutons radio pour que l’utilisateur puisse choisir entre “Mots” ou “Phrases”, mais ils ne fonctionnent pas.
  // gérer ces boutons radio pour les rendre fonctionnels.
  // lorsque l’utilisateur cliquera sur “Phrases”, il devra recopier une phrase. Inversement, lorsqu’il cliquera sur “Mots”, il devra recopier un mot.

  // 1. Écoutez l’événement “change” sur les boutons radio.
  let listeBtnRadio = document.querySelectorAll(".optionSource input");
  for (let index = 0; index < listeBtnRadio.length; index++) {
    // A chaque tour de boucle je passe à l'élément suivant
    // A chaque bouton de radio, on veut lui ajouter un événement (change) pour savoir si qq chose a changé
    // Pour savoir sur lequel on a cliqué, on utilise event
    // Pour connaitre la valeur de l'élément qui a été cliqué (console.log(event.target.value)):
    listeBtnRadio[index].addEventListener("change", (event) => {
      // Pour connaitre la valeur de l'élément qui a été cliqué (se reférer à l'attribut value dans HTML)
      console.log(event.target.value);
      // A partir d'ici, je sais si j'ai cliqué sur phrases ou sur mots
      //Maintenant, je veux mettre comme condition la valeur de ma liste de proposition à afficher (soit phrases ou mots, en fonction de la valeur de mes boutons radio (soit 1 ou 2))
      if (event.target.value === "1") {
        listeProposition = listeMots;
      } else {
        listeProposition = listePhrases;
      }
      afficherProposition(listeProposition[i]);
    });
  }

  let form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let scoreEmail = `${score} / ${i}`
    gererFormulaire(scoreEmail)

    
  });

  afficherResultat(score, i);
}

let form = document.querySelector("form");
let baliseNom = document.getElementById("nom");
let baliseEmail = document.getElementById("email");

function verifierChamp(balise) {
  if (balise.value === "") {
    balise.classList.add("error");
  } else {
    balise.classList.remove("error");
  }
}

function verifierEmail(balise) {
  let emailRegExp = new RegExp("[a-z._-]+@[a-z._-]+\\.[a-z._-]+");
  if (emailRegExp.test(balise.value)) {
    balise.classList.remove("error");
  } else {
    balise.classList.add("error");
  }
}


form.addEventListener("submit", (event) => {
  event.preventDefault();
  verifierChamp(baliseNom)
})

baliseNom.addEventListener("change", () => {
  verifierChamp(baliseNom)
})

baliseEmail.addEventListener("change" () => {
  verifierEmail(baliseEmail)
})


// Affichez un message d’erreur
// Utilisez des if / else pour gérer les erreurs courantes
let maVariable = document.getElementById("idInexistant")
maVariable.createElement("div")
// J'ai tenté de récupérer un élément qui n'existe pas

// Pour gérer ce type d’erreur, nous pouvons tester la valeur de maVariable, et nous assurer qu’elle n’est pas nulle :
let maVariable = document.getElementById("idInexistant")

if (maVariable === null) {
    console.log("L'élément n'existe pas");
} else {
    maVariable.createElement("div")
    // suite du traitement...
}

//En réalité, il est plutôt conseillé de placer la gestion de l’erreur ailleurs, de manière à avoir une structure en deux temps : déclaration puis résultat. Concrètement, on essaie d’exécuter ce code, et en cas de problème, on appelle un bloc de code ailleurs pour gérer l’erreur.
// Cela permet de distinguer d’un côté, notre exécution “quand tout marche bien”, et de l’autre la gestion de nos erreurs. Et vous savez quoi ? C’est exactement ce que nous pourrons faire grâce aux instructions try / catch. 😃


// Centralisez la gestion des erreurs
// Utilisez les instructions try / catch
// Le bloc try / catch est composé de deux parties : 

// l’instruction try (essayer, en français) va essayer d’exécuter du code ; 

// l’instruction catch (attraper, en français) va attraper les éventuelles erreurs pour les gérer. 
try {
  let maVariable = document.getElementById("idInexistant")
  maVariable.createElement("div")
  // suite du traitement
} catch {
  console.log("Il y a eu une erreur dans le bloc try");
}

// Utilisez l’instruction throw
//Il arrive que nous voulons faire nos  propres fonctions, qui lancent une exception en cas d’échec.
// Dans ce cas, la solution est d’utiliser l’instruction throw (lancer, en anglais). Cette dernière nous permet de lancer nos propres exceptions, qui pourront alors être attrapées par un catch.
function verifierChamp(champ) {
  // Si le champ est vide, on lance une exception
  if (champ.value === "") {
      throw new Error(`Le champ ${champ.id} est vide`)
  }
}
//Dans ce code :
// j’ai une fonction qui prend un champ en paramètre ;
// si le champ est vide, alors je lance une exception que je crée grâce à new Error ;
// je passe à cette erreur un paramètre : le message d’erreur. 


// Voyons maintenant comment utiliser cette méthode pour tester un champ nom, un champ prenom et un champ surnom :
let form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    try {
        event.preventDefault()

        let baliseNom = document.getElementById("nom")
        verifierChamp(baliseNom)

        let balisePrenom = document.getElementById("prenom")
        verifierChamp(balisePrenom)

        let baliseSurnom = document.getElementById("surnom")
        verifierChamp(baliseSurnom)

        // traitement du formulaire
        // ...
    } catch (error) {
        console.log("Une erreur est survenue : " + error.message)
    }
})

// Dans ce code :

//j’écoute l’événement submit de mon formulaire ;

//je vérifie les champs un par un ;

//En cas de problème, si un des champs est vide, le code va directement exécuter la partie catch.




