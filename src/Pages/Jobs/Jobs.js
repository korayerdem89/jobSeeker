import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, ActivityIndicator, FlatList, View, TouchableOpacity } from 'react-native';
import styles from './Jobs.style';
import config from "../../../config";
import useFetch from "../../hooks/useFetch/useFetch";
import JobsCard from '../../Components/JobsCard/JobsCard';
import Button from '../../Components/Button/Button';
import { useDispatch } from 'react-redux';
const Jobs = ({ navigation }) => {
    const [pageNumber, setPageNumber] = useState(20);

    const { data, loading, error } = useFetch(`${config.API_URL}?page=${pageNumber}`, pageNumber); 

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

    const handleNextPage = () => {
        if (pageNumber === 90) {
            setPageNumber(0);
        }
        setPageNumber(pageNumber + 1);
    }
    const handlePreviousPage = () => {
        setPageNumber(pageNumber - 1)  //page = 0 'da geri butonunu kaldırdığım için koşul atamama gerek kalmadı
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList data={data.results} renderItem={renderJobs} />
            <View style={styles.page_buttons}>
                {pageNumber > 0 && <Button disabled={loading} onSelect={handlePreviousPage} text={"<< Geri"} />}
                <Button disabled={loading} onSelect={handleNextPage} text={"İleri >>"} />
            </View>
        </SafeAreaView>
    );
};


export default Jobs;