import React from 'react';
import { Button } from '@nextui-org/react';

const Header = () => {
  return (
    <div style={{
      backgroundColor: 'black', 
      padding: '10px 20px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center'
    }}>
      {/* Logo on the left */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        {/* If logo.png is in the public folder */}
        <img src="logo.png" alt="logo" style={{ width: '50px', marginRight: '10px' }} />
        
        <h1 style={{ color: 'white', fontSize: '1.5em', margin: 0 }}>
          PREMIERE DAPP
        </h1>
      </div>
      
      {/* Connect Wallet Button */}
      <Button auto flat color="success">
        Connect Wallet
      </Button>
    </div>
  );
};

export default Header;
