import React, { FC } from "react";
import { AppHeader, AppToolbar } from "./styled";

const Header: FC<{}> = ({}) => {
    const CO = "Lister";

    return (
      <AppHeader>
        <AppToolbar>
          <a href="/" className="HeaderToolbar__link">Главная</a>
          <a href="/list/" className="HeaderToolbar__link">Список</a>
          <a href="/about/" className="HeaderToolbar__link">О проекте {CO}</a>
        </AppToolbar>
      </AppHeader>
    );
}

export default Header;