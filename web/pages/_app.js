import App from "next/app";
import { useState } from "react";
import ky from "~/api/ky";

import "~/styles/globals.css";
import AuthContext from "~/contexts/AuthContext";
import { store } from "~/app/store";
import { Provider } from "react-redux";

NextApp.getInitialProps = async (ctx) => {
  // Is SSR
  if (ctx?.ctx?.req) {
    const response = await ky.get(`api/web-init`);
    const { data } = await response.json();
    const appData = App.getInitialProps(ctx);

    return {
      ...appData,
      data,
    };
  }

  return {};
};

function NextApp({ Component, pageProps, data }) {
  const [authUser] = useState(data);

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authUser}>
        <Component {...pageProps} />
      </AuthContext.Provider>
    </Provider>
  );
}

export default NextApp;
