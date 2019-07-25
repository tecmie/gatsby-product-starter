import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-content: center;
	align-items: center;
	min-height: 300px;
`;

class About extends Component {
	render() {
		return (
			<Wrapper>
				<h1>Edit About component or pages/about.jsx to include your information.</h1>
			</Wrapper>
		);
	}
}

export default About;
