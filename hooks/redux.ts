import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../rstore";

export const useAppDispatch = () => useDispatch();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
