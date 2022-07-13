import React from 'react'

export const RegistrarCiudad = () => {
  return (
    <div className="container mt-4">
        <div className="row">
          <div className="col-md-7  mx-auto">
            <div className="card">
              <div className="container text-center fa-5x">
                <i className="fas fa-user-plus"></i>
              </div>
              <div className="card-header bg-info text-center">
                <h4>Registrar paciente</h4>
              </div>
              <div className="card-body">
                <form onSubmit={"guardar"}>
                  <div className="row">
                    <div className="form-grupop">
                      <label>Nombre de la Ciudad</label>
                      <input type="text" className="form-control required" />
                    </div>
                    <div className="form-grupop">
                      <label>Correo</label>
                      <input type="text" className="form-control required" />
                    </div>
                    <div className="form-grupop">
                      <label>Contraseña</label>
                      <input type="text" className="form-control required" />
                    </div>
                  
                   
                  
                  </div>
                    <br/>
                  <button type="submit" class="btn btn-outline-info">
                    <span class="fa fa-save"></span> Guardar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
