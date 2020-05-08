let favorite = [''];



function addFavorite() {
    for (let i = 0; i < favorite.length; i++) {
        if (favorite.length[i] != undefined) {
            console.log(favorite.length[i]);
        } else {
            console.log("Vous n'avez aucune musique dans vos favories");
        }
    }

    localStorage.setItem("musique", favorite)
}

function favoriteDelete() {
    localStorage.removeItem("musique");
}

function randomMusic() {
    if(favorite != undefined){

    }else{
        console.log("Vous n'avez pas de musique favorite");
    }
    localStorage.Mathrandom().getItem("musique")
}