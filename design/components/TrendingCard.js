import React from 'react';
import styled from 'styled-components';;
import { View, Image, Text } from 'react-native';


const TrendingCard = props => (
    <Container>
            <NewsImage
            source={{
            uri: props.imageUrl,
            }}/>
        <ArticleInfo>
            <Title>{props.title}</Title>
            <BottomWrapper>
                <Date>{props.date}</Date>
                <Text>hello</Text>
                <Text>hello</Text>
            </BottomWrapper>
        </ArticleInfo>
    </Container>
)
const Container= styled.View`
flex-direction:row;
width: 100%;
height:100px;
margin: 20px
`
const NewsImage = styled.Image`
width:100px;
height:100px;
border-radius:10px

`
const ArticleInfo = styled.View`
width:100%;
height: 100%;
flex:1;
`
const BottomWrapper = styled.View`
flex-direction:row;
margin-top:auto
`
const Title = styled.Text`
font-size:20px;
font-weight:600;
padding-left:10px;
padding-right:8px
`
const Date = styled.Text`

`


export default TrendingCard;