import React, {Fragment, Component} from 'react';
import Info from './Info';
import Comics from './Comics';

// To use marvel api you need to get a private and public key
// Reference is: https://developer.marvel.com/
var PRIV_KEY = '48af838ae9b8f46c248878cf32db00c7ebe8e3c6';
var PUBLIC_KEY = 'b234161539619aee8f067f5a132ec1f3';

// To authorize your api request you need to use timestamp and hash code
// Reference is: https://developer.marvel.com/documentation/authorization
var ts = new Date().getTime();
// Used CryptoJS javascript library for hashing
var CryptoJS = require("crypto-js");
var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();

const API_ADDRESS_CHARACTER_NAME_PART_1 = 'http://gateway.marvel.com/v1/public/characters?name='
const API_ADDRESS_CHARACTER_NAME_PART_2 = '&ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' +hash;

const API_ADDRESS_COMICS_PART_1 = 'http://gateway.marvel.com/v1/public/characters/'
const API_ADDRESS_COMICS_PART_2 = '/comics?&ts=' + ts + '&apikey=' + PUBLIC_KEY + '&hash=' +hash;


class App extends Component {

    // Initializing component state
    state = {
             superHeroId: 0,
             superHeroName: null,
             superHeroDescription: null,
             superHeroImage: null, 
             superHeroComics: []
            }

    constructor(props){
        super(props);
        // Binding js functions 
        this.updateSuperHeroName = this.updateSuperHeroName.bind(this);
        this.searchSuperHero = this.searchSuperHero.bind(this);
    }

    // onChange DOM event occurs when the value of an element has been changed
    updateSuperHeroName = event => {
        // console.log('event.target.value', event.target.value);
        this.setState({superHeroName: event.target.value});
    }

    // onKeyPress DOM event occurs when user presses a key on his keyboard
    handleKeyPress = event =>{
        // If user pressed Enter key
        if(event.key === 'Enter'){
            this.searchSuperHero();
        }
    }

    searchSuperHero(){
        // ES6 Destructuring
        const { superHeroName} = this.state;

        fetch(`${API_ADDRESS_CHARACTER_NAME_PART_1}` + superHeroName + `${API_ADDRESS_CHARACTER_NAME_PART_2}`)
        .then(response => response.json())
        .then(json => {
             console.log("json", json);

            // if there is no such a marvel hero in the fetched results
            if(json.data.results.length == 0){
                alert("You typed a non existing marvel superhero!");
            }
            else{
                // id field is used to make the comics api request
                var fetchedId = json.data.results[0].id;
                this.setState({superHeroId: fetchedId});

                var fetchedDescription = json.data.results[0].description;
                this.setState({superHeroDescription: fetchedDescription});

                var fetchedName = json.data.results[0].name;
                this.setState({superHeroName: fetchedName});

                var fetchedImage = json.data.results[0].thumbnail.path + '.' + json.data.results[0].thumbnail.extension;
                this.setState({superHeroImage: fetchedImage});
                
                // Destructuing again
                const { superHeroId } = this.state;
                // It fetches comics of a superhero from marvel api
                fetch(`${API_ADDRESS_COMICS_PART_1}` + superHeroId + `${API_ADDRESS_COMICS_PART_2}`)
                .then(response => response.json())
                .then(json => {
                    console.log('comics', json.data.results);
                    var fetchedComics = json.data.results;
                    this.setState({superHeroComics: fetchedComics});
                })

                .catch(error => alert(error.message));
            }
          })

        .catch(error => alert(error.message));
      }

    render(){
        // console.log("this.state", this.state);
        const {superHeroName, superHeroDescription, superHeroImage, superHeroComics} = this.state;

        return (
            <Fragment>
                <h2>Marvel Superheroes Website</h2>
                <p> You can use the search bar below to see character information and comics of superhero </p>
                <input 
                    id='search-bar' 
                    placeholder='search a marvel superhero'
                    onChange={this.updateSuperHeroName}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.searchSuperHero}> Search</button>
                <p>(spider-man, iron man, hulk, thor, wolverine, daredevil, captain america, silver surfer,
                    punisher, doctor strange, black panther, quicksilver etc.)
                </p>
                
                <Info 
                    superHeroName={superHeroName}
                    superHeroDescription={superHeroDescription}
                    superHeroImage={superHeroImage}
                 />
                <Comics 
                    superHeroComics={superHeroComics}
                />
            </Fragment>
        )
    }
}

export default App;
