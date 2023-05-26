import React from 'react';
import LastProductInDB from './LastProductInDB';
import CategoriesInDb from './CategoriesInDb';

function ContentRowCenter(){
    return (
        <div className="row justify-content-center">
            
            <LastProductInDB />

            <CategoriesInDb />

        </div>
    )
}

export default ContentRowCenter;