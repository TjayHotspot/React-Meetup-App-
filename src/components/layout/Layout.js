import React from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
function Layout(props) {
{/* main contains the children prop from the app.js component and styles it with module.css */ }
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
