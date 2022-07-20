// Pour affecter un comportement sur les listes
document.querySelector("#li2018").addEventListener('click', initBt2018, false);
document.querySelector("#li2019").addEventListener('click', initBt2019, false);
document.querySelector("#li2020").addEventListener('click', initBt2020, false);

// Pour récupérer les données de 2018
function initBt2018() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-principaux-diplomes-et-formations-prepares-etablissements-publics&q=miashs&sort=effectif_total&facet=annee_universitaire&facet=etablissement_type&facet=etablissement_typologie&facet=etablissement_id_paysage&facet=etablissement_lib&facet=etablissement_compos_id_paysage&facet=etablissement_compos_lib&facet=form_ens_id_paysage&facet=form_ens_lib&facet=etablissement_id_wikidata&facet=etablissement_id_ror&facet=etablissement_id_uai&facet=dn_de_lib&facet=cursus_lmd_lib&facet=diplome_rgp&facet=diplome_lib&facet=typ_diplome_lib&facet=diplom&facet=niveau_lib&facet=disciplines_selection&facet=gd_disciscipline_lib&facet=discipline_lib&facet=sect_disciplinaire_lib&facet=spec_dut_lib&facet=etablissement_code_commune&facet=etablissement_commune&facet=etablissement_id_uucr&facet=etablissement_uucr&facet=etablissement_id_departement&facet=etablissement_departement&facet=etablissement_id_academie&facet=etablissement_academie&facet=etablissement_id_region&facet=etablissement_region&facet=implantation_code_commune&facet=implantation_commune&facet=implantation_id_uucr&facet=implantation_uucr&facet=implantation_id_departement&facet=implantation_departement&facet=implantation_id_academie&facet=implantation_academie&facet=implantation_id_region&facet=implantation_region&facet=etablissement_id_uai_source&facet=etablissement_id_paysage_actuel&facet=etablissement_actuel_lib&refine.annee_universitaire=2018-19&refine.niveau_lib=1ère+année");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const reponse = JSON.parse(xhr.responseText);

            // On stock les villes dans un tableau
            const dataVilles = [];
            for (const ville of reponse.records) {
                dataVilles.push(ville.fields.effectif_total);
            }

            // libellés des villes
            const villes = [
                'Grenoble',
                'Toulouse',
                'Lille',
                'Paris8',
                'Montpellier', 
                'Angers',
                'ParisVersailles'
            ]
            
            // les données
            const data = {
                labels: villes,
                datasets: [{
                    label: 'Effectif des MIASHS en 2018', 
                    backgroundColor: 'rgb(255, 99, 132)', 
                    borderColor: 'rgb(255, 99, 132)', 
                    data: dataVilles,
                }] 
            };
            
            // Config pour afficher le graphe
            const config = { 
                type: 'bar',
                data: data,
                options: {}
            };
            
            // affichage du graphe
            const miashs2018 = new Chart( 
                document.querySelector('#canvas1'), 
                config
            );
            
        };
    }
    xhr.send();
}

// Pour récupérer les données de 2019
function initBt2019() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-principaux-diplomes-et-formations-prepares-etablissements-publics&q=MIASHS&sort=effectif_total&facet=annee_universitaire&facet=etablissement_type&facet=etablissement_typologie&facet=etablissement_id_paysage&facet=etablissement_lib&facet=etablissement_compos_id_paysage&facet=etablissement_compos_lib&facet=form_ens_id_paysage&facet=form_ens_lib&facet=etablissement_id_wikidata&facet=etablissement_id_ror&facet=etablissement_id_uai&facet=dn_de_lib&facet=cursus_lmd_lib&facet=diplome_rgp&facet=diplome_lib&facet=typ_diplome_lib&facet=diplom&facet=niveau_lib&facet=disciplines_selection&facet=gd_disciscipline_lib&facet=discipline_lib&facet=sect_disciplinaire_lib&facet=spec_dut_lib&facet=etablissement_code_commune&facet=etablissement_commune&facet=etablissement_id_uucr&facet=etablissement_uucr&facet=etablissement_id_departement&facet=etablissement_departement&facet=etablissement_id_academie&facet=etablissement_academie&facet=etablissement_id_region&facet=etablissement_region&facet=implantation_code_commune&facet=implantation_commune&facet=implantation_id_uucr&facet=implantation_uucr&facet=implantation_id_departement&facet=implantation_departement&facet=implantation_id_academie&facet=implantation_academie&facet=implantation_id_region&facet=implantation_region&facet=etablissement_id_uai_source&facet=etablissement_id_paysage_actuel&facet=etablissement_actuel_lib&refine.annee_universitaire=2019-20");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const reponse = JSON.parse(xhr.responseText);

            const dataVilles = [];
            for (const ville of reponse.records) {
                dataVilles.push(ville.fields.effectif_total);
            }

            const villes = [
                'Grenoble',
                'Toulouse',
                'Lille',
                'Paris8',
                'Montpellier', 
                'Angers',
                'ParisVersailles'
            ]
            
            const data = {
                labels: villes,
                datasets: [{
                    label: 'Effectif des MIASHS en 2019', 
                    backgroundColor: 'rgb(255, 99, 132)', 
                    borderColor: 'rgb(255, 99, 132)', 
                    data: dataVilles,
                }] 
            };
            
            const config = { 
                type: 'bar',
                data: data,
                options: {}
            };
            
            const miashs2019 = new Chart( 
                document.querySelector('#canvas2'), 
                config
            );
            
        };
    }
    xhr.send();
}

// Pour récupérer les données de 2020
function initBt2020() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-principaux-diplomes-et-formations-prepares-etablissements-publics&q=MIASHS&sort=effectif_total&facet=annee_universitaire&facet=etablissement_type&facet=etablissement_typologie&facet=etablissement_id_paysage&facet=etablissement_lib&facet=etablissement_compos_id_paysage&facet=etablissement_compos_lib&facet=form_ens_id_paysage&facet=form_ens_lib&facet=etablissement_id_wikidata&facet=etablissement_id_ror&facet=etablissement_id_uai&facet=dn_de_lib&facet=cursus_lmd_lib&facet=diplome_rgp&facet=diplome_lib&facet=typ_diplome_lib&facet=diplom&facet=niveau_lib&facet=disciplines_selection&facet=gd_disciscipline_lib&facet=discipline_lib&facet=sect_disciplinaire_lib&facet=spec_dut_lib&facet=etablissement_code_commune&facet=etablissement_commune&facet=etablissement_id_uucr&facet=etablissement_uucr&facet=etablissement_id_departement&facet=etablissement_departement&facet=etablissement_id_academie&facet=etablissement_academie&facet=etablissement_id_region&facet=etablissement_region&facet=implantation_code_commune&facet=implantation_commune&facet=implantation_id_uucr&facet=implantation_uucr&facet=implantation_id_departement&facet=implantation_departement&facet=implantation_id_academie&facet=implantation_academie&facet=implantation_id_region&facet=implantation_region&facet=etablissement_id_uai_source&facet=etablissement_id_paysage_actuel&facet=etablissement_actuel_lib&refine.annee_universitaire=2020-21");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const reponse = JSON.parse(xhr.responseText);

            const dataVilles = [];
            for (const ville of reponse.records) {
                dataVilles.push(ville.fields.effectif_total);
            }

            const villes = [
                'Grenoble',
                'Toulouse',
                'Lille',
                'Paris8',
                'Montpellier', 
                'Angers',
                'ParisVersailles'
            ]
            
            const data = {
                labels: villes,
                datasets: [{
                    label: 'Effectif des MIASHS en 2020', 
                    backgroundColor: 'rgb(255, 99, 132)', 
                    borderColor: 'rgb(255, 99, 132)', 
                    data: dataVilles,
                }] 
            };
            
            const config = { 
                type: 'bar',
                data: data,
                options: {}
            };
            
            const miashs2020 = new Chart( 
                document.querySelector('#canvas3'), 
                config
            );
            
        };
    }
    xhr.send();
}





