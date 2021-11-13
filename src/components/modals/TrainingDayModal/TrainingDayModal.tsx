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

import {MaterialIcon} from '../../Icons/Icons';
import {COLORS} from '../../../constans';
import DateTimePicker from '@react-native-community/datetimepicker';
import formatDate from '../../../constans/formateDate';
import {
  addTraningDay,
  resetStore,
} from '../../../store/TraingDay/action/actions';

const mapStateToProps = (state: RootState) => ({
  modal: state.modals.openTrainingDayModal,
  store: state.traingDay.data,
  traningDay: state.traingDay.data,
});

const mapDispatchToProps = {
  dispatchHideModal: hideTrainingDayModal,
  dispatchAddNewDay: addTraningDay,
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

  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState(new Date());

  const onChange = (event, SelectedDate) => {
    setShowDate(!showDate);
    const currentDate = SelectedDate || date;
    setDate(currentDate);
  };
  //Change function later for IF succes set everything to null
  const checkBoxHandler = () => {
    // const createdAt = firebase.firestore.Timestamp.fromDate(new Date());
    // console.log('createdAT', createdAt);
    addTraningDay(squat, bench, axel, mark, date);
    setSquat(null);
    setBench(null);
    setAxel(null);
    setMark(null);
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
            style2={{
              height: 30,
              width: 30,
              alignSelf: 'flex-end',
              color: 'black',
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
                onChangeText={text => setSquat(text)}
              />
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
            </View>
            <View style={style.inputContainer}>
              <TouchableOpacity
                onPress={() => {
                  setShowDate(!showDate);
                }}>
                <MaterialIcon
                  size="large"
                  name={'calendar-clock'}
                  color={COLORS.black}
                />
              </TouchableOpacity>
              <Text>{formatDate(date)}</Text>
            </View>
            {showDate && <DateTimePicker value={date} onChange={onChange} />}
          </View>
          <TouchableOpacity
            onPress={() => {
              checkBoxHandler();
            }}
            disabled={!Boolean(squat && mark && axel && bench)}
            style={
              !Boolean(squat && mark && axel && bench)
                ? style.disabled
                : style.addButton
            }>
            <Text style={style.addButtonText}>Lägg till</Text>
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
  disabled: {
    marginTop: 10,
    elevation: 8,
    backgroundColor: 'gray',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  addButton: {
    marginTop: 10,
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  addButtonText: {
    textAlign: 'center',
    color: 'white',
  },
  backButton: {
    height: 30,
    width: 30,
    justifyContent: 'flex-end',
    color: 'black',
  },
});

export default connector(TrainingDayModal);
