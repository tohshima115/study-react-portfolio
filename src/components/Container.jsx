import './Container.css'
import Header from './Header';

function Container({title}){
    return(
        <div className='container'>
            <Header title = {title} />
            <div className='main-contents'>
                child
            </div>
      </div>
    )
}

export default Container;