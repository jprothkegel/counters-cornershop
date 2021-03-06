import React from 'react';
import PropTypes from 'prop-types';

function RefreshIcon({ ...props }) {
  const { fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="18"
      fill="none"
      viewBox="0 0 15 18"
    >
      <path
        fill={fill}
        d="M7.266 9.094c.25 0 .46-.078.609-.242l3.203-3.235a.87.87 0 00.281-.656.895.895 0 00-.28-.649L7.882 1.055a.814.814 0 00-.617-.258c-.485 0-.86.398-.86.89 0 .243.086.43.242.594l1.696 1.664a7.683 7.683 0 00-.946-.062c-3.89 0-7 3.11-7 7.023a7.04 7.04 0 007.047 7.055 7.035 7.035 0 007.047-7.055c0-.547-.375-.922-.906-.922-.516 0-.875.375-.875.922a5.253 5.253 0 01-5.266 5.266 5.251 5.251 0 01-5.258-5.266c0-2.96 2.305-5.297 5.211-5.297.446 0 .852.032 1.211.086L6.65 7.633a.815.815 0 00-.243.586c0 .492.375.875.86.875z"
      ></path>
    </svg>
  );
}

RefreshIcon.propTypes = {
  fill: PropTypes.string,
};

export default RefreshIcon;
