import { writable, type Writable } from "svelte/store";
import { browser } from "$app/environment";

const storedSelectedId = localStorage.getItem("selectedId");
export const selectedId = writable(parseInt(storedSelectedId || "0"));

const storedCustomPlayerNames = JSON.parse(localStorage.getItem("players") || JSON.stringify(["Player 1","Player 2","Player 3","Player 4","Player 5","Player 6"]));
export const customPlayerNames: Writable<string[]> = writable(storedCustomPlayerNames);

const storedCustomTeamNames = JSON.parse(localStorage.getItem("teams") || JSON.stringify(["Team 1","Team 2"]));
export const customTeamNames: Writable<string[]> = writable(storedCustomTeamNames);

export const gameState: Writable<any> = writable(null);

if(browser){

    customTeamNames.subscribe(value => {
        if(value.length > 2) value = [value[0], value[1]];
        localStorage.setItem("teams", JSON.stringify(value))
    })

    customPlayerNames.subscribe(value => {
        localStorage.setItem("players", JSON.stringify(value))
    })

    selectedId.subscribe(value => {
        localStorage.setItem("selectedId", value.toString())
    })

}

