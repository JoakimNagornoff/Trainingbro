import React from 'react';
import {View, Text} from 'react-native';
import {connect, ConnectedProps} from 'react-redux';
import {RootState} from '../../store';

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {};
const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = {navigation: any; route: any} & ConnectedProps<
  typeof connector
>;

type Props = PropsFromRedux;
const Schedule = () => {
  return (
    <View>
      <Text>Schedule</Text>
    </View>
  );
};

export default connector(Schedule);
