import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

import React, {useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';
import {UpdateReduxData} from '../../store/TraingDay/action/actions';

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
  useEffect(() => {
    firebase
      .firestore()
      .collection('TraniningDays')
      .get()
      .then(res => {
        const result = res.docs.map(doc => {
          return {id: doc.id, ...doc.data()};
        });
        //setItems([...result]);
        //props.dispatch(result);

        props.dispatch([...result]);
        // props.dispatch(result);
      });
  }, []);

  //slutat här få ut rätt items från storen

  return (
    <View style={style.container}>
      <FlatList
        data={Object.values(props.traningDay)}
        renderItem={({item}) => {
          console.log(item.id, 'items');
        }}
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
