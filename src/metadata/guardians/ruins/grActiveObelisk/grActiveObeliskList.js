import React from 'react';
import { List, Datagrid, TextField, NumberField, BooleanField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const grActiveObeliskList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <NumberField source="grSite.siteID" label="Site ID" textAlign="left" />
      <TextField source="activeObelisk.obeliskNumber" label="Obelisk Number" />
      <BooleanField source="activeObelisk.broken" label="Broken" textAlign="left" />
    </Datagrid>
  </List>
);

export default withStyles(styles)(grActiveObeliskList);