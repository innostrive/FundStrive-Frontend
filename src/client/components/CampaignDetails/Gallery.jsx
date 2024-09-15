import image1 from "../../assets/donate-1.jpg";
import image2 from "../../assets/donate-2.jpg";
import image3 from "../../assets/donate-3.jpg";
const Gallery = () => {
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
    <section className="grid grid-rows-1 grid-flow-col gap-4">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.img}
          alt=""
          className="h-40 w-full object-cover"
        />
      ))}
    </section>
  );
};

export default Gallery;
