import { Option, Select } from "@material-tailwind/react";
import useSetting from "../../hooks/useSettings";
import { useState } from "react";

export function FilterSettings({ handleMenuFilter, handleAllMenu }) {
  const [settings] = useSetting();
  const [value, setValue] = useState();
  return (
    <div className="w-32 mb-5">
      <Select label="Filter With Menu" className="rounded-none" value={value}>
        <Option
          value="All"
          onClick={(value) => {
            handleAllMenu(value);
            setValue("All");
          }}
        >
          All
        </Option>
        {settings.map((setting) => (
          <Option
            key={setting?._id}
            value={setting?.name}
            onClick={() => {
              handleMenuFilter(setting?.name);
              setValue(setting?.name);
            }}
          >
            {setting?.name}
          </Option>
        ))}
      </Select>
    </div>
  );
}
