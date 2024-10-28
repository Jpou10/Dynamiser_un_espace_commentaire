// recupération du formulaire 
let form = document.querySelector("form"); 

//Gestion d'erreur
try {

    // ajout d'un event 
    form.addEventListener("submit", (e)=>{

        // annuler le rechargement de la page
        e.preventDefault();

        // recuperer les champs saisie 
        let firstName = document.querySelector("#first-name").value;
        let lastName = document.querySelector("#last-name").value; 
        let messageContent = document.querySelector("#message").value;

        // verification des champs "vide" (et sans espace)
        if(firstName.trim() == "" || lastName.trim() == "" || messageContent.trim() == "" ){

        // Si au moins un des champs ci-dessus est vide  => afficher le message d'erreur 
        let errorMessage = document.querySelector("#error-message"); 
        errorMessage.style.display = "block";
        }
        else{
        // Sinon pour respecter la présentation des commentaires précédents :

        //Création d'une balise div avec class="flex space-x-4 text-sm text-gray-500"
        let lineSpacing = document.createElement("div");
        lineSpacing.setAttribute("class","flex space-x-4 text-sm text-gray-500");
    
        //Création d'une seconde balise div avec class="flex-1 py-10 border-t border-gray-200"
        let border = document.createElement("div");
        border.setAttribute("class","flex-1 py-10 border-t border-gray-200");

        //Ajout du Prénom et du nom du rédacteur du commentaire
        let auteur = document.createElement("h3");
        
        //Afin de respecter les initiales des NOM et Prénom en majuscule
        //Foçage de la totalité des chaines NOM et Prénom en minuscule
        firstName = firstName.toLowerCase();
        lastName = lastName.toLowerCase();
        //Puis la 1ère lettre est mise en majuscule
        firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
        let auteurTexte = document.createTextNode(firstName + " " + lastName);
        
        //Ajout de la classe "font-medium text-gray-900" à la balise H3
        auteur.setAttribute("class","font-medium text-gray-900");
        
        //Ajout du conteu texte à la balise H3
        auteur.appendChild(auteurTexte);

        //Ajout d'une div avec la class="prose prose-sm mt-4 max-w-none text-gray-500"
        let prose = document.createElement("div");
        prose.setAttribute("class","prose prose-sm mt-4 max-w-none text-gray-500");

        //Ajout du commentaire sous la forme d'un paragraphe
        let comment = document.createElement("p");
        
        ///Ajout du texte dans le paragraphe
        let commentTexte = document.createTextNode(messageContent);
                
        let commentList = document.querySelector("#comment-list");
        comment.appendChild(commentTexte);
        prose.appendChild(comment);
        auteur.appendChild(prose);
        border.appendChild(auteur);
        lineSpacing.appendChild(border);
        commentList.appendChild(lineSpacing);

        //Le message d'erreur est masqué
        let errorMessage = document.querySelector("#error-message");
        errorMessage.style.display = "none";

        //Le formulaire est réinitialisé
        form.reset
        }
    })
}
catch(err) {
    document.getElementById("comment-list").innerHTML = err.message;
}