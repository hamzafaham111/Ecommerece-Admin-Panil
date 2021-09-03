import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";

import { columns, data } from "./data";

import "./styles.css";

const customStyles = {
    title: {
        style: {
            fontColor: 'red',
            fontWeight: '900',
        }
    },
    rows: {
        style: {
            minHeight: '52px', // override the row height
        }
    },
    headCells: {
        style: {
            fontSize: '16px',
            fontWeight: '500',
            textTransform: 'uppercase',
            paddingLeft: '8px',
            background: "transparent"
        },
    },
    cells: {
        style: {
            fontSize: '15px',
            paddingLeft: '8px',
        },
    },
};


function Table() {
    const tableData = {
        columns,
        data
    };

    return (
        <div className="main">
            <DataTableExtensions {...tableData}>
                <DataTable
                    columns={columns}
                    data={data}
                    noHeader
                    defaultSortField="id"
                    defaultSortAsc={false}
                    pagination
                    highlightOnHover
                    customStyles={customStyles}
                />
            </DataTableExtensions>
        </div>
    );
}

export default Table;
