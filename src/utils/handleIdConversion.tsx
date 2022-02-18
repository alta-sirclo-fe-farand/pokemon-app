import React from "react";

export const handleIdConversion = (id: number | string) => {
  const idConversion = 
    (id.toString().length == 1)
    ? `00${id}`
    : (id.toString().length == 2)
    ? `0${id}`
    : `${id}`
  return idConversion;
}