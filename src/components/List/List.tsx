import React, { FC } from "react";
import { IItem, IUser } from "../../types";

export const List: FC<{items: IItem[] | IUser[] }> = ({items}) => (
  <div>
    {items.map((el, i) => (
        <div key={i}>{el.name}</div>
    ))}
  </div>
);