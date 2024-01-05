const mostrarResultado = () => {
  //Tomando valores de los input
  const inputPeso = parseInt(document.getElementById("peso").value);
  const inputAltura = parseInt(document.getElementById("altura").value);
  const resultadoContainer = document.getElementById("resultadoContainer");

  //Formula IMC
  let imcString = (inputPeso / (inputAltura / 100) ** 2).toFixed(1);
  let imcNumber = (inputPeso / (inputAltura / 100) ** 2)

  //Validación para que no esté vacío
  if (!inputPeso || !inputAltura) {
    resultadoContainer.innerHTML = `<div class="alert alert-danger" role="alert">
           Por favor completá los datos
         </div>`;
  } else {

    if(imcNumber > 45){
        resultadoContainer.innerHTML = `<div class="alert alert-danger" role="alert">
                     Tu IMC es de: ${imcString} - Obesidad I
                   </div>`;
    } else if (imcNumber < 45 && imcNumber > 30){
        resultadoContainer.innerHTML = `<div class="alert alert-danger" role="alert">
                         Tu IMC es de: ${imcString} - Obesidad 
                       </div>`;
    } else if (imcNumber < 30 && imcNumber > 25) {
        resultadoContainer.innerHTML = `<div class="alert alert-warning" role="alert">
                             Tu IMC es de: ${imcString} - Sobrepeso
                           </div>`;
    } else if (imcNumber < 25 && imcNumber > 18.49){
        resultadoContainer.innerHTML = `<div class="alert alert-success" role="alert">
                                 Tu IMC es de: ${imcString} - Normal
                               </div>`;
    } else {
        resultadoContainer.innerHTML = `<div class="alert alert-warning" role="alert">
                                 Tu IMC es de: ${imcString} - Delgadez
                               </div>`;
    }

  }
};


