import { createSlice } from "@reduxjs/toolkit";
import { HomePageState } from "../../../lib/types/screen";

// HomePageState ni chaiqirishimzdan maqsad boshlangich qiymatni chaqirib olishimiz
// va screen type interface ni unga togrilab qoyamiz. Va hozir qurayotkan page miz (HomePageState)
// ga aloqadorligi sabab uni chaqirib olamiz.
const initialState: HomePageState = {
  popularDishes: [],
  newDishes: [],
  topUsers: [],
};

const homePageSlice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    setPopularDishes: (state, action) => {
      // state => yuqorida berilgan statelar(initialState) ni ichida joylashgan
      state.popularDishes = action.payload;
    },

    setNewDishes: (state, action) => {
      //action => payload dan kelayotgan malumotni bizni statemizni newDishes key ostidegi valuesini yangila degan mantiqni beradi
      state.newDishes = action.payload;
    },

    setTopUsers: (state, action) => {
      state.topUsers = action.payload;
    },
  },
});

export const { setPopularDishes, setNewDishes, setTopUsers } =
  homePageSlice.actions;

const HomePageReducer = homePageSlice.reducer;
export default HomePageReducer;

// import { createSlice } from "@reduxjs/toolkit";
// import { HomePageState } from "../../../lib/types/screen";

// const initialState: HomePageState = {
//   popularDishes: [],
//   newDishes: [],
//   topUsers: [],
// };

// const homePageSlice = createSlice({
//   name: "homePage",
//   initialState,
//   reducers: {
//     setPopularDishes: (state, action) => {
//       state.popularDishes = action.payload;
//     },
//     setNewDishes: (state, action) => {
//       state.newDishes = action.payload;
//     },
//     setTopUsers: (state, action) => {
//       state.topUsers = action.payload;
//     },
//   },
// });

// export const { setPopularDishes, setNewDishes, setTopUsers } =
//   homePageSlice.actions;

// const HomePageReducer = homePageSlice.reducer;
// export default HomePageReducer;
