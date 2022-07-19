import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './Jobs.style';
import config from "../../../config";
import useFetch from "../../hooks/useFetch/useFetch";
const Jobs = () => {
    const { data, loading, error } = useFetch(`${config.API_JOBS_URL}`);
 
    return (
        <SafeAreaView>
            <Text>Hello</Text>
        </SafeAreaView>
    );
};


export default Jobs;