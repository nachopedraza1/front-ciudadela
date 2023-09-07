import { FC } from "react";
import { styled, TableRow, TableCell, tableCellClasses, Box, Avatar, Tooltip } from "@mui/material";
import { Character } from "@/interfaces";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
        textTransform: 'Capitalize',
        fontSize: 14,
    },
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.action.hover,
        fontSize: 15,
    },
}));

export const RowHuman: FC<{ characters: Character[] }> = ({ characters }) => {

    return (
        <>
            {(characters).map(({ id, image, name, species, status }) => (
                <TableRow key={id} className="fadeIn">

                    <StyledTableCell align="center">
                        <Avatar alt={name} src={image} sx={{ margin: 'auto' }} />
                    </StyledTableCell>

                    <StyledTableCell align="center">
                        {name}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                        {species}
                    </StyledTableCell>

                    <StyledTableCell align="center">
                        <Tooltip title={status}>
                            <Box sx={{
                                cursor: 'pointer',
                                margin: 'auto',
                                width: 12,
                                height: 12,
                                bgcolor: status === 'Alive' ? 'green' : status === 'Dead' ? 'red' : 'gray',
                                borderRadius: '50%'
                            }}>

                            </Box>
                        </Tooltip>
                    </StyledTableCell>

                </TableRow>
            ))}
        </>
    )
}