

mandarform=()=>{

  let form = document.forms["formulario"]

  
    //valido el nombre
    if (form.name.value.length==0){
         alert("Tiene que escribir su nombre")
         form.name.focus()
         return 0;
    }

    if (form.title.value.length==0){
      alert("Por favor agreque un título")
      form.title.focus()
      return 0;
 }

 if (form.description.value.length==0){
  alert("Por favor agreque una descripción")
  form.description.focus()
  return 0;
}

if (form.beachName.selectedIndex==0){
  alert("Por favor seleccione una playa de la lista")
  form.beachName.focus()
  return 0;
}

if (form.imgFile.value.length==0){
  alert("Por favor agreque una imagen")
  form.imgFile.focus()
  return 0;
}

 
      //el formulario se envia
    alert("Muchas gracias por enviar el formulario");

   
    let name= form.name.value;
    let title= form.title.value;
    let description= form.description.value;
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
        let fileName=myobj.data;
        console.log(fileName)
        
      
        var myHeaders1 = new Headers();
      myHeaders1.append("x-api-key", "rG1sPJtX3]0BUzV)-p@h]9Xp");
    myHeaders1.append("Content-Type", "application/json");

                var data = JSON.stringify({name,title,description,beachName,fileName})
                ;
        console.log(data);
        
        var requestOptions2 = {
          method: 'POST',
          headers: myHeaders1,
          body: data,
          redirect: 'follow'
        };
        
        fetch("https://marlin-web-api.azurewebsites.net/api/post", requestOptions2)
      .then(response => response.text())
      .then(result => {console.log(result)
        document.location.href="./Opinions.html";})
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



  fecthData();

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


fecthData=()=>{

myHeaders = new Headers();
myHeaders.append("x-api-key", "rG1sPJtX3]0BUzV)-p@h]9Xp");


   var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  
  redirect: 'follow'
};

fetch("https://marlin-web-api.azurewebsites.net/api/beach/statistics", requestOptions)
      .then(response => response.text())
      .then(result => {
        //console.log(result) para mostrar los datos que me devuelve el api
        var datosApi = JSON.parse(result);
        
        _setnombrePlaya(datosApi.data[i-1].beachName);
        _setMunicipio(datosApi.data[i-1].city)
        _setNivel(datosApi.data[i-1].statistics.contaminationLevel)
        _setStatus(datosApi.data[i-1].statistics.quality);
      })   
        
             
        .catch(error => console.log('error', error));
         
      }





      fecthOpinion=()=>{

        var arr=[];
        myHeaders = new Headers();
        myHeaders.append("x-api-key", "rG1sPJtX3]0BUzV)-p@h]9Xp");
        
        
           var requestOptions = {
          method: 'GET',
          headers: myHeaders,          
          redirect: 'follow'
        };
        
        fetch("https://marlin-web-api.azurewebsites.net/api/post/", requestOptions)
              .then(response => response.text())
              .then(result => {
                //console.log(result) para mostrar los datos que me devuelve el api
                var datosUSer = JSON.parse(result);
                // console.log(datosUSer.data.length);
                
               for (i=0; i<datosUSer.data.length;i++)
               {
                 arr=datosUSer.data[i];  

                 const clientInfo = `
                
    
    <div class="card my-3 mx-3"  style="width: 18rem; height: 30rem;">
        <img src="${arr.url}" class="card-img-top mx-auto tamaño" alt="Imagen de playa" >
        <div class="card-body">
          <h5 class="card-title">${arr.beachName}</h5>
          <p class="card-text">Opinión de : ${arr.name}</p>
<p class="card-text"> Ubicación: ${arr.cityName},${arr.stateName} </p>
<p class="card-text">Descripción: ${ arr.description}</p>
          
        </div>
      </div>

                  
               `
               let prinre=document.getElementById("contenedor-opiniones")
               prinre.innerHTML+=clientInfo


                ////////////////////////////////////////
                 
              //    var divFr= document.createElement("div"); 
              //    divFr.style.marginTop="5px" 
                          
              //   document.body.appendChild(divFr);

              //   var name = document.createElement("p");
              //   divFr.appendChild(name);
              //   var textName = document.createTextNode("Nombre: "+ arr.name);
              //   name.appendChild(textName);
                
              //   var beachName = document.createElement("p");
              //   divFr.appendChild(beachName);
              //   var textbeachName = document.createTextNode("Nombre de: "+ arr.beachName);
              //   beachName.appendChild(textbeachName);
                

              //   var location = document.createElement("p");
              //   divFr.appendChild(location);
              //   var textlocation = document.createTextNode("Ubicación de la playa: Estado: "+ arr.stateName+".  Ciudad:" +arr.cityName);
              //   location.appendChild(textlocation);
              

              //   var title = document.createElement("p");
              //   divFr.appendChild(title);
              //   var textTitle = document.createTextNode("Titulo: "+ arr.title);
              //   title.appendChild(textTitle);
                
              //   var description = document.createElement("p");
              //   divFr.appendChild(description);
              //   var textDescription = document.createTextNode("Descripción: "+ arr.description);
              //   description.appendChild(textDescription);
                
              //   var img = document.createElement("img");
              //   img.style.width="150px";
              //   img.src=(arr.url)
              //  document.body.append(img)
                
              
                
                

                
               }
               
              }) 
                               
              .catch(error => console.log('error', error));
                 
              }
        





     function llenarOpiniones(){
       
       fecthOpinion();

      }

