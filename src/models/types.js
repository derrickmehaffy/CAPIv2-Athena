import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

// Default Types
export const typeList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="Left" />
      <TextField source="type" label="Type" />
      <TextField source="journalName" label="Journal Name" />
      <NumberField source="journalID" label="Journal ID" textAlign="Left" />
    </Datagrid>
  </List>
);

// Guardian Types
export const typeGuardianList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="Left" />
      <TextField source="type" label="Type" />
    </Datagrid>
  </List>
);

// Thargoid Barnacle Types
export const typeThargoidList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
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
