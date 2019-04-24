import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from './utils/ra-strapi-rest';

import './App.css';

// Pages
import Dashboard from './pages/dashboard';
import NotFound from './pages/notfound';

// Celestial
import systems from './celestial/system';
import bodies from './celestial/body';
import rings from './celestial/ring';
import regions from './celestial/region';

// Types
import defaultTypes from './types/default';
import guardianTypes from './types/guardian';
import thargoidTypes from './types/thargoid';

import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const dataProvider = simpleRestProvider('https://api.canonn.tech');

const App = () => (
  <Admin
    theme={theme}
    dashboard={Dashboard}
    catchAll={NotFound}
    title="Canonn APIv2"
    dataProvider={dataProvider}
  >
    <Resource name="systems" {...systems} />
    <Resource name="bodies" {...bodies} />
    <Resource name="aptypes" {...defaultTypes} />
    <Resource name="bmtypes" {...defaultTypes} />
    <Resource name="bttypes" {...defaultTypes} />
    <Resource name="cstypes" {...defaultTypes} />
    <Resource name="fgtypes" {...defaultTypes} />
    <Resource name="fmtypes" {...defaultTypes} />
    <Resource name="grtypes" {...guardianTypes} />
    <Resource name="gstypes" {...guardianTypes} />
    <Resource name="gvtypes" {...defaultTypes} />
    <Resource name="gytypes" {...defaultTypes} />
    <Resource name="lstypes" {...defaultTypes} />
    <Resource name="tbtypes" {...thargoidTypes} />
    <Resource name="twtypes" {...defaultTypes} />
  </Admin>
);

export default App;
