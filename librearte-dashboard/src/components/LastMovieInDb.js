import React, {useState, useEffect}from 'react';

function LastMovieInDb(){
    const [firstFetch, setFirstFetch] = useState(null);
    const [lastProduct,setLastProduct] = useState(null);

    useEffect(()=> {
        fetch('http://localhost:3030/api/products')
        .then(r => r.json())
        .then((respuesta) => {
            setFirstFetch(respuesta.productos[respuesta.productos.length-1]);
        })
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        if(firstFetch){
            fetch('http://localhost:3030/api/products/'+firstFetch.id)
            .then(r => r.json())
            .then(respuesta => setLastProduct(respuesta))
            .catch(error => console.log(error))
        }
    }, [firstFetch])

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={lastProduct ? "http://localhost:3030/"+lastProduct.imageUrl : "Cargando..."} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p>{lastProduct ? lastProduct.description : "Cargando..."}</p>
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
