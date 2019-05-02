import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const regionList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <TextField source="name" label="Name" />
      <TextField source="journalName" label="Journal Name" />
      <NumberField source="regionID" label="Region ID" textAlign="left" />
    </Datagrid>
  </List>
);

export default withStyles(styles)(regionList);