import React from "react";

const getWelcomeSegment = (): JSX.Element => {
  const rootStyles: React.CSSProperties = {
    background: "#e0f2f1",
    height: "60%",
    fontFamily: `"Montserrat", system-ui`,
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  const headerTextBorderStyle: React.CSSProperties = {
    border: "5px dashed #183d3d",
    textAlign: "center",
    fontSize: "80px",
    padding: "10px",
  };

  return (
    <div style={rootStyles}>
      <h1 style={headerTextBorderStyle}>Hello!</h1>
      <br />
      <h1 style={headerTextBorderStyle}>I am Surya!</h1>
    </div>
  );
};

const getLinksSegmentContent = (): JSX.Element => {
  const layoutStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };
  const textStyles: React.CSSProperties = {
    fontFamily: `"Montserrat", system-ui`,
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "22px",
  };

  const getLink = (name: string, link: string): JSX.Element => {
    const linkStyle: React.CSSProperties = {
      fontFamily: `"Montserrat", system-ui`,
      fontOpticalSizing: "auto",
      fontStyle: "normal",
      fontWeight: 500,
      marginBottom: "2px",
    };

    return (
      <a style={linkStyle} href={link} target="blank">
        {name}
      </a>
    );
  };

  return (
    <div style={layoutStyles}>
      <p style={textStyles}>
        <u>Connect with me:</u>
      </p>
      {getLink(
        "LinkedIn",
        "https://www.linkedin.com/in/surya-prakash-susarla/"
      )}
      {getLink(
        "Resume",
        "https://drive.google.com/file/d/1281C7_VBrOOu71etbBwjmdIGgVrr35m7/view?usp=sharing"
      )}
      {getLink(
        "Email (surya.p.susarla@gmail.com)",
        "mailto:surya.p.susarla@gmail.com"
      )}
      {getLink("Github", "https://github.com/surya-prakash-susarla")}
    </div>
  );
};

const getLinksSegment = (): JSX.Element => {
  const rootStyles: React.CSSProperties = {
    background: "#b2dfdb",
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return <div style={rootStyles}>{getLinksSegmentContent()}</div>;
};

const getFooterSegment = (): JSX.Element => {
  const rootStyles: React.CSSProperties = {
    background: "#90cbc4",
    height: "10%",
  };

  return <div style={rootStyles}></div>;
};

export const WelcomeComponent = (): JSX.Element => {
  const rootStyles: React.CSSProperties = {
    height: "100%",
    borderRight: "2px solid #93B1A6",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <React.Fragment>
      <div style={rootStyles}>
        {getWelcomeSegment()}
        {getLinksSegment()}
        {getFooterSegment()}
      </div>
    </React.Fragment>
  );
};
