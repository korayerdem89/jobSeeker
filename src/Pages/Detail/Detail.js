import React from 'react';
import { SafeAreaView, Text, ActivityIndicator } from 'react-native';
import styles from './Detail.style';
import useFetch from "../../hooks/useFetch/useFetch";
import config from "../../../config";

const Detail = ({route}) => {
const {id} = route.params;
const { data, loading, error } = useFetch(config.API_URL+`/${id}`);
 console.log(data.type);
 
 if (loading) {
    return <ActivityIndicator size="large" />
}

if (error) {
    return <Text>{error}</Text>;
}


    return (
        <SafeAreaView>
            <Text>hello {data.contents}</Text>
        </SafeAreaView>
    );
};


export default Detail;