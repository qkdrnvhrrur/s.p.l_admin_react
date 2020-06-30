import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: '6rem',
    justifyContent: 'center',
    background: `${palette.cyan[6]}`,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}));

const FlexBox = styled.div`
  display: display: inline-flex
  justify-content: space-between;
`;
const StyledDiv = styled.div`
  vertical-align: bottom;
  display: inline-block;
`;

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h3" noWrap>
            <Link to="/" className={classes.link}>
              코오롱 주차장
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
