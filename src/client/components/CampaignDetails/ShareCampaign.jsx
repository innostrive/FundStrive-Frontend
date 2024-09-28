import { Button, Input } from "@material-tailwind/react";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaGoogle, FaInstagram } from "react-icons/fa6";

const ShareCampaign = () => {
  const [value, setValue] = useState("http://localhost:5173/campaign/2");
  const [copied, setCopied] = useState(false);
  return (
    <div>
      <div className="my-4">
        <h1 className="text-base font-medium text-secondary">Share Campaign</h1>
      </div>
      <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="text"
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
          value={value}
          disabled
          onChange={({ target: { value } }) => {
            setValue(value);
            setCopied(false);
          }}
        />
        <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
          <Button
            size="sm"
            className="!absolute right-1 top-1 rounded bg-secondary"
          >
            Copy
          </Button>
        </CopyToClipboard>
      </div>
      <div className="flex gap-4 my-4">
        <a
          href="https://www.facebook.com/"
          target="__blank"
          className="h-10 w-10 flex items-center justify-center rounded-md bg-secondary text-text-primary"
        >
          <BiLogoFacebook size={20} />
        </a>
        <a
          href="https://bd.linkedin.com"
          target="__blank"
          className="h-10 w-10 flex items-center justify-center rounded-md bg-secondary text-text-primary"
        >
          <BiLogoLinkedin size={20} />
        </a>
        <a
          href="https://www.instagram.com"
          target="__blank"
          className="h-10 w-10 flex items-center justify-center rounded-md bg-secondary text-text-primary"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="https://mail.google.com/"
          target="__blank"
          className="h-10 w-10 flex items-center justify-center rounded-md bg-secondary text-text-primary"
        >
          <FaGoogle size={20} />
        </a>
      </div>
    </div>
  );
};

export default ShareCampaign;
