import { createSlice } from "@reduxjs/toolkit"

const appSlice = createSlice({
    name:"app",
    initialState : {
        isMenuOpen : true,
        isSearched : false,
    },
    reducers : {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu : (state) => {
            state.isMenuOpen = false;
        },
        searchStatus : (state) => {
            state.isSearched = !state.isSearched;
        }
    }
})

export const {toggleMenu, closeMenu, searchStatus} = appSlice.actions; 
export default appSlice.reducer;