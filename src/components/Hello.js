import React from "react";

const Hello = () => {
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hello Everyone")
  );

  //   return (
  //     <div>
  //       <h1>Hello Everyone.</h1>
  //     </div>
  //   );
};

export default Hello;
