import React, {Component} from 'react';
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
function WorkinDay({id}) {
  return (
    <View style={style.traingItem}>
      <Text>{id}</Text>
    </View>
  );
}

const TraningDayList = (props: Props) => {
  return (
    <View style={style.container}>
      <FlatList
        data={props.traningDay}
        refreshing={false}
        renderItem={({item}) => <WorkinDay id={WorkinDay.id} />}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 4,
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
