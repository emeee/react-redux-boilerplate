import React from "react";
import * as PropTypes from "prop-types";
import { withStyles } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import styles from './BaseLayout.style';
import logo from '../../assets/logo.svg';

const BaseLayout = ({ classes, title, children}) => {
    return (
        <div className={classes.root}>
            <div className={classes.root}>
                <AppBar position="absolute" classes={{ root: classes.appBarRoot }}>
                    <img src={logo} alt="logo" className={classes.logo} />
                </AppBar>
                <main className={classes.content}>
                    <div>{title && <h3 className={classes.sectionTitle}>{title}</h3>}</div>
                    <div>{children}</div>
                </main>
            </div>
        </div>
    );
};

BaseLayout.propTypes = {
    // Style classes
    classes: PropTypes.object,
    // Title of the page
    title: PropTypes.string,
    // Content inside layout
    children: PropTypes.element,
};

BaseLayout.defaultProps = {
    title: '',
};

export default withStyles(styles)(BaseLayout);
