import React, { Component } from "react"
import { ViewStyle, TextStyle, View } from "react-native"
import { Button, Screen, Text } from "../components"
import { color, spacing } from "../theme"
import { Input } from 'react-native-elements'



const ROOT: ViewStyle = {
  backgroundColor: color.transparent
}
const TEXT: TextStyle = {
  color: "#8E5044",
  alignSelf: "center",
  margin: '3%',
  fontSize: 14
}

const GO_TEXT: TextStyle = {
  color: "#FFFFFF",
  fontSize: 13,
}

const FOOTER_GO: ViewStyle = {
  paddingVertical: spacing[6],
  paddingHorizontal: spacing[8],
  width: 250,
  height: 30,
  marginBottom: "5%",
  alignSelf: "flex-end"
}
const GO: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[2],
  backgroundColor: "#8E5044",
}

const INPUT: ViewStyle = {
  paddingHorizontal: spacing[2]
}
// const image = require("./connexion-screen/fouet.png")
export class CreationProfile3Screen extends Component<{ navigation }, { y: number, checked: boolean }> {
  constructor(props) {
    super(props)
    this.state = {
      y: 0,
      checked: false
    }
  }
  find_dimesions = (layout) => {
    const { x, y, width, height } = layout;
    console.tron.warn(x);
    console.tron.warn(y);
    console.tron.warn(width);
    console.tron.warn(height);
    this.setState({ y: height })
  }
  render() {
    const { navigation } = this.props
    return (
      <Screen style={ROOT} preset="scroll">
        <View onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }}>
          <Text style={TEXT} preset="header" tx="crea3.header" />
          <Text style={{ backgroundColor: "#B36F61", textAlign: 'left', width: '90%', height: '10%', paddingLeft: "5%", marginLeft: 'auto', marginRight: 'auto', marginBottom: '10%' }} tx="crea3.title" />
          <Input
            inputStyle={INPUT}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            placeholder='MARTIN MULLER'
          />

          <Input
            inputStyle={INPUT}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            placeholder='Numéro de la carte'
          />

          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>

              <Input
                inputStyle={{}}
                inputContainerStyle={{
                  alignSelf: "center",
                  width: "70%"
                }}
                secureTextEntry={true}
                placeholder='MM/AAAA'
              />
            </View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Input
                inputStyle={{}}
                inputContainerStyle={{
                  alignSelf: "center",
                  width: "70%"
                }}
                secureTextEntry={true}
                placeholder='654'
              />
            </View>
          </View>
        </View>

        <View style={FOOTER_GO}>
          <Button
            style={GO}
            textStyle={GO_TEXT}
            tx="crea3.go"
            onPress={() => { navigation.navigate('creaPro4') }}
          />
        </View>
      </Screen >
    )
  }
}
