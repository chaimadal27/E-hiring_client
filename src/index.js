/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Import all the third party stuff
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter, Switch, Redirect } from "react-router-dom"

import { Font } from "@react-pdf/renderer"

// persist
import { PersistGate } from "redux-persist/integration/react"

// store
import { store, persistor } from "./configureStore"

// Import routes
import rootRoutes from "./routes"

// error pages
import { NotFoundPage, ErrorBoundary } from "./components/error-pages"

import {
  MetronicLayoutProvider,
  MetronicSplashScreenProvider,
  MetronicSubheaderProvider,
  LayoutSplashScreen,
  MaterialThemeProvider
} from "./components/layout"

import { ContentRoute } from "./components/router"

// load translation
import {MetronicI18nProvider, I18nProvider, isRLTLang } from "./i18n"

// load main style
import "./assets/scss/main.scss"
import {toAbsoluteUrl} from "./helpers"

// load style
if (isRLTLang()) {
  const BODY_NODE = document.getElementsByTagName("body")[0]
  BODY_NODE.setAttribute("direction", "rtl")
  BODY_NODE.setAttribute("dir", "rtl")
  BODY_NODE.setAttribute("style", "direction: rtl;font-family: 'big-vesta', 'Poppins';")
}

Font.register({
  family: 'main',
  src: window.location.href.replace(window.location.pathname, "") + toAbsoluteUrl( !isRLTLang() ? "/media/font/B612.ttf" : "/media/font/BigVesta.ttf")
})

const MOUNT_NODE = document.getElementById("root")

const ELEM = (
  <MetronicI18nProvider>
    <MetronicLayoutProvider>
      <MetronicSubheaderProvider>
        <MetronicSplashScreenProvider>
          {/* Provide Redux store */}
          <Provider store={store}>
            {/* Asynchronously persist redux stores and show `SplashScreen` while it's loading. */}
            <PersistGate persistor={persistor} loading={<LayoutSplashScreen />}>
              {/* Add high level `Suspense` in case if was not handled inside the React tree. */}
              <React.Suspense fallback={<LayoutSplashScreen />}>
                <BrowserRouter>
                  {/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
                  <MaterialThemeProvider>
                    {/* Provide `react-intl` context synchronized with Redux state.  */}
                    <I18nProvider>
                      <ErrorBoundary>
                        <Switch>
                          {/* Render routes with provided `Layout`. */}
                          { Object.keys(rootRoutes).map((key, i) => <ContentRoute key={i} { ...rootRoutes[key] } /> ) }
                          <Redirect exact from="/" to={rootRoutes.auth.path} />
                          <ContentRoute component={ NotFoundPage } />
                        </Switch>
                      </ErrorBoundary>
                    </I18nProvider>
                  </MaterialThemeProvider>
                </BrowserRouter>
              </React.Suspense>
            </PersistGate>
          </Provider>
        </MetronicSplashScreenProvider>
      </MetronicSubheaderProvider>
    </MetronicLayoutProvider>
  </MetronicI18nProvider>
)

ReactDOM.render(ELEM, MOUNT_NODE)

if (process.env.NODE_ENV !== "production" && module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(["./routes"], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE).render(ELEM, MOUNT_NODE)
  })
}
