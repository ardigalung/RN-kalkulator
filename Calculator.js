import React, { Component } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitung: 0
    }
  }

  masukkanAngka = (value) => {
    if (this.state.hitung == 0) {
      this.setState({ hitung: value })
    }
    else {
      this.setState({ hitung: this.state.hitung + '' + value })
    }
  }

  hitungHasil = () => {
    let hasil = eval(this.state.hitung)
    this.setState({ hitung: hasil })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#FFA0A0' }}>
        <StatusBar style="auto" />

        <View style={{ flex: 0.5, justifyContent: 'center' }}>
          <Text style={{ color: 'black', fontSize: 24, textAlign: 'right', backgroundColor: 'white', height: '5rem' }}>{this.state.hitung}</Text>
        </View>

        <View style={{ flex: 1, marginTop: '10rem' }}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FF5757', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka(1)}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FF5757', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka(2)}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#930707', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka('-')}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#930707', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka('+')}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FF5757', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka(3)}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FF5757', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka(4)}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#930707', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka('/')}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#930707', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka('*')}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>*</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FF5757', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka(5)}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FF5757', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka(6)}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#930707', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka('%')}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#930707', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.hitungHasil()}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>=</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', marginVertical: 10 }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FF5757', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka(7)}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#FF5757', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka(8)}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#930707', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka(9)}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, backgroundColor: '#930707', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.masukkanAngka(0)}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>0</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'blue', padding: 10, justifyContent: 'center', alignItems: 'center' }}
              onPress={() => this.setState({ hitung: 0 })}
            >
              <Text style={{ color: 'white', fontSize: 24 }}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }
}

export default Calculator;