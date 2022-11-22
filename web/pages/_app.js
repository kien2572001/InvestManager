import App from "next/app";
import { useState } from "react";
import ky from "../api/ky";
import "antd/dist/antd.css";
//import "~/styles/globals.css";
import "../styles/globals.css";
import AuthContext from "..//contexts/AuthContext";

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
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
      <AuthContext.Provider value={authUser}>
        <Component {...pageProps} />
      </AuthContext.Provider>
  );
}

export default NextApp;
