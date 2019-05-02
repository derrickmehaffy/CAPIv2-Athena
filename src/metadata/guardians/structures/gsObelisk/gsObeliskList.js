import React from 'react';
import { List, Datagrid, NumberField, ChipField, BooleanField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const gsObeliskList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <ChipField source="gsType.type" label="Type" />
      <ChipField source="gsObeliskGroup.groupName" label="Group" />
      <NumberField source="obeliskNumber" label="Obelisk Number" textAlign="left" />
      <BooleanField source="broken" label="Broken" />
      <BooleanField source="verified" label="Verified" />
    </Datagrid>
  </List>
);

export default withStyles(styles)(gsObeliskList);