import firebase from '@react-native-firebase/app';

import '@react-native-firebase/auth';

import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {UpdateReduxData} from '../../store/TraingDay/action/actions';
import ActivityIndicator from '../ActivityIndicator/ActivityIndicator';

const mapStateToProps = (state: RootState) => ({
  traningDay: state.traingDay.data,
});

const mapDispatchToProps = {
  dispatch: UpdateReduxData,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = {navigation: any; route: any} & ConnectedProps<
  typeof connector
>;

type Props = PropsFromRedux;
function WorkinDay({squat, bench, axel, mark}) {
  return (
    <View style={style.traingItem}>
      <View>
        <Text>{squat}</Text>
      </View>
      <View>
        <Text>{bench}</Text>
      </View>
      <View>
        <Text>{axel}</Text>
      </View>
      <View>
        <Text>{mark}</Text>
      </View>
    </View>
  );
}

const TraningDayList = (props: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = firebase
      .firestore()
      .collection('TraniningDays')
      .onSnapshot(querySnapShot => {
        const traningDays = [];

        querySnapShot.forEach(documentSnapShot => {
          traningDays.push({
            id: documentSnapShot.id,
            ...documentSnapShot.data(),
          });
        });
        setLoading(false);
        props.dispatch(traningDays);
        console.log('change');
      });
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View style={style.container}>
      <FlatList
        data={props.traningDay}
        renderItem={({item}) => (
          <WorkinDay
            squat={item.TraningDay.squat}
            bench={item.TraningDay.bench}
            axel={item.TraningDay.axel}
            mark={item.TraningDay.mark}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'space-between',

    flexDirection: 'row',
  },
  traingItem: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 100,
    width: 360,
  },
});

export default connector(TraningDayList);
