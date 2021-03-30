import React from 'react';
import { Image } from 'react-native';

export default function Splash() {
    return (
        <Image  
            style={{width: '100%', height: '100%'}}  
            source={{uri: 'https://miro.medium.com/max/1080/1*2rw9zDGUFXsfBQYJY1ZB2g.png'}}  
        />  
    );
}