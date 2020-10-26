import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import { Checkbox } from '@material-ui/core';

// Generate Order Data
function createData(id, course, room, weekday, time, isPrepared) {
  return { id, course, room, weekday, time, isPrepared };
}

const rows = [
  createData(0, 'Software Project Management', 'A2.606', "Monday", "08:00", true),
  createData(1, 'Discrete Math', 'A2.308', 'Tuesday', "08:00", false),
  createData(2, 'Web Application', 'A2.411', 'Tuesday', "13:15", true),
  createData(3, 'Entrepreneurship', 'L.101', "Thursday", "13:15", true)
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Upcoming Classes</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Course</TableCell>
            <TableCell>Room</TableCell>
            <TableCell>Weekday</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Session</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.room}</TableCell>
              <TableCell>{row.weekday}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell><Checkbox disabled name={row.id} color={"primary"} checked={row.isPrepared} /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div classroom={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more classes
        </Link>
      </div>
    </React.Fragment>
  );
}