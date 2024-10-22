import image1 from "../../assets/donate-1.jpg";
import image2 from "../../assets/donate-2.jpg";
import image3 from "../../assets/donate-3.jpg";
// import useCampaignGallery from "../../hooks/useCampaignGallery";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import mdThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const Gallery = ({ campaignId }) => {
  // const [gallery] = useCampaignGallery();
  console.log("id:", campaignId);
  const URL = import.meta.env.VITE_BASE_URL;
  const imageUrl = import.meta.env.VITE_IMAGE_URL;
  const { data: gallery = [] } = useQuery({
    queryKey: ["campaign-gallery"],
    queryFn: async () => {
      const res = await axios.get(
        `${URL}/campaigns/asset?type=image&campaign_id=${campaignId}`
      );
      console.log("gallery:", res.data.data);
      return res.data.data;
    },
  });
  console.log("image:", gallery);
  return (
    <section>
      <LightGallery
        speed={500}
        plugins={[mdThumbnail, lgZoom]}
        elementClassNames="gallery"
      >
        {gallery.map((image) => (
          <a href={image?.asset} key={image?._id}>
            <img
              src={imageUrl + image?.asset}
              alt={`Image ${image?.asset}`}
              className="h-40 w-60 object-cover"
              crossOrigin="anonymous"
            />
          </a>
        ))}
      </LightGallery>
    </section>
  );
};

export default Gallery;
