import React, {useState, useEffect} from "react";

function CategoriesInDb() {

  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState(null);

  useEffect(() => {
          fetch('http://localhost:3030/api/products')
          .then(r=> r.json())
          .then(respuesta => setProduct(respuesta))
          .catch(error => console.log(error))
  }, []);

  function searchCategory(object){
    let arrayCategories = []
    for(const property in object){
      arrayCategories.push(`${property} (${object[property]})`)
    }
    setCategories(arrayCategories)
  }

  useEffect(() => {
    if(product){
      searchCategory(product.countByCategory);
    }
  },[product])


  return (
    <div className="d-flex justify-content-center align-items-center w-100 p-3">
      <div className="card shadow mb-4 w-75">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800 text-center">
            Cantidad de productos por categoría
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
             {categories ? categories.map((category,i) => <div className="col-lg-6 mb-4" key={i}>
              <div className="card bg-dark text-white shadow text-center">
                <div className="card-body">{category}</div>
              </div>
            </div>) : "Cargando.."}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoriesInDb;
