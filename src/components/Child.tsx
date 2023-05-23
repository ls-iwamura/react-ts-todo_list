import React from "react";

type Props = {
  hogeTextFromParent: string;
};

export const Child: React.FC<Props> = ({
    hogeTextFromParent
}) => {
  return <div>{hogeTextFromParent}</div>;
};
