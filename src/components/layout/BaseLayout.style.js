export default theme => ({
    root: {
        display: 'flex',
        flexGrow: 1,
        minHeight: '100vh',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
    },
    appBarRoot: {
        backgroundColor: theme.palette.secondary.main,
        height: 50,
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 9,
        width: 44,
    },
    content: {
        marginTop: 20,
        backgroundColor: '#eef1f5',
        flexGrow: 1,
        paddingBottom: 80,
        paddingTop: 32,
        width: 100,
    },
    mobileToolbarRoot: {
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 0 0 #e6ebf1',
        marginBottom: 1,
        display: 'flex',
        justifyContent: 'space-between',
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    sectionHeader: {
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 0 0 #e6ebf1',
        minHeight: 64,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: '4px 15px',
    },
    sectionContent: {
        overflowY: 'auto',
        height: 'calc(100vh - 104px)', // header height + paddings
        [theme.breakpoints.only('xs')]: {
            padding: '24px 8px',
        },
        [theme.breakpoints.up('sm')]: {
            padding: '24px',
        },
    },
    sectionTitle: {
        display: 'inline-block',
        fontSize: '20px',
        fontWeight: 'bold',
        marginLeft: '10px',
    },
});
