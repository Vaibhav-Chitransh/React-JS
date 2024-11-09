// export const App = () => {
//   return <h1>Starting React Series</h1>
// }

// behind the scene working of this(JSX) :-

import React from "react";

export const App = () => {
  return React.createElement('h1', null, 'Starting React Series');  // no attribute(like class, id) so null
}

console.log(React.createElement('h1', null, `Let's console log this`));