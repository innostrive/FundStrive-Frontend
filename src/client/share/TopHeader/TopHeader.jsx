import Container from "../../components/Container/Container";
const TopHeader = ({ title, image }) => {
  return (
    <section className="relative">
      <img src={image} alt="" className="w-full h-[40vh] object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black to-black opacity-60"></div>
      <div className="absolute inset-0 grid content-center">
        <Container>
          <h1 className="text-3xl font-medium text-white">{title}</h1>
        </Container>
      </div>
    </section>
  );
};

export default TopHeader;
