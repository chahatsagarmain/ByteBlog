import Header from './Header';
import './../stylesheets/header.css';
import Footer from './Footer';
import {Outlet} from 'react-router-dom';
import Card from "./Card";


export default function Layout(){

    return(
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>

    )
}