import React, { FC } from "react";
import { Link } from "react-router-dom";
import { AppHeader, AppToolbar } from "./styled";

const Header: FC<{}> = ({}) => (
  <AppHeader>
    <AppToolbar>
      <Link to="/">Главная</Link>
      <Link to="/catalog">Список</Link>
      <Link to="/about">О проекте</Link>
    </AppToolbar>
  </AppHeader>
);

export default Header;