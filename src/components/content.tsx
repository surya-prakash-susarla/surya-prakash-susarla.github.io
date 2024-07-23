import React from "react";

const getStyledContentText = (text: string): JSX.Element => {
  const textStyles: React.CSSProperties = {
    fontFamily: `"Montserrat", system-ui`,
    fontOpticalSizing: "auto",
    fontStyle: "normal",
    fontWeight: 300,
  };

  return <h2 style={textStyles}>&ensp; {text}</h2>;
};

const getContent = (): JSX.Element => {
  const layoutStyles: React.CSSProperties = {
    color: "#fff",
    maxWidth: "720px",
    margin: "40px",
    overflow: "auto",
  };
  return (
    <div style={{ border: "5px dashed #183d3d" }}>
      <div style={layoutStyles}>
        {getStyledContentText("Thank you for visiting my page.")}
        <br />
        {getStyledContentText(
          `
        I am currently a software engineer at AWS working on backend
        services and Gen AI. Software engineering has always been my passion and
        I love designing components with high scalability and performance in
        mind. I am also a huge fan of open source and love to contribute to the
        community. I have also been trying to get involved in the AI space to
        create interesting utilities which can enhance quality of everyday
        software services. I have a Master's degree in Computer Science from
        North Carolina State University and have previously worked at Microsoft
        building the data migration and first run experience for the Edge
        browser based on the Chromium open source project.
        `
        )}
        <br />
        {getStyledContentText(
          `I am also a passionate gamer and love playing simulators, single-player and sports games. I also love driving and get on road trips as often as I can.`
        )}
        <br />
        {getStyledContentText(
          `If you have any interesting projects that we can collaborate on or positions for which I might be a good fit, I would love to connect and discuss further. Please reach out to me through any of the links and I will respond to you at the earliest. Thanks!`
        )}
      </div>
    </div>
  );
};

export const ContentComponent = (): JSX.Element => {
  const componentStyles: React.CSSProperties = {
    background: "#040D12",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // overflowY: "scroll",
  };

  return <div style={componentStyles}>{getContent()}</div>;
};
