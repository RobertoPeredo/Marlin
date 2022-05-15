let datosApi={
  status: true,
  message: "",
  data: [
      {
          id_beach: 1,
          beach_name: "Playa de Tijuana",
          state: "BAJA CALIFORNIA",
          city: "TIJUANA",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 2,
          beach_name: "Playa Coromuel, El tecolote",
          state: "BAJA CALIFORNIA SUR",
          city: "LA PAZ",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 3,
          beach_name: "Playa Manigua, Playa Norte 1",
          state: "CAMPECHE",
          city: "CIUDAD DEL CARMEN",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 4,
          beach_name: "Playa Boca del cielo",
          state: "CHIAPAS",
          city: "TONALÁ",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 5,
          beach_name: "Cuyutlan, El Paraiso",
          state: "COLIMA",
          city: "ARMERÍA",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 6,
          beach_name: "Caleta, La Roqueta",
          state: "GUERRERO",
          city: "ACAPULCO",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 7,
          beach_name: "Playa Yelapa, Playa Quimixto",
          state: "JALISCO",
          city: "PUERTO VALLARTA",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 8,
          beach_name: "Playa Nexpa, Playa Maruata",
          state: "MICHOACAN",
          city: "AQUILA",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 9,
          beach_name: "Playa Nuevo Vallarta 1, Playa Bucerias",
          state: "NAYARIT",
          city: "BAHÍA DE BANDERAS",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 10,
          beach_name: "Playa Maguey, Playa Bahia Santa Cruz",
          state: "OAXACA",
          city: "HUATULCO",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 11,
          beach_name: "Playa Puerto Morelos, Playa Delfines",
          state: "QUINTA ROO",
          city: "CANCÚN",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 12,
          beach_name: "Playa Altada",
          state: "SINALOA",
          city: "BAHÍA DE ALTATA",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 13,
          beach_name: "Playa Bahia de Kino 1 ",
          state: "SONORA",
          city: "BAHÍA DE KINO",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 14,
          beach_name: "Playa Sánchez Magallanes",
          state: "TABASCO",
          city: "CARDENAS",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 15,
          beach_name: "Playa Barra del Tordo",
          state: "TAMAULIPAS",
          city: "ALDAMA",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 16,
          beach_name: "Playa Tecolutla, Playa Noray",
          state: "VERACRUZ",
          city: "MARTÍNEZ DE LA TORRE",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      },
      {
          id_beach: 17,
          beach_name: "Playa Telchac",
          state: "YUCATAN",
          city: "TELCHAC",
          statistics: {
              contamination_level: "Media",
              quality: "Apta",
              year: 2022
          }
      }
  ]
}

mandarform=()=>{
    let form = document.forms["formulario"]
    let name= form.name.value;
    let title= form.title.value;
    let description= form.description.value;
    let state= form.city.value;
    let city= form.city.value;
    let contaminationLevel= Number(form.levelContamination.value);
    let beachName= form.beachName.value;
   
    
    
    var formData = new FormData();
    formData.append('imgFile',document.getElementById("imgFile").files[0]); 

    

   
   
    myHeaders = new Headers();
    myHeaders.append("x-api-key", "rG1sPJtX3]0BUzV)-p@h]9Xp");
  

       var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow'
    };
    fetch("https://marlin-web-api.azurewebsites.net/api/img", requestOptions)
      .then(response => response.text())
      .then(result => {console.log(result)
        var myobj = JSON.parse(result);
        console.log(myobj.data);
        let fileName=JSON.stringify(myobj.data);
        
      
        var myHeaders1 = new Headers();
      myHeaders1.append("x-api-key", "rG1sPJtX3]0BUzV)-p@h]9Xp");
    myHeaders1.append("Content-Type", "application/json");

                var data = JSON.stringify({name,title,description,state,city,beachName,contaminationLevel,fileName})
        console.log(data);
        
        var requestOptions2 = {
          method: 'POST',
          headers: myHeaders1,
          body: data,
          redirect: 'follow'
        };
        
        fetch("https://marlin-web-api.azurewebsites.net/api/post", requestOptions2)
      .then(response => response.text())
      .then(result => {console.log(result)})
      .catch(error => console.log('error', error));
         
      })
      .catch(error => console.log('error', error));
      
      
  

}





async function postData(url = '', data = {}) {
    // Opciones por defecto estan marcadas con un *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-api-key': 'rG1sPJtX3]0BUzV)-p@h]9Xp'
        
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body:JSON.stringify(name,title,description,state,city,beachName,contaminationLevel,fileName) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


// let fecthData=()=>{
//     let utl=`http://aquivaellinkdelaapi.com/${estado}`;
//     fetch(url).then((res)=>{

//         if(res.status != "200"){
//             console.log(res);
//         }
//         else{
//             return res.json();
//         }
//     }).then ((data)=>{
//         console.log(data);

//         //asigno de mi api a variables locales:
//         let nombrePlaya=data.playa;
//         let municipio=data.municipio;
//         let nivel=data.nivel;
//         let estado=dato.estado;


//         //Hago los cambios en html
//         _setnombrePlaya(nombrePlaya);
//         _setMunicipio(municipio);
//         _setNivel(nivel);
//         _setEstado(estado);



//     })
// }




 getNombre=(b)=>{     
    
    switch( b.id ){
                    //1
                    case "MEX2706":       
                     nombre="Baja California"; 
                     id=1;
                     guardar_localstorage(nombre,id); 
                     document.location.href="./info.html";
                    break;

                    //2
                    case "MEX2707":          
                    nombre="Baja california Sur"; 
                    id=2;
                     guardar_localstorage(nombre,id);                       
                     document.location.href="./info.html";                                      
                    break;

                    //3
                    case "MEX2711":          
                    nombre="Sinaloa"; 
                    id=12;
                    guardar_localstorage(nombre,id); 
                     document.location.href="./info.html";                                      
                    break;

                    //4
                    case "MEX2712":          
                    nombre="Sonora"; 
                    id=13;
                    guardar_localstorage(nombre,id);  
                     document.location.href="./info.html";                                      
                    break;

                    //5
                    case "MEX2716":          
                    nombre="Tamaulipas"; 
                    id=15;
                    guardar_localstorage(nombre,id);  
                     document.location.href="./info.html";                                      
                    break;

                    //6
                    case "MEX2718":          
                    nombre="Colima"; 
                    id=5;
                    guardar_localstorage(nombre,id);  
                     document.location.href="./info.html";                                      
                    break;

                    //7
                    case "MEX2719":          
                    nombre="Jalisco"; 
                    id=7;
                    guardar_localstorage(nombre,id); 
                     document.location.href="./info.html";                                      
                    break;

                    //8
                    case "MEX2720":          
                    nombre="Michoacán"; 
                    id=8;
                    guardar_localstorage(nombre,id);  
                     document.location.href="./info.html";                                      
                    break;

                    //9
                    case "MEX2721":          
                    nombre="Nayarit"; 
                    id=9;
                    guardar_localstorage(nombre,id);  
                     document.location.href="./info.html";                                      
                    break;

                    //10
                    case "MEX2722":          
                    nombre="Campeche"; 
                    id=3;
                    guardar_localstorage(nombre,id); 
                     document.location.href="./info.html";                                      
                    break;

                    //11
                    case "MEX2723":          
                    nombre="Oaxaca"; 
                    id=10;
                    guardar_localstorage(nombre,id); 
                     document.location.href="./info.html";                                      
                    break;

                    //12
                    case "MEX2725":          
                    nombre="Tabasco"; 
                    id=14;
                    guardar_localstorage(nombre,id);  
                     document.location.href="./info.html";                                      
                    break;

                    //13
                    case "MEX2729":          
                    nombre="Guerrero"; 
                    id=6;
                    guardar_localstorage(nombre,id);   
                     document.location.href="./info.html";                                      
                    break;

                    //14
                    case "MEX2734":          
                    nombre="Veracruz"; 
                    id=16;
                    guardar_localstorage(nombre,id);  
                     document.location.href="./info.html";                                      
                    break;

                    //15
                    case "MEX2735":          
                    nombre="Chiapas"; 
                    id=4;
                    guardar_localstorage(nombre,id);  
                     document.location.href="./info.html";                                      
                    break;

                    //16
                    case "MEX2736":          
                    nombre="Quintana Roo"; 
                    id=11;
                    guardar_localstorage(nombre,id);  
                     document.location.href="./info.html";                                      
                    break;

                    //17
                    case "MEX2737":          
                    nombre="Yucatán"; 
                    id=17;
                    guardar_localstorage(nombre,id);  
                     document.location.href="./info.html";                                      
                    break;




        
     }

}

function guardar_localstorage(nombre,id){
    localStorage.setItem("nombre",nombre)
    localStorage.setItem("id",id)
    

 }

 function escribir_nombre(){
    const state=document.getElementById("estado");
    estado= localStorage.getItem("nombre");
    i=localStorage.getItem("id");
    state.innerHTML= estado;
    console.log(datosApi.data[i-1].beach_name);
    _setnombrePlaya(datosApi.data[i-1].beach_name);
_setMunicipio(datosApi.data[i-1].city)
_setNivel(datosApi.data[i-1].statistics.contamination_level)
_setStatus(datosApi.data[i-1].statistics.quality);


 }

 const _setnombrePlaya=(a)=>{
    const playa1=document.getElementById("playa1");// para  cambiar html
    playa1.innerHTML=a ;
}
const _setMunicipio=(a)=>{
    const municipio1=document.getElementById("municipio1");//para  cambiar html
    municipio1.innerHTML=a ;
}
const _setNivel=(a)=>{
    const nivel1=document.getElementById("nivel1");// para  cambiar html
    nivel1.innerHTML=a ;
}
 const _setStatus=(a)=>{
    const status1=document.getElementById("status1");// para  cambiar html
    status1.innerHTML=a ;
}
