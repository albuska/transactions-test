const Icons = () => {
  return (
    <div>
      <svg
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <symbol id="icon-search" viewBox="0 0 32 32">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeMiterlimit="4"
              strokeWidth="2.6667"
              d="M25.333 14.667c0 5.891-4.776 10.667-10.667 10.667s-10.667-4.776-10.667-10.667c0-5.891 4.776-10.667 10.667-10.667s10.667 4.776 10.667 10.667z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeMiterlimit="4"
              strokeWidth="2.6667"
              d="M28 28l-5.8-5.8"
            ></path>
          </symbol>
          <symbol id="icon-cross" viewBox="0 0 32 32">
            <path
              fill="currentColor"
              d="M31.333 3.755l-3.089-3.089-12.245 12.245-12.245-12.245-3.089 3.089 12.245 12.245-12.245 12.245 3.089 3.089 12.245-12.245 12.245 12.245 3.089-3.089-12.245-12.245 12.245-12.245z"
            ></path>
          </symbol>
        </defs>
      </svg>
    </div>
  );
};

export default Icons;
