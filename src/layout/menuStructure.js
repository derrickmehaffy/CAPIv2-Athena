const menuStructure = [
    {
        slug: 'reports',            // slug used as id for the submenu, has to be unique
        parent: null,               // parent if you want nested submenus, use slug of parent
        label: 'Reports',           // Display label for submenu
        resources: [
            'gbreports',
            'grreports',
            'gsreports',
            'tsreports'
        ],                           // resources in this submenu (see console > Redux > State > admin > resources)
        collapsed: false             // used in state to check if menu is collapsed, leave it alone
    },

        {
            slug: 'reports_biology',    
            parent: 'reports',          
            label: 'Biology',           
            resources: [
                'apreports',
                'bmreports',
                'btreports',
                'fgreports',
                'tbreports',
                'twreports'
            ],              
            collapsed: false             
        },

        {
            slug: 'reports_geology',    
            parent: 'reports',          
            label: 'Geology',           
            resources: [
                'csreports',
                'fmreports',
                'gvreports',
                'gyreports',
                'lsreports'
            ],              
            collapsed: false             
        },

        {
            slug: 'reports_guardian',            
            parent: 'reports',               
            label: 'Guardian',           
            resources: [],              
            collapsed: false             
        },

        {
            slug: 'reports_thargoid',            
            parent: 'reports',                
            label: 'Thargoid',           
            resources: [],              
            collapsed: false             
        },

        {
            slug: 'reports_orbital',            
            parent: 'reports',                
            label: 'Orbital',           
            resources: [],              
            collapsed: false             
        },

    {
        slug: 'types',
        parent: null,
        label: 'Types',
        resources: [
            'aptypes',
            'bmtypes',
            'bttypes',
            'cstypes',
            'fgtypes',
            'fmtypes',
            'grtypes',
            'gstypes',
            'gvtypes',
            'gytypes',
            'lstypes',
            'tbtypes',
            'twtypes'
        ],
        collapsed: false
    },
]

export default menuStructure;