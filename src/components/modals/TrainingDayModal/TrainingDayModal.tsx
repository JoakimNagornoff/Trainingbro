import React from 'react';
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
import {MaterialIcon} from '../../Icons/Icons';
import {COLORS} from '../../../constans';

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

  const [isSquat, setIsquat] = useState(true);
  const [isBench, setIsBench] = useState(true);
  const [isAxel, setIsAxel] = useState(true);
  const [isMark, setIsMark] = useState(true);

  //reset state när man stänger ner modalem
  const checkBoxHandler = () => {
    submitToFirebase(squat, bench, axel, mark);
    props.dispatchHideModal();
  };
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
          <Text style={{fontSize: 20, padding: 10}}>Lägg till träningsdag</Text>
          <View>
            <View style={style.inputContainer}>
              <Text style={style.inputContainerText}>SQUATS</Text>
              <TextInput
                style={style.input}
                keyboardType={'numeric'}
                placeholder="Max vikt"
                value={squat}
                editable={isSquat}
                onChangeText={text => setSquat(text)}
              />
              <TouchableOpacity
                onPress={() => {
                  setIsquat(!isSquat);
                }}>
                <MaterialIcon
                  size="large"
                  name={
                    isSquat
                      ? 'check-circle-outline'
                      : 'checkbox-blank-circle-outline'
                  }
                  color={COLORS.black}
                />
              </TouchableOpacity>
            </View>
            <View style={style.inputContainer}>
              <Text>BENCH</Text>
              <TextInput
                style={style.input}
                keyboardType={'numeric'}
                placeholder="Max vikt"
                value={bench}
                onChangeText={text => setBench(text)}
              />
              <TouchableOpacity
                onPress={() => {
                  setIsBench(!isBench);
                }}>
                <MaterialIcon
                  size="large"
                  name={
                    isBench
                      ? 'check-circle-outline'
                      : 'checkbox-blank-circle-outline'
                  }
                  color={COLORS.black}
                />
              </TouchableOpacity>
            </View>
            <View style={style.inputContainer}>
              <Text>AXEL</Text>
              <TextInput
                style={style.input}
                keyboardType={'numeric'}
                placeholder="Max vikt"
                value={axel}
                onChangeText={text => setAxel(text)}
              />
              <TouchableOpacity
                onPress={() => {
                  setIsAxel(!isAxel);
                }}>
                <MaterialIcon
                  size="large"
                  name={
                    isAxel
                      ? 'check-circle-outline'
                      : 'checkbox-blank-circle-outline'
                  }
                />
              </TouchableOpacity>
            </View>
            <View style={style.inputContainer}>
              <Text>MARK</Text>
              <TextInput
                style={style.input}
                keyboardType={'numeric'}
                placeholder="Max vikt"
                value={mark}
                onChangeText={text => setMark(text)}
              />
              <TouchableOpacity
                onPress={() => {
                  setIsMark(!isMark);
                }}>
                <MaterialIcon
                  size="large"
                  name={
                    isMark
                      ? 'check-circle-outline'
                      : 'checkbox-blank-circle-outline'
                  }
                />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              checkBoxHandler();
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
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainerText: {},
});

export default connector(TrainingDayModal);
