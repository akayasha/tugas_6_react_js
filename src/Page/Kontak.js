import React,{Component} from 'react';
import Header from './Header';
import '../Style/Kontak.css';

class Kontak extends Component{
  render(){
    return(
      <div id='kontak_bg'>
        <Header />
        <div className ='kontak'>
          <h3>
          JL.Swadaya IV, Pd.Ranggon ,Cipayung ,Kota Jakarta Timur ,Daerah Khusus Ibu Kota Jakarta 13860 {' '}
          </h3>
          <p>081312345678</p>
          </div>
      </div>
    )
  }
}

export default Kontak;
