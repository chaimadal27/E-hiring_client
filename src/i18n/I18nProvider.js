import React from "react"
import { useLang } from "./Metronici18n"
import { IntlProvider } from "react-intl"

import "@formatjs/intl-relativetimeformat/polyfill"
import "@formatjs/intl-relativetimeformat/dist/locale-data/en"
import "@formatjs/intl-relativetimeformat/dist/locale-data/fr"
import "@formatjs/intl-relativetimeformat/dist/locale-data/ar"
import { AR, FR } from "../constants"

const translationsFiles = [
  "authentication",
  "error",
  "user-management",
  "partnership-service",
  "educational-repository",
  "folder-management",
  "home",
  "menu",
  "address",
  "general",
  "validation",
  "lists",
  "school",
  "job",
  "candidate",
  "offer",
  "legal-agency",
  "business-unit-management",
  "activity",
  "resource-state",
  "activity-type",
]

const _loadTranslation = (lang) => {
  let translations = {}

  for (let translationFile of translationsFiles) {
    const object = require(`./../locales/${lang}/${translationFile}.json`)
    translations = Object.assign({}, translations, object)
  }

  return translations
}

const frMessages = _loadTranslation("fr")
const arMessages = _loadTranslation("ar")

export const allMessages = {
  [AR]: arMessages,
  [FR]: frMessages
}

export const I18nProvider = ({ children }) => {
  const locale = useLang()
  const messages = allMessages[locale]

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  )
}
