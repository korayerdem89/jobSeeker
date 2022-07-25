import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.style';
const Button = ({ text, onSelect }) => {

    return (
        <TouchableOpacity style={styles.button}>
            <Text onPress={onSelect} style={{color:"white", fontWeight:"600", fontSize:16}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;

