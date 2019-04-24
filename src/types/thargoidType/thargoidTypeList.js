import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  name: { padding: '0 12px 0 25px' },
};

// Thargoid Barnacle Types
const thargoidTypeList = props => (
  <List {...props} sort={{ field: "id", order: "ASC" }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="Left" />
      <TextField source="type" label="Type" />
      <NumberField
        source="metaAlloyCount"
        label="Meta Alloy"
        textAlign="Left"
      />
    </Datagrid>
  </List>
);

export default withStyles(styles)(thargoidTypeList);