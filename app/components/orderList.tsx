"use client"

import { TableContainer, Table, TableBody, TableRow, TableCell, TableHead, TablePagination, TableFooter } from '@mui/material';
import { useState } from 'react';

type Order = {
  order_id: number
  date_created: string
  total_sales: number
}

interface PedidosProps {
  data: Order[]
}

function OrderList({data} : PedidosProps) {

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(5)

    const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setRowsPerPage(Number(event.target.value))
        setPage(0)
    }

    return(
        <TableContainer>        
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell>Número</TableCell>
                        <TableCell>Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map( (item) =>(
                        <TableRow key={item.order_id}>
                            <TableCell>{item.date_created}</TableCell>
                            <TableCell>{item.order_id}</TableCell>
                            <TableCell>{item.total_sales}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow>
                        <TablePagination 
                            rowsPerPageOptions={[5,10, 50]}
                            count={data.length}
                            page={page}
                            onPageChange={handleChangePage}
                            rowsPerPage={rowsPerPage}
                            onRowsPerPageChange={handleChangeRowsPerPage} 
                        />
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    )

}

export default OrderList