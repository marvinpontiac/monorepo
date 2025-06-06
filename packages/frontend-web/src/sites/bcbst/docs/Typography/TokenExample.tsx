import React from 'react';
import data from '../../data/tokens.json';
import CopyButton from '@global-components/CopyButton';

export interface TokenExampleProps {
  type: string;
}

const TokenExample: React.FC<TokenExampleProps> = ({ type }) => {
  const filter = data.filter((token) => token.name.startsWith(`font-${type}`));

  return (
    <div>
      <div className="sb-doc-example">
        <div className="sb-doc-example__heading">
          <div style={{ flexBasis: '30%' }}>
            <b>Example</b>
          </div>
          <div style={{ flexBasis: '40%' }}>
            <b>Default Values</b>
          </div>
          <div style={{ flexBasis: '30%' }}>
            <b>CSS Variable</b>
          </div>
        </div>
        {filter.map((token) => {
          const weightStyle = { flexBasis: '30%', fontWeight: `var(--${token.name})` };
          const fontStyle = { flexBasis: '30%', font: `var(--${token.name})` };
          return (
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} key={token.name}>
              <div style={type === 'weight' ? weightStyle : fontStyle} className={token.attributes.item}>
                {' '}
                {token.attributes.item}
              </div>
              <div style={{ flexBasis: '40%' }}>
                <pre style={{ textWrap: 'wrap' }}>{token.value}</pre>
              </div>
              <div style={{ flexBasis: '30%' }}>
                <CopyButton value={`--${token.name}`} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TokenExample;
