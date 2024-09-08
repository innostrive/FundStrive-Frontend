import ContactForm from "../../components/ContactForm/ContactForm";
import Container from "../../components/Container/Container";
import donate from "../../assets/donate-1.jpg";
const ContactUs = () => {
  return (
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
  );
};

export default ContactUs;
