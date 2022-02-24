import DaftarMinuman from '../Lib/DaftarMinuman';
import React ,{Component} from 'react';
import Header from './Header';

class MenuMinuman extends Component{
  render(){
    return(
      <div>
        <Header />
        <h3>Daftar Minuman Favourite</h3>
        <table style ={{width : ' 100%'}}>
          <tbody>
            <tr>
              {DaftarMinuman.map((data,index) => {
                return(
                  <td key ={index}>
                  <center>
                    <img
                      src= {data.img}
                      alt = 'product Minuman'
                      width = '100'
                      height = '150'
                      />
                      <p>{data.NamaMinuman}</p>
                      <p> Harga : {data.Harga}</p>

                  </center>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

}


export default MenuMinuman;
