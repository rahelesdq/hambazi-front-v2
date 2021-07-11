import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PageTitle from '../../components/PageTitle/PageTitle';
import OrderAccordion from './components/OrderAccordion/OrderAccordion'
import OrderSpanningTable from './components/OrderSpanningTable/OrderSpanningTable';
import MenuOrder from '../../components/Layout/MenuOrder/MenuOrder';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Neworder() {
  const classes = useStyles();

  return (

    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <PageTitle title="New Order"/>,
        </Grid>
        <Grid item xs={6}>
          <OrderAccordion/>
        </Grid>
        <Grid item xs={6}>
            <OrderSpanningTable/>
            <OrderSpanningTable/>
        </Grid>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>xs=3</Paper> */}
        </Grid>
      </Grid>
      <Grid item xs={6}>
      <MenuOrder/>
        </Grid>
    </div>
  );
}