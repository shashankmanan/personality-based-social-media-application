import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import HubIcon from '@mui/icons-material/Hub';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom';
import TribesHome from "./Tribes/TribesHome"
import Recents from './Recents';
import Connect from './Tribes/Connect';


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const [page,setPage] = React.useState(<Recents />);

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
    console.log("chaneg ",value)
    switch(value) {
      case 0 : setPage(<Recents />)
        break;
      case 1 : setPage(<Connect />)
      break;
      case 2 : setPage(<TribesHome />)
      break;
    }
  }, [value]);

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />
      { page }
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            console.log(newValue)
            
          }}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Connect" icon={<HubIcon />} />
          {/* <Link to={ <TribesHome />}> */}
            <BottomNavigationAction label="Tribe" icon={<GroupIcon />} />
          {/* </Link> */}
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
