import React from 'react';
// CORRECTED IMPORT: This path is specific to the Font Awesome 6 icon set.
import { FaPhoenixFramework } from 'react-icons/fa6';

const PhoenixLogo = ({ className }) => {
  return (
    // This icon is guaranteed to be available from the import above.
    <FaPhoenixFramework
      aria-label="Ignisia Phoenix Logo"
      className={className}
    />
  );
};

export default PhoenixLogo;