// Dynamic handleInputChange func can be used in any form
export const handleInputChange = (event, formData, setFormData) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
};
/*
USAGE: 
import { resetForm, handleInputChange } from './utils/formUtils';

const FormComponent = () => {
  const initialFormData = {
    input: '',
  };
  const [formData, setFormData] = useState(initialFormData);

  return
    <input
        value={formData.input1}
        onChange={(event) => handleInputChange(event, formData, setFormData)}
      />
*/

// -----------------------------------------------------------------------------

// Dynamic inputs clear func can be used in any form
export const resetForm = (initialFormData, setFormData) => {
  setFormData(initialFormData);
};

/*
USAGE: 

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(formData);
    resetForm(initialFormData, setFormData);
  };
*/
