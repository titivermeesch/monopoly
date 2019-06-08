//Global variables for main system
var totalDies = 0;
var playingPlayer = 1;
var des1;
var des2;

//Get player names
var playername1 = sessionStorage.getItem("player1");
var playername2 = sessionStorage.getItem("player2");
var playername3 = sessionStorage.getItem("player3");
var playername4 = sessionStorage.getItem("player4");

//Get players data
function Joueur(nomJoueur, argent, noCase, couleur, status, chancesPrison, statusPrison) {
    this.nomJoueur = nomJoueur;
    this.argent = argent;
    this.noCase = noCase;
    this.couleur = couleur;
    this.status = status;
    this.chancesPrison = chancesPrison;
    this.statusPrison = statusPrison;

    if (debug == 1) {
        console.log("Function Joueur() has been loaded to get player data");
    }
}

//Initiate players
//nomJoueur, sommeDepart, noCase, couleur, status, chancesPrison, statusPrison
var joueur1 = new Joueur(playername1, 1250, 1, "#ff0000", 1, 3, 0);
var joueur2 = new Joueur(playername2, 1250, 1, "#3366ff", 1, 3, 0);
var joueur3 = new Joueur(playername3, 1250, 1, "#ff9900", 1, 3, 0);
var joueur4 = new Joueur(playername4, 1250, 1, "#66ff33", 1, 3, 0);

//Get case data
function Case(nomCase, prix, prixUneMaison, prixDeuxMaison, prixTroisMaison, prixQuatreMaison, maisons, auteur, couleur, image, prixConstruire1, prixConstruire2, prixConstruire3, prixConstruire4) {
    this.nomCase = nomCase;
    this.prix = prix;
    this.prixUneMaison = prixUneMaison;
    this.prixDeuxMaison = prixDeuxMaison;
    this.prixTroisMaison = prixTroisMaison;
    this.prixQuatreMaison = prixQuatreMaison;
    this.maisons = maisons;
    this.auteur = auteur;
    this.couleur = couleur;
    this.image = image;
    this.prixConstruire1 = prixConstruire1;
    this.prixConstruire2 = prixConstruire2;
    this.prixConstruire3 = prixConstruire3;
    this.prixConstruire4 = prixConstruire4;

    if (debug == 1) {
        console.log("Function Case() has been loaded to get case data");
    }
}

function setPlayerMoney() {
	if(document.getElementById("standard_money").checked == true) {
		joueur1.argent = 1250;
		joueur2.argent = 1250;
		joueur3.argent = 1250;
		joueur4.argent = 1250;
	} else if(document.getElementById("unlimited_money").checked == true) {
		joueur1.argent = Math.Infinity;
		joueur2.argent = Math.Infinity;
		joueur3.argent = Math.Infinity;
		joueur4.argent = Math.Infinity;
	} else {
		joueur1.argent = document.getElementById("custom_money").value;
		joueur2.argent = document.getElementById("custom_money").value;
		joueur3.argent = document.getElementById("custom_money").value;
		joueur4.argent = document.getElementById("custom_money").value;
	}
}

//Initiate all cases, information used for main card management
//nomCase, prix, prixUneMaison, prixDeuxMaison, prixTroisMaison, prixQuatreMaison, maisons, auteur, couleur, image, prixConstruire1, prixConstruire2, prixConstruire3, prixConstruire4

//!!IMPORTANT!! INSERER LA SOURCE DE CHAQUE IMAGE QUI SERA UTILISE POUR LA CASSSE (AUSSI POUR CASE CHANSE...)
var case1 = new Case("Depart", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case2 = new Case("6A", 80, 25, 50, 75, 100, 0, 0, "#6d3f1c", "/images/classes/4G1.jpg", 50, 50, 0, 0);
var case3 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case4 = new Case("6B", 100, 25, 50, 75, 110, 0, 0, "#6d3f1c", "/images/classes/4G1.jpg", 75, 75, 0, 0);
var case5 = new Case("Taxes", 200, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case6 = new Case("Gare1", 200, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case7 = new Case("1G1", 120, 100, 120, 140, 150, 0, 0, "#9ba2c9", "/images/classes/4G1.jpg", 100, 100, 0, 0);
var case8 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case9 = new Case("1G2", 140, 100, 120, 140, 150, 0, 0, "#9ba2c9", "/images/classes/4G1.jpg", 100, 100, 0, 0);
var case10 = new Case("1G3", 140, 100, 120, 140, 160, 0, 0, "#9ba2c9", "/images/classes/4G1.jpg", 100, 100, 0, 0);
var case11 = new Case("Allerprison", 500, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case12 = new Case("2G1", 160, 150, 160, 180, 200, 0, 0, "#ff4f72", "/images/classes/4G1.jpg", 120, 120, 0, 0);
var case13 = new Case("Eau", 180, 0, 0, 0, 0, 0, 0, "#ff5000", "/images/classes/4G1.jpg0", 0, 0, 0, 0);
var case14 = new Case("2G2", 160, 150, 160, 180, 200, 0, 0, "#ff4f72", "/images/classes/4G1.jpg", 120, 120, 0, 0);
var case15 = new Case("2G3", 180, 150, 160, 180, 210, 0, 0, "#ff4f72", "/images/classes/4G1.jpg", 140, 140, 0, 0);
var case16 = new Case("Gare2", 200, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case17 = new Case("3G1", 180, 200, 210, 220, 230, 0, 0, "#ff5000", "/images/classes/4G1.jpg", 150, 150, 0, 0);
var case18 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case19 = new Case("3G2", 180, 200, 210, 220, 230, 0, 0, "#ff5000", "/images/classes/4G1.jpg", 150, 150, 0, 0);
var case20 = new Case("3G3", 200, 200, 210, 220, 240, 0, 0, "#ff5000", "/images/classes/4G1.jpg", 150, 150, 0, 0);
var case21 = new Case("Parking", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case22 = new Case("4G1", 220, 220, 230, 240, 250, 0, 0, "#ff0000", "/images/classes/4G1.jpg", 160, 160, 0, 0);
var case23 = new Case("4G2", 220, 220, 230, 240, 250, 0, 0, "#ff0000", "/images/classes/4G1.jpg", 180, 180, 0, 0);
var case24 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case25 = new Case("4G3", 220, 220, 230, 240, 260, 0, 0, "#ff0000", "/images/classes/4G1.jpg", 200, 200, 0, 0);
var case26 = new Case("Gare3", 200, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case27 = new Case("5G1", 260, 270, 280, 290, 300, 0, 0, "#f4ff2b", "/images/classes/4G1.jpg", 210, 210, 0, 0);
var case28 = new Case("5G2", 260, 270, 280, 290, 300, 0, 0, "#f4ff2b", "/images/classes/4G1.jpg", 220, 220, 0, 0);
var case29 = new Case("Electricite", 240, 0, 0, 0, 0, 0, 0, "#ff0000", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case30 = new Case("5G3", 280, 270, 280, 290, 310, 0, 0, "#f4ff2b", "/images/classes/4G1.jpg", 240, 240, 0, 0);
var case31 = new Case("Prison", 500, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case32 = new Case("6G1", 300, 310, 320, 330, 340, 0, 0, "#0ba500", "/images/classes/4G1.jpg", 300, 300, 0, 0);
var case33 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case34 = new Case("6G2", 300, 310, 320, 330, 340, 0, 0, "#0ba500", "/images/classes/4G1.jpg", 310, 310, 0, 0);
var case35 = new Case("6G3", 300, 310, 320, 330, 350, 0, 0, "#0ba500", "/images/classes/4G1.jpg", 310, 310, 0, 0);
var case36 = new Case("Gare4", 200, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case37 = new Case("Chance", 0, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case38 = new Case("4TTA", 420, 360, 370, 380, 400, 0, 0, "#071775", "/images/classes/4G1.jpg", 400, 400, 0, 0);
var case39 = new Case("Taxes", 100, 0, 0, 0, 0, 0, 0, "#ffffff", "/images/classes/4G1.jpg", 0, 0, 0, 0);
var case40 = new Case("4TTB", 440, 360, 370, 380, 410, 0, 0, "#071775", "/images/classes/4G1.jpg", 400, 400, 0, 0);


//Main game function, launching all side functions
function Game() {
    //Get colors for visual table near board
    var ps1 = document.getElementById("player1name");
    var ps2 = document.getElementById("player2name");
    var ps3 = document.getElementById("player3name");
    var ps4 = document.getElementById("player4name");
    if (debug == 1) {
        console.log("Player names are loaded");
    }
    randomNumberGenerator(); //Launch dies management
    if (debug == 1) {
        console.log("Function Game() called the randomNumberGenerator() function");
    }

    //Start game and further functions
    switch (playingPlayer) {
        case 1:
            if (debug == 1) {
                console.log("case 1 in switch(playerPlayer) has been selected");
            }
            //Change colors player selector
            ps1.style.backgroundColor = joueur1.couleur;
            ps1.style.transition = "1s";
            ps2.style.backgroundColor = "#a6a3a3";
            ps2.style.transition = "1s";
            ps3.style.backgroundColor = "#a6a3a3";
            ps3.style.transition = "1s";
            ps4.style.backgroundColor = "#a6a3a3";
            ps4.style.transition = "1s";
            if (debug == 1) {
                console.log("Playing player background colors are updated");
            }
            addPlayerCases(); //Add number of cases
            checkPlayerCases(); //Check if player case exist + add 2000€ if player goes outside the board
            gestionPions(); //Update player cases (colors)
            handleCases(); //Update case shower near board and handles money and buildings
            playingPlayer = playingPlayer + 1; //Change playing player
            checkMaxPlayers(); //Check if player exist
            updatePlayerNames(); //Update board status
            break; //Stop playing/next
        case 2:
            ps1.style.backgroundColor = "#a6a3a3";
            ps2.style.backgroundColor = joueur2.couleur;
            ps3.style.backgroundColor = "#a6a3a3";
            ps4.style.backgroundColor = "#a6a3a3";
            if (debug == 1) {
                console.log("Playing player background colors are updated");
            }
            addPlayerCases();
            checkPlayerCases();
            gestionPions();
            playingPlayer = playingPlayer + 1;
            checkMaxPlayers();
            updatePlayerNames();
            break;
        case 3:
            ps1.style.backgroundColor = "#a6a3a3";
            ps2.style.backgroundColor = "#a6a3a3";
            ps3.style.backgroundColor = joueur3.couleur;
            ps4.style.backgroundColor = "#a6a3a3";
            if (debug == 1) {
                console.log("Playing player background colors are updated");
            }
            addPlayerCases();
            checkPlayerCases();
            gestionPions();
            playingPlayer = playingPlayer + 1;
            checkMaxPlayers();
            updatePlayerNames();
            break;
        case 4:
            ps1.style.backgroundColor = "#a6a3a3";
            ps2.style.backgroundColor = "#a6a3a3";
            ps3.style.backgroundColor = "#a6a3a3";
            ps4.style.backgroundColor = joueur4.couleur;
            if (debug == 1) {
                console.log("Playing player background colors are updated");
            }
            addPlayerCases();
            checkPlayerCases();
            gestionPions();
            playingPlayer = playingPlayer + 1;
            checkMaxPlayers();
            updatePlayerNames();
            break;
    }
}

//Check if playing player is not undefined
function checkMaxPlayers() {
    if (playingPlayer > 4) {
        playingPlayer = 1;
    }
    if (debug == 1) {
        console.log("Checking if max players is reached");
    }
}

//Update player board location
function addPlayerCases() {
    if (debug == 1) {
        console.log("Updating total player cases (potition)");
    }
    switch (playingPlayer) {
        case 1:
            joueur1.noCase = joueur1.noCase + totalDies;
            break;

        case 2:
            joueur2.noCase = joueur2.noCase + totalDies;
            break;

        case 3:
            joueur3.noCase = joueur3.noCase + totalDies;
            break;

        case 4:
            joueur4.noCase = joueur4.noCase + totalDies;
            break;
    }
}

//Update player names
function updatePlayerNames() {

    document.getElementById("player1name").innerHTML = playername1 + " : " + joueur1.argent + "€";
    document.getElementById("player2name").innerHTML = playername2 + " : " + joueur2.argent + "€";
    document.getElementById("player3name").innerHTML = playername3 + " : " + joueur3.argent + "€";
    document.getElementById("player4name").innerHTML = playername4 + " : " + joueur4.argent + "€";
}

//Handle all cases
function handleCases() {
    if (debug == 1) {
        console.log("Started handleling specific case actions (More details later)");
    }
    var titre = document.getElementById("boardTitle");
    var boardSansMaison = document.getElementById("boardSansMaison");
    var boardUneMaison = document.getElementById("boardUneMaison");
    var boardDeuxMaison = document.getElementById("boardDeuxMaison");
    var boardTroisMaison = document.getElementById("boardTroisMaison");
    var boardQuatreMaison = document.getElementById("boardQuatreMaison");
    var shopButton = document.getElementById("shopButton");
    var doubleButton = document.getElementById("doubleButton");

    //nomCase, prix, prixUneMaison, prixDeuxMaison, prixTroisMaison, prixQuatreMaison, maisons, auteur, couleur
    switch (playingPlayer) {
        case 1:
            switch (joueur1.noCase) {
                case 1: //Case départ
                    if (debug == 1) {
                        console.log("Start case selected");
                    }
                    titre.innerHTML = "";
                    boardSansMaison.innerHTML = "";
                    boardUneMaison.innerHTML = "";
                    boardDeuxMaison.innerHTML = "";
                    boardTroisMaison.innerHTML = "";
                    boardQuatreMaison.innerHTML = "";
                    shopButton.innerHTML = "";
                    joueur1.argent = joueur1.argent + 1000;
                    titre.innerHTML = case1.nomCase;
                    titre.style.display = "block";
                    boardSansMaison.innerHTML = "Vous avez reçu 2000€";
                    boardSansMaison.style.display = "block";
                    boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                    boardUneMaison.style.display = "block";
                    break;
                case 2: //Case 6A
                    if (debug == 1) {
                        console.log("6A case selected");
                    }
                    titre.innerHTML = "";
                    boardSansMaison.innerHTML = "";
                    boardUneMaison.innerHTML = "";
                    boardDeuxMaison.innerHTML = "";
                    boardTroisMaison.innerHTML = "";
                    boardQuatreMaison.innerHTML = "";
                    shopButton.innerHTML = "";
                    titre.innerHTML = case2.nomCase;
                    titre.style.display = "block";
                    titre.style.backgroundColor = case2.couleur;
                    if (case2.auteur === 0) {
                        boardSansMaison.innerHTML = "Cette classe n'appartient à personne";
                        boardSansMaison.style.display = "block";
                        if (joueur1.argent < case2.prix) {
                            boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                            boardDeuxMaison.innerHTML = "Il vous manque " + (case2.prix - joueur1.argent) + "€";
                            shopButton.innerHTML = "Continuez sans payer";
                            shopButton.style.display = "block";
                        } else {
                            boardUneMaison.innerHTML = "Voulez-vous payer " + case2.prix + "€ ?";
                            boardUneMaison.style.display = "block";
                            boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                            boardDeuxMaison.style.display = "block";
                            shopButton.innerHTML = "Acheter";
                            shopButton.style.display = "block";
                            document.getElementById('shopButton').onclick = function () { //Function transfer d'argent
                                joueur1.argent = joueur1.argent - case2.prix;
                                case2.auteur = joueur1.nomJoueur;
                                boardSansMaison.innerHTML = "";
                                boardUneMaison.innerHTML = "";
                                boardDeuxMaison.innerHTML = "";
                                boardTroisMaison.innerHTML = "";
                                boardQuatreMaison.innerHTML = "";
                                shopButton.innerHTML = "";
                                boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                                boardUneMaison.innerHTML = "De cette classe";
                            };
                        }
                    } else {
                        boardSansMaison.innerHTML = "Cette classe appartient à " + case2.auteur;
                        boardSansMaison.style.display = "block";
                        boardUneMaison.innerHTML = "vous devez payer " + case2.prix + "€";
                        boardUneMaison.style.display = "block";
                        boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                        boardDeuxMaison.style.display = "block";
                        shopButton.innerHTML = "Payer";
                        shopButton.style.display = "block";
                        document.getElementById('shopButton').onclick = function () {
                            document.getElementById('myBtn').style.display = "none";
                            if (joueur1.argent < case2.prix) { //Function faillte
                                boardSansMaison.innerHTML = "";
                                boardUneMaison.innerHTML = "";
                                boardDeuxMaison.innerHTML = "";
                                boardTroisMaison.innerHTML = "";
                                boardQuatreMaison.innerHTML = "";
                                boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                                boardUneMaison.innerHTML = "Vous avez fait faillite.";
                                boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                                boardTroisMaison.innerHTML = "A été donné à " + case2.auteur;
                                setPlayerMoney(case2.auteur, joueur1.argent);
                                joueur1.argent = 0;
                                boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                            } else {
                                boardSansMaison.innerHTML = "";
                                boardUneMaison.innerHTML = "";
                                boardDeuxMaison.innerHTML = "";
                                boardTroisMaison.innerHTML = "";
                                boardQuatreMaison.innerHTML = "";
                                boardSansMaison.innerHTML = "Vous avez payé " + case2.prix + "€";
                                joueur1.argent = joueur1.argent - case2.prix;
                                boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                                boardDeuxMaison.innerHTML = case2.auteur + "a maintenant " + getPlayerMoney(case2.auteur) + "€";
                            }
                        };
                    }

            }
            break;
        case 3: //Case chance
            if (debug == 1) {
                console.log("Chance case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case3.nomCase;
            titre.style.display = "block";
            boardSansMaison.innerHTML = "Cliquez sur le bouton";
            boardSansMaison.style.display = "block";
            boardUneMaison.innerHTML = "Pour tirer une carte";
            boardUneMaison.style.display = "block";
            shopButton.innerHTML = "Tirer une carte";
            document.getElementById('shopButton').onclick = function () {
                document.getElementById('myBtn').style.display = "none";
                updateChanceCard();

            };
            break;
        case 4: //Case 6B
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case4.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case4.couleur;
            if (case4.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classe n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case4.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case4.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case4.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case4.prix;
                        case4.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case4.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case4.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case4.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case4.auteur;
                        setPlayerMoney(case4.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case4.prix + "€";
                        joueur1.argent = joueur1.argent - case4.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case4.auteur + "a maintenant " + getPlayerMoney(case4.auteur) + "€";
                    }
                };

            }
            break;
        case 5: //Taxe
            if (debug == 1) {
                console.log("Taxe case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case5.nomCase;
            titre.style.display = "block";
            boardSansMaison.innerHTML = "Vous devez payer " + case5.prix + "€";
            boardSansMaison.style.display = "block";
            boardUneMaison.innerHTML = "Vous avez encore " + joueur1.argent + "€";
            boardUneMaison.style.display = "block";
            shopButton.innerHTML = "Payer";
            document.getElementById('shopButton').onclick = function () {
                document.getElementById('myBtn').style.display = "none";
                if (joueur1.argent < case5.prix) {
                    boardSansMaison.innerHTML = "";
                    boardUneMaison.innerHTML = "";
                    boardDeuxMaison.innerHTML = "";
                    boardTroisMaison.innerHTML = "";
                    boardQuatreMaison.innerHTML = "";
                    boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                    boardUneMaison.innerHTML = "Vous avez fait faillite.";
                    boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                    boardTroisMaison.innerHTML = "A été donné à la banque";
                    joueur1.argent = 0;
                    boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                } else {
                    boardSansMaison.innerHTML = "";
                    boardUneMaison.innerHTML = "";
                    boardDeuxMaison.innerHTML = "";
                    boardTroisMaison.innerHTML = "";
                    boardQuatreMaison.innerHTML = "";
                    boardSansMaison.innerHTML = "Vous avez payé " + case5.prix + "€";
                    joueur1.argent = joueur1.argent - case5.prix;
                    boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                    boardDeuxMaison.innerHTML = "Merci d'avoir payé";
                }

            };
            break;
        case 6: //Case Gare
            if (debug == 1) {
                console.log("Gare case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case6.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case6.couleur;
            if (case6.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case6.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case6.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case6.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case6.prix;
                        case6.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case6.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case6.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case6.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case6.auteur;
                        setPlayerMoney(case6.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case6.prix + "€";
                        joueur1.argent = joueur1.argent - case6.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case6.auteur + "a maintenant " + getPlayerMoney(case6.auteur) + "€";
                    }
                };

            }
            break;
        case 7: //1G1
            if (debug == 1) {
                console.log("1G1 case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case7.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case7.couleur;
            if (case7.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case7.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case7.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case7.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case7.prix;
                        case7.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case7.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case7.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case7.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case7.auteur;
                        setPlayerMoney(case7.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case6.prix + "€";
                        joueur1.argent = joueur1.argent - case7.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case7.auteur + "a maintenant " + getPlayerMoney(case7.auteur) + "€";
                    }
                };

            }
            break;
        case 8: //Case chance
            if (debug == 1) {
                console.log("Chance case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case8.nomCase;
            titre.style.display = "block";
            boardSansMaison.innerHTML = "Cliquez sur le bouton";
            boardSansMaison.style.display = "block";
            boardUneMaison.innerHTML = "Pour tirer une carte";
            boardUneMaison.style.display = "block";
            shopButton.innerHTML = "Tirer une carte";
            document.getElementById('shopButton').onclick = function () {
                document.getElementById('myBtn').style.display = "none";
                updateChanceCard();

            };
            break;
        case 9: //1G2
            if (debug == 1) {
                console.log("1G2 case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case9.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case9.couleur;
            if (case9.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case9.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case9.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case9.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case9.prix;
                        case9.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case9.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case9.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case9.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case9.auteur;
                        setPlayerMoney(case9.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case9.prix + "€";
                        joueur1.argent = joueur1.argent - case9.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case9.auteur + "a maintenant " + getPlayerMoney(case9.auteur) + "€";
                    }
                };

            }
            break;
        case 10: //1G3
            if (debug == 1) {
                console.log("1G3 case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case10.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case10.couleur;
            if (case10.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case10.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case10.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case10.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case10.prix;
                        case10.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case10.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case10.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case10.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case10.auteur;
                        setPlayerMoney(case10.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case10.prix + "€";
                        joueur1.argent = joueur1.argent - case10.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case10.auteur + "a maintenant " + getPlayerMoney(case10.auteur) + "€";
                    }
                };

            }
            break;
        case 11: //Prison
            if (debug == 1) {
                console.log("Prison case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case11.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case11.couleur;
            if (joueur1.statusPrison == 1) {
                boardSansMaison.innerHTML = "Vous êtes en prison.";
                if (joueur1.chancesPrison <= 0) {
                    boardUneMaison.innerHTML = "Vous devez payer pour sortir";
                    boardDeuxMaison.innerHTML = "Le montant s'élève à " + case11.prix + "€";
                    document.getElementById('shopButton').onclick = function () {
                        document.getElementById('myBtn').style.display = "none";
                        if (joueur1.argent < case11.prix) {
                            boardSansMaison.innerHTML = "";
                            boardUneMaison.innerHTML = "";
                            boardDeuxMaison.innerHTML = "";
                            boardTroisMaison.innerHTML = "";
                            boardQuatreMaison.innerHTML = "";
                            boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                            boardUneMaison.innerHTML = "Vous avez fait faillite.";
                            boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                            boardTroisMaison.innerHTML = "A été donné à la banque";
                            joueur1.argent = 0;
                            boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                        } else {
                            boardSansMaison.innerHTML = "";
                            boardUneMaison.innerHTML = "";
                            boardDeuxMaison.innerHTML = "";
                            boardTroisMaison.innerHTML = "";
                            boardQuatreMaison.innerHTML = "";
                            boardSansMaison.innerHTML = "Vous avez payé " + case11.prix + "€";
                            joueur1.argent = joueur1.argent - case11.prix;
                            boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                            boardDeuxMaison.innerHTML = "Vous êtes maintenant libre";
                            joueur1.statusPrison = 0;
                            joueur1.chancesPrison = 3;
                        }
                    };
                } else {
                    boardSansMaison.innerHTML = "Vous pouvez jouer double";
                    boardUneMaison.innerHTML = "Cliquez pour continuer";
                    doubleButton.style.display = "block";
                    randomNumberGenerator();
                    if (des1 == des2) {
                        document.getElementsById('doubleButton').onclick = function () {
                            boardSansMaison.innerHTML = "";
                            boardUneMaison.innerHTML = "";
                            boardDeuxMaison.innerHTML = "";
                            boardTroisMaison.innerHTML = "";
                            boardQuatreMaison.innerHTML = "";
                            shopButton.innerHTML = "";
                            doubleButton.innerHTML = "";
                            boardSansMaison.innerHTML = "Vous avez joué double (" + des1 + " et " + des2 + ")";
                            boardUneMaison.innerHTML = "Vous êtes maintenant libre";
                            boardDeuxMaison.innerHTML = "Vous pouvez rejouer au prochain tour";
                            joueur1.statusPrison = 0;
                            joueur1.chancesPrison = 3;
                        };
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        doubleButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas joué double (" + des1 + " et " + des2 + ")";
                        boardUneMaison.innerHTML = "Vous devez rester en prison"
                        boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.chancesPrison + " tentatives";
                        boardTroisMaison.innerHTML = "Vous passez votre tour";
                        joueur1.chancesPrison = joueur1.chancesPrison - 1;
                    }
                }

            }
            break;
        case 12: //2G1
            if (debug == 1) {
                console.log("2G1 case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case12.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case12.couleur;
            if (case12.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case12.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case12.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case12.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case12.prix;
                        case12.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case12.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case12.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case12.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case12.auteur;
                        setPlayerMoney(case12.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case12.prix + "€";
                        joueur1.argent = joueur1.argent - case12.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case12.auteur + "a maintenant " + getPlayerMoney(case12.auteur) + "€";
                    }
                };

            }
            break;
        case 13: //Water
            if (debug == 1) {
                console.log("Water case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case13.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case13.couleur;
            if (case13.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case13.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case13.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case13.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case13.prix;
                        case13.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case13.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case13.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case13.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case13.auteur;
                        setPlayerMoney(case13.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case13.prix + "€";
                        joueur1.argent = joueur1.argent - case13.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case13.auteur + "a maintenant " + getPlayerMoney(case13.auteur) + "€";
                    }
                };

            }
            break;

        case 14: //2G2
            if (debug == 1) {
                console.log("2G2 case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case14.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case14.couleur;
            if (case14.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case14.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case14.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case14.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case14.prix;
                        case14.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case14.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case14.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case14.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case14.auteur;
                        setPlayerMoney(case14.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case14.prix + "€";
                        joueur1.argent = joueur1.argent - case14.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case14.auteur + "a maintenant " + getPlayerMoney(case14.auteur) + "€";
                    }
                };

            }
            break;

        case 15: //Case 2G3
            if (debug == 1) {
                console.log("2G3 case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case15.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case15.couleur;
            if (case15.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case15.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case15.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case15.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case15.prix;
                        case15.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case15.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case15.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case15.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case15.auteur;
                        setPlayerMoney(case15.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case15.prix + "€";
                        joueur1.argent = joueur1.argent - case15.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case15.auteur + "a maintenant " + getPlayerMoney(case15.auteur) + "€";
                    }
                };

            }
            break;
        case 16: //Case gare
            if (debug == 1) {
                console.log("Gare case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case16.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case16.couleur;
            if (case16.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case16.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case16.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case16.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case16.prix;
                        case16.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case16.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case16.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case16.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case16.auteur;
                        setPlayerMoney(case16.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case16.prix + "€";
                        joueur1.argent = joueur1.argent - case16.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case16.auteur + "a maintenant " + getPlayerMoney(case16.auteur) + "€";
                    }
                };

            }
            break;
        case 17: //Case 3G1
            if (debug == 1) {
                console.log("3G1 case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case17.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case17.couleur;
            if (case17.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case17.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case17.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case17.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case17.prix;
                        case17.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case17.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case17.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case17.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case17.auteur;
                        setPlayerMoney(case17.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case17.prix + "€";
                        joueur1.argent = joueur1.argent - case17.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case17.auteur + "a maintenant " + getPlayerMoney(case17.auteur) + "€";
                    }
                };

            }
            break;

        case 18: //Case chance
            if (debug == 1) {
                console.log("Chance case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case18.nomCase;
            titre.style.display = "block";
            boardSansMaison.innerHTML = "Cliquez sur le bouton";
            boardSansMaison.style.display = "block";
            boardUneMaison.innerHTML = "Pour tirer une carte";
            boardUneMaison.style.display = "block";
            shopButton.innerHTML = "Tirer une carte";
            document.getElementById('shopButton').onclick = function () {
                document.getElementById('myBtn').style.display = "none";
                updateChanceCard();

            };
            break;

        case 19: //Case 3G2
            if (debug == 1) {
                console.log("3G2 case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case19.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case19.couleur;
            if (case19.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case19.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case19.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case19.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case19.prix;
                        case19.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case19.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case19.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case19.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case1.auteur;
                        setPlayerMoney(case20.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case19.prix + "€";
                        joueur1.argent = joueur1.argent - case19.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case19.auteur + "a maintenant " + getPlayerMoney(case19.auteur) + "€";
                    }
                };

            }
            break;
        case 20: //Case 3G3
            if (debug == 1) {
                console.log("3G3 case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case20.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case20.couleur;
            if (case20.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case20.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case20.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case20.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case20.prix;
                        case20.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case20.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case20.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case20.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case20.auteur;
                        setPlayerMoney(case20.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case20.prix + "€";
                        joueur1.argent = joueur1.argent - case20.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case20.auteur + "a maintenant " + getPlayerMoney(case20.auteur) + "€";
                    }
                };

            }
            break;

        case 21: //Case parking gratuit
            if (debug == 1) {
                console.log("Parking gratuit case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case21.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case20.couleur;
            boardSansMaison.innerHTML = "Cette case ne fait rien pour le moment";
            boardUneMaison.innerHTML = "Attendez la prochaine version pour voir";
            boardDeuxMaison.innerHTML = "Cette case fonctionnelle";
            break;

        case 22: //Case 4G1
            if (debug == 1) {
                console.log("4G1 case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case22.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case22.couleur;
            if (case22.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case22.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case22.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case22.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case22.prix;
                        case22.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case22.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case22.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case22.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case22.auteur;
                        setPlayerMoney(case22.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case22.prix + "€";
                        joueur1.argent = joueur1.argent - case22.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case22.auteur + "a maintenant " + getPlayerMoney(case22.auteur) + "€";
                    }
                };

            }
            break;
        case 23: //Case 4G2
            if (debug == 1) {
                console.log("4G2 case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case23.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case23.couleur;
            if (case23.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case23.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case23.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case23.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case23.prix;
                        case23.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case23.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case23.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case23.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case23.auteur;
                        setPlayerMoney(case23.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case23.prix + "€";
                        joueur1.argent = joueur1.argent - case23.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case23.auteur + "a maintenant " + getPlayerMoney(case23.auteur) + "€";
                    }
                };

            }
            break;

        case 24: //Case chance
            if (debug == 1) {
                console.log("Chance case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case24.nomCase;
            titre.style.display = "block";
            boardSansMaison.innerHTML = "Cliquez sur le bouton";
            boardSansMaison.style.display = "block";
            boardUneMaison.innerHTML = "Pour tirer une carte";
            boardUneMaison.style.display = "block";
            shopButton.innerHTML = "Tirer une carte";
            document.getElementById('shopButton').onclick = function () {
                document.getElementById('myBtn').style.display = "none";
                updateChanceCard();

            };
            break;

        case 25: //Case 4G3
            if (debug == 1) {
                console.log("4G3 case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case25.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case26.couleur;
            if (case25.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case25.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case25.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case25.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case25.prix;
                        case25.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case25.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case25.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case25.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case1.auteur;
                        setPlayerMoney(case1.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case25.prix + "€";
                        joueur1.argent = joueur1.argent - case25.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case25.auteur + "a maintenant " + getPlayerMoney(case25.auteur) + "€";
                    }
                };

            }
            break;

        case 26: //Case Gare
            if (debug == 1) {
                console.log("Gare case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case26.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case27.couleur;
            if (case26.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case26.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case26.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case26.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case26.prix;
                        case26.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case26.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case26.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case26.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case26.auteur;
                        setPlayerMoney(case26.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case26.prix + "€";
                        joueur1.argent = joueur1.argent - case26.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case26.auteur + "a maintenant " + getPlayerMoney(case26.auteur) + "€";
                    }
                };

            }
            break;

        case 27: //Case 5G1
            if (debug == 1) {
                console.log("5G1 Case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case27.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case27.couleur;
            if (case27.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case27.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case27.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case27.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case27.prix;
                        case27.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case27.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case27.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case27.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case27.auteur;
                        setPlayerMoney(case27.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case27.prix + "€";
                        joueur1.argent = joueur1.argent - case27.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case27.auteur + "a maintenant " + getPlayerMoney(case27.auteur) + "€";
                    }
                };

            }
            break;

        case 28: //Case 5G2
            if (debug == 1) {
                console.log("5G2 Case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case28.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case29.couleur;
            if (case28.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case28.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case28.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case28.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case28.prix;
                        case28.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case28.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case28.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case28.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case1.auteur;
                        setPlayerMoney(case28.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case28.prix + "€";
                        joueur1.argent = joueur1.argent - case28.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case28.auteur + "a maintenant " + getPlayerMoney(case28.auteur) + "€";
                    }
                };

            }
            break;

        case 29: //Case Electricité
            if (debug == 1) {
                console.log("Electricty Case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case29.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case29.couleur;
            if (case29.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case29.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case29.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case30.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case29.prix;
                        case29.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case29.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case29.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case29.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case29.auteur;
                        setPlayerMoney(case29.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case29.prix + "€";
                        joueur1.argent = joueur1.argent - case29.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case29.auteur + "a maintenant " + getPlayerMoney(case29.auteur) + "€";
                    }
                };

            }
            break;

        case 30: //Case 5G3
            if (debug == 1) {
                console.log("5G3 Case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case30.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case30.couleur;
            if (case30.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case30.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case30.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case30.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case30.prix;
                        case30.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case30.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case30.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case30.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case30.auteur;
                        setPlayerMoney(case30.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case30.prix + "€";
                        joueur1.argent = joueur1.argent - case30.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case30.auteur + "a maintenant " + getPlayerMoney(case30.auteur) + "€";
                    }
                };

            }
            break;

        case 31: //Case Aller en prison
            if (debug == 1) {
                console.log("GoPrison Case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case31.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case31.couleur;
            boardSansMaison.innerHTML = "Vous allez directement en prison";
            boardUneMaison.innerHTML = "Votre tour est terminé";
            joueur1.statusPrison = 1;
            joueur1.noCase = 11;
            gestionPions();
            break;

        case 32: //Case 6G1
            if (debug == 1) {
                console.log("6G1 Case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case32.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case32.couleur;
            if (case32.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case32.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case32.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case32.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case32.prix;
                        case32.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case32.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case32.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case32.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case32.auteur;
                        setPlayerMoney(case32.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case32.prix + "€";
                        joueur1.argent = joueur1.argent - case32.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case32.auteur + "a maintenant " + getPlayerMoney(case32.auteur) + "€";
                    }
                };

            }
            break;

        case 33: //Case chance
            if (debug == 1) {
                console.log("Chance case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case33.nomCase;
            titre.style.display = "block";
            boardSansMaison.innerHTML = "Cliquez sur le bouton";
            boardSansMaison.style.display = "block";
            boardUneMaison.innerHTML = "Pour tirer une carte";
            boardUneMaison.style.display = "block";
            shopButton.innerHTML = "Tirer une carte";
            document.getElementById('shopButton').onclick = function () {
                document.getElementById('myBtn').style.display = "none";
                updateChanceCard();

            };
            break;

        case 34: //Case 6G2
            if (debug == 1) {
                console.log("6G2 Case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case34.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case34.couleur;
            if (case34.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case34.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case34.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case34.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case34.prix;
                        case34.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case34.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case34.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case34.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case34.auteur;
                        setPlayerMoney(case34.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case34.prix + "€";
                        joueur1.argent = joueur1.argent - case34.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case34.auteur + "a maintenant " + getPlayerMoney(case34.auteur) + "€";
                    }
                };

            }
            break;

        case 35: //Case 6G3
            if (debug == 1) {
                console.log("6G3 Case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case35.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case35.couleur;
            if (case35.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case35.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case35.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case35.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case35.prix;
                        case35.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case35.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case35.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case35.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case35.auteur;
                        setPlayerMoney(case35.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case35.prix + "€";
                        joueur1.argent = joueur1.argent - case35.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case35.auteur + "a maintenant " + getPlayerMoney(case35.auteur) + "€";
                    }
                };

            }
            break;

        case 36: //Case Gare
            if (debug == 1) {
                console.log("Gare Case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case36.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case36.couleur;
            if (case36.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case36.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case36.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case36.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case36.prix;
                        case36.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case36.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case36.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case36.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case36.auteur;
                        setPlayerMoney(case36.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case36.prix + "€";
                        joueur1.argent = joueur1.argent - case36.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case36.auteur + "a maintenant " + getPlayerMoney(case36.auteur) + "€";
                    }
                };

            }
            break;

        case 37: //Case chance
            if (debug == 1) {
                console.log("Chance case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case37.nomCase;
            titre.style.display = "block";
            boardSansMaison.innerHTML = "Cliquez sur le bouton";
            boardSansMaison.style.display = "block";
            boardUneMaison.innerHTML = "Pour tirer une carte";
            boardUneMaison.style.display = "block";
            shopButton.innerHTML = "Tirer une carte";
            document.getElementById('shopButton').onclick = function () {
                document.getElementById('myBtn').style.display = "none";
                updateChanceCard();

            };
            break;

        case 38: //Case 4TTA
            if (debug == 1) {
                console.log("4TTA Case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case38.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case38.couleur;
            if (case38.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case38.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case38.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case38.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case38.prix;
                        case38.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case38.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case38.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case38.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case38.auteur;
                        setPlayerMoney(case38.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case38.prix + "€";
                        joueur1.argent = joueur1.argent - case38.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case38.auteur + "a maintenant " + getPlayerMoney(case38.auteur) + "€";
                    }
                };

            }
            break;

        case 39: //Case taxe
            if (debug == 1) {
                console.log("Taxe case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case39.nomCase;
            titre.style.display = "block";
            boardSansMaison.innerHTML = "Vous devez payer " + case39.prix + "€";
            boardSansMaison.style.display = "block";
            boardUneMaison.innerHTML = "Vous avez encore " + joueur1.argent + "€";
            boardUneMaison.style.display = "block";
            shopButton.innerHTML = "Payer";
            document.getElementById('shopButton').onclick = function () {
                document.getElementById('myBtn').style.display = "none";
                if (joueur1.argent < case39.prix) {
                    boardSansMaison.innerHTML = "";
                    boardUneMaison.innerHTML = "";
                    boardDeuxMaison.innerHTML = "";
                    boardTroisMaison.innerHTML = "";
                    boardQuatreMaison.innerHTML = "";
                    boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                    boardUneMaison.innerHTML = "Vous avez fait faillite.";
                    boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                    boardTroisMaison.innerHTML = "A été donné à la banque";
                    joueur1.argent = 0;
                    boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                } else {
                    boardSansMaison.innerHTML = "";
                    boardUneMaison.innerHTML = "";
                    boardDeuxMaison.innerHTML = "";
                    boardTroisMaison.innerHTML = "";
                    boardQuatreMaison.innerHTML = "";
                    boardSansMaison.innerHTML = "Vous avez payé " + case39.prix + "€";
                    joueur1.argent = joueur1.argent - case39.prix;
                    boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                    boardDeuxMaison.innerHTML = "Merci d'avoir payé";
                }

            };
            break;

        case 40: //Case 4TTB
            if (debug == 1) {
                console.log("4TTA Case selected");
            }
            titre.innerHTML = "";
            boardSansMaison.innerHTML = "";
            boardUneMaison.innerHTML = "";
            boardDeuxMaison.innerHTML = "";
            boardTroisMaison.innerHTML = "";
            boardQuatreMaison.innerHTML = "";
            shopButton.innerHTML = "";
            titre.innerHTML = case40.nomCase;
            titre.style.display = "block";
            titre.style.backgroundColor = case40.couleur;
            if (case40.auteur === 0) {
                boardSansMaison.innerHTML = "Cette classse n'appartient à personne";
                boardSansMaison.style.display = "block";
                if (joueur1.argent < case40.prix) {
                    boardUneMaison.innerHTML = "Vous n'avez pas assez d'argent";
                    boardDeuxMaison.innerHTML = "Il vous manque " + (case40.prix - joueur1.argent) + "€";
                    shopButton.innerHTML = "Continuez sans payer";
                    shopButton.style.display = "block";
                } else {
                    boardUneMaison.innerHTML = "Voulez-vous payer " + case40.prix + "€ ?";
                    boardUneMaison.style.display = "block";
                    boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                    boardDeuxMaison.style.display = "block";
                    shopButton.innerHTML = "Acheter";
                    shopButton.style.display = "block";
                    document.getElementById('shopButton').onclick = function () {
                        joueur1.argent = joueur1.argent - case40.prix;
                        case40.auteur = joueur1.nomJoueur;
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        shopButton.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous êtes maintenant propriétaire";
                        boardUneMaison.innerHTML = "De cette classe";
                    };
                }
            } else {
                boardSansMaison.innerHTML = "Cette classe appartient à " + case40.auteur;
                boardSansMaison.style.display = "block";
                boardUneMaison.innerHTML = "vous devez payer " + case40.prix + "€";
                boardUneMaison.style.display = "block";
                boardDeuxMaison.innerHTML = "Il vous reste " + joueur1.argent + "€ à dépenser";
                boardDeuxMaison.style.display = "block";
                shopButton.innerHTML = "Payer";
                shopButton.style.display = "block";
                document.getElementById('shopButton').onclick = function () {
                    document.getElementById('myBtn').style.display = "none";
                    if (joueur1.argent < case40.prix) {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous n'avez pas assez d'argent!";
                        boardUneMaison.innerHTML = "Vous avez fait faillite.";
                        boardDeuxMaison.innerHTML = "L'argent que vous aviez (" + joueur1.argent + ")";
                        boardTroisMaison.innerHTML = "A été donné à " + case40.auteur;
                        setPlayerMoney(case40.auteur, joueur1.argent);
                        joueur1.argent = 0;
                        boardQuatreMaison.innerHTML = "Merci d'avoir joué";
                    } else {
                        boardSansMaison.innerHTML = "";
                        boardUneMaison.innerHTML = "";
                        boardDeuxMaison.innerHTML = "";
                        boardTroisMaison.innerHTML = "";
                        boardQuatreMaison.innerHTML = "";
                        boardSansMaison.innerHTML = "Vous avez payé " + case40.prix + "€";
                        joueur1.argent = joueur1.argent - case40.prix;
                        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
                        boardDeuxMaison.innerHTML = case40.auteur + "a maintenant " + getPlayerMoney(case40.auteur) + "€";
                    }
                };

            }
            break;

    }
}

//Update Chance card scenario
function updateChanceCard() {
    var rn;

    rn = Math.floor((Math.random() * 40) + 1);
    if (debug == 1) {
        console.log("Generating chance case scenario");
    }
    switch (rn) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
    }

}
//Check if player case location exist
function checkPlayerCases() {
    var titre = document.getElementById("boardTitle");
    var boardSansMaison = document.getElementById("boardSansMaison");
    var boardUneMaison = document.getElementById("boardUneMaison");

    if (debug == 1) {
        console.log("Check if player is still on the board");
    }
    while (joueur1.noCase > 40) {
        joueur1.noCase = joueur1.noCase - 40;
        joueur1.argent = joueur1.argent + 1000;
        titre.innerHTML = "Case Départ";
        titre.style.display = "block";
        boardSansMaison.innerHTML = "Vous avez reçu 2000€";
        boardSansMaison.style.display = "block";
        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur1.argent + "€";
        boardUneMaison.style.display = "block";
        if (debug == 1) {
            console.log("Start case detection");
        }
    }
    while (joueur2.noCase > 40) {
        joueur2.noCase = joueur2.noCase - 40;
        joueur2.argent = joueur2.argent + 1000;
        titre.innerHTML = "Case Départ";
        titre.style.display = "block";
        boardSansMaison.innerHTML = "Vous avez reçu 2000€";
        boardSansMaison.style.display = "block";
        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur2.argent + "€";
        boardUneMaison.style.display = "block";
        if (debug == 1) {
            console.log("Start case detection");
        }
    }
    while (joueur3.noCase > 40) {
        joueur3.noCase = joueur3.noCase - 40;
        joueur3.argent = joueur3.argent + 1000;
        titre.innerHTML = "Case Départ";
        titre.style.display = "block";
        boardSansMaison.innerHTML = "Vous avez reçu 2000€";
        boardSansMaison.style.display = "block";
        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur3.argent + "€";
        boardUneMaison.style.display = "block";
        if (debug == 1) {
            console.log("Start case detection");
        }
    }
    while (joueur4.noCase > 40) {
        joueur4.noCase = joueur4.noCase - 40;
        joueur4.argent = joueur4.argent + 1000;
        titre.innerHTML = "Case Départ";
        titre.style.display = "block";
        boardSansMaison.innerHTML = "Vous avez reçu 2000€";
        boardSansMaison.style.display = "block";
        boardUneMaison.innerHTML = "Vous avez maintenant " + joueur4.argent + "€";
        boardUneMaison.style.display = "block";
        if (debug == 1) {
            console.log("Start case detection");
        }
    }
}


//Generate random numbers
function randomNumberGenerator() {

    if (debug == 1) {
        console.log("Generate random numbers for dies");
    }

    des1 = Math.floor((Math.random() * 6) + 1);
    des2 = Math.floor((Math.random() * 6) + 1);
    totalDies = des1 + des2;

    if (des1 == des2) {
        if (debug == 1) {
            console.log("Detected twice dies");
        }
    }
    if (debug == 1) {
        console.log("Updating dies images");
    }
    switch (des1) {
        case 1:
            document.getElementById("imageDes1").src = "images/des1.jpg";
            break;

        case 2:
            document.getElementById("imageDes1").src = "images/des2.jpg";
            break;

        case 3:
            document.getElementById("imageDes1").src = "images/des3.jpg";
            break;

        case 4:
            document.getElementById("imageDes1").src = "images/des4.jpg";
            break;

        case 5:
            document.getElementById("imageDes1").src = "images/des5.jpg";
            break;

        case 6:
            document.getElementById("imageDes1").src = "images/des6.jpg";
            break;
    }
    switch (des2) {
        case 1:
            document.getElementById("imageDes2").src = "images/des1.jpg";
            break;

        case 2:
            document.getElementById("imageDes2").src = "images/des2.jpg";
            break;

        case 3:
            document.getElementById("imageDes2").src = "images/des3.jpg";
            break;

        case 4:
            document.getElementById("imageDes2").src = "images/des4.jpg";
            break;

        case 5:
            document.getElementById("imageDes2").src = "images/des5.jpg";
            break;

        case 6:
            document.getElementById("imageDes2").src = "images/des6.jpg";
            break;
    }
}

var debug = 0;

function toggleDebug() {
    if (debug == 0) {
        debug = 1;
        console.log("Debug enabled");
    } else {
        debug = 0;
        console.log("Debug disabled");
    }
}

function gestionPions() {

    if (debug == 1) {
        console.log("Updating playerIcons");
    }

    switch (playingPlayer) {
        case 1:
            var selectedId = "rouge" + joueur1.noCase;
            var e = document.getElementById(selectedId);
            document.getElementById("rouge1").style.display = "none";
            document.getElementById("rouge2").style.display = "none";
            document.getElementById("rouge3").style.display = "none";
            document.getElementById("rouge4").style.display = "none";
            document.getElementById("rouge5").style.display = "none";
            document.getElementById("rouge6").style.display = "none";
            document.getElementById("rouge7").style.display = "none";
            document.getElementById("rouge8").style.display = "none";
            document.getElementById("rouge9").style.display = "none";
            document.getElementById("rouge10").style.display = "none";
            document.getElementById("rouge11").style.display = "none";
            document.getElementById("rouge12").style.display = "none";
            document.getElementById("rouge13").style.display = "none";
            document.getElementById("rouge14").style.display = "none";
            document.getElementById("rouge15").style.display = "none";
            document.getElementById("rouge16").style.display = "none";
            document.getElementById("rouge17").style.display = "none";
            document.getElementById("rouge18").style.display = "none";
            document.getElementById("rouge19").style.display = "none";
            document.getElementById("rouge20").style.display = "none";
            document.getElementById("rouge21").style.display = "none";
            document.getElementById("rouge22").style.display = "none";
            document.getElementById("rouge23").style.display = "none";
            document.getElementById("rouge24").style.display = "none";
            document.getElementById("rouge25").style.display = "none";
            document.getElementById("rouge26").style.display = "none";
            document.getElementById("rouge27").style.display = "none";
            document.getElementById("rouge28").style.display = "none";
            document.getElementById("rouge29").style.display = "none";
            document.getElementById("rouge30").style.display = "none";
            document.getElementById("rouge31").style.display = "none";
            document.getElementById("rouge32").style.display = "none";
            document.getElementById("rouge33").style.display = "none";
            document.getElementById("rouge34").style.display = "none";
            document.getElementById("rouge35").style.display = "none";
            document.getElementById("rouge36").style.display = "none";
            document.getElementById("rouge37").style.display = "none";
            document.getElementById("rouge38").style.display = "none";
            document.getElementById("rouge39").style.display = "none";
            document.getElementById("rouge40").style.display = "none";
            e.style.display = "block";
            break;
        case 2:
            var selectedId = "bleu" + joueur2.noCase;
            var e = document.getElementById(selectedId);
            document.getElementById("bleu1").style.display = "none";
            document.getElementById("bleu2").style.display = "none";
            document.getElementById("bleu3").style.display = "none";
            document.getElementById("bleu4").style.display = "none";
            document.getElementById("bleu5").style.display = "none";
            document.getElementById("bleu6").style.display = "none";
            document.getElementById("bleu7").style.display = "none";
            document.getElementById("bleu8").style.display = "none";
            document.getElementById("bleu9").style.display = "none";
            document.getElementById("bleu10").style.display = "none";
            document.getElementById("bleu11").style.display = "none";
            document.getElementById("bleu12").style.display = "none";
            document.getElementById("bleu13").style.display = "none";
            document.getElementById("bleu14").style.display = "none";
            document.getElementById("bleu15").style.display = "none";
            document.getElementById("bleu16").style.display = "none";
            document.getElementById("bleu17").style.display = "none";
            document.getElementById("bleu18").style.display = "none";
            document.getElementById("bleu19").style.display = "none";
            document.getElementById("bleu20").style.display = "none";
            document.getElementById("bleu21").style.display = "none";
            document.getElementById("bleu22").style.display = "none";
            document.getElementById("bleu23").style.display = "none";
            document.getElementById("bleu24").style.display = "none";
            document.getElementById("bleu25").style.display = "none";
            document.getElementById("bleu26").style.display = "none";
            document.getElementById("bleu27").style.display = "none";
            document.getElementById("bleu28").style.display = "none";
            document.getElementById("bleu29").style.display = "none";
            document.getElementById("bleu30").style.display = "none";
            document.getElementById("bleu31").style.display = "none";
            document.getElementById("bleu32").style.display = "none";
            document.getElementById("bleu33").style.display = "none";
            document.getElementById("bleu34").style.display = "none";
            document.getElementById("bleu35").style.display = "none";
            document.getElementById("bleu36").style.display = "none";
            document.getElementById("bleu37").style.display = "none";
            document.getElementById("bleu38").style.display = "none";
            document.getElementById("bleu39").style.display = "none";
            document.getElementById("bleu40").style.display = "none";
            e.style.display = "block";
            break;
        case 3:
            var selectedId = "jaune" + joueur3.noCase;
            var e = document.getElementById(selectedId);
            document.getElementById("jaune1").style.display = "none";
            document.getElementById("jaune2").style.display = "none";
            document.getElementById("jaune3").style.display = "none";
            document.getElementById("jaune4").style.display = "none";
            document.getElementById("jaune5").style.display = "none";
            document.getElementById("jaune6").style.display = "none";
            document.getElementById("jaune7").style.display = "none";
            document.getElementById("jaune8").style.display = "none";
            document.getElementById("jaune9").style.display = "none";
            document.getElementById("jaune10").style.display = "none";
            document.getElementById("jaune11").style.display = "none";
            document.getElementById("jaune12").style.display = "none";
            document.getElementById("jaune13").style.display = "none";
            document.getElementById("jaune14").style.display = "none";
            document.getElementById("jaune15").style.display = "none";
            document.getElementById("jaune16").style.display = "none";
            document.getElementById("jaune17").style.display = "none";
            document.getElementById("jaune18").style.display = "none";
            document.getElementById("jaune19").style.display = "none";
            document.getElementById("jaune20").style.display = "none";
            document.getElementById("jaune21").style.display = "none";
            document.getElementById("jaune22").style.display = "none";
            document.getElementById("jaune23").style.display = "none";
            document.getElementById("jaune24").style.display = "none";
            document.getElementById("jaune25").style.display = "none";
            document.getElementById("jaune26").style.display = "none";
            document.getElementById("jaune27").style.display = "none";
            document.getElementById("jaune28").style.display = "none";
            document.getElementById("jaune29").style.display = "none";
            document.getElementById("jaune30").style.display = "none";
            document.getElementById("jaune31").style.display = "none";
            document.getElementById("jaune32").style.display = "none";
            document.getElementById("jaune33").style.display = "none";
            document.getElementById("jaune34").style.display = "none";
            document.getElementById("jaune35").style.display = "none";
            document.getElementById("jaune36").style.display = "none";
            document.getElementById("jaune37").style.display = "none";
            document.getElementById("jaune38").style.display = "none";
            document.getElementById("jaune39").style.display = "none";
            document.getElementById("jaune40").style.display = "none";
            e.style.display = "block";
            break;
        case 4:
            var selectedId = "vert" + joueur4.noCase;
            var e = document.getElementById(selectedId);
            document.getElementById("vert1").style.display = "none";
            document.getElementById("vert2").style.display = "none";
            document.getElementById("vert3").style.display = "none";
            document.getElementById("vert4").style.display = "none";
            document.getElementById("vert5").style.display = "none";
            document.getElementById("vert6").style.display = "none";
            document.getElementById("vert7").style.display = "none";
            document.getElementById("vert8").style.display = "none";
            document.getElementById("vert9").style.display = "none";
            document.getElementById("vert10").style.display = "none";
            document.getElementById("vert11").style.display = "none";
            document.getElementById("vert12").style.display = "none";
            document.getElementById("vert13").style.display = "none";
            document.getElementById("vert14").style.display = "none";
            document.getElementById("vert15").style.display = "none";
            document.getElementById("vert16").style.display = "none";
            document.getElementById("vert17").style.display = "none";
            document.getElementById("vert18").style.display = "none";
            document.getElementById("vert19").style.display = "none";
            document.getElementById("vert20").style.display = "none";
            document.getElementById("vert21").style.display = "none";
            document.getElementById("vert22").style.display = "none";
            document.getElementById("vert23").style.display = "none";
            document.getElementById("vert24").style.display = "none";
            document.getElementById("vert25").style.display = "none";
            document.getElementById("vert26").style.display = "none";
            document.getElementById("vert27").style.display = "none";
            document.getElementById("vert28").style.display = "none";
            document.getElementById("vert29").style.display = "none";
            document.getElementById("vert30").style.display = "none";
            document.getElementById("vert31").style.display = "none";
            document.getElementById("vert32").style.display = "none";
            document.getElementById("vert33").style.display = "none";
            document.getElementById("vert34").style.display = "none";
            document.getElementById("vert35").style.display = "none";
            document.getElementById("vert36").style.display = "none";
            document.getElementById("vert37").style.display = "none";
            document.getElementById("vert38").style.display = "none";
            document.getElementById("vert39").style.display = "none";
            document.getElementById("vert40").style.display = "none";
            e.style.display = "block";
            break;
    }
}
