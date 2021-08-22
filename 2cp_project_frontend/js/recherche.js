    var demandeurs =[
  {
    "Etat_Civil": {
      "matricule": "12",
      "Numerodossier": "1",
      "nom": "lud",
      "prenom": "bila",
      "dateNaissance": "2002-12-13",
      "communeNaissance": "",
      "wilaya": "01. Adrar",
      "choixSexe": "Homme",
      "Adresse": "",
      "NumeroTel": "",
      "email": "jl_amriou@esi.dz",
      "codePostal": "",
      "prenomPere": "",
      "nomMere": "",
      "prenomMere": "",
      "situation": "Celibataire",
      "nbEnfants": ""
    },
    "Experience_Professionnellle": {
      "ecole": "",
      "DireSer": "",
      "Grade": "",
      "dateDins": "",
      "dateFins": "",
      "dateDhors": "",
      "dateFhors": "",
      "res": ""
    },
    "Conjoint": {
      "nom": "",
      "prenom": "",
      "dateNaissance": "",
      "communeNaissance": "",
      "wilaya": "01. Adrar",
      "prenomPere": "",
      "nomMere": "",
      "prenomMere": "",
      "choixMesrs": "Oui"
    },
    "Droits": {
      "moudjahid": "Oui",
      "chahid": "Oui",
      "chahid2": "Oui"
    },
    "Recours": {
      "cause": {},
      "valider_recours": false,
      "date": {}
    },
    "Valider": "en cour",
    "Dossier_Complet": false,
    "nombrepoints":10
  },
  {
    "Etat_Civil": {
      "matricule": "ajout",
      "Numerodossier": "1",
      "nom": "Filali",
      "prenom": "Hasna",
      "dateNaissance": "2021-04-28",
      "communeNaissance": "Algeria",
      "wilaya": "01. Adrar",
      "choixSexe": "Homme",
      "Adresse": "Building number three Zemmouri, Boumerdes",
      "NumeroTel": "076749309",
      "email": "js_filali@esi.dz",
      "codePostal": "1212",
      "prenomPere": "Hasna",
      "nomMere": "salamo",
      "prenomMere": "Farida",
      "situation": "Celibataire",
      "nbEnfants": "7"
    },
    "Experience_Professionnellle": {
      "ecole": "esi",
      "DireSer": "direction",
      "Grade": "ii",
      "dateDins": "2021-04-29",
      "dateFins": "2021-04-27",
      "dateDhors": "2021-05-07",
      "dateFhors": "2021-05-10",
      "res": "walo tani"
    },
    "Conjoint": {
      "nom": "salamo",
      "prenom": "Hasna",
      "dateNaissance": "2021-05-21",
      "communeNaissance": "Algeria",
      "wilaya": "01. Adrar",
      "prenomPere": "Hasna",
      "nomMere": "kk",
      "prenomMere": "halahalal",
      "choixMesrs": "Oui"
    },
    "Droits": {
      "moudjahid": "Oui",
      "chahid": "Oui",
      "chahid2": "Oui"
    },
    "Recours": {
      "cause": {},
      "valider_recours": false,
      "date": {}
    },
    "Valider": "validé",
    "Dossier_Complet": true,
    "nombrepoints":1
  },
  {
    "Etat_Civil": {
      "matricule": "o000o",
      "Numerodossier": "2",
      "nom": "Filali",
      "prenom": "Hasna",
      "dateNaissance": "",
      "communeNaissance": "Algeria",
      "wilaya": "01. Adrar",
      "choixSexe": "Homme",
      "Adresse": "Building number three Zemmouri, Boumerdes",
      "NumeroTel": "076749309",
      "email": "js_filali@esi.dz",
      "codePostal": "1212",
      "prenomPere": "",
      "nomMere": "",
      "prenomMere": "",
      "situation": "Celibataire",
      "nbEnfants": ""
    },
    "Experience_Professionnellle": {
      "ecole": "",
      "DireSer": "",
      "Grade": "",
      "dateDins": "",
      "dateFins": "",
      "dateDhors": "",
      "dateFhors": "",
      "res": ""
    },
    "Conjoint": {
      "nom": "",
      "prenom": "",
      "dateNaissance": "",
      "communeNaissance": "",
      "wilaya": "01. Adrar",
      "prenomPere": "",
      "nomMere": "",
      "prenomMere": "",
      "choixMesrs": "Oui"
    },
    "Droits": {
      "moudjahid": "Oui",
      "chahid": "Oui",
      "chahid2": "Oui"
    },
    "Recours": {
      "cause": {},
      "valider_recours":true,
      "date": {}
    },
    "Valider": "refusé",
    "Dossier_Complet":false,
    "nombrepoints":33
  }
];

buildTable(demandeurs);
function display(){
    var x =document.getElementById('etat').value;
    var tab;
    console.log("x :"+x)
    if(x==="validés")
    {
     buildTable(recherchevalid(demandeurs));
     return recherchevalid(demandeurs);
    }
    else if(x==="recours"){
     buildTable(rechercherecours(demandeurs))
     return rechercherecours(demandeurs);
    }
    else if(x==="Complets"){
     buildTable(recherchecomplet(demandeurs))
     return recherchecomplet(demandeurs);
    }else if(x==="Non validés"){
     buildTable(rechercheNonvalides(demandeurs))
     return rechercheNonvalides(demandeurs);
    }
    else{
        buildTable(demandeurs)
     return demandeurs;
    }
}


$('#search-input').on('keyup',function(){
  var value =$(this).val()
  var data=searchtable(value,display())
  console.log("data"+data)
  buildTable(data);
})
buildTable(demandeurs);
function searchtable(value,data){
    var filtereddata =[]
    for(var i=0;i<data.length;i++)
    {
        value=value.toLowerCase()
        var name = data[i].Etat_Civil.nom.toLowerCase()
        var prenom = data[i].Etat_Civil.prenom.toLowerCase()
        var matricule = data[i].Etat_Civil.matricule.toLowerCase()
        var nometprenom = name+" "+prenom
        var validation=data[i].Valider.toLowerCase()
        if((nometprenom.startsWith(value)) || (prenom.startsWith(value)) || (matricule.startsWith(value)) || (validation.startsWith(value)))
        {
            filtereddata.push(data[i])
          
        }
        
    }
    return filtereddata
}

function buildTable(data){
  var tab= new Array();
    var table = document.getElementById('myTable');
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++){
        if(data[i].Recours.valider_recours===true)
        {
            var recours="Recours"
        }else{
            recours="non recours"
        }
        var row = `<tr>
                        <td>${data[i].Etat_Civil.nom} ${data[i].Etat_Civil.prenom}</td>
                        <td>${data[i].Etat_Civil.matricule}</td>
                        <td>${data[i].Valider}</td>
                        <td>${recours}</td>
                  </tr>`
        table.innerHTML += row
     }
}
function recherchevalid(data)
{
    var tab = new Array();
  for(var i=0;i<data.length;i++)
  {
      if(data[i].Valider==="validé")
      {
          tab.push(data[i])
      }
  }
  return tab;
}   
function rechercherecours(data)
{
    var tab = new Array();
  for(var i=0;i<data.length;i++)
  {
      if(data[i].Recours.valider_recours===true)
      {   

          tab.push(data[i])
      }
  }
  return tab;
}   
function recherchecomplet(data)
{
    var tab = new Array();
  for(var i=0;i<data.length;i++)
  {
      if(data[i].Dossier_Complet===true)
      {   

          tab.push(data[i])
      }
  }
  return tab;
}   
function rechercheNonvalides(data)
{
    var tab = new Array();
  for(var i=0;i<data.length;i++)
  {
      if((data[i].Valider==="en cour") || (data[i].Valider==="refusé"))
      {   
         tab.push(data[i])
      }
  }
  return tab;
}   