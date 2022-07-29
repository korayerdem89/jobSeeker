import React from 'react';
import { Text, ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import styles from './Detail.style';
import useFetch from "../../hooks/useFetch/useFetch";
import config from "../../../config";
import RenderHtml from 'react-native-render-html';
import Button from '../../Components/Button/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import {useDispatch} from 'react-redux';

const Detail = ({ route }) => {
    const { id } = route.params;
    const { data, loading, error } = useFetch(config.API_URL + `/${id}`);


    if (loading) {
        return <ActivityIndicator size="large" />
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    const source = {
        html: `${data.contents}`
    };
    return (
        <View style={styles.container}>
            <View style={styles.header_container}>
                <Text numberOfLines={1} style={{ fontSize: 17, marginRight: 70, fontWeight: "bold" }} >{data.name}</Text>
                <Text><Text style={{ color: "#ef5350" }}>Locations:</Text> <Text>{data.locations[0].name}</Text></Text>
                <Text><Text style={{ color: "#ef5350" }}>Job Level:</Text> <Text> {data.levels[0].name}</Text></Text>
                <Text style={{ alignSelf: "center", fontWeight: "700", fontSize: 16 }}>Job Detail</Text>
            </View>
            <ScrollView>
                <RenderHtml
                    baseStyle={{ fontSize: 14, backgroundColor: "white" }}
                    contentWidth={Dimensions.get('window').width}
                    source={source}
                />
            </ScrollView>
            <View style={styles.page_buttons}>
                <Button disabled={loading} onSelect={null} text={<MaterialCommunityIcons name="login" size={14} color="white" />} text2={"Submit"}/>
                <Button disabled={loading} onSelect={null} text={<MaterialIcons name="favorite" size={14} color="white" />} text2={"Favorite Jobs"} />
            </View>
        </View>
    );
};


export default Detail;