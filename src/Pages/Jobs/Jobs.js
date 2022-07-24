import React from 'react';
import { SafeAreaView, Text, ActivityIndicator, FlatList, View } from 'react-native';
import styles from './Jobs.style';
import config from "../../../config";
import useFetch from "../../hooks/useFetch/useFetch";
import JobsCard from '../../Components/JobsCard/JobsCard';
const Jobs = ({navigation}) => {
    const { data, loading, error } = useFetch(`${config.API_JOBS_URL}`);

    if (loading) {
        return <ActivityIndicator size="large" />
    }

    if (error) {
        return <Text>{error}</Text>;
    }
    
    const handleSelect = id => {
     navigation.navigate("DetailPage", id)
    };

    const renderJobs = ({item}) => (
        <JobsCard jobData={item} onClick={() => handleSelect(item.id)} />
      )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data.results} renderItem={renderJobs} />
        </SafeAreaView>
    );
};


export default Jobs;