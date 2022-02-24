import DaftarMakanan from '../Lib/DaftarMakanan';
import React ,{Component} from 'react';
import Header from './Header';

class MenuMakanan extends Component{
  render(){
    return(
      <div>
      <Header/>
      <h3>Daftar Makanan Favourite </h3>
      <table style = {{width :'100%'}}>
        <tbody>
          <tr>
            {DaftarMakanan.map((data,index) =>{
              return(
              <td key ='index'>
              <center>
              <img
                src ={data.img}
                alt = 'product makanan'
                width = '150'
                height = '100'
                />
                <p>{data.NamaMakanan}</p>
                <p> Harga : {data.Harga}</p>
                </center>
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}

export default MenuMakanan;