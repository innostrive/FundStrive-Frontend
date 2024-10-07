import { Add } from "../../../assets/icons/icons";
import BannerSettingsList from "../../../components/Settings/BannerSettings/BannerSettingsList";
import FormCard from "../../../ui/FormCard";

const BannerSettings = () => {
  return (
    <FormCard
      title="Banner List"
      icon={<Add />}
      iconTitle="Add"
      path="/dashboard/create-banner"
    >
      <BannerSettingsList></BannerSettingsList>
    </FormCard>
  );
};

export default BannerSettings;
