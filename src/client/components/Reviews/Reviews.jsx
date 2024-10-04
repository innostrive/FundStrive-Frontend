import Form from "../../../dashboard/components/form/Form";
import TextInput from "../../../dashboard/ui/TextInput";

const Reviews = () => {
  const onSubmit = (data) => {
    console.log("data:", data);
  };
  return (
    <section>
      <Form onSubmit={onSubmit}>
        <TextInput label="Name" name="name" type="text" />
        <TextInput label="Email" name="email" type="text" />
        <TextInput label="Review" name="review" type="textarea" />
      </Form>
    </section>
  );
};

export default Reviews;
