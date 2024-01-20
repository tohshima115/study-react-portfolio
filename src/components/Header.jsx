import './Header.css'

function Header({title}){
    return(
        <div className='header'>
            <div className='title-path'>
                {title}
            </div>
        </div>
    )
}

export default Header;