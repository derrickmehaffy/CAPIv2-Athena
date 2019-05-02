import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, ChipField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const ringList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <TextField source="ringName" label="Name" />
      <ChipField source="type" label="Type" />
      <NumberField source="mass" label="Mass" textAlign="left" />
      <NumberField source="innerRadius" label="Inner Radius" textAlign="left" />
      <NumberField source="outerRadius" label="Name" textAlign="left" />
      <DateField source="created_at" label="Created on" showTime />
      <DateField source="updated_at" label="Updated on" showTime />
    </Datagrid>
  </List>
);

export default withStyles(styles)(ringList);