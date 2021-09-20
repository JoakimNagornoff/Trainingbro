import {firebase} from '@react-native-firebase/auth';
import React, {Component, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {ApplicationState, RootState} from '../../store';

const mapStateToProps = (state: RootState) => ({
  traningDay: state.traingDay.data,
});

const mapDispatchToProps = {};

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
  const [data, setData] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection('TraniningDays')
      .get()
      .then(res => {
        const result = res.docs.map(doc => {
          return {id: doc.id, ...doc.data()};
        });

        setData(result);
      });
  }),
    [data];
  return (
    <View style={style.container}>
      <FlatList
        data={Object.values(data)}
        refreshing={false}
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
    height: 80,
    width: 360,
  },
});

export default connector(TraningDayList);
