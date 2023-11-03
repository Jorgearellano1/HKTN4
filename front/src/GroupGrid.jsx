import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataGrid, { Column } from 'devextreme-react/data-grid';


const GroupGrid = () => {
    const [groups, setGroups] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/groups')
            .then(response => {
                setGroups(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Grupos</h1>
            <DataGrid
                dataSource={groups}
                keyExpr="id"
                showBorders={true}
            >
                <Column dataField="id" caption="ID" />
                <Column dataField="name" caption="Nombre del Grupo" />
            </DataGrid>
        </div>
    );
};
export default GroupGrid;
