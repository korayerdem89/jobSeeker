import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.style';
const Button = ({ text, onSelect, disabled,text2,favorited }) => {

    return (
        <TouchableOpacity  onPress={onSelect}  disabled={disabled} style={disabled ? favorited ? styles.favoritedButton : styles.disabledButton : styles.button}>
            <Text style={{color:"white", fontWeight:"700", fontSize:14}}>{text}</Text>
            {text2 && <Text style={{color:"white", fontWeight:"700", fontSize:14, marginLeft:5}}>{text2}</Text>}
        </TouchableOpacity>
    )
}

export default Button;

