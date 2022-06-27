  import '../styles/globals.css'
import {AnimatePresence} from 'framer-motion'
import ProgressBar from "@badrap/bar-of-progress"
import Router from 'next/router'
import { useState } from "react";

const progress = new ProgressBar({
  size: 8,
  color:'#FE595E',
  className: 'z-50',
  delay:100,
})



Router.events.on('routeChangeStart',progress.start);
Router.events.on('routeChangeComplete',progress.finish);
Router.events.on('routeChangeError',progress.finish);

function MyApp({ Component, pageProps }) {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const [darkMode, setDarkMode] = useState("false");
  return (
    <AnimatePresence>
  <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} handleDarkMode={handleDarkMode} />
    </AnimatePresence>
  )
}

export default MyApp
