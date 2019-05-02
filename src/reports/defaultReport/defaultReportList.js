import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, ChipField, BooleanField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const defaultReportList = props => (
  <List {...props} sort={{ field: 'id', order: 'DESC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <TextField source="systemName" label="System" />
      <TextField source="bodyName" label="Body" />
      <NumberField source="latitude" label="Latitude" textAlign="left" />
      <NumberField source="longitude" label="Longitude" textAlign="left" />
      <ChipField source="type" label="Type" />
      <TextField source="cmdrName" label="CMDR" />
      <TextField source="clientVersion" label="Client" />
      <ChipField source="reportStatus" label="Status" />
      <BooleanField source="added" label="Site Added" />
      <DateField source="updated_at" label="Updated on" showTime />
    </Datagrid>
  </List>
);

export default withStyles(styles)(defaultReportList);