//   Methode POST --> dans une requete HTTP --> avec fetch()

// créer d un objet js pour l utilisateur , on va envoyer un new user dans le serveur

const newUser = {
    name: "kevin",
    website: "https://www.google.com",

};

const promise = fetch("https://jsonplaceholder.typicode.com/users", {
method: "POST",                                                                                     //-> methode POST pr envoyer les infos , les modif au serveur , la const new user
body: JSON.stringify(newUser),              // transforme en fichier Json                                                                //=> permet a l objet de la const new user d etre sous forme string 
headers: {
    "content-Type": "application/json",
},

});

promise.then( async (response) => {                                                                  //-> promise quand valide renvoi .then async donc await 
try{                                                                                                 //-> methode try avec async await if succes et catch if error 
    console.log(response);                                                                           //-> le await response (le params de la fonction asynchrone) 
const renvoiPostDansJson =   await response.json()                                                   //->response.json() pour avoir la reponse sous forme json 
console.log(renvoiPostDansJson);                                                                     //-> nous permet de voir on a bien post la const new user dans ce website
                                                                                                    //-> on peut le voir via la console 
}catch (e) {
console.log(e);
}
})



// Methode GET pour recevoir les infos du serveur avec notre nvlle element envoyer via la methode post juste avant 

const chercheUsersPromise = fetch("https://jsonplaceholder.typicode.com/users");
chercheUsersPromise.then(async (response) => {
try{
    console.log(response);
 const nousRenvoiGet =  await response.json()
 console.log(nousRenvoiGet);
}catch (e) {
    console.log(e);
}
});