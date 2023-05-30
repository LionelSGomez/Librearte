import React from 'react';
import ChartRows from './ChartRows';

function Chart (){

    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Categoría</th>
                                <th>Imagen</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ChartRows/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;