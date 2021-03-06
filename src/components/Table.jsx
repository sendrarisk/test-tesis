import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import LaunchIcon from '@material-ui/icons/Launch';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    button: {
        marginLeft: '1em',
        padding: 0
    }
});

export default function BasicTable({answers, onDelete, onDetails, onEmbu}) {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Alias</TableCell>
                        <TableCell align="right">Locus</TableCell>
                        <TableCell align="right">Embu</TableCell>
                        <TableCell align="right">Grado</TableCell>
                        <TableCell align="right">Sexo</TableCell>
                        <TableCell align="right">Edad</TableCell>
                        <TableCell align="right">Opciones</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {answers.map((row) => (
                        <TableRow key={row.alias} hover={true}>
                            <TableCell component="th" scope="row">
                                {row.alias}
                            </TableCell>
                            <TableCell align="right">{row.locus}</TableCell>
                            <TableCell align="right">
                                {row.embu ? <Button size="small" variant="outlined" onClick={() => onEmbu(row.embu)}>VER</Button>: ''}
                            </TableCell>
                            <TableCell align="right">{row.paralelo}</TableCell>
                            <TableCell align="right">{row.sex}</TableCell>
                            <TableCell align="right">{row.age}</TableCell>
                            <TableCell align="right">
                                <IconButton className={classes.button} color="primary" onClick={() => onDetails(row)}>
                                    <LaunchIcon />
                                </IconButton>
                                <IconButton className={classes.button} color="secondary" onClick={() => onDelete(row.id)}>
                                    <DeleteForeverIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
