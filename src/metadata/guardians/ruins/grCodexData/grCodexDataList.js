import React from 'react';
import { List, Datagrid, NumberField, ChipField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const grCodexDataList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <ChipField source="grCodexCategory.categoryName" label="Category" />
      <NumberField source="codexNumber" label="Codex Number" textAlign="left" />
      <ChipField source="grPrimaryArtifact.artifactName" label="Primary Artifact" />
      <ChipField source="grSecondaryArtifact.artifactName" label="Secondary Artifact" />
    </Datagrid>
  </List>
);

export default withStyles(styles)(grCodexDataList);