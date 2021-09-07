import {firebase} from '@react-native-firebase/auth';
import React, {Component, useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {compose} from 'redux';
import {ApplicationState, RootState} from '../../store';

//7/9 Lägg till regler till traningdayModal och fixa med firebase actions

const mapStateToProps = (state: RootState) => ({
  traningDay: state.traingDay.data,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = {navigation: any; route: any} & ConnectedProps<
  typeof connector
>;

type Props = PropsFromRedux;
function WorkinDay({id}) {
  return (
    <View style={style.traingItem}>
      <Text>{id}</Text>
      <Text></Text>
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
        data={data}
        refreshing={false}
        renderItem={({item}) => <WorkinDay id={item.id} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
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
