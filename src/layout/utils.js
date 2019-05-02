
// Returns an array of children of a parent menuStructure category
export const findMenuChildren = (parent, menuStructure) => {

    return menuStructure.filter( submenu => {
        return submenu.parent === parent.slug;
    })

}

// Returns resources that are not present in any menuStructure category
export const filterNonMenuResources = (resources, menuStructure) => {

    let nonMenuResources = [];

    resources.forEach( resource => {

        let inMenu = menuStructure.find( ms => {
            return ms.resources.indexOf( resource.name ) !== -1;
        });

        if(!inMenu) {
            nonMenuResources.push( resource );
        }

    });

    return nonMenuResources;

}