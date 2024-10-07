import { Option, Select } from "@material-tailwind/react";
import useSetting from "../../hooks/useSettings";

export function FilterSettings() {
  const { settings } = useSetting();
  return (
    <div className="w-32">
      <Select label="Filter With Slug" className="rounded-none">
        {settings.map((setting) => (
          <Option>{setting?.slug}</Option>
        ))}
      </Select>
    </div>
  );
}
