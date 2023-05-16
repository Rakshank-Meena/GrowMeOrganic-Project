import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const UpperSecTable = (props: {
    data: {
        id: number,
        userId: number,
        body: string,
        title: string
    }[]
}) => {

    const rows: GridRowsProp = props.data

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Id', width: 10 },
        { field: 'body', headerName: 'Body', minWidth:350 },
        { field: 'title', headerName: 'Title', minWidth:350 },
        { field: 'userId', headerName: 'userId',minWidth:10 },
    ];
    return (
        <>
            <div style={{ height: "50vh", width: '100%' }}>
                <DataGrid  rows={rows} columns={columns} />
            </div>
        </>
    )
}

export default UpperSecTable
