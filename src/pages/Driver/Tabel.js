import React, { useState } from "react";
import { loadCSS } from "fg-loadcss";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { CSVLink, CSVDownload } from "react-csv";
import './table.css'
import axios from "axios";
import DataTable from "react-data-table-component";

class App extends React.Component {
    constructor() {
        super();

        this.columns = [
            {
                name: "#",
                selector: "SNO",
                sortable: true
            },
            {
                name: "Document UID",
                selector: "docCategoryUID",
                sortable: true
            },
            {
                name: "Document Type Name",
                selector: "docCategoryName",
                sortable: true
            },
            {
                name: "Category UID",
                selector: "docCategoryUID",
                sortable: true
            },
            {
                name: "Category Name",
                selector: "docCategoryName",
                sortable: true
            },
            {
                name: "Naming Conventions",
                selector: "docCategoryName",
                sortable: true
            },
            {
                name: "Active",
                button: true,
                cell: (row) => (
                    <form
                        type="switch"
                        id="custom-switch"
                        checked={row.active}
                        disabled
                    />
                )
            },
            {
                name: "Action",
                button: true,
                cell: (row) => (
                    <a to={"/edit-document-category/" + row.docCategoryUID} exact>
                        Edit
                    </a>
                )
            }
        ];

        this.state = { original_rows: [], rows: [], search: "" };

        this.columns_data_for_export = this.columns
            .slice(0, this.columns.length - 1)
            .map((d) => d.name);

        this.rows_data_for_export = this.state.rows.map((d1) =>
            this.columns
                .slice(0, this.columns.length - 1)
                .map((d2) => d2.selector)
                .map((d3) => d1[d3])
        );
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.do_search = this.do_search.bind(this);
        this.download_pdf = this.download_pdf.bind(this);
    }


    handleInputChange(event) {
        this.setState({ search: event.target.value });
    }

    handleKeyDown(event) {
        if (event.key === "Enter") {
            this.do_search();
        }
    }

    do_search() {
        const temp_rows = this.state.original_rows.filter(
            (e) => JSON.stringify(e).indexOf(this.state.search) >= 0
        );
        this.setState({ rows: temp_rows });
    }

    download_pdf() {
        const doc = new jsPDF();

        const temp_rows = this.state.rows.map((d1) =>
            this.columns
                .slice(0, this.columns.length - 1)
                .map((d2) => d2.selector)
                .map((d3) => d1[d3])
        );
        doc.autoTable({
            head: [this.columns_data_for_export],
            body: temp_rows
        });
        console.log(this.columns_data_for_export, temp_rows);
        doc.save("client_list.pdf");
    }

    render() {
        return (
            <div >
                <button variant="primary" className={"primaryBtn"}>
                    {" "}
                    <CSVLink
                        data={this.rows_data_for_export}
                        headers={this.columns_data_for_export}
                        filename={"client_list.csv"}
                    >
                        Excel
                    </CSVLink>
                </button>
                <button

                    onClick={this.download_pdf}
                >
                    {" "}
                    Pdf
                </button>
                <div className={"pageBox"}>
                    {/*<div className={"marginBottom1"}>*/}
                    {/*    <div >*/}
                    {/*        <form*/}
                    {/*            type="text"*/}
                    {/*            placeholder="Search"*/}
                    {/*            onChange={this.handleInputChange}*/}
                    {/*            onKeyDown={this.handleKeyDown}*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                            <DataTable
                                title="Client List"
                                columns={this.columns}
                                data={this.state.rows}
                                pagination
                                striped
                                dense
                                noHeader
                            />
                        </div>

            </div>
        );
    }
}

export default App;
