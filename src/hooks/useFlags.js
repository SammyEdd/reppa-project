import { useEffect, useState } from "react";
import {annotations} from "../annotations.js";

export const useFlags = () => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    if(flags.length < 1) {
        setFlags(annotations);
    }
  }, [flags])

  const createFlag = () => {
    console.log("create-flag")
  }

  const clickFlag = () => {
    console.log("flag-clicked")
  }

  return [flags, createFlag, clickFlag];
}