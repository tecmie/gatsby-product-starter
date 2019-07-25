import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Layout from 'lib/layout/page';
import config from 'data/SiteConfig';

class AboutPage extends Component {
	render() {
		return (
			<Layout>
				<div>
					<Helmet title={`404 | ${config.siteTitle}`} />
					<div>
						<h1>Page not Found</h1>
						<h6>
							You seem to be lost, find your way<a href="/">Home</a>
						</h6>
					</div>
				</div>
			</Layout>
		);
	}
}

export default AboutPage;
