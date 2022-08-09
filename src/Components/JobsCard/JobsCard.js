import React from 'react'
import { View, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import styles from './JobsCard.style';
const JobsCard = ({ jobData, onClick, removeButton }) => {

    return (
        <TouchableWithoutFeedback onPress={onClick} >
            <View style={removeButton ? styles.remove_container : styles.container}>
            <Text style={{fontWeight:"bold", fontSize:16}} numberOfLines={1}>{jobData.name}</Text>
            <Text style={{fontSize:15}}>{jobData.company.name}</Text>
            <View style={styles.locationItem}>
            <Text style={{fontSize:13, color:"white", fontWeight:"bold"}}>{jobData.locations[0].name}</Text>
            </View>
            <Text style={{textAlign:"right", color:"#ef5350", fontWeight:"600"}}>{jobData.levels[0].name}</Text>
            </View>
          
        </TouchableWithoutFeedback>
    )
}

export default JobsCard;

