import React, { Component } from 'react';
import NavBar from './NavBar';
import './App.css';

class MapOfEvents extends Component {
  constructor(props) {
    super(props)
    // TODO: I DON'T KNOW WHAT TO DO HERE
  }

  render() {
    return (
      <div>
        <NavBar />

        <table id='MapCalDes'>
            <tr>
              <td>
                <iframe src="https://www.google.com/maps/d/u/2/embed?mid=1ZdjvcSz5tbyURWV4dx5YgBA1PeN0wmtl" width="800" height="700"></iframe>
              </td>
              <td>
                <table id='CalDes'>
                   <tr>
                     <td>
                       <iframe src="https://calendar.google.com/calendar/embed?src=lo1g5erva50mj5olpe940f1rgs%40group.calendar.google.com&ctz=America%2FLos_Angeles" width="450" height="400"></iframe>
                     </td>
                  </tr>
                  <tr>
                    <td>
                      <h1> Ugly Baby </h1>
                      <p> Don’t let the name fool you, with unicorns guiding the way to the store from Seattle’s very own Pike Place market, shoppers can experience first hand their quirky sense of humor and charismatic nature. Ugly Baby keeps their customers on their toes with their sharp wit, timeless shower art, and colorful sense of style. Everything in the store was designed or created by independent local artists so you won’t find any merchandize similar to theirs. With affordable prices Ugly Baby allows their patrons to brighten up their homes with homemade DIY crafts and kits alike, so don’t be afraid to let your inner kid show and follow that unicorn!</p>
                    </td>
                  </tr>
                </table>
               </td>
             </tr>
           </table>
      </div>

    );
  }
}




export default MapOfEvents;
