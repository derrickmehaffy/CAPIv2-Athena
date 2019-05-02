import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

// Thargoid Barnacle Types
const thargoidTypeList = props => (
  <List {...props} sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <TextField source="type" label="Type" />
      <NumberField
        source="metaAlloyCount"
        label="Meta Alloy"
        textAlign="left"
      />
    </Datagrid>
  </List>
);

export default withStyles(styles)(thargoidTypeList);