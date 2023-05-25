import React from "react";

function CategoriesInDb() {
  return (
    <div className="d-flex justify-content-center align-items-center w-100 p-3">
      <div className="card shadow mb-4 w-75">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800 text-center">
            Categorias en base de datos
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow text-center">
                <div className="card-body">Mochilas</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow text-center">
                <div className="card-body">Cuadernos</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow text-center">
                <div className="card-body">Cartucheras</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow text-center">
                <div className="card-body">Lapices</div>
              </div>
            </div>
            <div className="col-lg-6 mb-4">
              <div className="card bg-dark text-white shadow text-center">
                <div className="card-body">Lapiceras</div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
