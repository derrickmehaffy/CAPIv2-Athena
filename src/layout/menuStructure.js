const menuStructure = [
    {
        slug: 'celestial',
        parent: null,
        label: 'Celestial',
        resources: [
            'systems',
            'bodies',
            'rings',
            'regions'
        ],               
        collapsed: false
    },

    {
        slug: 'sites',               // slug used as id for the submenu, has to be unique
        parent: null,                // parent if you want nested submenus, use slug of parent
        label: 'Sites',              // Display label for submenu
        resources: [],               // resources in this submenu (see console > Redux > State > admin > resources)
        collapsed: false             // used in state to check if menu is collapsed, leave it alone
    },

        {
            slug: 'sites_biology',    
            parent: 'sites',          
            label: 'Biology',           
            resources: [
                'apsites',
                'bmsites',
                'btsites',
                'fgsites',
                'twsites'
            ],              
            collapsed: false             
        },

        {
            slug: 'sites_geology',    
            parent: 'sites',          
            label: 'Geology',           
            resources: [
                'cssites',
                'fmsites',
                'gvsites',
                'gysites',
                'lssites'
            ],              
            collapsed: false             
        },

        {
            slug: 'sites_guardian',            
            parent: 'sites',               
            label: 'Guardian',           
            resources: [
                'gbsites',
                'grsites',
                'gssites'
            ],              
            collapsed: false             
        },

        {
            slug: 'sites_thargoid',            
            parent: 'sites',                
            label: 'Thargoid',           
            resources: [
                'tbsites',
                'tssites'
            ],              
            collapsed: false             
        },

        {
            slug: 'sites_orbital',            
            parent: 'sites',                
            label: 'Orbital',           
            resources: [
                'gensites'
            ],              
            collapsed: false             
        },

        {
            slug: 'sites_meta',
            parent: 'sites',
            label: 'Site Metadata',
            resources: [],
            collapsed: false
        },

            {
                slug: 'site_meta_guardian_ruins',
                parent: 'sites_meta',
                label: 'Guardian Ruins',
                resources: [],
                collapsed: false
            },

            {
                slug: 'site_meta_guardian_structures',
                parent: 'sites_meta',
                label: 'Guardian Structures',
                resources: [],              
                collapsed: false
            },

    {
        slug: 'reports',            // slug used as id for the submenu, has to be unique
        parent: null,               // parent if you want nested submenus, use slug of parent
        label: 'Reports',           // Display label for submenu
        resources: [],              // resources in this submenu (see console > Redux > State > admin > resources)
        collapsed: false            // used in state to check if menu is collapsed, leave it alone
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
            resources: [
                'gbreports',
                'grreports',
                'gsreports'
            ],              
            collapsed: false             
        },

        {
            slug: 'reports_thargoid',            
            parent: 'reports',                
            label: 'Thargoid',           
            resources: [
                'tbreports',
                'tsreports'
            ],              
            collapsed: false             
        },

        {
            slug: 'reports_orbital',            
            parent: 'reports',                
            label: 'Orbital',           
            resources: [
//                'genreports'
            ],              
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