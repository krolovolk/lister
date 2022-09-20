import React, { FC } from "react";
import { IUser } from "../../api/types";
import { IItem } from "../../types";

export const List: FC<{ items: IUser[] | IItem[] }> = ({items}) => (
  <div>
    {items.map( el => (
        <div key={el.id}>{el.name}</div>
    ))}
  </div>
);