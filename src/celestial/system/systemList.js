import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const systemList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }} perPage={100}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <TextField source="systemName" label="Name" />
      <NumberField
        source="edsmID"
        label="EDSM ID"
        textAlign="Left"
        options={{ useGrouping: false }}
      />
      <NumberField source="edsmCoordX" label="Coord X" textAlign="left" />
      <NumberField source="edsmCoordY" label="Coord Y" textAlign="left" />
      <NumberField source="edsmCoordZ" label="Coord Z" textAlign="left" />
      <DateField source="created_at" label="Created on" showTime />
      <DateField source="updated_at" label="Updated on" showTime />
    </Datagrid>
  </List>
);

export default withStyles(styles)(systemList);