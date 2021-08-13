import React, {Component} from 'react';
import {Modal, StyleSheet, Text, View, Button} from 'react-native';

class App1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: this.props.visible,
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      modalVisible: nextProps.visible,
    };
  }
  setModalVisible = visible => {
    this.props.clickModal();
  };

  render() {
    const {modalVisible} = this.state;
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            this.setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View width={20} style={styles.closeButton}>
              <Button
                title="x"
                onPress={() => this.setModalVisible(!modalVisible)}
              />
            </View>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{this.props.modalHeading}</Text>
              <Text style={styles.modalText}>{this.props.modalData}</Text>
              {this.props.modalHeading == 'FETCH' && (
                <View style={styles.buttonCallout}>
                  <Button title="Yes" onPress={this.props.fetchData} />
                  <Button
                    title="No"
                    onPress={() => this.setModalVisible(!modalVisible)}
                  />
                </View>
              )}
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: 'rgb(240, 240, 240)',
    borderRadius: 20,
    padding: 35,
  },
  closeButton: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 15,
  },
  buttonCallout: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    borderRadius: 20,
    width: '50%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default App1;
