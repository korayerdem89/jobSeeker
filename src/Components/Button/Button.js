import React from 'react'
import { Text, TouchableOpacity } from 'react-native';
import styles from './Button.style';
import { MaterialIcons } from '@expo/vector-icons';
const Button = ({ text, onSelect, disabled, text2, favorited }) => {

    return (
        <TouchableOpacity onPress={onSelect} disabled={disabled} style={disabled ? favorited ? styles.favoritedButton : styles.disabledButton : styles.button}>
            {text2 && <MaterialIcons name={text2} size={14} color="white" />}
            <Text style={{ color: "white", fontWeight: "700", fontSize: 14, marginLeft: 5 }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;

