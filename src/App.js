import React from "react";
import { Admin, Resource } from "react-admin";
import simpleRestProvider from "./utils/ra-strapi-rest";

import "./App.css";

// Pages
import Dashboard from "./pages/dashboard";
import NotFound from "./pages/notfound";

// Celestial
import systems from "./celestial/system";
import bodies from "./celestial/body";
import rings from "./celestial/ring";
import regions from "./celestial/region";

// Reports
import defaultReports from "./reports/defaultReport";
/*
import gbReports from './reports/gbReports';
import genReports from './reports/genReports';
import grReports from './reports/grReports';
import gsReports from './reports/gsReports';
import tbReports from './reports/tbReports';
import tsReports from './reports/tsReports';
*/

// Types
import defaultTypes from "./types/defaultType";
import guardianTypes from "./types/guardianType";
import thargoidTypes from "./types/thargoidType";

// Custom layout
import CAPI_layout from './layout/CAPI_layout'

import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
	palette: {
		type: "dark",
		primary: { main: "#FFB74D", contrastText: "#000000" },
		secondary: { main: "#FB8C00", contrastText: "#000000" }
	}
});

const dataProvider = simpleRestProvider("https://api.canonn.tech");

const App = () => (
	<Admin
		theme={theme}
		dashboard={Dashboard}
		catchAll={NotFound}
		title="Canonn APIv2"
		dataProvider={dataProvider}
		appLayout={CAPI_layout}
	>
		<Resource 
			name="systems"
			{...systems}
			options={{ label: "Systems" }} 
		/>
		<Resource 
			name="bodies"
			{...bodies}
			options={{ label: "Bodies" }} 
		/>
		<Resource 
			name="rings"
			{...rings}
			options={{ label: "Rings" }} 
		/>
		<Resource 
			name="regions"
			{...regions}
			options={{ label: "Regions" }} 
		/>
		<Resource
			name="apreports"
			{...defaultReports}
			options={{ label: "AP Reports" }}
		/>
		<Resource
			name="bmreports"
			{...defaultReports}
			options={{ label: "BM Reports" }}
		/>
		<Resource
			name="btreports"
			{...defaultReports}
			options={{ label: "BT Reports" }}
		/>
		<Resource
			name="csreports"
			{...defaultReports}
			options={{ label: "CS Reports" }}
		/>
		<Resource
			name="gbreports"
			{...defaultReports}
			options={{ label: "GB Reports" }}
		/>
		<Resource
			name="grreports"
			{...defaultReports}
			options={{ label: "GR Reports" }}
		/>
		<Resource
			name="gsreports"
			{...defaultReports}
			options={{ label: "GS Reports" }}
		/>
		<Resource
			name="fgreports"
			{...defaultReports}
			options={{ label: "FG Reports" }}
		/>
		<Resource
			name="fmreports"
			{...defaultReports}
			options={{ label: "FM Reports" }}
		/>
		<Resource
			name="gvreports"
			{...defaultReports}
			options={{ label: "GV Reports" }}
		/>
		<Resource
			name="gyreports"
			{...defaultReports}
			options={{ label: "GY Reports" }}
		/>
		<Resource
			name="lsreports"
			{...defaultReports}
			options={{ label: "LS Reports" }}
		/>
		<Resource
			name="tbreports"
			{...defaultReports}
			options={{ label: "TB Reports" }}
		/>
		<Resource
			name="tsreports"
			{...defaultReports}
			options={{ label: "TS Reports" }}
		/>
		<Resource
			name="twreports"
			{...defaultReports}
			options={{ label: "TW Reports" }}
		/>
		<Resource
			name="aptypes"
			{...defaultTypes}
			options={{ label: "AP Types" }}
		/>
		<Resource
			name="bmtypes"
			{...defaultTypes}
			options={{ label: "BM Types" }}
		/>
		<Resource
			name="bttypes"
			{...defaultTypes}
			options={{ label: "BT Types" }}
		/>
		<Resource
			name="cstypes"
			{...defaultTypes}
			options={{ label: "CS Types" }}
		/>
		<Resource
			name="fgtypes"
			{...defaultTypes}
			options={{ label: "FG Types" }}
		/>
		<Resource
			name="fmtypes"
			{...defaultTypes}
			options={{ label: "FM Types" }}
		/>
		<Resource
			name="grtypes"
			{...guardianTypes}
			options={{ label: "GR Types" }}
		/>
		<Resource
			name="gstypes"
			{...guardianTypes}
			options={{ label: "GS Types" }}
		/>
		<Resource
			name="gvtypes"
			{...defaultTypes}
			options={{ label: "GV Types" }}
		/>
		<Resource
			name="gytypes"
			{...defaultTypes}
			options={{ label: "GY Types" }}
		/>
		<Resource
			name="lstypes"
			{...defaultTypes}
			options={{ label: "LS Types" }}
		/>
		<Resource
			name="tbtypes"
			{...thargoidTypes}
			options={{ label: "TB Types" }}
		/>
		<Resource
			name="twtypes"
			{...defaultTypes}
			options={{ label: "TW Types" }}
		/>
	</Admin>
);

export default App;
