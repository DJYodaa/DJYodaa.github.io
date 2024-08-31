let topList = ["a", "b", "c"]
let midleAList = ["a", "b", "c"]
let bottomList = ["a", "b", "c"]
let leftList = ["a", "b", "c"]
let midleBList = ["a", "b", "c"]
let rightList = ["a", "b", "c"]
let topToBottomList = ["a", "b", "c"]
let bottomToTopList = ["a", "b", "c"]

let player = "rouge"
let tour = 0

function changer (id) {
    placed = document.getElementById(id).src
    if (placed === "http://127.0.0.1:5500/Morpion/Image/circle.png" || placed === "http://127.0.0.1:5500/Morpion/Image/cross.png") {
        alert("Tu peut pas jouer ici quelqu'un a déja joué ici");
        return
    } else {
        if(player === "rouge") {
            let image = document.getElementById(id)
            image.setAttribute("src", "Image/cross.png")
            player = "bleu"
            tour += 1
        } else {
            let image = document.getElementById(id)
            image.setAttribute("src", "Image/circle.png")
            player = "rouge"
            tour +=1
        }
    }

    console.log(tour);

    setTimeout(verification, 250)
}

function verification() {
    if (topList[0] === topList[1] && topList[0] === topList[2]) {
        win(topList);
    } else if (midleAList[0] === midleAList[1] && midleAList[0] === midleAList[2]) {
        win(midleAList);
    } else if (bottomList[0] === bottomList[1] && bottomList[0] === bottomList[2]) {
        win(bottomList);
    } else if (leftList[0] === leftList[1] && leftList[0] === leftList[2]) {
        win(leftList);
    } else if (midleBList[0] === midleBList[1] && midleBList[0] === midleBList[2]) {
        win(midleBList);
    } else if (rightList[0] === rightList[1] && rightList[0] === rightList[2]) {
        win(rightList);
    } else if (topToBottomList[0] === topToBottomList[1] && topToBottomList[0] === topToBottomList[2]) {
        win(topToBottomList);
    } else if (bottomToTopList[0] === bottomToTopList[1] && bottomToTopList[0] === bottomToTopList[2]) {
        win(bottomList);
    } else if (tour === 9) {
        if (confirm(" Bien jouer. Mais personne a gagné\n En appuyant sur 'OK' tu relancera une partie")) {
            location.reload();  
        }
    }
}

function win(liste) {
    if (confirm(" Bien jouer. Le joueur " + liste[0] + " a gagné !!!\n En appuyant sur 'OK' tu relancera une partie")) {
        location.reload();
    }
}

function TopLeftfunction (id){
    topList[0] = player
    leftList[2] = player
    topToBottomList[0] = player
    changer(id)
}

function midleTopfunction (id){
    topList[1] = player
    midleBList[2] = player
    changer(id)
    
}

function TopRightFunction (id) {
    rightList[2] = player
    bottomToTopList[2] = player
    topList[2] = player
    changer(id)
}

function leftMidlefunction (id){
    leftList[1] = player
    midleAList[0] =  player
    changer(id)
    
}

function midlefunction (id){
    midleAList[1] = player
    midleBList[1] = player
    topToBottomList[1] = player
    bottomToTopList[1] = player
    changer(id)
    
}

function midleRight (id){
    midleAList[2] = player
    rightList[1] = player
    changer(id)
    
}

function bottomLeft (id){
    bottomList[0] = player
    leftList[0] = player
    bottomToTopList[0] = player
    changer(id)
    
}

function bottom (id){
    midleBList[0] = player
    bottomList[1] = player
    changer(id)
    
}

function bottomRight (id){
    rightList[0] = player
    bottomList[2] = player
    topToBottomList[2] = player
    changer(id)
    
}
