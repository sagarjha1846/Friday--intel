import React, { useEffect, useContext, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import constants from '../constant/routesConstant';
import LoginContext from '../context/LoginContext';
import axios from 'axios';

const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'casename', headerName: 'Case Name', flex: 1 },
  {
    field: 'created_at',
    headerName: 'Created At',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    flex: 1,
  },
  {
    field: 'last_modified',
    headerName: 'Last Updated',
    flex: 1,
  },
];

export default function Table() {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const { backendURL } = constants;
  const { jwtToken } = useContext(LoginContext);
  useEffect(() => {
    axios
      .get(`${backendURL}caselist.php`, {
        headers: {
          Authorization: jwtToken,
        },
      })
      .then((res) => setRows(res.data.map((el) => ({ ...el, id: el.caseid }))))
      .catch((err) => console.log(err));
  }, [backendURL, jwtToken]);

  const handlePageChange = (params) => {
    setPage(params.page);
    console.log(params);
  };

  return (
    <div className="p-10" style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        pagination
        pageSize={5}
        rowCount={rows.length}
        page={page}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
