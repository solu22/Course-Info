import React from "react";

interface TitleProps {
  title: string;
}

const Header = ({ title }: TitleProps) => {
  return <h1>{title}</h1>;
};

export default Header;
