import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View, ImageBackground, ImageStyle } from "react-native"
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
const BACKGROUND: ImageStyle = {
  marginTop: 0,
  flex: 1,
  width: "100%",
  height: 230
}
const image = require("./connexion-screen/fouet.png")


export const ClientConnexionScreenScreen: Component = observer(function ClientConnexionScreenScreen() {
  return (
    <Screen style={ROOT} preset="scroll">
      <Text style={TEXT} preset="header" tx="clientConnexionScreenScreen.header" />
      <Text style={TEXT_REGISTER} tx="clientConnexionScreenScreen.register" />
      <View style={FOOTER_CONTENT}>
        <Button
          style={CONNEXION}
          onPress={() => { }}
        >
          <View style={ICON_FACEBOOK}>
            <FontAwesome name="facebook" size={24} color="white" style={ICON_SPACE} />
            <Text style={CONTINUE_TEXT} tx="clientConnexionScreenScreen.facebook" />
          </View>

        </Button>
      </View>
      <View style={FOOTER_GOOGLE}>
        <Button
          style={GOOGLE}
          tx="clientConnexionScreenScreen.google"
          onPress={() => { }}
        >
          <View style={ICON_FACEBOOK}>
            <FontAwesome name="google" size={24} color="white" style={ICON_SPACE} />
            <Text style={CONTINUE_TEXT} tx="clientConnexionScreenScreen.google" />
          </View>

        </Button>
      </View>
      <Text style={TEXT_FORMS} tx="clientConnexionScreenScreen.mail" />
      <Input
        inputStyle={INPUT}
        placeholder='martin@muller.com'
      />

      <Text style={TEXT_FORMS} tx="clientConnexionScreenScreen.password" />
      <Input
        inputStyle={INPUT}
        secureTextEntry={true}
        placeholder='Mot de passe'
      />
      <ImageBackground source={image} style={BACKGROUND}>

        <Text style={TEXT_FORMS} tx="clientConnexionScreenScreen.forgetPassword" />
        <Text style={TEXT_FORMS} tx="clientConnexionScreenScreen.stayCo" />

        <View style={FOOTER_GO}>
          <Button
            style={GO}
            textStyle={GO_TEXT}
            tx="clientConnexionScreenScreen.go"
            onPress={() => { }}
          />
        </View>
      </ImageBackground>
    </Screen >
  )
})
