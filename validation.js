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
        }, 3000);
    } else {
        // Vous pouvez soumettre le formulaire ou faire d'autres actions ici
        alert('Formulaire soumis avec succès');
    }
});




