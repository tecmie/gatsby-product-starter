import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from 'lib/layout/page';
import About from 'components/About';
import config from 'data/SiteConfig';

class AboutPage extends Component {
	render() {
		return (
			<Layout>
				<div className="about-container">
					<Helmet title={`About | ${config.siteTitle}`} />
					<About />
				</div>
			</Layout>
		);
	}
}

export default AboutPage;
