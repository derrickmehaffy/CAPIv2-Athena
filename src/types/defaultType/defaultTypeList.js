import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

// Default Types
const defaultTypeList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <TextField source="type" label="Type" />
      <TextField source="journalName" label="Journal Name" />
      <NumberField source="journalID" label="Journal ID" textAlign="left" />
    </Datagrid>
  </List>
);

export default withStyles(styles)(defaultTypeList);