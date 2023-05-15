const ColouredHeartIcons = ({ changeColourHandler }) => {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 47.5 47.5'
        id='heart'
        width='40'
        height='40'
        onClick={changeColourHandler}
      >
        <defs>
          <clipPath id='a'>
            <path d='M0 38h38V0H0v38Z'></path>
          </clipPath>
        </defs>
        <g transform='matrix(1.25 0 0 -1.25 0 47.5)'>
          <path
            fill='#dd2e44'
            d='M3.067 25.68c0 8.799 12.184 12.06 15.933 1.874 3.749 10.186 15.933 6.925 15.933-1.874C34.933 16.12 19 3.999 19 3.999S3.067 16.12 3.067 25.68'
          ></path>
        </g>
      </svg>
    </>
  )
}

export default ColouredHeartIcons
