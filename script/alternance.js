// On affiche les villes dans un <select>
const xhr = new XMLHttpRequest();
    xhr.open("get", "https://labonnealternance.apprentissage.beta.gouv.fr/api/V1/jobs?romes=M1802%2CM1803%2CM1805%2CM1806&sources=offres&caller=contact%40domaine%20nom_de_societe");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const reponse = JSON.parse(xhr.responseText);
            // on stock les villes sans doublons dans un dictionnaire
            dictOffres = {} 
            for (const offre of reponse.peJobs.results) {
                dictOffres[offre.place.insee] = {"city":offre.place.city, "place":{"lat":offre.place.latitude, "long":offre.place.longitude}}
            }
            // stockage des villes dans un <select>
            document.querySelector("select").innerHTML = document.querySelector("select").innerHTML+afficherLesVilles(dictOffres);   
        };
    }
xhr.send();


// on definit un comportement lorsqu'on appui sur "rechercher" : affiche les offres en fonction de la ville
document.querySelector("form").addEventListener('submit', function (e) {
    e.preventDefault();
    // on définit le lien à utiliser en fonction du code INSEE sélectionné
    const codeInsee = document.querySelector("select").selectedOptions[0].value;
    if (codeInsee == "default") {
        lien = "https://labonnealternance.apprentissage.beta.gouv.fr/api/V1/jobs?romes=M1802%2CM1803%2CM1805%2CM1806&sources=offres&caller=contact%40domaine%20nom_de_societe"
    } else {
        lien = "https://labonnealternance.apprentissage.beta.gouv.fr/api/V1/jobs?romes=M1802%2CM1803%2CM1805%2CM1806&latitude="+dictOffres[codeInsee].place.lat+"&longitude="+dictOffres[codeInsee].place.long+"&radius=1&insee="+codeInsee+"&sources=&caller=contact%40domaine%20nom_de_societe"
    }
    const xhr = new XMLHttpRequest();
    xhr.open("get", lien);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const reponse = JSON.parse(xhr.responseText);
            const offres = reponse.peJobs.results;
            // affichage du nombre d'offres trouvés
            if (codeInsee == "default") {
                document.querySelector("h1").innerHTML = offres.length + " résultat(s) - FRANCE";
            } else {
                document.querySelector("h1").innerHTML = offres.length + " résultat(s) - " + dictOffres[codeInsee].city;
            }        
            // affichage des offres 
            document.querySelector("section").innerHTML = afficherLesOffres(offres); 
        };
    }
xhr.send();
})


// Pour afficher toutes les offres 
function afficherLesOffres(offres) {
    let codeHTML = "";
    for (const offre of offres) {
        codeHTML += "<article id=\""+offre.job.id+"\">";
        codeHTML += "<h2><a href="+offre.url+">"+offre.title+"</a></h2>";
        if (offre.company.name === undefined) {
            codeHTML += "<h3>"+offre.place.city+"</h3>";
        } else {
            codeHTML += "<h3>"+offre.company.name+offre.place.city+"</h3>";
        }
        codeHTML += "<p class=\"description\">"+offre.job.description+"</p>";
        codeHTML += "<p class=\"typeContrat\">"+offre.job.contractType+" "+offre.job.contractDescription+"</p> ";  
        codeHTML += "<p class=\"datePubli\"> Publié le "+offre.job.creationDate.substring(0, 10)+"</p> ";
        codeHTML += "</article>";
    }
    return codeHTML;
}



// pour afficher toutes les villes 
function afficherLesVilles(offres) {
    let codeHTMl;
    for (const offre in offres) {
        codeHTMl += "<option value=\""+offre+"\">"+offres[offre].city+"</option>";
    }
    return codeHTMl;
}






