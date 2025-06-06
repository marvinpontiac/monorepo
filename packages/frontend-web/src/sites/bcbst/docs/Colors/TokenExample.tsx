import React from 'react';
import data from '../../data/tokens.json';
import CopyButton from '@global-components/CopyButton';

export interface TokenExampleProps {
  type: string;
}
const TokenExample: React.FC<TokenExampleProps> = ({ type }) => {
  const filter = data.filter((token) => token.name.startsWith(`color-${type}`));
  
  return (
    <div className='sb-doc-example'>
      <div className="sb-doc-example__heading">
        <div style={{ height: '2rem', flexBasis: '30%' }} />
        <div style={{ flexBasis: '20%' }}>
          <b>value</b>
        </div>
        <div style={{ flexBasis: '50%' }}>
          <b>css variable</b>
        </div>
      </div>
      {filter.map((swatch) => (
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} key={swatch.name}>
          <div style={{ background: `var(--${swatch.name})`, height: '2.25rem', flexBasis: '30%', border: '.01rem solid var(--color-gray-light24)', borderRadius: '2px' }} />
          <div style={{ flexBasis: '20%' }}>
            <pre>{swatch.value}</pre>
          </div>
          <div style={{ flexBasis: '50%' }}>
            <CopyButton value={`--${swatch.name}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenExample;
