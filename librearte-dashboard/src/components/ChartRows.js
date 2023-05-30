import React, {useState, useEffect} from 'react';


function ChartRows(){

    const [allUrl, setAllUrl] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3030/api/products')
        .then(r => r.json())
        .then((response) => {const arrayUrl = response.productos.map(
            (product) => product.detail
        );
        const promesas = arrayUrl.map((url) => 
        fetch('http://localhost:3030'+url).then(r => r.json())
    )
        Promise.all(promesas)
        .then(datos => setAllUrl(datos))
        })
        .catch(error => console.log(error));
    }, [])

    return (
        
        allUrl ? (allUrl.map((product, i)=> <tr key={i}>
                            <td>{product.title}</td>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.product_category[0].name}</td>
                            <td><img src={`http://localhost:3030${product.imageUrl}`} alt="product" style={{width: '5em'}}/></td>
                        </tr>)) : (<tr><td>Cargando...</td></tr>)
            )
    }
    
        

export default ChartRows;