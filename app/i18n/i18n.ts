import * as Localization from "expo-localization"
import i18n from "i18n-js"

const en = require("./en")
const ja = require("./ja")
const fr = require("./fr")

i18n.fallbacks = true
i18n.translations = { en, ja, fr }

const fallback = { languageTag: "fr", isRTL: false }

i18n.locale = Localization.locale || fallback
