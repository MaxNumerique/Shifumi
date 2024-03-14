// ====================================================================
// ====================================================================

const main = document.querySelector('main');
const jeuContainer = document.querySelector(".jeuContainer");
const resultatSection = document.querySelector('.résultat');
const résultatDiv = document.querySelector('.resultat');
const résultatText = document.querySelector('.resultatText');
const feuilleIMG = document.querySelector('.feuilleIMG');
const pierreIMG = document.querySelector('.pierreIMG');
const ciseauIMG = document.querySelector('.ciseauIMG');
const resultatIMG = document.querySelector('.resultatIMG');
function startGame() {
    jeuContainer.style.display = 'none';
    document.querySelector(".shifumiPlateau").style.display = 'block';
    main.style.height = '100vh';
    main.style.width = '100vw';
    main.style.backgroundColor = 'rgb(29, 29, 29)';
    main.style.borderRadius = '0px';
}


function choixOrdi() {
    const choix = ['pierre', 'feuille', 'ciseau'];
    const choixChoisiOrdi = choix[Math.floor(choix.length * Math.random())];
    return choixChoisiOrdi;
}
// console.log(choixOrdi());



function joueurJoue(choixJoueur) {
    résultatDiv.style.display = 'block';
    const choixChoisiOrdi = choixOrdi();
    console.log("ordi joue :" + choixChoisiOrdi);
    console.log("vous jouez :" + choixJoueur);
    if (choixChoisiOrdi == choixJoueur) {
        resultatIMG.textContent = 
        résultatText.textContent = `L'ordi a joué ${choixChoisiOrdi}, il y a donc Egalité`;
        // résultatText.innerHTML
    } else if (choixChoisiOrdi === 'ciseau' && choixJoueur === 'pierre' || choixChoisiOrdi === 'pierre' && choixJoueur === 'feuille' || choixChoisiOrdi === 'feuille' && choixJoueur === 'ciseau') {
        // console.log('vous gagnez');
        résultatText.textContent = `L'ordi a joué ${choixChoisiOrdi}, vous avez Gagné !`
    } else {
        // console.log('vous perdez');
        résultatText.textContent = `L'ordi a joué ${choixChoisiOrdi}, vous avez perdu !`
    }
}


function IMGenfonctionClick() {
    
}