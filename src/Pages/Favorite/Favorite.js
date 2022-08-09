import React from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import styles from './Favorite.style';
import Button from '../../Components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import JobsCard from '../../Components/JobsCard';
import { FontAwesome } from '@expo/vector-icons';


const FavoritedJobs = ({ navigation }) => {
  const jobItem = useSelector(state => state.jobs.favoritedJobs);
  //   const dispatch = useDispatch();

  const handleToDetail = (id, name) => {
    navigation.navigate('DetailPage', { id, name });
  };

  const favoritedItem = ({ item }) => (
    <View style={styles.inner_container}>
      <TouchableOpacity style={styles.delete_item}><FontAwesome name="remove" size={24} color="#ef5350" /></TouchableOpacity>
      <JobsCard removeButton jobData={item} onClick={() => handleToDetail(item.id, item.name)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.favHeader}>Favorite Jobs</Text>
      <FlatList
        data={jobItem}
        renderItem={favoritedItem}
        style={styles.flat_container}
      />
    </View>


  );
};

export default FavoritedJobs;