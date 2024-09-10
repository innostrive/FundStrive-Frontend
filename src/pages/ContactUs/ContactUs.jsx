import ContactForm from "../../components/ContactForm/ContactForm";
import Container from "../../components/Container/Container";
import donate from "../../assets/donate-1.jpg";
import TopHeader from "../../share/TopHeader/TopHeader";
const ContactUs = () => {
  return (
    <section>
      <TopHeader title="Contact Us" image={donate} />
      <div className="py-20">
        <Container>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <ContactForm />
            </div>
            <div>
              <img src={donate} alt="" className="w-full h-full object-cover" />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ContactUs;
