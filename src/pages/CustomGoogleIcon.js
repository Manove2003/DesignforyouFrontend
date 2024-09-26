import React from "react";
import { SvgIcon } from "@mui/material";

const CustomGoogleIcon = (props) => (
  <SvgIcon {...props}>
    <path
      fill="#4285F4"
      d="M21.35 11.1H12v3.8h5.35c-.7 2.01-2.57 3.45-5.35 3.45a6.07 6.07 0 0 1 0-12.14c1.65 0 3.14.66 4.25 1.74l2.88-2.88A10.12 10.12 0 0 0 12 2a10.07 10.07 0 1 0 9.36 6.61z"
    />
    <path
      fill="#34A853"
      d="M4.27 12.8a6.07 6.07 0 0 1 0-3.64V5.24H1.02a10.07 10.07 0 0 0 0 9.53l3.25-1.97z"
    />
    <path
      fill="#FBBC05"
      d="M12 6.46c1.65 0 3.14.66 4.25 1.74l2.88-2.88A10.12 10.12 0 0 0 12 2v4.46z"
    />
    <path
      fill="#EA4335"
      d="M12 22a10.07 10.07 0 0 0 7.1-2.94l-3.25-3.25a6.07 6.07 0 0 1-9.36-4.04H1.02v3.8A10.07 10.07 0 0 0 12 22z"
    />
  </SvgIcon>
);

export default CustomGoogleIcon;
