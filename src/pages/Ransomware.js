import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "ransomware", headerName: "Ransomware Gang", width: 150 },
  { field: "victim", headerName: "Claimed Victim", width: 150 },
  { field: "creationTime", headerName: "Creation Time (UTC +5:30)", width: 200 },
  {
    field: "lastUpdate",
    headerName: "Last Update (UTC +5:30)",
    width: 200
  }
];

const rows = [
  { ransomware: "Paki", creationTime: "Snow", victim: "1", lastUpdate: 35 },
  { ransomware: "napak", creationTime: "Lannister", victim: "5", lastUpdate: 42 },
  { ransomware: "napak", creationTime: "Lannister", victim: "5", lastUpdate: 45 },
  { ransomware: "napak", creationTime: "Stark", victim: "5", lastUpdate: 16 },
  { ransomware: "napak", creationTime: "Targaryen", victim: "5", lastUpdate: null },
  { ransomware: "india", creationTime: "Melisandre", victim: "10", lastUpdate: 150 },
  { ransomware: "india", creationTime: "Clifford", victim: "10", lastUpdate: 44 },
  { ransomware: "Bagdadi", creationTime: "Frances", victim: "15", lastUpdate: 36 },
  { ransomware: "Bagdadi", creationTime: "Roxie", victim: "15", lastUpdate: 65 }
];

export default function Ransomware() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}

