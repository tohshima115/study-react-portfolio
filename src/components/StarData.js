const Circle = ({ style }) => {
    const isPathnameNotEmpty = window.location.pathname !== "/";
    return <div className={`${isPathnameNotEmpty ? "blur" : ""}`} style={style}></div>;
};

const createRandomStyle = () => {
    const size = Math.random() * 8; // 例えば、最大50pxのサイズ
    const left = Math.random() * window.innerWidth;
    const top = Math.random() * window.innerHeight;
  
    return {
      position: 'absolute',
      left: `${left}px`,
      top: `${top}px`,
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: '#eee',
      borderRadius: '50%',
    };
};

export {Circle, createRandomStyle};