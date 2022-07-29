import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.style';
const Button = ({ text, onSelect, disabled }) => {

    return (
        <TouchableOpacity  onPress={onSelect}  disabled={disabled} style={disabled ? styles.disabledButton : styles.button}>
            <Text style={{color:"white", fontWeight:"600", fontSize:16}}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;

