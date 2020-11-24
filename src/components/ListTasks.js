import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import DeleteButton from "./dialogs/DeleteButton"
// import api from "../services/api"
import ResponseAPI from "../services/response_api.json"

export default function ListTasks() {
  const [rows,setRows] = React.useState([])
  React.useEffect(() => {
    const {
      code,
      status,
      message
    } = ResponseAPI
    if ( code === 200 )
    {
      const {
        data,
        pagination
      } = message
      console.log('ResponseAPI', code, status, data, ResponseAPI)
      // const fetchTasks = async () => {
      //   const {
      //     data,
      //     status
      //   } = await api.get('/list')
      //   console.log('data', status, data)
      // }
      // fetchTasks()
      setRows(data)

    }
  },[])
  // const classes = useStyles();
  return (
    <React.Fragment>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Url</TableCell>
            <TableCell>Visitors</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id_site}>
              <TableCell><img style={{'width' : '120px'}} src={row.image} alt={row.name} /></TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell>{row.count_unique_visitors}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="edit">
                  <EditIcon />
                </IconButton>
                <DeleteButton />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more ListTasks
        </Link>
      </div> */}
    </React.Fragment>
  );
}