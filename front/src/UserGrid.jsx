// UserGrid.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataGrid, { Column } from 'devextreme-react/data-grid';

const UserGrid = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/persons') // Asume que tu endpoint para persons es este
            .then(response => {
                setUsers(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Personas</h1>
            <DataGrid
                dataSource={users}
                keyExpr="id"
                showBorders={true}
            >
                <Column dataField="id" caption="ID" />
                <Column dataField="firstName" caption="Nombre" />
                <Column dataField="lastName" caption="apellido" />
                {}
            </DataGrid>
        </div>
    );
};

export default UserGrid;
