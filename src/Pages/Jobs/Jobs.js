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

    const { data, loading, error } = useFetch(`${config.API_URL}?page=${pageNumber}`, pageNumber); //dinamik sayfa değişimi için useFecth hookuna "pageNumber" değişkeni gönderildi, böylece hooks içindeki useEffect, her sayfa değişiminde tetiklenerek yeni sayfaya geçiyor. (sayfa değiştirmek için redux'ı tercih etmemin sebebi pekiştirme amaçlıdır, daha kolay yöntemler de mevcut"
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
        setPageNumber(page + 1); //setPageNumber(page) deseydim, hooks içindeki useEffect, bir önceki pageNumber değerini baz alarak tetiklenirdi, bu da istenmeyen bir durumdur"
    }

    const handlePreviousPage = () => {
        dispatch(previousPage());
        setPageNumber(page - 1) //setPageNumber(page) deseydim, hooks içindeki useEffect, bir önceki pageNumber değerini baz alarak tetiklenirdi, bu da istenmeyen bir durumdur"
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