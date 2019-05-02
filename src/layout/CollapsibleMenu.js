import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import {
    getResources,
    MenuItemLink,
} from 'react-admin';

import menuStructure from './menuStructure';

import { findMenuChildren, filterNonMenuResources } from './utils';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import Collapse from '@material-ui/core/Collapse';

class CollapsibleMenu extends React.Component {

    constructor(props) {
        super();

        this.state = {
            submenus: menuStructure 
        }
    }

    // toggle subMenu show/hide
    collapseClick = (toggleMenu) => {

        let menu = this.state.submenus.find( m => {
            return m.slug === toggleMenu.slug;
        })

        if(menu) {
            menu.collapsed = !menu.collapsed;
        }

        // This could really use some refactoring: do not rerender the whole menu
        // Split into smaller components
        this.setState({
            submenus: [ ...this.state.submenus ]
        });

    }

    // Renders menu tree of resources based on ./menuStructure.js
    renderCollapsible = (parent) => {

        // This is based on https://material-ui.com/api/list/
        // Would probably use some better styling/structure from material-design

        const { resources } = this.props;

        if(parent && resources) {

            let childrenMenus = findMenuChildren(parent, menuStructure);
            let resourceKeys = parent.resources;

            return(
                <List key={'list/'+parent.slug}>
                    <ListItem key={parent.slug} button onClick={ () => { this.collapseClick(parent) } }>
                        <ListItemText primary={parent.label} />
                        {parent.collapsed ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Collapse in={parent.collapsed} timeout="auto" unmountOnExit>
                        <List component="div">
                            {
                                resourceKeys.map( rk => {
                                
                                    let r = resources.find( resource => {
                                        return resource.name === rk;
                                    });
                                
                                    return(
                                        <MenuItemLink key={r.name} to={r.name} primaryText={r.options.label} />
                                    )
                                })
                            }
                            {
                                ( childrenMenus && childrenMenus.length > 0 ) && (
                                
                                    childrenMenus.map( cm => {
                                        return this.renderCollapsible(cm)
                                    })
                                )
                            }
                        </List>
                    </Collapse>
                
                </List>
            )

        } else {
            return null;
        }

    }

    // Render top level of menu, and then go down the rabbit hole (menu categories)...
    renderMenu = (menuStructure, resources) => {

        // Things that are not in menuStucture.js
        let nonMenuResources = filterNonMenuResources(resources, menuStructure);

            // Sort alphabetically
            nonMenuResources = nonMenuResources.sort( (a,b) => {
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })

        // Top level submenus (the ones with no parent)
        let topLevel = menuStructure.filter( menu => {
            return menu.parent == null;
        });

        return( 
            <List>
                {
                    // Render all resources that are not in a menu category specified in layout/menuStructure.js first
                    nonMenuResources.map( nmr => {

                        // Display nmr label or name if there's no label
                        let displayName = nmr.options.label || nmr.name;

                        return (
                            <MenuItemLink key={nmr.name} to={nmr.name} primaryText={displayName} />
                        )
                    })
                }

                {
                    // Then render the menu structure based on layout/menuStructure.js
                    topLevel.map( tl => {
                        return this.renderCollapsible(tl);
                    })
                }
            </List>
        )

    }

    render() {

        const { resources } = this.props;

        return (
            <List>
                { this.renderMenu(menuStructure, resources) }
            </List>
        )

    }
}

const mapStoreToProps = (store, ownProps) => {
    return {
        resources: getResources(store)
    }
}

export default withRouter( connect(mapStoreToProps, null)(CollapsibleMenu) );