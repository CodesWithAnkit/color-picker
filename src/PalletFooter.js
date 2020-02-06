import React from 'react';

const PalletFooter = props => {
  const { palletName, emoji } = props;
  return (
    <footer className="patette-footer">
      {palletName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
};

export default PalletFooter;
