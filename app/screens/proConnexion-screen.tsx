import React, { Component } from "react"
// import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle, View, Image, ImageStyle } from "react-native"
import { Button, Screen, Text } from "../components"
import { color, spacing } from "../theme"
import { Input, CheckBox } from 'react-native-elements'
import { TouchableOpacity } from "react-native-gesture-handler"



const ROOT: ViewStyle = {
  backgroundColor: color.transparent
}
const TEXT: TextStyle = {
  color: "#8E5044",
  alignSelf: "center",
  fontSize: 34
}
const TEXT_FORMS: TextStyle = {
  color: "#8E5044",
  fontWeight: "bold",
  paddingHorizontal: spacing[6],

}

const TEXT_REGISTER: TextStyle = {
  color: "#633830",
  alignSelf: "center",
  marginBottom: "10%"
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

const INPUT: ViewStyle = {
  paddingHorizontal: spacing[6]
}
const PASTRY: ImageStyle = {
  alignSelf: "center",
}
const pastry = require("./connexion-screen/patisier.png")


export class ProConnexionScreen extends Component<{ navigation }, { y: number, checked: boolean }> {
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
    const { navigation } = this.props;
    return (
      <Screen style={ROOT} preset="scroll">
        <View onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }}>
          <Image source={pastry} style={PASTRY} />
          <Text style={TEXT} preset="header" tx="proConexion.header" />
          <TouchableOpacity
            onPress={() => navigation.navigate('proInscription')}
          >
            <Text style={TEXT_REGISTER} tx="proConexion.register" />
          </TouchableOpacity>
          <Text style={TEXT_FORMS} tx="proConexion.mail" />
          <Input
            inputStyle={INPUT}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            placeholder='martin@muller.com'
          />

          <Text style={TEXT_FORMS} tx="proConexion.password" />
          <Input
            inputStyle={INPUT}
            secureTextEntry={true}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            placeholder='Mot de passe'
          />
        </View>


        <Text style={TEXT_FORMS} tx="proConexion.forgetPassword" />
        <CheckBox
          title="Rester connecté(e)"
          textStyle={{
            color: "#8E5044",
            fontWeight: "bold"
          }}
          containerStyle={{
            backgroundColor: 'transparent',
            borderColor: 'transparent'
          }}
          checked={this.state.checked}
          onPress={() => this.setState({ checked: !this.state.checked })}
        />
        {/* <ImageBackground
          source={image}
          style={{
            marginTop: 0,
            width: "100%",
            height: Dimensions.get('window').height - this.state.y
          }}> */}
        <View style={FOOTER_GO}>
          <Button
            style={GO}
            textStyle={GO_TEXT}
            tx="proConexion.go"
            onPress={() => { }}
          />
        </View>
        {/* </ImageBackground> */}
      </Screen >
    )
  }

}