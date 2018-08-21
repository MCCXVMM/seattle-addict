import React, { Component } from 'react';
import NavBar from './NavBar';
import jess from './FILLERJESSICA.JPG';
import andy from './FILLERANDY.JPG';
import kend from './FILLERKENDRA.JPG';
import kezi from './FILLERKEZIA.png';

class AboutUs extends Component {
  constructor(props) {
    super(props)
    // TODO: I DON'T KNOW WHAT TO DO HERE
  }

  render() {
    return (
      <div>
        <NavBar />

        <div id='AboutUs'>
          <div id='GeneralAboutUs'>
            <h1>About Seattle Addict</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed commodo diam, sed tincidunt turpis. Proin id venenatis velit, a bibendum orci. Sed blandit est justo, vel scelerisque libero commodo in. Proin diam velit, mattis at urna sed, tincidunt accumsan turpis. Nunc porttitor semper finibus. Quisque tristique magna a purus accumsan lacinia. Etiam consequat odio et sem dapibus, eu ultricies massa hendrerit. Morbi fringilla leo quis magna dictum rhoncus.
            </p>
            <p>
              Aenean dignissim sagittis elit fringilla elementum. Quisque molestie augue eu dolor efficitur suscipit. Proin urna justo, malesuada at condimentum vel, hendrerit non tellus. Suspendisse ac egestas neque, ut sodales erat. Etiam massa dolor, malesuada at ex sit amet, gravida molestie eros. Phasellus non est risus. Donec ut odio ultrices, finibus neque sed, molestie ipsum. Vivamus scelerisque mauris et justo malesuada euismod. Nam leo nulla, vulputate eu ultricies in, sodales et nibh. Suspendisse convallis, mauris nec dapibus semper, felis leo efficitur nulla, eget euismod lectus urna condimentum justo. Suspendisse ut efficitur nunc. Phasellus in enim tempus, rutrum dolor sed, sollicitudin libero. Vivamus accumsan iaculis nibh ac posuere.
              Morbi a nisi ut odio fermentum lobortis. Aliquam in libero at purus tempor commodo. Maecenas suscipit, magna at interdum lobortis, felis dolor posuere odio, in viverra justo leo non orci. Aliquam fermentum magna elit, non vulputate est facilisis sed. Proin eget finibus risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras scelerisque ut augue id gravida. Ut rutrum, ante luctus mattis condimentum, lorem libero tincidunt sem, ut scelerisque metus neque eget enim.            </p>
            <p>
              Aenean dignissim sagittis elit fringilla elementum. Quisque molestie augue eu dolor efficitur suscipit. Proin urna justo, malesuada at condimentum vel, hendrerit non tellus. Suspendisse ac egestas neque, ut sodales erat. Etiam massa dolor, malesuada at ex sit amet, gravida molestie eros. Phasellus non est risus. Donec ut odio ultrices, finibus neque sed, molestie ipsum. Vivamus scelerisque mauris et justo malesuada euismod. Nam leo nulla, vulputate eu ultricies in, sodales et nibh. Suspendisse convallis, mauris nec dapibus semper, felis leo efficitur nulla, eget euismod lectus urna condimentum justo. Suspendisse ut efficitur nunc. Phasellus in enim tempus, rutrum dolor sed, sollicitudin libero. Vivamus accumsan iaculis nibh ac posuere.
              Morbi a nisi ut odio fermentum lobortis. Aliquam in libero at purus tempor commodo. Maecenas suscipit, magna at interdum lobortis, felis dolor posuere odio, in viverra justo leo non orci. Aliquam fermentum magna elit, non vulputate est facilisis sed. Proin eget finibus risus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras scelerisque ut augue id gravida. Ut rutrum, ante luctus mattis condimentum, lorem libero tincidunt sem, ut scelerisque metus neque eget enim.
            </p>
          </div>
          <div id='SpecificAboutUs'>
            <h1>Team Members</h1>
            <table>
              <tr>
                <td>
                  <p className='ImageJess'>
                    <img src={jess} alt='Member' className='AboutUsImageJess'/>
                  </p>
                </td>
                <td>
                  <p className='ImageKezia'>
                    <img src={kezi} alt='Member' className='AboutUsImageKezi'/>
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 className='JessTitle'>
                    Jessica Louie
                  </h2>
                  <p className='JessDesc'>
                    Head Manager/Main Programmer
                  </p>
                </td>
                <td>
                  <h2 className='KeziaTitle'>
                    Kezia Catrece
                  </h2>
                  <p className='KeziaDesc'>
                    Marketing Manager/Interviewer
                  </p>
                </td>
              </tr>
                <tr>
                  <td>
                    <p className='ImageAndy'>
                      <img src={andy} alt='Member'className='AboutUsImageAndy'/>
                    </p>
                  </td>
                  <td>
                    <p className='ImageKendra'>
                      <img src={kend} alt='Member'className='AboutUsImageKendra'/>
                    </p>
                  </td>
                </tr>
                <td>
                  <h2 className='AndyTitle'>
                    Andy Manzano
                  </h2>
                  <p className='AndyDesc'>
                    Company Organizer/Interviewer
                  </p>
                </td>
                <td>
                  <h2 className='KendraTitle'>
                    Kendra Okoro
                  </h2>
                  <p className='KendraDesc'>
                    Editoral Manager/Journalist
                  </p>
                </td>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
