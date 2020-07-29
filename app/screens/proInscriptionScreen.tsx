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
    fontSize: 34
}
const TEXT_FORMS: TextStyle = {
    color: "#633830",
    fontWeight: "bold",
    paddingHorizontal: spacing[6],

}
const TEXT_CHECK: TextStyle = {
    color: "#633830",
    fontWeight: "bold",

}
const TEXT_REGISTER: TextStyle = {
    marginBottom: "5%",
    color: "#633830",
    alignSelf: "center"
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
export class ProInscriptionScreen extends Component<{ navigation }, { y: number, checked: boolean }> {
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
                    <Image source={pastry} style={PASTRY} />
                    <Text style={TEXT} preset="header" tx="proInscription.header" />
                    <TouchableOpacity
                        onPress={() => navigation.navigate('proConnexion')}
                    >
                        <Text style={TEXT_REGISTER} tx="proInscription.register" />
                    </TouchableOpacity>
                    <Text style={TEXT_FORMS} tx="proInscription.mail" />
                    <Input
                        inputStyle={INPUT}
                        inputContainerStyle={{
                            alignSelf: "center",
                            width: "90%"
                        }}
                        placeholder='martin@muller.com'
                    />

                    <Text style={TEXT_FORMS} tx="proInscription.password" />
                    <Input
                        inputStyle={INPUT}
                        secureTextEntry={true}
                        inputContainerStyle={{
                            alignSelf: "center",
                            width: "90%"
                        }}
                        placeholder='Mot de passe'
                    />
                    <Text style={TEXT_FORMS} tx="proInscription.rePassword" />

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
                    textStyle={TEXT_CHECK}
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
                        tx="proInscription.go"
                        onPress={() => { navigation.navigate('formulePro') }}
                    />
                </View>
                {/* </ImageBackground> */}
            </Screen >
        )
    }
}
