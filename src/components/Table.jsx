import React, {useState} from 'react';
import {DataGrid} from '@material-ui/data-grid';
import data from './data';

function Table() { 

    const [rows, setRows] = useState(data);

    const columns = [
        {field: "id", headerName: 'ID', width: 100},
        {
            field: "first_name", 
            headerName: "First Name", 
            width: 180,
            valueGetter: (params) => `${params.row.users.first_name}`
        },
        {
            field: "last_name", 
            headerName: "Last Name", 
            width: 180,
            valueGetter: (params) => `${params.row.users.last_name}`
        },
        {
            field: "phone", 
            headerName: "Phone", 
            width: 180,
            valueGetter: (params) => `${params.row.users.phone}`
        },
        {
            field: "name", 
            headerName: "Location", 
            width: 180,
            valueGetter: (params) => `${params.row.sites.name}`    
        },
        {
            field: "fullName", 
            headerName: "Full Name", 
            width: 200,
            valueGetter: (params) => {
                return `${params.row.users.first_name} ${params.row.users.last_name}`
            }
        }
    ]

        
    return (
        <div>
            <div style={{ height: 700, width: '100%' }}>
             <DataGrid 
                rows={data} 
                columns={columns} 
                pageSize={10} 
                checkboxSelection 
            />
            </div>
        </div>
    )
}

export default Table
