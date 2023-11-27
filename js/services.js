const btnConsulta = document.getElementById('btn-consulta');
const consultaForm = document.getElementById('consulta-form');

btnConsulta.addEventListener("click", () => {
    //me abre y me cierra el form de consulta con id consulta-form
  consultaForm.classList.toggle("visible"); 
   
}
);