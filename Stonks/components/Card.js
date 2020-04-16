import React from 'react';
import styled from 'styled-components';

export function Card (props){
	<Container>
		<Content>
			<Name>{props.username}</Name>
			<TweetText>{props.text}</TweetText>
		</Content>
	</Container>
};

const Container = styled.View`
	background: #fff;
	height: 200px;
	width: 150px;
	border-radius: 14px;
	margin: 18px;
	margin-top: 20px;
`;


const Content = styled.View`
	padding-top: 10px;
	flex-direction: column;
	align-items: center;
	height: 60px;
`;

const Name = styled.Text`
	color: #3c4560;
	font-size: 20px;
	font-weight: 600;
`;

const TweetText= styled.Text`
	color: #b8b3c3;
	font-size: 15px;
	font-weight: 600;
	margin-top: 4px;
`;