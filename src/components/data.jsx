import {useState} from "react";
import {
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from "@mui/material";

const rawData = [
  { id: 1, name: "Item 1", value: 10 },
  { id: 2, name: "Item 2", value: 25 },
  { id: 3, name: "Item 3", value: 15 },
  { id: 4, name: "Item 3", value: 15 },
  { id: 5, name: "Item 3", value: 15 },
  { id: 6, name: "Item 3", value: 15 },
  { id: 7, name: "Item 3", value: 15 },
  { id: 8, name: "Item 3", value: 15 },
  { id: 9, name: "Item 3", value: 15 },
  { id: 10, name: "Item 3", value: 15 },
  { id: 11, name: "Item 3", value: 15 },
  { id: 12, name: "Item 3", value: 15 },
  { id: 13, name: "Item 3", value: 15 },
  { id: 14, name: "Item 3", value: 15 },
  { id: 15, name: "Item 3", value: 15 },
  { id: 16, name: "Item 3", value: 15 },
  { id: 17, name: "Item 3", value: 15 },
  { id: 18, name: "Item 3", value: 15 },
  { id: 19, name: "Item 3", value: 15 },
  { id: 20, name: "Item 3", value: 15 },
];

const rowsPerPage = 10; // Number of rows to display per page

const Data = () => {
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card>
      <Typography variant="h5" textAlign={'center'} sx={{margin:'5px 10px'}}>Data</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rawData
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.value}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={rawData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[]}
        />
      </TableContainer>
    </Card>
  );
};

export { Data };
