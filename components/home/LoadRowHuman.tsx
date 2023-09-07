import { TableRow, TableCell, Skeleton } from "@mui/material"

export const LoadRowHuman = () => {

    const loadSkeletonTable = [...Array(10)];

    return (
        <>
            {loadSkeletonTable.map((element, index) => (
                <TableRow key={index} sx={{ height: '73px' }} className="fadeIn">
                    <TableCell align="center">
                        <Skeleton variant="circular" width={40} height={40} sx={{ marginLeft:9 }} />
                    </TableCell>
                    <TableCell colSpan={5} sx={{ padding: '2px' }}>
                        <Skeleton animation="wave" height={12} />
                        <Skeleton animation="wave" height={12} />
                        <Skeleton animation="wave" height={12} />
                    </TableCell>
                </TableRow >
            ))
            }
        </>
    )
}