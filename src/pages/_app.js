import { Provider } from 'react-redux'
import { store } from '../app/store'
import { appWithTranslation } from "next-i18next";
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default appWithTranslation(MyApp);
