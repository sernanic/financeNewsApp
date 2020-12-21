import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { StyleSheet,ScrollView,SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components';
import Card from '../components/Card'
import {connect} from 'react-redux';
import {useSelector,useDispatch} from 'react-redux'
import TrendingCard from '../components/TrendingCard';
function mapStateToProps(state){
    return{action:state.action}
}
function HomeScreen() {
   
    let [newsList,setNewsList]=useState([]);
    const test = useSelector((state)=>state.action)
    const dispatch = useDispatch()  
    useEffect(() => {
    // TODO: RETRIEVE TOP finance news from 
    fetch("https://stocknewsapi.com/api/v1/category?section=general&items=50&token=atphkzwjro3zazzeyw0uzlpmbq4wuwwn7c9gpr3s")
    .then(response => {
      return response.json();
    }).then(responseData=>{
      setNewsList(responseData.data)
      console.log(newsList)
      
    })
  },[])
  
  return (
    <View style={styles.container}>
      <SafeAreaView>
      <TitleBar>
          <Avatar source={require('../assets/icon.png')}/>
          
            <Title>this life mamam serna</Title>
            <Name> world</Name>
          
      </TitleBar>
      <SubTitle>Most Trending</SubTitle>
      <ScrollView horizontal={true} style={{paddingBottom:150}} showsHorizontalScrollIndicator={false}>
      {newsList.slice(0,10).map((item,index)=>(
          <Card key={index} sentiment={item.sentiment} 
          source_name={item.source_name} title={item.title.slice(0,50)}
          imageUrl = {item.image_url}/>
        ))}
      
      </ScrollView>
      <ScrollView showsVerticalScrollIndicator={false}>
        {newsList.slice(11,).map((item,index)=>(
            <TrendingCard key={index} date={item.date} 
            title={item.title.slice(0,40)} imageUrl = {item.image_url}/>
            ))}
      </ScrollView>
      <StatusBar style="auto" />
      
      </SafeAreaView>
    </View>
  );
}
export default connect(mapStateToProps)(HomeScreen)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBF9F6',
    
  },
});

const SubTitle = styled.Text`
color:black;
font-weight:600;
font-size:16px;
margin-left:20px;
margin-top:50px;
text-transform:uppercase;
margin-left:20px
`

const Title = styled.Text`
font-size:16px;
margin-left:60px
`

const Name = styled.Text`
font-size:20px;
margin-left:60px
`

const TitleBar = styled.View`
width:100%;
margin-top:50px;
padding-left:20px;
`

const Avatar = styled.Image`
width:44px;
height:44px;
background-color:black;
border-radius:22px;
margin-left:20px;
position:absolute;
top:0;
left:0;
`