import { useState, useEffect } from 'react';
import { Circle, createRandomStyle} from './StarData'
import './Stars.css';

function Stars(){
  const [styles, setStyles] = useState([]);

  const [count, setCount] = useState(0);


  const density = 1 / 50000;

  useEffect(() => {
    // 画面の幅と高さを取得
    const width = window.innerWidth;
    const height = window.innerHeight;

    // 星の密度を定義（例: 1星 / 10000平方ピクセル）

    // 画面の面積に基づいて星の数を計算
    const newCount = Math.floor(width * height * density);

    setCount(newCount);
  }, [density]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const newCount = Math.floor(width * height * density);
      setCount(newCount);
    };
  
    // イベントリスナーを登録
    window.addEventListener('resize', handleResize);
  
    // 初期値を設定
    handleResize();
  
    // コンポーネントのアンマウント時にイベントリスナーを削除
    return () => window.removeEventListener('resize', handleResize);
  }, [density]);

  useEffect(() => {
    const newStyles = Array(count).fill(null).map(createRandomStyle);
    setStyles(newStyles);
  }, [count]);

  return(
    <div>
      {styles.map((style, index) => (
      <Circle key={index} style={style} />
      ))}
    </div>
  )
}

export default Stars;