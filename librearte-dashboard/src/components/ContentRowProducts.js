import React, {useState, useEffect} from 'react';
import SmallCard from './SmallCard';


/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let moviesInDB = {
    title: 'Movies in Data Base',
    color: 'primary', 
    cuantity: 21,
    icon: 'fa-clipboard-list'
}

/* <!-- Total awards --> */

let totalAwards = {
    title:' Total awards', 
    color:'success', 
    cuantity: '79',
    icon:'fa-award'
}

/* <!-- Actors quantity --> */

let actorsQuantity = {
    title:'Actors quantity' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [moviesInDB, totalAwards, actorsQuantity];

function ContentRowProducts() {

    const [estado, setEstado] = useState(null);

    useEffect(() => {
        console.log("me monté");
            fetch('http://localhost:3030/api/products')
            .then(r=> r.json())
            .then(respuesta => setEstado(respuesta))
    }, []);

    useEffect(() => {
        console.log("me actualizé", estado);
    }, [estado])

    useEffect(() => {
        return () => {
            console.log("me desmonté");
        }
    }, [])


    return (
        <div className="row justify-content-center w-100 align-items-center">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;