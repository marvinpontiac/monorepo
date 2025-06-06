import React from 'react';
import data from '../../data/tokens.json';
import CopyButton from '@global-components/CopyButton';

const TokenExample: React.FC = () => {
  
  return (
    <div className='sb-doc-example'>
      <div className="sb-doc-example__heading">
        <div style={{ flexBasis: '60%' }}>
          <b>value</b>
        </div>
        <div style={{ flexBasis: '40%' }}>
          <b>css variable</b>
        </div>
      </div>
      {data.map((token) => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} key={token.name}>
          <div style={{ flexBasis: '60%', maxWidth: '50%' }}>
            <pre>{token.value}</pre>
          </div>
          <div style={{ flexBasis: '40%' }}>
            <CopyButton value={`--${token.name}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenExample;
