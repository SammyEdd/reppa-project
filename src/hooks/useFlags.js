import { useEffect, useState } from "react";
import { annotations, types } from "../annotations.js";

export const useFlags = () => {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    if (flags.length < 1) {
      setFlags(annotations);
    }
  }, [flags])

  const createFlag = (x, y) => {
    const flagLabels = flags.map((flag => parseFloat(flag.label.replace('#', ""))));
    const newLabelNumber = (Math.max(...flagLabels) + 1).toString();
    const newLabelFormatted = "#".concat(newLabelNumber);

    const newFlag = {
      x: x,
      y: y,
      label: newLabelFormatted,
      type: "Unconfirmed",
    }

    const updatedFlagsArray = flags.concat(newFlag);
    setFlags(updatedFlagsArray);
  }

  const clickFlag = (label) => {
    const typesKeys = Object.keys(types);
    const flagObject = flags.filter(flag => flag.label === label)[0];
    const typeIndex = typesKeys.indexOf(flagObject.type);
    const nextTypeIndex = typeIndex === 4 ? 0 : typeIndex + 1;
    const nextTypeString = typesKeys[nextTypeIndex];
    const newFlagObject = {
      ...flagObject,
      type: nextTypeString
    }
    const newStateArray = flags.filter(flag => flag.label !== label).concat(newFlagObject);
    setFlags(newStateArray);
  }

  return [flags, createFlag, clickFlag];
}