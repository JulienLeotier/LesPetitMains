import React, { Component } from "react"
import { ViewStyle, TextStyle, View, Image, ImageStyle, TouchableOpacity } from "react-native"
import { Button, Screen, Text } from "../components"
import { color, spacing } from "../theme"
import { Input, CheckBox } from 'react-native-elements'



const ROOT: ViewStyle = {
  backgroundColor: color.transparent
}
const TEXT: TextStyle = {
  color: "#8E5044",
  alignSelf: "center",
  margin: '5%',
  fontSize: 24
}
const TEXT_FORMS: TextStyle = {
  color: "#633830",
  fontWeight: "bold",
  paddingHorizontal: spacing[6],

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

const PASTRY: ImageStyle = {
  alignSelf: "center",
}
const pastry = require("./connexion-screen/patisier.png")
const INPUT: ViewStyle = {
  paddingHorizontal: spacing[6]
}
// const image = require("./connexion-screen/fouet.png")
export class CreationProfile1Screen extends Component<{ navigation }, { y: number, checked: boolean }> {
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
          <Text style={TEXT} preset="header" tx="crea1.header" />
          <Text style={TEXT_FORMS} tx="crea1.prenom" />
          <Input
            inputStyle={INPUT}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            placeholder='Prénom'
          />

          <Text style={TEXT_FORMS} tx="crea1.nom" />
          <Input
            inputStyle={INPUT}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            placeholder='Nom'
          />
          <Text style={TEXT_FORMS} tx="crea1.adresse" />

          <Input
            inputStyle={INPUT}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            placeholder='Adresse'
          />
          <Text style={TEXT_FORMS} tx="crea1.coAdresse" />

          <Input
            inputStyle={INPUT}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            secureTextEntry={true}
            placeholder='Etage/ Bâtiment'
          />
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={TEXT_FORMS} tx="crea1.zipCode" />

              <Input
                inputStyle={{}}
                inputContainerStyle={{
                  alignSelf: "center",
                  width: "90%"
                }}
                secureTextEntry={true}
                placeholder='Code Postal'
              />
            </View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={TEXT_FORMS} tx="crea1.city" />

              <Input
                inputStyle={{}}
                inputContainerStyle={{
                  alignSelf: "center",
                  width: "90%"
                }}
                secureTextEntry={true}
                placeholder='Ville'
              />
            </View>
          </View>
          <Text style={TEXT_FORMS} tx="crea1.tel" />

          <Input
            inputStyle={INPUT}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            secureTextEntry={true}
            placeholder='0646883007'
          />

        </View>

        <View style={FOOTER_GO}>
          <Button
            style={GO}
            textStyle={GO_TEXT}
            tx="crea1.go"
            onPress={() => { navigation.navigate('formulePro') }}
          />
        </View>
      </Screen >
    )
  }
}
