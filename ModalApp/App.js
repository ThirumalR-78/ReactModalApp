import React from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Modals from './src/modal';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openModal: false,
      modalHeading: '',
      modaldata: '',
      Affirmation: '',
    };
  }

  openModal = type => {
    var fetchtext = 'Are You Sure you want to fetch an affirmation?';
    if (type == 'Fetch') {
      this.setState({
        openModal: !this.state.openModal,
        modalHeading: 'FETCH',
        modaldata: fetchtext,
      });
    } else {
      this.setState({
        openModal: !this.state.openModal,
        modalHeading: 'AFFIRMATION',
        modaldata: this.state.Affirmation,
      });
    }
  };

  fetchData = () => {
    console.log('sdbfksj');
    fetch('https://www.affirmations.dev/')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          Affirmation: json.affirmation,
          openModal: !this.state.openModal,
        });
      });
  };
  render() {
    return (
      <SafeAreaView style={{margin: 10}}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle="default"
        />
        <View>
          <Text style={styles.headingText}>Introduction</Text>
          <Text style={styles.paragraphText}>
            Affirmations are positive statements that can help you to challenge
            and overcome self-sabotaging and negative thoughts. When you repeat
            them often, and believe in them, you can start to make positive
            changes.
          </Text>

          <Text style={styles.headingText}>Step 1: Fetch</Text>
          <Text style={styles.paragraphText}>
            Click the button below to fetch an Affirmation
          </Text>
          <Button title="Fetch" onPress={() => this.openModal('Fetch')} />

          <Text style={styles.headingText}>Display</Text>
          <Text style={styles.paragraphText}>
            Click the button below to Display an Affirmation
          </Text>
          <Button title="Display" onPress={() => this.openModal('Display')} />
        </View>
        <Modals
          visible={this.state.openModal}
          clickModal={this.openModal}
          modalHeading={this.state.modalHeading}
          modalData={this.state.modaldata}
          fetchData={this.fetchData}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    margin: 10,
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'arial',
  },
  paragraphText: {
    margin: 10,
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 30,
    fontFamily: 'arial',
  },
});

export default App;
