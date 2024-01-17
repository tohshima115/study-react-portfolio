import './Planet.css';

function Planet() {
  const isPathnameNotEmpty = window.location.pathname !== "/";
  return (
    <div className={`container ${isPathnameNotEmpty ? "blur" : ""}`}>
      <div className='sun'>
        <div className='earth'>
          <div className='earth-locus'></div>
          <div className='earth-main'>
            <div className='moon'>
              <div className='moon-locus outside'></div>
              <div className='moon-locus'></div>
              <div className='moon-main'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planet;
