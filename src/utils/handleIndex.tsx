import React from "react";

export const handleIndex = (url: string) => {
  return url.split("").slice(30,url.length).filter((num: string) => parseInt(num) || num === "0").join("");
}