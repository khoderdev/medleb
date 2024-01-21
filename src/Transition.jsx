import React, { useState } from "react";
import { Transition } from "react-transition-group";

const FadeTransition = ({ in: inProp, children }) => {
  const duration = 300; // transition duration in milliseconds

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <Transition in={inProp} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};
export default FadeTransition;
// // Example usage:
// const App = () => {
//   const [showContent, setShowContent] = useState(false);

//   return (
//     <div>
//       <button onClick={() => setShowContent(!showContent)}>
//         Toggle Content
//       </button>
//       <FadeTransition in={showContent}>
//         <div>Content to be transitioned</div>
//       </FadeTransition>
//     </div>
//   );
// };
