import * as Font from 'expo-font';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  // await Font.loadAsync({
  //   Montserrat: require("./Montserrat-Regular.ttf"),
  //   "Montserrat-Regular": require("./Montserrat-Regular.ttf"),
  // })

  const fontAssets = [FontAwesome.font, MaterialIcons.font].map(font => Font.loadAsync(font));

  await Promise.all([...fontAssets]);
}
