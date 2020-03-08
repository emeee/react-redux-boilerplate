import React from "react";
import * as PropTypes from "prop-types";
import BaseLayout from "../components/layout/BaseLayout";

const Page = ({ title = '', layout: Layout = BaseLayout } = {}) => WrappedComponent => props => {
    return (
        <Layout title={title}>
            <WrappedComponent {...props}/>
        </Layout>
    );
};

Page.propTypes = {
    // Title of the page
    title: PropTypes.string,
};

Page.defaultProps = {
    title: '',
};

export default Page;
