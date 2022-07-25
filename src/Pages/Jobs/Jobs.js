import React from 'react';
import { SafeAreaView, Text, ActivityIndicator, FlatList, View, TouchableOpacity } from 'react-native';
import styles from './Jobs.style';
import config from "../../../config";
import useFetch from "../../hooks/useFetch/useFetch";
import JobsCard from '../../Components/JobsCard/JobsCard';
import Button from '../../Components/Button/Button';

const Jobs = ({ navigation }) => {
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

    const renderJobs = ({ item }) => (
        <JobsCard jobData={item} onClick={() => handleSelect(item.id)} />
    )

    const nextPage = () => {
        console.log("ileri");
    }

    const previousPage = () => {
        console.log("geri");
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data.results} renderItem={renderJobs} />
            <View style={styles.page_buttons}>
                <Button onSelect={previousPage} text={"<< Geri"} />
                <Button onSelect={nextPage} text={"İleri >>"} />
            </View>
        </SafeAreaView>
    );
};


export default Jobs;