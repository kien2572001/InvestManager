import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";

import styles from "~/styles/Home.module.css";
import AuthContext from "~/contexts/AuthContext";
import Home from "../components/Home";

export default function Index() {
  //const user = useContext(AuthContext);

  return <Home />;
}
