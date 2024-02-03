import './ContactBox.css';

// propsを一つのオブジェクトから分割代入
function ContactBox({ boxName, type, val, change }) {

    return(
        <div className='contactBox'>
            <div className='boxName'>{boxName}</div>
            <input className='boxInput' type={type} value={val} onChange={change} />
        </div>
    );
}

export default ContactBox;