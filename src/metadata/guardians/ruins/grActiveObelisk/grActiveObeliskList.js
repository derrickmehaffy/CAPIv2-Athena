import React from 'react';
import { List, Datagrid, TextField, NumberField, ChipField, BooleanField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const grActiveObeliskList = props => (
  <List {...props} sort={{ field: 'siteID', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <NumberField source="grSite.siteID" label="Site ID" textAlign="left" />
      <TextField source="activeGroup.groupName" label="Group Name" />
      <NumberField source="activeGroup.amount" label="Obelisk Count" textAlign="left" />
    </Datagrid>
  </List>
);

export default withStyles(styles)(grActiveObeliskList);