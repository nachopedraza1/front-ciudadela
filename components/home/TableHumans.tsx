import { FC } from 'react';

import { usePagination } from '@/hooks';

import { LoadRowHuman, RowHuman } from '@/components/home';
import { Table, TableHead, TableRow, TableBody, TableFooter, TablePagination, TableCell, TableContainer, CircularProgress, Box } from '@mui/material';

export const TableHumans: FC = () => {

    const { data, isLoading, handleChangePage, page } = usePagination();

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Imagen</TableCell>
                        <TableCell align="center">Nombre</TableCell>
                        <TableCell align="center">Especie</TableCell>
                        <TableCell align="center">Estado</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className='fadeIn'>

                    {isLoading ?
                        <LoadRowHuman />
                        :
                        <RowHuman characters={data?.results!} />
                    }

                </TableBody>
                <TableFooter>
                    {isLoading ?
                        (
                            <TableRow sx={{ height: 52 }} />
                        )
                        :
                        (
                            <TableRow>
                                <TablePagination
                                    colSpan={6}
                                    count={data?.info.count!}
                                    rowsPerPage={data?.results.length!}
                                    rowsPerPageOptions={[]}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    sx={{ borderBottom: "none" }}
                                />
                            </TableRow>
                        )
                    }
                </TableFooter>
            </Table>
        </TableContainer>
    )
}