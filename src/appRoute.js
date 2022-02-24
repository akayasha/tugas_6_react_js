import React from 'react';
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom";
import MenuMakanan from './Page/MenuMakanan'
import MenuMinuman from './Page/MenuMinuman'
import App from './App';

import Kontak from './Page/Kontak';

const appRoute = () => (
 <Router>
   <div>
    <Routes>
     <Route path="/" element={<App />} />
     <Route path="/menu_makanan" element={<MenuMakanan />} />
     <Route path="/menu_minuman" element={<MenuMinuman />} />
     <Route path="Kontak" element={<Kontak />} />
     </Routes>
  </div>
 </Router>
);

export default appRoute;
