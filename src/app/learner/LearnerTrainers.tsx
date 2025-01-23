import { CellClickedEvent, ColDef, SelectionChangedEvent } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react'
import React, { useRef, useState } from 'react'
import { LeadeData } from '../component/Type';
import Table from '../component/Table';

const initialColumnDefs: ColDef[] = [
    {
        checkboxSelection: true,
        headerCheckboxSelection: true,
        field: "trainerName",
        headerName: "Trainer Name",
        minWidth: 215,
        maxWidth: 350,
    },
    {
        field: "phone",
        headerName: "Phone",
        minWidth: 250,
        maxWidth: 350,
    },
    {
        field: "email",
        headerName: "Email",
        minWidth: 190,
        maxWidth: 250,
    },
    {
        field: "noofBatches",
        headerName: "No of Batches",
        minWidth: 190,
        maxWidth: 250,
    },
    {
        field: "nooflearners",
        headerName: "No of learners",
        minWidth: 190,
        maxWidth: 250,
    },
    {
        field: "techStack",
        headerName: "Tech Stack",
        minWidth: 250,
        maxWidth: 350,
        cellRenderer: (params: { data: any }) => {
            const data = params.data;
            return (
                <div className="flex justify-center items-center capitalize w-full">
                    {data?.techStack}
                </div>
            );
        },
    },
    {
        field: "freeSlots",
        headerName: "Free Slots",
        minWidth: 190,
        maxWidth: 250,
    },
    {
        field: "location",
        headerName: "Location",
        minWidth: 190,
        maxWidth: 250,
    },
];

const LearnerTrainers = () => {


    return (
        <Table
            noDataFoundMsg="Trainers data not found"
            // isLoader={isLoader}
            initialColumnDefs={initialColumnDefs}
            // datas={sortedNoteData}
            datas={[]}
        />
    )
}

export default LearnerTrainers