import ContactForm from "../../components/ContactForm/ContactForm";
import Container from "../../components/Container/Container";
import donate from "../../assets/images/contact.jpeg";
import contactBg from "../../assets/images/contact-bg.jpg";
import TopHeader from "../../share/TopHeader/TopHeader";
import { getTranslationObject } from "../../../../i18next";
const ContactUs = () => {
  const translation = getTranslationObject("public");
  const { contactUs } = translation?.blog;
  return (
    <section>
      <TopHeader title={contactUs} image={contactBg} />
      <div className="py-20">
        <Container>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:justify-items-start justify-items-center gap-5 px-5 sm:px-0">
            <div>
              <ContactForm />
            </div>
            <div>
              <img
                src={donate}
                alt=""
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default ContactUs;
