import React, { Component } from 'react'

import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitung: 0
    }
  }

  //mendapatkan inputan dari user
  masukkanAngka = (value) => {
    if (this.state.hitung == 0) {
      this.setState({ hitung: value })
    }
    else {
      this.setState({ hitung: this.state.hitung + '' + value }) // conver to string, supaya tidak terjadi penjumlahan data
    }
  }

  //untuk mendapatkan hasil
  hitungHasil = () => {
    let hasil = eval(this.state.hitung) //eval  digunakan untuk mendapatkan hasil sesuai inputan 
    this.setState({ hitung: hasil })
  }

  render() {
    return (
      <View style={style.containerMain}>

        <Text style={style.displayText}>Display</Text>
        <View style={style.header}>
          <Text style={style.inputHasil}>{this.state.hitung}</Text>
        </View>

        <View style={style.container}>
          <View style={style.main}>
            <TouchableOpacity style={style.btnRed}
              onPress={() => this.masukkanAngka(1)}
            >
              <Text style={style.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnRed}
              onPress={() => this.masukkanAngka(2)}
            >
              <Text style={style.text}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnMaron}
              onPress={() => this.masukkanAngka('-')}
            >
              <Text style={style.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnMaron}
              onPress={() => this.masukkanAngka('+')}
            >
              <Text style={style.text}>+</Text>
            </TouchableOpacity>
          </View>

          <View style={style.hdr2}>
            <TouchableOpacity style={style.btnRed}
              onPress={() => this.masukkanAngka(3)}
            >
              <Text style={style.text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnRed}
              onPress={() => this.masukkanAngka(4)}
            >
              <Text style={style.text}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnMaron}
              onPress={() => this.masukkanAngka('/')}
            >
              <Text style={style.text}>/</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnMaron}
              onPress={() => this.masukkanAngka('*')}
            >
              <Text style={style.text}>*</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={style.btnRed}
              onPress={() => this.masukkanAngka(5)}
            >
              <Text style={style.text}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnRed}
              onPress={() => this.masukkanAngka(6)}
            >
              <Text style={style.text}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnMaron}
              onPress={() => this.masukkanAngka('%')}
            >
              <Text style={style.text}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnMaron}
              onPress={() => this.hitungHasil()}
            >
              <Text style={style.text}>=</Text>
            </TouchableOpacity>
          </View>

          <View style={style.hdr2}>
            <TouchableOpacity style={style.btnRed}
              onPress={() => this.masukkanAngka(7)}
            >
              <Text style={style.text}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnRed}
              onPress={() => this.masukkanAngka(8)}
            >
              <Text style={style.text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnRed}
              onPress={() => this.masukkanAngka(9)}
            >
              <Text style={style.text}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btnRed}
              onPress={() => this.masukkanAngka(0)}
            >
              <Text style={style.text}>0</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={style.clear}
              onPress={() => this.setState({ hitung: 0 })}
            >
              <Text style={style.text}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    )
  }
}

export default Calculator;

const style = StyleSheet.create({
  containerMain: {
    backgroundColor: '#FFA0A0',
    padding: 20,
    height: '40rem'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '-6rem'
  },
  inputHasil: {
    color: 'black',
    fontSize: 24,
    textAlign: 'right',
    backgroundColor: 'white',
    height: '5rem',
    borderRadius: 5
  },
  container: {
    flex: 1,
    marginTop: '-5rem',
    position: 'relative'
  },
  main: {
    flexDirection: 'row'
  },
  btnRed: {
    flex: 1,
    backgroundColor: '#FF5757',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 3
  },
  btnMaron: {
    flex: 1,
    backgroundColor: '#930707',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    margin: 3

  },
  text: {
    color: 'white',
    fontSize: 24
  },
  hdr2: {
    flexDirection: 'row',
    marginVertical: 10
  },
  clear: {
    flex: 1,
    backgroundColor: 'salmon',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  displayText: {
    position: 'absolute',
    marginTop: '2rem',
    color: 'white',
    fontSize: 15
  }

})