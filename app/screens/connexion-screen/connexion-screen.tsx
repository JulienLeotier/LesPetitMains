import React, { FunctionComponent as Component } from "react"
import { View, SafeAreaView } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { observer } from "mobx-react-lite"
import { Button, Header, Screen, Text, Wallpaper } from "../../components"
import { color } from "../../theme"

export const ConnexionScreen: Component = observer(function ConnexionScreen() {
    const navigation = useNavigation()
    const nextScreen = () => navigation.navigate("welcom")

    return (
        <View>
            <Wallpaper />
            <Screen preset="scroll" backgroundColor={color.transparent}>
                <Header headerTx="ConnexionScreen.poweredBy" />
                <Text>
                    <Text text="Connexion, " />
                    <Text text="almost" />
                    <Text text="!" />
                </Text>
                <Text preset="header" tx="ConnexionScreen.readyForLaunch" />
                <Text>
                    I'm a connexion screen
          </Text>
                <Text>
                    For everyone else, this is where you'll see a live preview of your fully functioning app
                    using Ignite.
          </Text>
            </Screen>
            <SafeAreaView>
                <View >
                    <Button
                        tx="ConnexionScreen.continue"
                        onPress={nextScreen}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
})
