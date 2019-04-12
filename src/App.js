import React from 'react';
import { Admin, Resource } from 'react-admin';
import simpleRestProvider from './utils/ra-strapi-rest';

import {
    typelist
} from './models/types';

const dataProvider = simpleRestProvider('http://localhost:1337');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="aptypes" list={typelist} />
        <Resource name="bmtypes" list={typelist} />
        <Resource name="bttypes" list={typelist} />
    </Admin>
);

export default App;