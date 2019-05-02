import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const grCodexCategoryList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <TextField source="categoryName" label="Category" />
    </Datagrid>
  </List>
);

export default withStyles(styles)(grCodexCategoryList);