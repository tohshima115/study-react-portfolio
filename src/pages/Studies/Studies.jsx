import './Studies.css';
import Nav from '../../components/Nav';
import Header from '../../components/Header';
import Pinterest from '../../components/Pinterest';
import { studiesData } from '../../components/studiesData';

function Studies() {
  return (
    <div className='studies'>
      <Nav/>
      <div className='container'>
        <Header title={"Studies"}/>
        <main>
          <Pinterest pictureData={studiesData}/>
        </main>
      </div>
    </div>
  )
}

export default Studies;