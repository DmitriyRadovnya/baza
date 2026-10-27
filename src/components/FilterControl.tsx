import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { ChangeEvent, Dispatch, FC, SetStateAction } from "react";

export enum FilterMode {
  ALL = "all",
  ACTIVE = "active",
  COMPLETE = "complete",
}

type FilterControlProps = {
  filterMode: FilterMode;
  setFilterMode: Dispatch<SetStateAction<FilterMode>>;
};

export const FilterControl: FC<FilterControlProps> = ({
  filterMode,
  setFilterMode,
}) => {
  const changeMode = (e: ChangeEvent<HTMLInputElement, Element>) => {
    const val = e.target.value;
    switch (val) {
      case FilterMode.ALL:
        setFilterMode(val);
        break;
      case FilterMode.ACTIVE:
        setFilterMode(val);
        break;
      case FilterMode.COMPLETE:
        setFilterMode(val);
        break;
      default:
        return;
    }
  };
  return (
    <FormControl>
      <FormLabel>Показать:</FormLabel>
      <RadioGroup
        row
        defaultValue="all"
        value={filterMode}
        onChange={changeMode}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <FormControlLabel
          value={FilterMode.ALL}
          label="Все"
          control={<Radio />}
        />
        <FormControlLabel
          value={FilterMode.ACTIVE}
          label="Активные"
          control={<Radio />}
        />
        <FormControlLabel
          value={FilterMode.COMPLETE}
          label="Завершенные"
          control={<Radio />}
        />
      </RadioGroup>
    </FormControl>
  );
};
