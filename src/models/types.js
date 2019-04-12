import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const typelist = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="type" />
            <TextField source="journalName" />
            <TextField source="journalID" />
        </Datagrid>
    </List>
);