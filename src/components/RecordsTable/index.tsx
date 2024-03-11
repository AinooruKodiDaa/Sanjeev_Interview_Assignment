import React, { ChangeEvent, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  TablePagination,
  Box,
  Typography,
  Tooltip,
} from "@mui/material";
import Searchbar from "../../ui/Searchbar";
import { Button } from "../../ui/Button";

function RecordsTable(props: any) {
  const { products } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState(products); // State to hold items

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDelete = (id: string) => {
    // Filter out the item with the given id and update the state
    const updatedItems = items.filter((item: any) => item.id !== id);
    setItems(products);
  };

  const filteredProducts = products.filter((product: any) => {
    return Object.keys(product).some((key) =>
      product[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBlock: "15px",
        }}
      >
        <Typography variant="h6" fontWeight={600}>
          Records
        </Typography>
        <Searchbar
          sx={{
            p: "0rem 0.75rem",
            display: "flex",
            alignItems: "center",
            justifySelf: "end",
            width: 250,
            borderRadius: "20px",
          }}
          placeholder="Search records"
          handleChange={(e: any) => setSearchTerm(e.target.value)}
        />
      </Box>
      <TableContainer
        sx={{ width: "100%", height: "calc(100% - 120px)" }}
        component={Paper}
      >
        <Table sx={{ minWidth: 650 }} stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>S.No</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Select</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((product: any, index: number) => (
                <TableRow
                  key={product.id}
                  sx={{ "&:hover": { background: "#5236f3", color: "#ffff" } }}
                >
                  <TableCell>
                    <Typography paragraph>{index + 1}</Typography>
                  </TableCell>

                  {product.title.length > 30 ? (
                    <TableCell>
                      <Tooltip
                        title={
                          <Typography
                            paragraph
                            sx={{ maxHeight: "3rem", overflowY: "auto" }}
                          >
                            {product.title}
                          </Typography>
                        }
                        arrow
                        content="ss"
                      >
                        <Typography paragraph>
                          {product.title.slice(0, 30) + "..."}
                        </Typography>
                      </Tooltip>
                    </TableCell>
                  ) : (
                    <TableCell>{product.title}</TableCell>
                  )}






                
                  {product.description.length > 50 ? (
                    <TableCell>
                      <Tooltip
                        title={
                          <Typography
                            paragraph
                            sx={{ maxHeight: "3rem", overflowY: "auto" }}
                          >
                            {product.description}
                          </Typography>
                        }
                        arrow
                        content="ss"
                      >
                        <Typography paragraph>
                          {product.description.slice(0, 50) + "..."}
                        </Typography>
                      </Tooltip>
                    </TableCell>
                  ) : (
                    <TableCell>{product.description}</TableCell>
                  )}

                  
                  <TableCell>{product.category.toLocaleUpperCase()}</TableCell>
                  <TableCell>${product.price}</TableCell>
                  <TableCell>
                    <Button variant="contained" color="info">
                      Select
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={filteredProducts.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}

export default RecordsTable;
