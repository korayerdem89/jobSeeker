import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, ActivityIndicator, FlatList, View, TouchableOpacity } from 'react-native';
import styles from './Jobs.style';
import config from "../../../config";
import useFetch from "../../hooks/useFetch/useFetch";
import JobsCard from '../../Components/JobsCard/JobsCard';
import Button from '../../Components/Button/Button';

const Jobs = ({ navigation }) => {

    const [pageNumber, setPageNumber] = useState(0);
    const { data, loading, error } = useFetch(`${config.API_URL}?page=${pageNumber}`);



    if (loading) {
        return <ActivityIndicator size="large" />
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    const handleSelect = id => {
        navigation.navigate("DetailPage", { id });
    };

    const renderJobs = ({ item }) => (
        <JobsCard jobData={item} onClick={() => handleSelect(item.id)} />
    )

    const nextPage = () => {
        setPageNumber(pageNumber + 1)
    }

    const previousPage = () => {
        setPageNumber(pageNumber - 1)
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data.results} renderItem={renderJobs} />
            <View style={styles.page_buttons}>
                {pageNumber > 0 && <Button disabled={loading} onSelect={previousPage} text={"<< Geri"} />}
                <Button disabled={loading} onSelect={nextPage} text={"İleri >>"} />
            </View>
        </SafeAreaView>
    );
};


export default Jobs;