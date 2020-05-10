import React, {Component} from 'react';


import '../Card/style.css';
import api from '../../api/api.js';
import Type from '../Types/types.js';

export default class Card extends Component{

    state = {
        pokemons: [],
        listColors: ['#6959CD', '#483D8B', '#0000FF', '#00BFFF' , '#4682B4', '#00FF7F', '#D2691E', '#FF4500' ,'#FFFF00']
    }



    componentDidMount(){
        this.loadPokemons();
    }

    loadPokemons = async () =>{
        const response = await api.get('pokedex.json');

        let {pokemon} = response.data;

        this.setState({pokemons: [...pokemon]});

        console.log(this.state.pokemons);
        
    }

    randomColors = () =>{
        return this.state.listColors[Math.floor(Math.random() * 9)];

    }

    





    render(){



        return(
            <div id='app'>
                {this.state.pokemons.map(item => (
                    <div className='cardPokemon'>
                            <h4 id='number'>#{item.num}</h4>
                            <h3>{item.name}</h3>
                            <img src={item.img} alt={item.name}/>
                            <Type title={item.type} color={this.randomColors()}/>           
                    </div>
                ))}
            </div>
            
        

        );
    }

}