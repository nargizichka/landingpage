const UpArrowIcon = ({ color, classNmae }) => {
  return (
    <svg
      className={classNmae}
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="60" rx="30" fill="#BCBCBC" fillOpacity="0.4" />
      <path
        d="M26.355 21.4859L38.5161 21.4859L38.5161 33.6469"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.4866 38.5154L38.3458 21.6562"
        stroke={color}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default UpArrowIcon;
