import './Planet.css';
import { useState, useEffect } from 'react'; 

function Planet() {
  const isPathnameNotEmpty = window.location.pathname !== "/";
  const [randomLetter, setRandomLetter] = useState('a'); // 初期値を'a'としてランダムな文字を生成するstateを作成

  useEffect(() => {
    const alphabet = 'abcdefghi';
    const randomIndex = Math.floor(Math.random() * alphabet.length); // 0から9までのランダムなインデックスを生成
    const randomChar = alphabet[randomIndex]; // ランダムな文字を取得
    setRandomLetter(randomChar);
  }, []); // 空の依存配列を渡すこで初回レンダリング時にのみ実行

  console.log(randomLetter)

  return (
    <div className={`container ${isPathnameNotEmpty ? "blur" : ""}`}>
      <div className='sun'>
        <div className='earth'>
          <div className='earth-locus'></div>
          <div className={`earth-main ${randomLetter}`}>
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
