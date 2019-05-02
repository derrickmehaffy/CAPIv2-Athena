import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, ChipField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const bodyList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <TextField source="bodyName" label="Name" />
      <NumberField
        source="edsmID"
        label="EDSM ID"
        textAlign="left"
        options={{ useGrouping: false }}
      />
      <ChipField source="type" label="Type" />
      <ChipField source="subType" label="Sub-Type" />
      <NumberField
        source="distanceToArrival"
        label="Distance from Star (Ls)"
        textAlign="left"
      />
      <NumberField source="radius" label="Radius (Km)" textAlign="left" />
      <ChipField source="volcanismType" label="Volcanism" />
      <DateField source="created_at" label="Created on" showTime />
      <DateField source="updated_at" label="Updated on" showTime />
    </Datagrid>
  </List>
);

export default withStyles(styles)(bodyList);