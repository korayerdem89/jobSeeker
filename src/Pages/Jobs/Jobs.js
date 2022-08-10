import React, { useState, useEffect } from 'react';
import { SafeAreaView, Text, ActivityIndicator, FlatList, View, TouchableOpacity } from 'react-native';
import styles from './Jobs.style';
import config from "../../../config";
import useFetch from "../../hooks/useFetch/useFetch";
import JobsCard from '../../Components/JobsCard/JobsCard';
import Button from '../../Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { nextPage, previousPage } from '../../context/JobsSlice';
const Jobs = ({ navigation }) => {
    const page = useSelector(state => state.jobs.pageNumber);
    const [pageNumber, setPageNumber] = useState(page);
    console.log(page);
    const { data, loading, error } = useFetch(`${config.API_URL}?page=${pageNumber}`, pageNumber);
    const dispatch = useDispatch();
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
        dispatch(nextPage());
        if (page === 4) {
            setPageNumber(6)
        } else {
        setPageNumber(page+1);
        }
    }

    const handlePreviousPage = () => {
        dispatch(previousPage());
        if(page === 6) {
            setPageNumber(4)
        } else {
        setPageNumber(page-1)
        }
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