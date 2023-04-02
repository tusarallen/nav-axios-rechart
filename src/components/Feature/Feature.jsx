import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const Feature = ({ feature }) => {
  return (
    <div className="flex gap-2">
      <p>
        <CheckCircleIcon className="h-6 w-6 text-purple-600" />
      </p>
      <p>{feature}</p>
    </div>
  );
};

export default Feature;
