import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';
import {connect, ConnectedProps, useSelector} from 'react-redux';
import TrainingDayModal from '../../components/modals/TrainingDayModal/TrainingDayModal';
import TraningDayList from '../../components/TrainingDay/TraningDayList';
import {RootState} from '../../store';
import {
  hideTrainingDayModal,
  showTrainigdayModal,
} from '../../store/Modals/action/actions';

//SLUTAT HÄR koppla ihop redux som const istället för class

const mapStateToProps = (state: RootState) => ({
  modal: state.modals.openTrainingDayModal,
});
const mapDispatchToProps = {
  dispatchOpen: showTrainigdayModal,
  dispatchHide: hideTrainingDayModal,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = {navigation: any; route: any} & ConnectedProps<
  typeof connector
>;

type Props = PropsFromRedux;

const Home = (props: Props) => {
  return (
    <View>
      <TrainingDayModal route={props.route} navigation={props.navigation} />
      <View>
        <TouchableOpacity
          onPress={() => {
            props.dispatchOpen();
          }}>
          <Text>HÄR</Text>
        </TouchableOpacity>
      </View>
      <TraningDayList route={props.route} navigation={props.navigation} />
    </View>
  );
};

export default connector(Home);
