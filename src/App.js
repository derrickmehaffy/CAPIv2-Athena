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

// Sites
import defaultSites from "./sites/defaultSite";
import gbSites from "./sites/gbSite";
import genSites from "./sites/genSite";
import grSites from "./sites/grSite";
import gsSites from "./sites/gsSite";
import tbSites from "./sites/tbSite";
import tsSites from "./sites/tsSite";

// Site Metadata
// Guardian Ruins
import grActiveGroups from "./metadata/guardians/ruins/grActiveGroup";
import grActiveObelisks from "./metadata/guardians/ruins/grActiveObelisk";
import grArtifacts from "./metadata/guardians/ruins/grArtifact";
import grCodexCategories from "./metadata/guardians/ruins/grCodexCategory";
import grCodexData from "./metadata/guardians/ruins/grCodexData";
import grObelisks from "./metadata/guardians/ruins/grObelisk";
import grObeliskGroups from "./metadata/guardians/ruins/grObeliskGroup";
// Guardian Structures
import gsActiveGroups from "./metadata/guardians/structures/gsActiveGroup";
import gsActiveObelisks from "./metadata/guardians/structures/gsActiveObelisk";
import gsArtifacts from "./metadata/guardians/structures/gsArtifact";
import gsCodexCategories from "./metadata/guardians/structures/gsCodexCategory";
import gsCodexData from "./metadata/guardians/structures/gsCodexData";
import gsObelisks from "./metadata/guardians/structures/gsObelisk";
import gsObeliskGroups from "./metadata/guardians/structures/gsObeliskGroup";

// Reports
import defaultReports from "./reports/defaultReport";

// Types
import defaultTypes from "./types/defaultType";
import guardianTypes from "./types/guardianType";
import thargoidTypes from "./types/thargoidType";

// Custom layout
import CAPI_layout from './layout/CAPI_layout';

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
			name="apsites"
			{...defaultSites}
			options={{ label: "AP Sites" }}
		/>
		<Resource
			name="bmsites"
			{...defaultSites}
			options={{ label: "BM Sites" }}
		/>
		<Resource
			name="btsites"
			{...defaultSites}
			options={{ label: "BT Sites" }}
		/>
		<Resource
			name="cssites"
			{...defaultSites}
			options={{ label: "CS Sites" }}
		/>
		<Resource
			name="fgsites"
			{...defaultSites}
			options={{ label: "FG Sites" }}
		/>
		<Resource
			name="fmsites"
			{...defaultSites}
			options={{ label: "FM Sites" }}
		/>
		<Resource
			name="gbsites"
			{...gbSites}
			options={{ label: "GB Sites" }}
		/>
		<Resource
			name="gensites"
			{...genSites}
			options={{ label: "GEN Sites" }}
		/>
		<Resource
			name="grsites"
			{...grSites}
			options={{ label: "GR Sites" }}
		/>
		<Resource
			name="gractivegroups"
			{...grActiveGroups}
			options={{ label: "GR Active Groups" }}
		/>
		<Resource
			name="gractiveobelisks"
			{...grActiveObelisks}
			options={{ label: "GR Active Obelisks" }}
		/>
		<Resource
			name="grartifacts"
			{...grArtifacts}
			options={{ label: "GR Artifacts" }}
		/>
		<Resource
			name="grcodexcategory"
			{...grCodexCategories}
			options={{ label: "GR Codex Categories" }}
		/>
		<Resource
			name="grcodexdata"
			{...grCodexData}
			options={{ label: "GR Codex Data" }}
		/>
		<Resource
			name="grobelisk"
			{...grObelisks}
			options={{ label: "GR Obelisks" }}
		/>
		<Resource
			name="grobeliskgroup"
			{...grObeliskGroups}
			options={{ label: "GR Obelisk Groups" }}
		/>
		<Resource
			name="gssites"
			{...gsSites}
			options={{ label: "GS Sites" }}
		/>
		<Resource
			name="gsactivegsoups"
			{...gsActiveGroups}
			options={{ label: "GS Active Groups" }}
		/>
		<Resource
			name="gsactiveobelisks"
			{...gsActiveObelisks}
			options={{ label: "GS Active Obelisks" }}
		/>
		<Resource
			name="gsartifacts"
			{...gsArtifacts}
			options={{ label: "GS Artifacts" }}
		/>
		<Resource
			name="gscodexcategory"
			{...gsCodexCategories}
			options={{ label: "GS Codex Categories" }}
		/>
		<Resource
			name="gscodexdata"
			{...gsCodexData}
			options={{ label: "GS Codex Data" }}
		/>
		<Resource
			name="gsobelisk"
			{...gsObelisks}
			options={{ label: "GS Obelisks" }}
		/>
		<Resource
			name="gsobeliskgsoup"
			{...gsObeliskGroups}
			options={{ label: "GS Obelisk Groups" }}
		/>
		<Resource
			name="gvsites"
			{...defaultSites}
			options={{ label: "GV Sites" }}
		/>
		<Resource
			name="gysites"
			{...defaultSites}
			options={{ label: "GY Sites" }}
		/>
		<Resource
			name="lssites"
			{...defaultSites}
			options={{ label: "LS Sites" }}
		/>
		<Resource
			name="tbsites"
			{...tbSites}
			options={{ label: "TB Sites" }}
		/>
		<Resource
			name="tssites"
			{...tsSites}
			options={{ label: "TS Sites" }}
		/>
		<Resource
			name="twsites"
			{...defaultSites}
			options={{ label: "TW Sites" }}
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
