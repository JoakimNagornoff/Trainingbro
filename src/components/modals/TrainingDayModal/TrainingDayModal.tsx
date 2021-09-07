import React, {Component} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {RootState} from '../../../store';
import {connect, ConnectedProps, useDispatch, useSelector} from 'react-redux';
import {hideTrainingDayModal} from '../../../store/Modals/action/actions';
import {useState} from 'react';
import BackButton from '../../BackButton/BackButton';
import {submitToFirebase} from '../../../store/Firebase/action/actions';

const mapStateToProps = (state: RootState) => ({
  modal: state.modals.openTrainingDayModal,
  store: state.traingDay.data,
  firebase: state.firebase.fireBasePending,
});

const mapDispatchToProps = {
  dispatchHideModal: hideTrainingDayModal,
  dispatchSubmitToFirebase: submitToFirebase,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = {navigation: any; route: any} & ConnectedProps<
  typeof connector
>;

type Props = PropsFromRedux;

const TrainingDayModal = (props: Props) => {
  const [squat, setSquat] = useState(null);
  const [bench, setBench] = useState(null);
  const [axel, setAxel] = useState(null);
  const [mark, setMark] = useState(null);

  return (
    <Modal transparent={true} visible={props.modal}>
      <View style={{backgroundColor: '#000000aa', flex: 1}}>
        <View
          style={{
            backgroundColor: '#ffffff',
            margin: 50,
            padding: 40,
            width: 300,
            height: 600,
          }}>
          <BackButton
            onPress={() => {
              props.dispatchHideModal();
            }}
          />
          <Text style={{fontSize: 20}}>Lägg till träningsdag</Text>
          <View>
            <Text>SQUATS</Text>
            <TextInput
              style={style.input}
              keyboardType={'numeric'}
              placeholder="Projekt"
              value={squat}
              onChangeText={text => setSquat(text)}
            />
            <Text>BENCH</Text>
            <TextInput
              style={style.input}
              keyboardType={'numeric'}
              placeholder="Projekt"
              value={bench}
              onChangeText={text => setBench(text)}
            />
            <Text>AXEL</Text>
            <TextInput
              style={style.input}
              keyboardType={'numeric'}
              placeholder="Projekt"
              value={axel}
              onChangeText={text => setAxel(text)}
            />
            <Text>MARK</Text>
            <TextInput
              style={style.input}
              keyboardType={'numeric'}
              placeholder="Projekt"
              value={mark}
              onChangeText={text => setMark(text)}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              submitToFirebase(squat, bench, axel, mark);
              props.dispatchHideModal();
            }}>
            <Text>Lägg till</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: '#8A8F9E',
    //borderBottomWidth: StyleSheet.hairlineWidth,
    height: 40,
    fontSize: 15,
    color: '#161F3D',
  },
});

export default connector(TrainingDayModal);
