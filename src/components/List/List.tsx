import React, { FC } from "react";
import { IItem } from "../../types";

export const List: FC<{items: IItem[]}> = ({items}) => (
  <div>
    {items.map((el, i) => (
        <div key={i}>{el.name}</div>
    ))}
  </div>
);