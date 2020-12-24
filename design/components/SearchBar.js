import React, { Component } from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components';

const Search = ({navigation}) => {
  const [value, onChangeText] = React.useState('Search');

  return (
    <SearchBar
      onChangeText={text => onChangeText(text)}
      value={value}
      returnKeyType = {"search"}
      onFocus={() => onChangeText('')}
      onSubmitEditing={()=>navigation.navigate('Profile',{value})}
    />
  );
}


const SearchBar = styled.TextInput`

width: 259px;
height: 43px;
background: #F5F5F5;
box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
border-radius: 20px;
padding: 10px;
align-self: center;

`

export default Search;