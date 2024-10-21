import image1 from "../../assets/donate-1.jpg";
import image2 from "../../assets/donate-2.jpg";
import image3 from "../../assets/donate-3.jpg";
import useCampaignGallery from "../../hooks/useCampaignGallery";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
// import plugins if you need
import mdThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Link } from "react-router-dom";
const Gallery = () => {
  const [gallery] = useCampaignGallery();
  console.log(gallery);
  const images = [
    {
      id: 1,
      img: image1,
    },
    {
      id: 2,
      img: image2,
    },
    {
      id: 3,
      img: image3,
    },
  ];
  return (
    <section>
      <LightGallery
        speed={500}
        plugins={[mdThumbnail, lgZoom]}
        elementClassNames="gallery"
      >
        {images.map((image) => (
          <a href={image?.img} key={image?.id}>
            <img
              src={image?.img}
              alt={`Image ${image?.id}`}
              className="h-40 w-60 object-cover"
            />
          </a>
        ))}
      </LightGallery>
    </section>
  );
};

export default Gallery;
