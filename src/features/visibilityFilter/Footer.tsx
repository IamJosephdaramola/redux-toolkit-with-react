import FilterButton from "./FilterButton";
import { VisibilityFilter } from "./visibilityFilterSlice";

export default function Footer(): JSX.Element {
  return (
    <div>
      <span>Show: </span>
      <FilterButton visibilityFilter={VisibilityFilter.showAll} text="All" />
      <FilterButton
        visibilityFilter={VisibilityFilter.showActive}
        text="Active"
      />
      <FilterButton
        visibilityFilter={VisibilityFilter.showCompleted}
        text="Completed"
      />
    </div>
  );
}
