import React from "react";
import { FooterBarProps } from "./interfaces";
import { Footer } from "antd/lib/layout/layout";

export const FooterBar: React.FC<FooterBarProps> = (props: FooterBarProps) => {
  const [time, setTime] = React.useState('');

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Footer className='footer-bar'>
      {time}
    </Footer>
  );
}

