import Autocomplete from "@mui/material/Autocomplete";
import { useSearchRef } from "./SearchRefProvider";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import InputBase from "@mui/material/InputBase";
import Popper from "@mui/material/Popper";
import ClearIcon from "@mui/icons-material/Clear";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { IconButton } from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

export default function SearchBox() {
  const { inputValue, setInputValue, setQuery, autoCompleteOptions } =
    useSearchRef();

  const handleInputChange = (event, newInputValue) => {
    const trimmedInput = newInputValue.trim();
    if (trimmedInput === inputValue) {
      return;
    }
    if (trimmedInput === "") {
      setInputValue("");
      setQuery("");
    } else {
      setInputValue(newInputValue);
      setQuery(newInputValue);
    }
  };

  const handleClear = () => {
    setInputValue("");
    setQuery("");
  };

  return (
    <Autocomplete
      freeSolo
      options={autoCompleteOptions}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      disablePortal
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setInputValue("");
          setQuery("");
        }
      }}
      slots={{ popper: Popper }}
      slotProps={{
        popper: {
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 10],
              },
            },
          ],

          sx: {
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            overflow: "hidden",
            bgcolor: "background.paper",
          },
        },
      }}
      sx={{ width: "100%" }}
      renderInput={(params) => (
        <InputBase
          placeholder="Search tasks..."
          inputRef={params.InputProps.ref}
          inputProps={{
            ...params.inputProps,
          }}
          startAdornment={
            <InputAdornment position="start" sx={{ m: "0" }}>
              <SearchIcon
                sx={{ color: "#bbb", position: "absolute", left: "5px" }}
              />
            </InputAdornment>
          }
          endAdornment={
            inputValue && (
              <IconButton position="end" onClick={handleClear} sx={{ m: "0" }}>
                <ClearIcon
                  sx={{
                    color: "#888",
                    cursor: "pointer",
                    position: "absolute",
                    right: "5px",
                    "&:hover": { color: "#555" },
                  }}
                />
              </IconButton>
            )
          }
          sx={{
            width: "100%",
            height: "40px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "background.default",
            borderColor: "rgb(0 0 0 / 15%)",
            "&:hover": {
              borderColor: "#f5f5fd",
            },
            "&.Mui-focused": {
              border: "none",
              boxShadow: "0 2px 0 2px rgba(214, 213, 213, 0.2)",
            },
            fontSize: "1rem",
          }}
        />
      )}
      renderOption={(props, option) => {
        const matches = match(option, inputValue);
        const parts = parse(option, matches);
        const { key, ...rest } = props;

        return (
          <ListItem key={key} {...rest} component="li" disablePadding>
            <ListItemIcon sx={{ minWidth: 30, color: "#bbb" }}>
              <SearchIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary={
                <span>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                      }}
                    >
                      {part.text}
                    </span>
                  ))}
                </span>
              }
            />
          </ListItem>
        );
      }}
    />
  );
}
