// import App from 'next/app'
import '../styles/global.scss'
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primereact/resources/themes/luna-amber/theme.css";                                //icons
import withRedux from 'next-redux-wrapper';
import { makeStore } from '../store';
import { Provider } from 'react-redux';

import React from "react";

function MyApp({ Component, pageProps, store }) {
    return  (
        <>
            <Provider store={makeStore()}>
                <Component {...pageProps}/>
            </Provider>
        </>
    )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default withRedux(makeStore)(MyApp)