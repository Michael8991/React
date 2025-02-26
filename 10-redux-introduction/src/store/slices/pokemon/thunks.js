import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemons());

        //*Obtenemos el estado actual de Redux
        const { page: currentPage } = getState().pokemons;
        const newPage = page === 0 ? currentPage : page;

        //?fetch API
        //? const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        //? const data = await resp.json();

        //*Axios
        const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`)

        dispatch(setPokemons({ pokemons: data.results, page: newPage }));
    }
}