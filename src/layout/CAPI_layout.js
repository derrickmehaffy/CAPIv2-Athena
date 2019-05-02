import React from "react";

import CollapsibleMenu from './CollapsibleMenu.js';
import { Layout } from 'react-admin';

const CAPI_layout = props => <Layout {...props} menu={CollapsibleMenu} />;

export default CAPI_layout;