import React from 'react';
import { List, Datagrid, NumberField, ChipField } from 'react-admin';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = {};

const gsCodexDataList = props => (
  <List {...props} sort={{ field: 'id', order: 'ASC' }}>
    <Datagrid>
      <NumberField source="id" label="ID" textAlign="left" />
      <ChipField source="gsCodexCategory.categoryName" label="Category" />
      <NumberField source="codexNumber" label="Codex Number" textAlign="left" />
      <ChipField source="gsPrimaryArtifact.artifactName" label="Primary Artifact" />
      <ChipField source="gsSecondaryArtifact.artifactName" label="Secondary Artifact" />
    </Datagrid>
  </List>
);

export default withStyles(styles)(gsCodexDataList);