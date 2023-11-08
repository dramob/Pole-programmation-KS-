// KryptoBot.js
import React from 'react';

const KryptoPote = () => {
  const bubbleStyle = {
    position: 'absolute',
    bottom: '90%', 
    right: '50%', 
    transform: 'translateX(50%)', 
    padding: '10px',
    background: '#f9f9f9',
    borderRadius: '10px',
    border: '1px solid #ddd',
    margin: '10px 0',
    width: 'max-content', 
    maxWidth: '300px', 
  };

  const botStyle = {
    position: 'relative', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    marginTop: '50px' // Add space for the speech bubble
  };

  const logoStyle = {
    width: '800px',
    height: 'auto', 
    marginBottom: '-30px' 
  };

  return (
    <div style={botStyle}>
     
      <div style={bubbleStyle}>
        Il s'agit d'un fichier de tp pour Kryptosphere IMTBS-TSP. On le mettra au fur et à mesure à jour pour ajouter des features.
      </div>

      {/* KryptoBot Logo */}
      <img style={logoStyle} src={"logopote.png"} alt="KryptoBot" />
    </div>
  );
};

export default KryptoPote;
