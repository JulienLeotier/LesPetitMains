import React, { Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View, ImageBackground, Dimensions } from "react-native"
import { Button, Screen, Text } from "../components"
import { color, spacing } from "../theme"
import { FontAwesome } from '@expo/vector-icons'
import { Input } from 'react-native-elements'



const ROOT: ViewStyle = {
  backgroundColor: color.transparent
}
const TEXT: TextStyle = {
  margin: "5%",
  color: "#633830",
  alignSelf: "center",
  fontSize: 34
}
const TEXT_FORMS: TextStyle = {
  color: "#633830",
  fontWeight: "bold",
  paddingHorizontal: spacing[6],

}
const TEXT_REGISTER: TextStyle = {
  color: "#633830",
  alignSelf: "center"
}
const BOLD: TextStyle = { fontWeight: "bold" }

const CONNEXION: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#527BCC",
}
const GOOGLE: ViewStyle = {
  paddingVertical: spacing[4],
  paddingHorizontal: spacing[4],
  backgroundColor: "#F16053",
}
const CONTINUE_TEXT: TextStyle = {
  color: "#FFFFFF",
  ...BOLD,
  fontSize: 13,
  letterSpacing: 2,
}
const GO_TEXT: TextStyle = {
  color: "#FFFFFF",
  fontSize: 13,
}
const FOOTER_CONTENT: ViewStyle = {
  marginTop: "5%",
  paddingVertical: spacing[1],
  paddingHorizontal: spacing[6],
}
const FOOTER_GOOGLE: ViewStyle = {
  paddingVertical: spacing[1],
  paddingHorizontal: spacing[6],
  marginBottom: "5%"
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
  paddingHorizontal: spacing[4],
  backgroundColor: "#633830",
}
const ICON_FACEBOOK: ViewStyle = {
  flex: 1,
  flexDirection: "row"
}
const ICON_SPACE: ViewStyle = {
  marginRight: "5%"
}
const INPUT: ViewStyle = {
  paddingHorizontal: spacing[6]
}
const image = require("./connexion-screen/fouet.png")
export class ClientInscriptionScreen extends Component<{}, { y: number }> {
  constructor(props) {
    super(props)
    this.state = {
      y: 0
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
    return (
      <Screen style={ROOT} preset="scroll">
        <View onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }}>
          <Text style={TEXT} preset="header" tx="clientInscriptionScreenScreen.header" />
          <Text style={TEXT_REGISTER} tx="clientInscriptionScreenScreen.register" />
          <View style={FOOTER_CONTENT}>
            <Button
              style={CONNEXION}
              onPress={() => { }}
            >
              <View style={ICON_FACEBOOK}>
                <FontAwesome name="facebook" size={24} color="white" style={ICON_SPACE} />
                <Text style={CONTINUE_TEXT} tx="clientInscriptionScreenScreen.facebook" />
              </View>

            </Button>
          </View>
          <View style={FOOTER_GOOGLE}>
            <Button
              style={GOOGLE}
              tx="clientInscriptionScreenScreen.google"
              onPress={() => { }}
            >
              <View style={ICON_FACEBOOK}>
                <FontAwesome name="google" size={24} color="white" style={ICON_SPACE} />
                <Text style={CONTINUE_TEXT} tx="clientInscriptionScreenScreen.google" />
              </View>

            </Button>
          </View>
          <Text style={TEXT_FORMS} tx="clientInscriptionScreenScreen.mail" />
          <Input
            inputStyle={INPUT}
            placeholder='martin@muller.com'
          />

          <Text style={TEXT_FORMS} tx="clientInscriptionScreenScreen.password" />
          <Input
            inputStyle={INPUT}
            secureTextEntry={true}
            placeholder='Mot de passe'
          />
          <Text style={TEXT_FORMS} tx="clientInscriptionScreenScreen.rePassword" />

          <Input
            inputStyle={INPUT}
            secureTextEntry={true}
            placeholder='Mot de passe'
          />
        </View>
        <ImageBackground source={image} style={{
          marginTop: 0,
          flex: 1,
          width: "100%",
          height: Dimensions.get('window').height - this.state.y
        }}>

          <Text style={TEXT_FORMS} tx="clientInscriptionScreenScreen.stayCo" />

          <View style={FOOTER_GO}>
            <Button
              style={GO}
              textStyle={GO_TEXT}
              tx="clientInscriptionScreenScreen.go"
              onPress={() => { }}
            />
          </View>
        </ImageBackground>
      </Screen >
    )
  }
}
