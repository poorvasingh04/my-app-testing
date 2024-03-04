import React, { ReactElement } from "react";

function FirstPage(): ReactElement<React.FC> {
  return (
    <div className="content">
      <iframe
        className="iframe"
        src={`${process.env.PUBLIC_URL}/policy.html`}
        title="My App Policy"
      />
    </div>
  );
}

export default FirstPage;
