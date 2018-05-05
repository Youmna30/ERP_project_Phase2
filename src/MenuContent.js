//Yomna Mansour
import React, {Component} from 'react';
import MenuHeader from './MenuHeader';

export default class MenuContent extends Component{
    render(){
        return(
            <div>
                <MenuHeader/>
                <div class="first">
                    <h1 class="h1">WHO WE ARE</h1> 
                    <h2 class="h2">Overview</h2>
                     <h2 class="h2">Mission, Values <br/>and Ethics</h2>
                    <h2 class="h2">History</h2>
                    <h2 class="h2">Director’s speech</h2>

                </div>
                <div class="second"> 
                         <h1 class="h1">WHAT WE DO</h1> 
                    <h2 class="h2">Legislations</h2>
                     <h2 class="h2">Public Interset <br/>Disclosures</h2>
                    <h2 class="h2">Counter-terroism</h2>
                    <h2 class="h2">Counter proliferation</h2>
                    </div>


               <div class="third">
                  <h1 class="h1">WHAT WE DO</h1> 
                    <h2 class="h2">Legislations</h2>
                     <h2 class="h2">Public Interset <br/>Disclosures</h2>
                    <h2 class="h2">Counter-terroism</h2>
                    <h2 class="h2">Counter proliferation</h2>

                </div>
            </div>
        );
    }
}