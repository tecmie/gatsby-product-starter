import React from 'react';
import Helmet from 'react-helmet';
import config from 'data/SiteConfig';
import styled from 'styled-components';

const Wrapper = styled.div`
	box-sizing: border-box;
	height: 100%;
	margin: 0;
	padding: 20px;
`;

export default class MainLayout extends React.Component {
	render() {
		const { children } = this.props;
		return (
			<Wrapper>
				<Helmet>
					<meta name="description" content={config.siteDescription} />
				</Helmet>
				{children}
			</Wrapper>
		);
	}
}
