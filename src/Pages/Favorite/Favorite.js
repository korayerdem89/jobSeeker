import React from 'react';
import { FlatList, View, Text } from 'react-native';
import styles from './Favorite.style'; 
import Button from '../../Components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import JobsCard from '../../Components/JobsCard';

const FavoritedJobs = ({navigation}) => {
  const jobItem = useSelector(state => state.favoritedItem);
//   const dispatch = useDispatch();
  
  const handleToDetail = (id, name) => {
    navigation.navigate('DetailPage', {id, name});
  };
  
  const FavoritedItem = ({item}) => (
    <View style={styles.inner_container}>
      <JobsCard jobData={item} onClick={() => handleToDetail(item.id, item.name)} />
    </View>
  );

  return (
      <FlatList
      data={jobItem}
      renderItem={FavoritedItem}
      style={styles.container}
    />

  );
};

export default FavoritedJobs;