import React from 'react';
import { List, Datagrid, TextField, NumberField, } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const grActiveGroupList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <NumberField source="grSite.siteID" label="Site ID" textAlign="left" />
      <TextField source="activeGroup.groupName" label="Group Name" />
      <NumberField source="activeGroup.amount" label="Obelisk Count" textAlign="left" />
    </Datagrid>
  </List>
);

export default withStyles(styles)(grActiveGroupList);