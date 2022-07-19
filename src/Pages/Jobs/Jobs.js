import React from 'react';
import { SafeAreaView, Text, ActivityIndicator } from 'react-native';
import styles from './Jobs.style';
import config from "../../../config";
import useFetch from "../../hooks/useFetch/useFetch";
import JobsCard from '../../Components/JobsCard/JobsCard';
const Jobs = () => {
    const { data, loading, error } = useFetch(`${config.API_JOBS_URL}`);

    if (loading) {
        return <ActivityIndicator size="large" />
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return (
        <SafeAreaView>
            <JobsCard />
        </SafeAreaView>
    );
};


export default Jobs;