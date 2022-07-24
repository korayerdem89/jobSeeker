import React from 'react'
import { View, Text } from 'react-native';

const JobsCard = ({jobData}) => {

return (
    <View>
        <Text>{jobData.name}</Text>
    </View>
)
}

export default JobsCard;

