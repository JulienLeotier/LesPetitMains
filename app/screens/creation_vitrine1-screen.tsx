import React, { Component } from "react"
import { ViewStyle, TextStyle, View } from "react-native"
import { Button, Screen, Text } from "../components"
import { color, spacing } from "../theme"
import { Input, CheckBox } from 'react-native-elements'



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
  marginBottom: "15%",
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
export class CreationVitrine1Screen extends Component<{ navigation }, { y: number, checkedYes: boolean, checkedNo: boolean }> {
  constructor(props) {
    super(props)
    this.state = {
      y: 0,
      checkedYes: false,
      checkedNo: false
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
          <Text style={TEXT} preset="header" tx="vitr1.header" />
          <Text style={{ backgroundColor: "#B36F61", textAlign: 'left', width: '90%', height: '10%', paddingLeft: "5%", marginLeft: 'auto', marginRight: 'auto', marginBottom: '10%' }} tx="vitr1.title" />
          <Input
            inputStyle={INPUT}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            placeholder='Nom de la boutique'
          />

          <Input
            inputStyle={INPUT}
            inputContainerStyle={{
              alignSelf: "center",
              width: "90%"
            }}
            placeholder='Description'
          />
          <Text tx="vitr1.text" style={{ color: "black", margin: "5%" }} />
          <View style={{ flex: 1, flexDirection: 'row', margin: "5%" }}>
            <CheckBox
              title="Oui"
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: 'transparent'
              }}
              checked={this.state.checkedYes}
              onPress={() => {
                if (this.state.checkedNo) {
                  this.setState({ checkedYes: !this.state.checkedYes, checkedNo: !this.state.checkedNo })
                } else {
                  this.setState({ checkedYes: !this.state.checkedYes })

                }
              }}
            />
            <CheckBox
              title="Non"
              containerStyle={{
                backgroundColor: 'transparent',
                borderColor: 'transparent'
              }}
              checked={this.state.checkedNo}
              onPress={() => {
                if (this.state.checkedYes) {
                  this.setState({ checkedYes: !this.state.checkedYes, checkedNo: !this.state.checkedNo })
                } else {
                  this.setState({ checkedNo: !this.state.checkedNo })

                }
              }}
            />
          </View>
        </View>
        <Button
          style={{ width: "90%", marginLeft: "auto", marginRight: "auto" }}
          textStyle={GO_TEXT}
          tx="vitr1.text2"
          onPress={() => { }}
        />
        <View style={FOOTER_GO}>
          <Button
            style={GO}
            textStyle={GO_TEXT}
            tx="vitr1.go"
            onPress={() => { navigation.navigate('creaVit2') }}
          />
        </View>
      </Screen >
    )
  }
}
