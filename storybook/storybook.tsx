import React, { useEffect, FunctionComponent } from "react"
import { getStorybookUI, configure } from "@storybook/react-native"
import { initFonts } from "../app/theme/fonts"

declare var module

configure(() => {
  require("./storybook-registry")
}, module)

const StorybookUI = getStorybookUI({
  port: 9001,
  host: "192.168.1.48",
  onDeviceUI: true,
  asyncStorage: require("react-native").AsyncStorage,
})

export const StorybookUIRoot: FunctionComponent = () => {
  useEffect(() => {
    ; (async () => {
      await initFonts()
      // @ts-ignore
      if (typeof __TEST__ === "undefined" || !__TEST__) {
        const Reactotron = require("../app/services/reactotron")
        const reactotron = new Reactotron.Reactotron()
        reactotron.setup()
      }
    })()
  }, [])

  return <StorybookUI />
}
