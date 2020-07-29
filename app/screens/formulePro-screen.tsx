import React, { Component } from "react"
import { ViewStyle, TextStyle, View, Image, ImageStyle } from "react-native"
import { Button, Screen, Text } from "../components"
import { color, spacing } from "../theme"



const ROOT: ViewStyle = {
  backgroundColor: color.transparent
}
const TEXT: TextStyle = {
  color: "#8E5044",
  alignSelf: "center",
  fontSize: 34
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
  paddingHorizontal: spacing[4],
  backgroundColor: "#8E5044",
}

const PASTRY: ImageStyle = {
  alignSelf: "center",
}
const pastry = require("./connexion-screen/patisier.png")


export class FormuleProScreen extends Component<{ navigation }, { y: number, checked: boolean }> {
  constructor(props) {
    super(props)
    this.state = {
      y: 0,
      checked: false
    }
  }
  render() {
    return (
      <Screen style={ROOT} preset="scroll">
        <View>
          <Image source={pastry} style={PASTRY} />
          <Text style={TEXT} preset="header" tx="formulePro.header" />
        </View>
        <View style={FOOTER_GO}>
          <Button
            style={GO}
            textStyle={GO_TEXT}
            tx="proConexion.go"
            onPress={() => { }}
          />
        </View>
      </Screen >
    )
  }

}