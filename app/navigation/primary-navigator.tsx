/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { WelcomeScreen, DemoScreen, ConnexionScreen, ClientConnexionScreen, ClientInscriptionScreen, ProInscriptionScreen, FormuleProScreen, CreationProfile1Screen, CreationProfile2Screen, CreationProfile3Screen, CreationProfile4Screen, CreationVitrine1Screen, CreationVitrine2Screen, CreationVitrine3Screen } from "../screens"
import { ProConnexionScreen } from "../screens/proConnexion-screen"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type PrimaryParamList = {
  formulePro: undefined
  creaPro2: undefined
  creaPro3: undefined
  creaPro4: undefined
  creaVit1: undefined
  creaVit2: undefined
  creaVit3: undefined
  creationProfile1: undefined
  proConnexion: undefined
  proInscription: undefined
  clientConnexion: undefined
  clientInscription: undefined
  connexion: undefined
  welcome: undefined
  demo: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createStackNavigator<PrimaryParamList>()

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}
    >
      <Stack.Screen name="connexion" component={ConnexionScreen} />
      <Stack.Screen name="proConnexion" component={ProConnexionScreen} />
      <Stack.Screen name="proInscription" component={ProInscriptionScreen} />
      <Stack.Screen name="formulePro" component={FormuleProScreen} />
      <Stack.Screen name="creationProfile1" component={CreationProfile1Screen} />
      <Stack.Screen name="creaPro2" component={CreationProfile2Screen} />
      <Stack.Screen name="creaPro3" component={CreationProfile3Screen} />
      <Stack.Screen name="creaPro4" component={CreationProfile4Screen} />
      <Stack.Screen name="creaVit1" component={CreationVitrine1Screen} />
      <Stack.Screen name="creaVit2" component={CreationVitrine2Screen} />
      <Stack.Screen name="creaVit3" component={CreationVitrine3Screen} />
      <Stack.Screen name="clientConnexion" component={ClientConnexionScreen} />
      <Stack.Screen name="clientInscription" component={ClientInscriptionScreen} />
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="demo" component={DemoScreen} />
    </Stack.Navigator>
  )
}

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["connexion"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
