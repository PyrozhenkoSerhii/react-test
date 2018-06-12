import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

// export default class Navbar extends React.Component {
//     render(){
//         return (
//             <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//                 <a class="navbar-brand" href="">Navbar</a>
//                 <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>
//
//                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul class="navbar-nav mr-auto">
//                         <li class="nav-item active">
//                             <a class="nav-link" href="">Home <span class="sr-only">(current)</span></a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="">Login</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="">Register</a>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         );
//     }
// }