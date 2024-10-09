import { Option, Select } from "@material-tailwind/react";
import useSetting from "../../hooks/useSettings";

export function FilterSettings({ handleSlugFilter, handleAllSlug }) {
  const [settings] = useSetting();
  return (
    <div className="w-32 my-10">
      <Select label="Filter With Slug" className="rounded-none">
        <Option value="all" onClick={(value) => handleAllSlug(value)}>
          All
        </Option>
        {settings.map((setting) => (
          <Option onClick={() => handleSlugFilter(setting?.slug)}>
            {setting?.slug}
          </Option>
        ))}
      </Select>
    </div>
  );
}
