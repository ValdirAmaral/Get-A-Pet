import styles from "./Profile.module.css";
import formStyles from "../../form/Form.module.css";

import Input from "../../form/Input"

function Profile() {
  return (
    <section>
      <h1>Perfil</h1>
      <p>Preview Imagem</p>
      <form>
        <Input
        text="Imagem"
        type="file"
        name="image"
        handleOnChange={onFileChange}
        
        />
      </form>
    </section>
  );
}

export default Profile;
