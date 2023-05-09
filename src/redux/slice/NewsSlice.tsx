import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { API_KEY, TOP_STORIES_BASE_URL, TOP_STORIES_INITIAL_STATE, TOP_STORIES_NAME } from "../../constants/NewsConstant";




export const topstories = createAsyncThunk('fetchTopStories', async (value: string) => {
    console.log("Step 2 ")

    const response = await fetch(TOP_STORIES_BASE_URL + "arts.json?api-key=" + API_KEY);
    console.log(TOP_STORIES_BASE_URL + "arts.json?api-key=" + API_KEY)
    return response.json();

})


const newsSlice = createSlice({
    name: TOP_STORIES_NAME,
    initialState: TOP_STORIES_INITIAL_STATE,
    reducers:{},

    extraReducers: (builder) => {
        builder.addCase(topstories.pending, (state) => {
            console.log("topstory pending   ")
            state.isloading = true
        });

        builder.addCase(topstories.fulfilled, (state,action)=>{
            console.log("top stori fullfilled ... ")
            state.data=action.payload;
            state.isloading=false
        });

        builder.addCase(topstories.rejected, (state,action)=>{
            console.log("topstory rejected  ")
            console.log("Error ",action.payload);
            state.isError=true;
        })

    },
    

});

export default newsSlice.reducer