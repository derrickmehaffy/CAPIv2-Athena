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
			options={{ label: "Amphora Plants (AP)" }}
		/>
		<Resource
			name="bmsites"
			{...defaultSites}
			options={{ label: "Bark Mounds (BM)" }}
		/>
		<Resource
			name="btsites"
			{...defaultSites}
			options={{ label: "Brain Trees (BT)" }}
		/>
		<Resource
			name="cssites"
			{...defaultSites}
			options={{ label: "Crystalline Shards (CS)" }}
		/>
		<Resource
			name="fgsites"
			{...defaultSites}
			options={{ label: "Fungal Gourds (FG)" }}
		/>
		<Resource
			name="fmsites"
			{...defaultSites}
			options={{ label: "Fumaroles (FM)" }}
		/>
		<Resource
			name="gbsites"
			{...gbSites}
			options={{ label: "Guardian Beacons (GB)" }}
		/>
		<Resource
			name="gensites"
			{...genSites}
			options={{ label: "Generation Ships (GEN)" }}
		/>
		<Resource
			name="grsites"
			{...grSites}
			options={{ label: "Guardian Ruins (GR)" }}
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
			name="grcodexcategories"
			{...grCodexCategories}
			options={{ label: "GR Codex Categories" }}
		/>
		<Resource
			name="grcodexdata"
			{...grCodexData}
			options={{ label: "GR Codex Data" }}
		/>
		<Resource
			name="grobelisks"
			{...grObelisks}
			options={{ label: "GR Obelisks" }}
		/>
		<Resource
			name="grobeliskgroups"
			{...grObeliskGroups}
			options={{ label: "GR Obelisk Groups" }}
		/>
		<Resource
			name="gssites"
			{...gsSites}
			options={{ label: "Guardian Structures (GS)" }}
		/>
		<Resource
			name="gsactivegroups"
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
			name="gscodexcategories"
			{...gsCodexCategories}
			options={{ label: "GS Codex Categories" }}
		/>
		<Resource
			name="gscodexdata"
			{...gsCodexData}
			options={{ label: "GS Codex Data" }}
		/>
		<Resource
			name="gsobelisks"
			{...gsObelisks}
			options={{ label: "GS Obelisks" }}
		/>
		<Resource
			name="gsobeliskgroups"
			{...gsObeliskGroups}
			options={{ label: "GS Obelisk Groups" }}
		/>
		<Resource
			name="gvsites"
			{...defaultSites}
			options={{ label: "Gas Vents (GV)" }}
		/>
		<Resource
			name="gysites"
			{...defaultSites}
			options={{ label: "Geysers (GY)" }}
		/>
		<Resource
			name="lssites"
			{...defaultSites}
			options={{ label: "Lava Spouts (LS)" }}
		/>
		<Resource
			name="tbsites"
			{...tbSites}
			options={{ label: "Thargoid Barnacles (TB)" }}
		/>
		<Resource
			name="tssites"
			{...tsSites}
			options={{ label: "Thargoid Structures (TS)" }}
		/>
		<Resource
			name="twsites"
			{...defaultSites}
			options={{ label: "Tube Worms (TW)" }}
		/>
		<Resource
			name="apreports"
			{...defaultReports}
			options={{ label: "Amphora Plants (AP)" }}
		/>
		<Resource
			name="bmreports"
			{...defaultReports}
			options={{ label: "Bark Mounds (BM)" }}
		/>
		<Resource
			name="btreports"
			{...defaultReports}
			options={{ label: "Brain Trees (BT)" }}
		/>
		<Resource
			name="csreports"
			{...defaultReports}
			options={{ label: "Crystalline Shards (CS)" }}
		/>
		<Resource
			name="fgreports"
			{...defaultReports}
			options={{ label: "Fungal Gourds (FG)" }}
		/>
		<Resource
			name="fmreports"
			{...defaultReports}
			options={{ label: "Fumaroles (FM)" }}
		/>
		<Resource
			name="gbreports"
			{...defaultReports}
			options={{ label: "Guardian Beacons (GB)" }}
		/>
		<Resource
			name="grreports"
			{...defaultReports}
			options={{ label: "Guardian Ruins (GR)" }}
		/>
		<Resource
			name="gsreports"
			{...defaultReports}
			options={{ label: "Guardian Structures (GS)" }}
		/>
		<Resource
			name="gvreports"
			{...defaultReports}
			options={{ label: "Gas Vents (GV)" }}
		/>
		<Resource
			name="gyreports"
			{...defaultReports}
			options={{ label: "Geysers (GY)" }}
		/>
		<Resource
			name="lsreports"
			{...defaultReports}
			options={{ label: "Lava Spouts (LS)" }}
		/>
		<Resource
			name="tbreports"
			{...defaultReports}
			options={{ label: "Thargoid Barnacles (TB)" }}
		/>
		<Resource
			name="tsreports"
			{...defaultReports}
			options={{ label: "Thargoid Structures (TS)" }}
		/>
		<Resource
			name="twreports"
			{...defaultReports}
			options={{ label: "Tube Worms (TW)" }}
		/>
		<Resource
			name="aptypes"
			{...defaultTypes}
			options={{ label: "Amphora Plants (AP)" }}
		/>
		<Resource
			name="bmtypes"
			{...defaultTypes}
			options={{ label: "Bark Mounds (BM)" }}
		/>
		<Resource
			name="bttypes"
			{...defaultTypes}
			options={{ label: "Brain Trees (BT)" }}
		/>
		<Resource
			name="cstypes"
			{...defaultTypes}
			options={{ label: "Crystalline Shards (CS)" }}
		/>
		<Resource
			name="fgtypes"
			{...defaultTypes}
			options={{ label: "Fungal Gourds (FG)" }}
		/>
		<Resource
			name="fmtypes"
			{...defaultTypes}
			options={{ label: "Fumaroles (FM)" }}
		/>
		<Resource
			name="grtypes"
			{...guardianTypes}
			options={{ label: "Guardian Ruins (GR)" }}
		/>
		<Resource
			name="gstypes"
			{...guardianTypes}
			options={{ label: "Guardian Structures (GS)" }}
		/>
		<Resource
			name="gvtypes"
			{...defaultTypes}
			options={{ label: "Gas Vents (GV)" }}
		/>
		<Resource
			name="gytypes"
			{...defaultTypes}
			options={{ label: "Geysers (GY)" }}
		/>
		<Resource
			name="lstypes"
			{...defaultTypes}
			options={{ label: "Lava Spouts (LS)" }}
		/>
		<Resource
			name="tbtypes"
			{...thargoidTypes}
			options={{ label: "Thargoid Barnacles (TB)" }}
		/>
		<Resource
			name="twtypes"
			{...defaultTypes}
			options={{ label: "Tube Worms (TW)" }}
		/>
	</Admin>
);

export default App;
