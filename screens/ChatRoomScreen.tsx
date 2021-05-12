import React from 'react';
import {FlatList, Text, ImageBackground, Appearance } from 'react-native';

import { useRoute } from '@react-navigation/native';

import chatRoomData from '../data/Chats';
import ChatMessage from "../components/ChatMessage";
import BG from '../assets/images/BG.png';
import BGD from '../assets/images/BGD.png';
import InputBox from "../components/InputBox";

const colorScheme = Appearance.getColorScheme()
let background = BG
if (colorScheme === 'dark') [
  background = BGD
]


const ChatRoomScreen = () => {

  const route = useRoute();

  // console.log(route.params)

  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={background}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <InputBox />
    </ImageBackground>
  );
}

export default ChatRoomScreen;
