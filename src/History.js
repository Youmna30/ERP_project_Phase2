//Yomna Mansour
import React,{Component} from 'react';
import Container from './Container';
import MenueContainer from './MenueContainer';
import Content from './Content';
import Footer from './Footer';
import './style2.css';
import './bootstrap.css';
import './bootstrap.min.css';

const hstyle1={marginLeft: '20%'};
const hstyle2={background:'black', width: '100%',maxWidth: '1920px',margin: 'auto'};
const hstyle3={marginBottom: '8%'};
const hstyle4={marginBottom: '2%'};
const hstyle5={paddingTop: '7%',paddingBottom: '7%'};
const hstyle6={marginRight: '20%'};
const hstyle7={};

export default class History extends Component{
    render(){
        return(
            <div>
                <Container/>
                <MenueContainer/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}