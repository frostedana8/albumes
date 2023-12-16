const url = "albumes.json"
getAlbumes()







async function getAlbumes() {
  const response = await fetch(url)
  const json = await response.json()
  const tabla = document.getElementById("myTable")  
  const yokai = document.getElementById("yokai")  

  json.albumes.forEach(album => {
    var row = tabla.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);

    cell1.innerHTML = "<img src=\"imagenesalbumes/"+album.id+".png\" height=\"100px\", width=\"100px\"></img>"
    cell2.innerHTML = "<p><a href=\"#"+album.id+"\">"+album.titulo+"</p>"
    cell3.innerHTML = "<p>"+album.artista+"</p>"
    cell4.innerHTML = "<p>"+album.duracion+" min</p>"
    cell5.innerHTML = "<p>"+album.fechaSalida+"</p>"
    cell6.innerHTML = "<p>"+album.nota+"</p>"
    cell7.innerHTML = "<p>"+album.fechaReview+"</p>"

  
    //append div to yokaidi
    var div = document.createElement("div");
    
    if (album.link != undefined){
        div.innerHTML = " <div id=\""+album.id+"\" class=\"overlay\"><div class=\"popup\"><h2 class=\"nota\">"+album.nota+"/10</h2><h2 style=\"padding-right: 20%;\">"+album.titulo+"</h2> <h6>Por "+album.artista+"</h6> <a class=\"close\" href=\"#\">&times;</a> <div class=\"content\"> <p>"+album.review+"</p> <hr><iframe style=\"border-radius:12px\" src=\"https://open.spotify.com/embed/album/"+album.link+"?utm_source=generator\" width=\"100%\" height=\"1000\" frameBorder=\"0\" allowfullscreen=\"\" allow=\"autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture\" loading=\"lazy\"></iframe> </div></div></div>"
    }
    else if (album.linkNoSpotify != undefined){
        div.innerHTML = "<div id=\""+album.id+"\" class=\"overlay\"><div class=\"popup\"><h2 class=\"nota\">"+album.nota+"/10</h2><h2 style=\"padding-right: 20%;\">"+album.titulo+"</h2> <h6>Por "+album.artista+"</h6> <a class=\"close\" href=\"#\">&times;</a> <div class=\"content\"> <p>"+album.review+"</p> <hr>  <br>  <p>Este álbum no está disponible en Spotify, sin embargo se puede escuchar <a href = \""+album.linkNoSpotify+"\", target= \"_blank\">aquí</p></a> </div></div></div>"
    }
    
    yokai.appendChild(div);
  });


}


/*,

      {
        "titulo": "Hawaii: Part II",
        "id": "hawaiipartii",
        "artista": "Miracle Musical",
        "duracion": "42",
        "fechaSalida": "2012/01/01",
        "nota": "",
        "fechaReview": "2023/05/04",
        "review":"",
        "link":"58dgh1HT2wGkmqI4mQDgoR"
    },
    {
        "titulo": "Pretty Hate Machine",
        "id": "prettyhatemachine",
        "artista": "Nine Inch Nails",
        "duracion": "49",
        "fechaSalida": "1989/10/20",
        "nota": "",
        "fechaReview": "2023/05/18",
        "review":"",
        "link":"3umFHeEpc4yLXtrRcv9gLN"
    },
    {
        "titulo": "Beneath the Toxic Jungle",
        "id": "beneaththetoxicjungle",
        "artista": "Rav",
        "duracion": "32",
        "fechaSalida": "2015/12/19",
        "nota": "",
        "fechaReview": "2023/05/24",
        "review":"",
        "link":"0MuuLEo21DiUh9kKyass4Q"
    },
    {
        "titulo": "8r8k",
        "id": "8r8k",
        "artista": "Agred",
        "duracion": ""46,
        "fechaSalida": "2023/06/30",
        "nota": "",
        "fechaReview": "20023/07/23",
        "review": "",
        "link": "2GqUBuVurGrocVHZbIfNgf"
    },
    {
        "titulo": "Changes",
        "id": "changeskgwl",
        "artista": "King Gizzard & The Lizard Wizard",
        "duracion": "40",
        "fechaSalida": "2022/10/28",
        "nota": "",
        "fechaReview": "2023/07/28",
        "review": "",
        "link": "05ag5ukffFozEnXGOeuTTD"
    },
    {
        "titulo": "Fishing For Fishies",
        "id": "fishingforfishies",
        "artista": "King Gizzard & The Lizard Wizard",
        "duracion": "42",
        "fechaSalida": "2019/04/26",
        "nota": "",
        "fechaReview": "2023/07/29",
        "review": "",
        "link": "5DEL0SSMojInN54XnSWwR1"
    },
    




*/
