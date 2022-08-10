import React, { useState, useEffect } from 'react';
import { Text, ActivityIndicator, Dimensions, ScrollView, View, Alert } from 'react-native';
import styles from './Detail.style';
import useFetch from "../../hooks/useFetch/useFetch";
import config from "../../../config";
import RenderHtml from 'react-native-render-html';
import Button from '../../Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, addSubmitted } from '../../context/JobsSlice';

const Detail = ({ route }) => {
    const favorites = useSelector(state => state.jobs.favoritedJobs);
    const submits = useSelector(state => state.jobs.submittedJobs);
    const { id } = route.params;
    const { data, loading, error } = useFetch(config.API_URL + `/${id}`);
    const [favorited, setFavorited] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!loading) {
            const favoritedIds = favorites.map(item => item.id.toString());
            const isFavorited = favoritedIds.includes(data.id.toString());
            const submittedIds = submits.map(item => item.id.toString());
            const isSubmitted = submittedIds.includes(data.id.toString());
            if (isFavorited) {
                setFavorited(true);
            } else if (isSubmitted) {
                setSubmitted(true);
            }

        }
    }, [loading])

    if (loading) {
        return <ActivityIndicator size="large" />
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    const source = {
        html: `${data.contents}`
    };

    const handleFavoriteJob = jobData => {
        dispatch(addFavorite(jobData));
        setFavorited(true);
    }
    const handleSubmit = jobData => {
        dispatch(addSubmitted(jobData));
        setSubmitted(true);
        Alert.alert("You Submitted For this Job")
    }

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
                    baseStyle={{ fontSize: 14, backgroundColor: "white", paddingHorizontal: 10 }}
                    contentWidth={Dimensions.get('window').width}
                    source={source}
                />
            </ScrollView>
            <View style={styles.page_buttons}>
                <Button disabled={loading || submitted} onSelect={() => handleSubmit(data)} text2={"login"} text={"Submit"} />
                <Button favorited disabled={loading || favorited} onSelect={() => handleFavoriteJob(data)} text2={favorited ? "favorite" : "favorite-border"} text={favorited ? "FAVORITED" : "Favorite Job"} />
            </View>
        </View>
    );
};


export default Detail;