import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import DemoReducer from "./redux/DemoReducer/demo.reducer";
import NewsReducer from "./redux/NewsEvents/news.reducer";
import TrainerReducer from "./redux/Trainer/trainer.reducer";
import ProshopReducer from "./redux/ProshopReducer/proshop.reducer";
import BannerReducer from "./redux/Banner/banner.reducer";
import CourseReducer from "./redux/CourseReducer/course.reducer";
import ContentReducer from "./redux/LoadContentReducer/content.reducer";
import BookingReducer from "./redux/BookingReducer/booking.reducer";
import ProvinceReducer from "./redux/ProviceReducer/province.reducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const reducer = combineReducers({
  DemoReducer,
  NewsReducer,
  TrainerReducer,
  ProshopReducer,
  BannerReducer,
  CourseReducer,
  ContentReducer,
  BookingReducer,
  ProvinceReducer,
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
