import './Works.css';
import Nav from '../../components/Nav';
import Header from '../../components/Header'
import Pinterest from '../../components/Pinterest';
import worksData from '../../components/worksData';

function Works() {
  return (
    <div className='works'>
      <Nav/>
      <div className='container'>
        <Header title={"Works"}/>
        <main>
          <Pinterest pictureData={worksData}/>
        </main>
      </div>
    </div>
  )
}

export default Works;