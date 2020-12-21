import React from 'react';
import styled from 'styled-components';;
import { View, Image, Text } from 'react-native';


const NewsImage = styled.Image`
width: 100%;
height: 100%;
overflow: hidden;
`
const Cover = styled.View`
width:100%;
height: 40%;
border-top-left-radius:14px;
border-top-right-radius:14px;
overflow: hidden;
`

const Card = props => (
    <Container>
        <Cover>
            <NewsImage
            source={{
            uri: props.imageUrl,
            }}/>
        </Cover>
        <Title>{props.title}</Title>
        <Source>{props.source_name}</Source>
        <Sentiment>{props.sentiment}</Sentiment>
    </Container>
    )
const Container = styled.View`
background-color:white;

width:315px;
height:280px;
border-radius:20px;
margin-left:20px;
margin-right:20px;
box-shadow:0 5px 15px rgba(0,0,0,0.15)

`

const Sentiment = styled.Text`
font-size:20px
`
const Title = styled.Text`
font-size:20px
`
const Source = styled.Text`
font-size:20px
`
export default Card;