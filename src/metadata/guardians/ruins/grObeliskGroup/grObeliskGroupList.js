import React from 'react';
import { List, Datagrid, TextField, NumberField, ChipField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const grObeliskGroupList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <ChipField source="grType.type" label="Type" />
      <TextField source="groupName" label="Group Name" />
      <NumberField source="amount" label="Obelisk Count" textAlign="left" />
    </Datagrid>
  </List>
);

export default withStyles(styles)(grObeliskGroupList);