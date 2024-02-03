import StackGrid from "react-stack-grid";
import './Pinterest.css';
import { useState, useEffect } from "react";

function Pinterest({pictureData}){
    const [key, setKey] = useState(0);

    useEffect(() => {
      // 一定時間後にStackGridのキーを更新して再レンダリングをトリガー
      setTimeout(() => {
        setKey(prevKey => prevKey + 1);
      }, 1000); // 1000ミリ秒後に更新
    }, []);
    return(
        <StackGrid columnWidth={300} gutterWidth={20} gutterHeight={20}>
            {pictureData.map(value => {
                return(
                    <figure className="card" key={value.src}>
                        <h5 className="card-genre">{value.genre}</h5>
                        <img className="card-img" src={value.src} alt={value.detail} />
                        <figcaption className="card-text">
                            <h3 className="card-order">{value.order}</h3>
                            <div className="card-detail">{value.detail}</div>
                        </figcaption>
                    </figure>
                );
            })}
        </StackGrid>
    );
}

export default Pinterest;