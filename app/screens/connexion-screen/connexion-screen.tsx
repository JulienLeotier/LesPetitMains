import React, { FunctionComponent as Component } from "react"
import { View, ViewStyle, TextStyle, SafeAreaView, Image, ImageStyle } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Screen, Wallpaper } from "../../components"
import { color, spacing, typography } from "../../theme"


const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
    height: "100%",
    width: "100%",
    borderBottomColor: "#9a7f79",
    borderBottomWidth: 1
}
const TEXT: TextStyle = {
    color: color.palette.white,
    fontFamily: typography.primary,
}
const BOLD: TextStyle = { fontWeight: "bold" }

const CONNEXION: ViewStyle = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: "#633830",
}

const NEW_CONNEXION: ViewStyle = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: "#8E5044",
}
const PRO_CONNEXION: ViewStyle = {
    paddingVertical: spacing[4],
    paddingHorizontal: spacing[4],
    backgroundColor: "#B36F61",
}
const CONTINUE_TEXT: TextStyle = {
    ...TEXT,
    ...BOLD,
    fontSize: 13,
    letterSpacing: 2,
}
const FOOTER: ViewStyle = { backgroundColor: "#FFFFFF", height: "50%" }
const FOOTER_CONTENT: ViewStyle = {
    marginTop: 50,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[6],
}
const FOOTER_BOTTOM: ViewStyle = {
    paddingHorizontal: spacing[6],
    paddingVertical: spacing[6]
}
const FOOTER_BLOCK: ViewStyle = {
    paddingHorizontal: spacing[6],
}
const fouet = require("./fouet.png")
const pastry = require("./patisier.png")
const FOUET: ImageStyle = {
    width: "100%",
    height: "100%",
    maxWidth: "100%"
}
const PASTRY: ImageStyle = {
    paddingVertical: spacing[6],
    alignSelf: "center",
    width: "20%",
    height: "30%",
}

export const ConnexionScreen: Component = observer(function ConnexionScreen() {
    const navigation = useNavigation()
    const connexion = () => navigation.navigate("clientConnexion")
    const newConnexion = () => navigation.navigate("clientInscription")
    const proConnexion = () => navigation.navigate("welcome")


    return (
        <View style={FULL}>
            <Wallpaper />
            <Screen style={CONTAINER} preset="scroll" backgroundColor={"#FFFFFF"}>
                <View style={CONTAINER}>
                    <Image source={fouet} style={FOUET} />

                </View>
            </Screen>
            <SafeAreaView style={FOOTER}>
                <View style={FOOTER_CONTENT}>
                    <Button
                        style={CONNEXION}
                        textStyle={CONTINUE_TEXT}
                        tx="ConnexionScreen.connexion"
                        onPress={connexion}
                    />
                </View>
                <View style={FOOTER_BLOCK}>
                    <Button
                        style={NEW_CONNEXION}
                        textStyle={CONTINUE_TEXT}
                        tx="ConnexionScreen.newConnexion"
                        onPress={newConnexion}
                    />
                </View>
                <View style={FOOTER_BOTTOM}>
                    <Image source={pastry} style={PASTRY} />
                    <Button
                        style={PRO_CONNEXION}
                        textStyle={CONTINUE_TEXT}
                        tx="ConnexionScreen.proConnexion"
                        onPress={proConnexion}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
})
