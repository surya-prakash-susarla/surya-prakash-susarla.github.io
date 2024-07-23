import React from "react";
import { ContentComponent } from "./content";
import { WelcomeComponent } from "./welcome";

const getFonts = (): JSX.Element => {
  return (
    <React.Fragment>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      ></link>
    </React.Fragment>
  );
};

const getWideModeContent = (): JSX.Element => {
  const style: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
  };

  return (
    <div style={style}>
      <div style={{ width: "40%" }}>{WelcomeComponent()}</div>
      <div style={{ width: "60%" }}>{ContentComponent()}</div>
    </div>
  );
};

const getMobileModeContent = (): JSX.Element => {
  const fullHeightStyle: React.CSSProperties = { };
  return (
    <div style={fullHeightStyle}>
      <div style={fullHeightStyle}>{ContentComponent()}</div>
    </div>
  );
};

export const MainComponent = (): JSX.Element => {
  const isWideMode: boolean = window.innerWidth >= 912;

  const content: JSX.Element = isWideMode
    ? getWideModeContent()
    : getMobileModeContent();

  const style: React.CSSProperties = {
    height: "100vh",
    width: "100vw",
  };

  return (
    <div style={style}>
      {getFonts()}
      {content}
    </div>
  );
};
