document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    const libelle = document.getElementById('libelle').value;
    const categorie = document.getElementById('categorie').value;
    const description = document.getElementById('description').value;
    const errorMessage = document.getElementById('error-message');
    const form = document.getElementById('form');

    // Vérifiez si les champs sont vides
    if (libelle === '' || categorie === '' || description === '') {
        errorMessage.style.display = 'block'; // Affiche le message d'erreur
        form.style.display = 'none'; // Masque le formulaire
    
        // Masque le message d'erreur et réaffiche le formulaire après 3 secondes
        setTimeout(function() {
            errorMessage.style.display = 'none';
            form.style.display = 'block';
        }, 2000);
    } else {
        // Vous pouvez soumettre le formulaire ou faire d'autres actions ici
        alert('Formulaire soumis avec succès');
    }
});

  // Fonctionnalités ajouter et afficher les idées

   const idees = [
    {id : 1, libelle : "Mon nom", categorie : "Sport", status : "approuvee" , description : "Ma description"}
    
  ];

  function getAllIdees() {

    idees.forEach(element => {
      document.querySelector("tbody").innerHTML =
          
        `
            <tr>
                <th scope="row">${element.id}</th>
                <td>${element.libelle}</td>
                <td>${element.categorie}</td>
                <td>${element.description}</td>
                 <td>Approuvee</td>
                <td>
                    <button class="btn btn-primary">Approuvée</button>
                    <button class="btn btn-danger">Désapprouvée</button>
                </td>
            </tr>
        `;
    })
  }

  getAllIdees();

  // Permet d'ajouter une idee
  function addIdee() {
    // Objet user vide
    newIdee = { id: 0, libelle: "", categorie: "", description: "" };

    //Calcul de l'id

    id = idees[idees.length -1].id+1;

    //Recuperation des données saisies

    libelle = document.getElementById("libelle").value;
    categorie = document.getElementById("categorie").value;
    description = document.getElementById("description").value;

    console.log(libelle);
    console.log(categorie);
    console.log(description);

    // Maj de l'objet newIdee

    newIdee.id = id;
    newIdee.libelle = libelle;
    newIdee.categorie = categorie;
    newIdee.description = description;

    // Ajout de l'utilisateur
    const indexIdee = idees.findIndex(idee => idee.libelle === newIdee.libelle);

    if (indexIdee != -1) {
      showMessage()
      
    }

    idees.push(newIdee);
    document.querySelector("tbody").innerHTML = "";
    getAllIdees();

  }







