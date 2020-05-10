import Axios from 'axios';

const api = Axios.create({
    baseURL: 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/'

});

export default api;