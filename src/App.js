import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
import { Layout, Header, Navigation, Drawer, Footer, FooterSection, FooterDropDownSection, FooterLinkList } from 'react-mdl';

/*import { tsUndefinedKeyword } from '@babel/types';
https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric */
const API_KEY = "c4284a294c0c58b3dcc66882ce5da683"

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Fyll ut feltene :)"
      });
    }
 }
  render() {
    return ( 
      <div>
        <div className="demo-big-content">
    <Layout>
        <Header className="header-color"title="React Klima API handler" scroll>
            <Navigation>
                <a href="https://www.linkedin.com/in/espen-thorsen-frank/">LinkedIn</a>
                <a href="https://github.com/Thusj?tab=repositories">Github</a>
            </Navigation>
        </Header>
        <Drawer title="Klima">
            <Navigation>
                <a href="https://www.linkedin.com/in/espen-thorsen-frank/">LinkedIn</a>
                <a href="https://github.com/Thusj?tab=repositories">Github</a>
            </Navigation>
        </Drawer>
    </Layout>
    
      </div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-7 title-container">
                  <Titles />
                </div>
                <div className="col-xs-4 form-container">                
                  <Form getWeather={this.getWeather} />
                  <Weather 
                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer size="mini">
          <FooterSection type="left" logo="Just a react test">
              <FooterLinkList>
                <h7>dont know what to put here :)</h7>
                <h8>Just testing footer</h8>
              </FooterLinkList>
            </FooterSection>
          </Footer>
      </div>
    );
  }
};

export default App;