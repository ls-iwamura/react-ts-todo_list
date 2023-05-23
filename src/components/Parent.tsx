import React from "react";
import { Child } from "./Child";

export const Parent: React.FC = () => {
  const hogeText = "hello";
  return (
    <div>
      <Child hogeTextFromParent={hogeText} />
    </div>
  );
};
