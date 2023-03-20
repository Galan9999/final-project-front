import CreateForm from "../../components/CreateForm/CreateForm";
import CreatePageStyled from "./CreatePageStyled";

const CreatePage = (): JSX.Element => {
  return (
    <CreatePageStyled className="create">
      <h1 className="create__title">create your quote!</h1>
      <CreateForm />
    </CreatePageStyled>
  );
};

export default CreatePage;
