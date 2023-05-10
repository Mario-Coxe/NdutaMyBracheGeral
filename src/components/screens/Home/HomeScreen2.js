import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useGetUserDataQuery} from '../../../features/user/services/userService';

const HomeScreen2 = () => {
  const token = useSelector(state => state.auth.token);
  const {
    data: user,
    error,
    isLoading,
  } = useGetUserDataQuery(null, {
    skip: !token,
  });

  console.log(JSON.stringify(user, null, 2));

  useEffect(() => {
    if (error) {
      console.error('Failed to fetch user:', error);
    }
  }, [error]);

  if (isLoading || !user) {
    return (
      <View style={styles.container}>
        <Text>Loading user data...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text>User Information:</Text>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>Phone: {user.phone}</Text>
      {/* Add other user fields as necessary */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    backgroundColor: '#000',
  },
});

export default HomeScreen2;
