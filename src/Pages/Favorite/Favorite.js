import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './Favorite.style';
import { useDispatch, useSelector } from 'react-redux';
import JobsCard from '../../Components/JobsCard';
import { removeJob } from '../../context/JobsSlice';

const FavoritedJobs = ({ navigation }) => {
  const jobItem = useSelector(state => state.jobs.favoritedJobs);
    const dispatch = useDispatch();

  const handleToDetail = (id, name) => {
    navigation.navigate('DetailPage', { id, name });
  };

  const removeItem = id => {
    dispatch(removeJob(id));
  };
 
  const favoritedItem = ({ item }) => (
    <View style={styles.inner_container}>
      <JobsCard removeButton jobData={item} onClick={() => handleToDetail(item.id, item.name)} onRemove = {() => removeItem(item.id)}/>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.favHeader}>FAVORITES</Text>
      <FlatList
        data={jobItem}
        renderItem={favoritedItem}
        style={styles.flat_container}
      />
    </View>


  );
};

export default FavoritedJobs;