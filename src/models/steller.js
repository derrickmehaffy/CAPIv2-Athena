import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField, ChipField } from 'react-admin';

// Systems
export const systemList = (props) => (
    <List {...props} sort={{ field: 'id', order: 'ASC' }}>
        <Datagrid>
            <NumberField source="id" label="ID" textAlign="Left"/>
            <TextField source="systemName" label="Name"/>
            <NumberField source="edsmID" label="EDSM ID" textAlign="Left" options={{useGrouping: false}}/>
            <NumberField source="edsmCoordX" label="Coord X" textAlign="Left"/>
            <NumberField source="edsmCoordY" label="Coord Y" textAlign="Left"/>
            <NumberField source="edsmCoordZ" label="Coord Z" textAlign="Left"/>
            <DateField source="created_at" label="Created on" showTime/>
            <DateField source="updated_at" label="Updated on" showTime/>
        </Datagrid>
    </List>
);

// Bodies
export const bodyList = (props) => (
    <List {...props} sort={{ field: 'id', order: 'ASC' }}>
        <Datagrid>
            <NumberField source="id" label="ID" textAlign="Left"/>
            <TextField source="bodyName" label="Name"/>
            <NumberField source="edsmID" label="EDSM ID" textAlign="Left" options={{useGrouping: false}}/>
            <ChipField source="type" label="Type"/>
            <ChipField source="subType" label="Sub-Type"/>
            <NumberField source="distanceToArrival" label="Distance from Star (Ls)" textAlign="Left"/>
            <NumberField source="radius" label="Radius (Km)" textAlign="Left"/>
            <ChipField source="volcanismType" label="Volcanism"/>
            <DateField source="created_at" label="Created on" showTime/>
            <DateField source="updated_at" label="Updated on" showTime/>
        </Datagrid>
    </List>
);

// Rings
export const ringList = (props) => (
    <List {...props} sort={{ field: 'id', order: 'ASC' }}>
        <Datagrid>
            <NumberField source="id" label="ID" textAlign="Left"/>
        </Datagrid>
    </List>
);

// Regions
export const regionList = (props) => (
    <List {...props} sort={{ field: 'id', order: 'ASC' }}>
        <Datagrid>
            <NumberField source="id" label="ID" textAlign="Left"/>
        </Datagrid>
    </List>
);