import { useId } from "react";
import { useGlobalContext } from "../../context/DataContext";
import { IFilterInput } from "../../interfaces/filters/IFilterInput";
import "./filterInput.scss";

export const FilterInput = ({ name, type, value }: IFilterInput) => {
  const id = useId();
  const { filters, setFilters } = useGlobalContext();

  return (
    <>
      <input
        type="radio"
        name={type}
        value={value}
        id={id}
        defaultChecked={filters.country === value || filters.pageSize === value}
        onChange={(el) => {
          const input = el.target;
          if (input.name === "country") {
            setFilters({ ...filters, country: input.value });
          } else {
            setFilters({ ...filters, pageSize: parseInt(input.value) });
          }
        }}
      />
      <label htmlFor={id}>{name}</label>
    </>
  );
};
