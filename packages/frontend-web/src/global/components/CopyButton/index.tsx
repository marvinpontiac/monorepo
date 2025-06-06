import React from 'react';

export interface CopyButtonProps {
  value?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ value }) => {

  const notify = (value: string = "") => {
    const notification = document.createElement("dialog");
    notification.setAttribute('style', "position: fixed; inset: auto 2rem 2rem auto; border: 0; border-radius: .25rem; padding: 1rem 1.5rem; box-shadow: 0 0 .5rem  var(--color-gray-light8);");
    notification.setAttribute('open', 'true');
    notification.innerText = 'Copied: ' + value;
    document.body.append(notification);
    setTimeout(() => {
      notification.remove();
    }, 1500);
  }

  const handleCopy = (value: string = "") => {
    if (navigator && navigator.clipboard) {
      navigator.clipboard.writeText(value);
      notify(value);
    }
  };
  
  return <button onClick={() => handleCopy(value)} style={{cursor: "pointer", textDecoration: "none", background: "var(--color-gray-light40)", borderRadius: "2rem", font: "var(--font-body-p4)", fontWeight: "var(--font-weight-semibold)", borderColor: "var(--color-gray-light8)", padding: ".25rem .5rem"}} title="copy to clipboard" type="button">{value}</button>;
};

export default CopyButton;
