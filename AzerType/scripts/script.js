//const listeMots = ["Cachalot", "Pétunia", "Serviette"]
//const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]

function afficherResultat(score, nbMotsProposes) {
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}

function choisirPhraseOuMots() {
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
}   

function lancerBoucleDeJeu(listeProposition) {
    let score = 0
    for (let i = 0; i < listeProposition.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + listeProposition[i])
        if (motUtilisateur === listeProposition[i]) {
            score++
        }
    }
    return score
}

function lancerJeu() {
    let choix = choisirPhraseOuMots()
    let score = 0
    let nbMotsProposes = 0
    if(choix === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    }  else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score,nbMotsProposes)
}