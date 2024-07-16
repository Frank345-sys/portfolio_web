import React, { useRef } from "react";
//import { CSSTransition, SwitchTransition } from "react-transition-group";

const Toggle = ({ hanleChangeTheme, isChecked }) => {
  //const textRef = useRef(null);

  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={hanleChangeTheme}
        checked={isChecked}
      ></input>

      <label htmlFor="check">
        <p>
          <b>{isChecked ? "Dark Mode" : "Light Mode"}</b>
        </p>
      </label>
    </div>
  );
};

/*
<SwitchTransition>
          <CSSTransition
            key={isChecked}
            nodeRef={textRef}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <p ref={textRef}>
              <b>{isChecked ? "Light Mode" : "Dark Mode"}</b>
            </p>
          </CSSTransition>
        </SwitchTransition>
*/

export default Toggle;
