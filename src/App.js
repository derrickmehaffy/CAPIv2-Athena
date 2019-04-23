import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from './utils/ra-strapi-rest';

import {
    systemList,
    bodyList
} from './models/steller'

import {
    typeList,
    typeGuardianList,
    typeThargoidList
} from './models/types';

import Dashboard from './pages/dashboard';
import NotFound from './pages/notfound';

import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        type: 'dark'
    },
});

const dataProvider = simpleRestProvider('https://api.canonn.tech');

const App = () => (
    <Admin theme={theme} dashboard={Dashboard} catchAll={NotFound} title="Canonn APIv2" dataProvider={dataProvider}>
        <Resource name="systems" list={systemList} />
        <Resource name="bodies" list={bodyList} />
        <Resource name="aptypes" list={typeList} />
        <Resource name="bmtypes" list={typeList} />
        <Resource name="bttypes" list={typeList} />
        <Resource name="cstypes" list={typeList} />
        <Resource name="fgtypes" list={typeList} />
        <Resource name="fmtypes" list={typeList} />
        <Resource name="grtypes" list={typeGuardianList} />
        <Resource name="gstypes" list={typeGuardianList} />
        <Resource name="gvtypes" list={typeList} />
        <Resource name="gytypes" list={typeList} />
        <Resource name="lstypes" list={typeList} />
        <Resource name="tbtypes" list={typeThargoidList} />
        <Resource name="twtypes" list={typeList} />
    </Admin>
);

export default App;