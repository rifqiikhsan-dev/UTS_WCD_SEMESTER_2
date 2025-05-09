import { React, useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import Filter from "../../components/filter/Filter";
import ListPokemon from "../../components/list_pokemon/ListPokemon";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils/storage";

const Pokemon = () => {
    // Get previous state from localStorage if available
    const storedView = getFromLocalStorage("pokemonView") || "grid";
    const storedSortBy = getFromLocalStorage("pokemonSortBy") || "";
    const storedKeyword = getFromLocalStorage("pokemonKeyword") || "";

    const [view, setView] = useState(storedView);
    const [sortBy, setSortBy] = useState(storedSortBy);
    const [navFor] = useState("home");
    const [keyword, setKeyword] = useState(storedKeyword);

    // Save user preferences to localStorage whenever they change
    useEffect(() => {
        saveToLocalStorage("pokemonView", view);
    }, [view]);

    useEffect(() => {
        saveToLocalStorage("pokemonSortBy", sortBy);
    }, [sortBy]);

    useEffect(() => {
        saveToLocalStorage("pokemonKeyword", keyword);
    }, [keyword]);

    return (
        <div className="bg-[#252A3E] h-full w-screen flex flex-col justify-start">
            <Navbar navFor={navFor} setKeyword={setKeyword} />
            <Filter view={view} setView={setView} sortBy={sortBy} setSortBy={setSortBy} />
            <ListPokemon view={view} sortBy={sortBy} keyword={keyword} />
        </div>
    );
};

export default Pokemon;
