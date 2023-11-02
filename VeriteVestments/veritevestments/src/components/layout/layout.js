import React from 'react';
import Info from '../header/top/info';
import Menu from '../header/bottom/menu';
import Footer from '../footer/footer';
function Layout(props) {
    return (    
        <>
            <Info/>
            <Menu/>
            {props.children}
            <Footer/>
        </>
    );
  }
  
  export default Layout;