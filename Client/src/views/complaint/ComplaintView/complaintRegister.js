import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Complaints = (props) => (
  <Card {...props}>
    <CardHeader title="Pending Complaints" />
    <Divider />
    <PerfectScrollbar>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sortDirection="desc">
                <Tooltip enterDelay={300} title="Sort">
                  <TableSortLabel active direction="desc">
                    Date Created
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
              <TableCell>Category</TableCell>
              {/* <TableCell>Subject</TableCell> */}
              <TableCell>Description</TableCell>
              <TableCell>Student Name</TableCell>
              <TableCell>Room Number</TableCell>
              <TableCell>Phone Number</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.complaints.map((complaint) => (
              <TableRow hover key={complaint._id}>
                <TableCell>
                  {moment(complaint.createdAt).format('DD/MM/YYYY hh:mm A')}
                </TableCell>
                <TableCell>{complaint.category.toUpperCase()}</TableCell>
                {/* <TableCell>{complaint.subject}</TableCell> */}
                <TableCell>{complaint.description}</TableCell>
                <TableCell>{complaint.student.name}</TableCell>
                <TableCell>{complaint.student.room}</TableCell>
                <TableCell>{complaint.phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </PerfectScrollbar>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2,
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        View all
      </Button>
    </Box>
  </Card>
);

export default Complaints;
