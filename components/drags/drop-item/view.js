import React, { forwardRef } from "react";


export default forwardRef(({ children, heading }, ref) => {
  return (
    <div className="container" ref={ref}>
      <div style={{padding: '0em .5em'}}>
      <h2 className="font s-20 w-regular c-info-important">{heading}</h2>
      </div>
      <div className="body">{children}</div>
    </div>
  );
});
