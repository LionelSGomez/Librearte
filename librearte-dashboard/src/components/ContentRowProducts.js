import React, {useState, useEffect} from 'react';
import SmallCard from './SmallCard';

const majorCategory = function(object){
    let major = -Infinity;
    for(const property in object){
        if(object[property] > major){
            major = object[property]
        }
    }
        return major
    }
    
const minorCategory = function(object){
    let minor = Infinity;
    for(const property in object){
        if(object[property] < minor){
            minor = object[property]
        }
    }
    return minor
}

function ContentRowProducts() {

    const [estado, setEstado] = useState(null);

    useEffect(() => {
        console.log("me monté");
            fetch('http://localhost:3030/api/products')
            .then(r=> r.json())
            .then(respuesta => setEstado(respuesta))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        console.log("me actualizé", estado);
    }, [estado]);

    
    let totalProductsInDB = {
        title: 'Total de productos en base de datos',
        color: 'primary',
        icon: 'fa-clipboard-list'
    }

    let categoryMoreStock = {
        title:'Categoría con más stock',
        color:'success',
        icon:'fa-award'
    }

    let categoryLessStock = {
        title:'Categoría con menos stock',
        color:'danger',
        icon:'fa-user-check'
    }

    if(estado){
        totalProductsInDB.quantity = estado.count;
        categoryMoreStock.quantity = majorCategory(estado.countByCategory);
        categoryLessStock.quantity = minorCategory(estado.countByCategory);
    }

    let cartProps = [totalProductsInDB, categoryMoreStock, categoryLessStock];

    useEffect(() => {
        return () => {
            console.log("me desmonté");
        }
    }, [])


    return (
        <div className="row justify-content-center w-100 align-items-center">
            
            {cartProps.map( (products, i) => {

                return <SmallCard {...products} key={i}/>
            
            })}

            

        </div>
    )
}

export default ContentRowProducts;