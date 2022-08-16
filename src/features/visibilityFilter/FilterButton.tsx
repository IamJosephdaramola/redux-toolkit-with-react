import { setVisibilityFilter, VisibilityFilter } from "./visibilityFilterSlice";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { RootState } from "app/store";

interface FilterButtonProps {
  visibilityFilter: VisibilityFilter;
  text: string;
}

export default function FilterButton({
  visibilityFilter,
  text,
}: FilterButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const currentVisibilityFilter = useAppSelector(
    (state: RootState) => state.visibilityFilter
  );

  const isActive = currentVisibilityFilter === visibilityFilter;
  return (
    <button
      onClick={() => dispatch(setVisibilityFilter(visibilityFilter))}
      disabled={isActive}
      style={{
        fontWeight: isActive ? "bold" : "normal",
      }}
    >
      {text}
    </button>
  );
}
