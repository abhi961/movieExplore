import { useSelector,TypedUseSelectorHook, useDispatch } from "react-redux";
import { RootState,AppDispatch } from "./store";
export const useAppDispatch = ()=> useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector