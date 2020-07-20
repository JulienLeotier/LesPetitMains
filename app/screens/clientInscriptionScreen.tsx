import React, { Component } from "react"
import { ViewStyle, TextStyle, View, TouchableOpacity } from "react-native"
import { Button, Screen, Text } from "../components"
import { color, spacing } from "../theme"
import { FontAwesome } from '@expo/vector-icons'
import { Input, CheckBox } from 'react-native-elements'



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
export class ClientInscriptionScreen extends Component<{ navigation }, { y: number, checked: boolean }> {
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
          <Text style={TEXT} preset="header" tx="clientInscriptionScreenScreen.header" />
          <TouchableOpacity
            onPress={() => navigation.navigate('clientConnexion')}
          >
            <Text style={TEXT_REGISTER} tx="clientInscriptionScreenScreen.register" />
          </TouchableOpacity>
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
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            placeholder='martin@muller.com'
          />

          <Text style={TEXT_FORMS} tx="clientInscriptionScreenScreen.password" />
          <Input
            inputStyle={INPUT}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            secureTextEntry={true}
            placeholder='Mot de passe'
          />
          <Text style={TEXT_FORMS} tx="clientInscriptionScreenScreen.rePassword" />

          <Input
            inputStyle={INPUT}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            secureTextEntry={true}
            placeholder='Mot de passe'
          />
        </View>


        <CheckBox
          title="J'accepte les conditions générales d'utilisation"
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
        {/* <ImageBackground source={image} style={{
          marginTop: 0,
          flex: 1,
          width: "100%",
          height: Dimensions.get('window').height - this.state.y
        }}> */}
        <View style={FOOTER_GO}>
          <Button
            style={GO}
            textStyle={GO_TEXT}
            tx="clientInscriptionScreenScreen.go"
            onPress={() => { }}
          />
        </View>
        {/* </ImageBackground> */}
      </Screen >
    )
  }
}
