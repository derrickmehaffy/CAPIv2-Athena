import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {
  name: { padding: '0 12px 0 25px' },
};

const systemList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="Left" />
      <TextField source="systemName" label="Name" />
      <NumberField
        source="edsmID"
        label="EDSM ID"
        textAlign="Left"
        options={{ useGrouping: false }}
      />
      <NumberField source="edsmCoordX" label="Coord X" textAlign="Left" />
      <NumberField source="edsmCoordY" label="Coord Y" textAlign="Left" />
      <NumberField source="edsmCoordZ" label="Coord Z" textAlign="Left" />
      <DateField source="created_at" label="Created on" showTime />
      <DateField source="updated_at" label="Updated on" showTime />
    </Datagrid>
  </List>
);

export default withStyles(styles)(systemList);