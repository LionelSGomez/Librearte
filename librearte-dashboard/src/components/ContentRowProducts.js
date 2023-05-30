import React, {useState, useEffect} from 'react';
import SmallCard from './SmallCard';

const getLength = function(object){
    return Object.keys(object).length
}

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
    const [users, setUsers] = useState(null);

    useEffect(() => {
            fetch('http://localhost:3030/api/products')
            .then(r=> r.json())
            .then(respuesta => setEstado(respuesta))
            .catch(error => console.log(error))
    }, []);

    useEffect(()=> {
            fetch('http://localhost:3030/api/users')
            .then(r => r.json())
            .then(respuesta => setUsers(respuesta))
            .catch(error => console.log(error))
    },[estado])
    
    let totalProductsInDB = {
        title: 'Total de productos en base de datos',
        color: 'primary',
        icon: 'fa-boxes'
    }

    let categoryMoreStock = {
        title:'Categoría con mayor stock',
        color:'success',
        icon:'fa-cart-plus'
    }

    let categoryLessStock = {
        title:'Categoría con menor stock',
        color:'danger',
        icon:'fa-cart-arrow-down'
    }

    let categoriesInDB = {
        title:'Categorias de productos',
        color:'warning',
        icon:'fa-list'
    }
    
    let usersInDB = {
        title:'Usuarios en base de datos',
        color:'info',
        icon:'fa-users'
    }


    if(estado && users){
        totalProductsInDB.quantity = estado.count;
        categoryMoreStock.quantity = majorCategory(estado.countByCategory);
        categoryLessStock.quantity = minorCategory(estado.countByCategory);
        categoriesInDB.quantity = getLength(estado.countByCategory);
        usersInDB.quantity = users.count;
    }

    let cartProps = [totalProductsInDB, categoriesInDB ,categoryMoreStock, categoryLessStock, usersInDB ];

    return (
        <div className="row justify-content-center w-100 align-items-center">
            
            {cartProps.map( (products, i) => {

                return <SmallCard {...products} key={i}/>
            
            })}

            

        </div>
    )
}

export default ContentRowProducts;