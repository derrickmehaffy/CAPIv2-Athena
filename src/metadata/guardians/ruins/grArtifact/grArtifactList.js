import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, ChipField, BooleanField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const grArtifactList = props => (
  <List {...props} sort={{ field: 'siteID', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <TextField source="system.systemName" label="System" />
      <TextField source="body.bodyName" label="Body" />
      <NumberField source="siteID" label="Site ID" textAlign="left" />
      <NumberField source="latitude" label="Latitude" textAlign="left" />
      <NumberField source="longitude" label="Longitude" textAlign="left" />
      <ChipField source="type.type" label="Type" />
      <BooleanField source="verified" label="Verified" />
      <TextField source="discoveredBy.cmdrName" label="Discovered By" />
      <DateField source="updated_at" label="Updated on" showTime />
    </Datagrid>
  </List>
);

export default withStyles(styles)(grArtifactList);