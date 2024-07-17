import React from "react";
import PropTypes from "prop-types";

const Button = ({ modifier, content, icon, href, target, download }) => {
  const className = `button ${modifier}`;

  if (href) {
    return (
      <a className={className} href={href} target={target} download={download}>
        {icon && <i className={`bx ${icon}`}></i>}
        {content}
      </a>
    );
  }

  return (
    <button className={className}>
      {icon && <i className={`bx ${icon}`}></i>}
      {content}
    </button>
  );
};

Button.propTypes = {
  modifier: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  download: PropTypes.string,
};

Button.defaultProps = {
  icon: "",
  href: null,
  target: null,
  download: null,
};

export default Button;
