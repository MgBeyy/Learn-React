import "../Styles/FormStyle.css";
import SuccessAlert from "./SuccessAlert";
import { use, useState } from "react";

export default function Form() {
  const [data, setData] = useState({
    name: "",
    salary: 1,
    phone: "",
    age: 0,
    student: false,
    buttonDisabled: true,
  });

  const [isSubmit, setIsSubmit] = useState(false);
  const handleFormChange = (e) => {
    const { name, type, value, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    const updateData = {
      ...data,
      [name]: newValue,
    };

    const isButtonDisabled = !(
      updateData.name.length > 0 &&
      updateData.phone.length === 10 &&
      updateData.age > 18 &&
      updateData.salary > 0
    );
    updateData.buttonDisabled = isButtonDisabled;
    setData(updateData);

    console.log(data);
  };

  const submitForm = (e) => {
    setIsSubmit(true);
    e.preventDefault();
  };

  return (
    <div
      style={{
        backgroundColor: "darkblue",
        color: "white",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "70%",
      }}
    >
      {isSubmit && <SuccessAlert onClick={() => setIsSubmit(false)} />}
      <form className="form" onChange={handleFormChange} onSubmit={submitForm}>
        <label className="input">
          Name:
          <input name="name" type="text" value={data.name} />
        </label>
        <label className="input">
          Phone Number:
          <input name="phone" type="text" maxLength={10} minLength={10} />
        </label>
        <label className="input">
          Age:
          <input name="age" type="number" />
        </label>
        <label className="input">
          Are you a student:
          <input name="student" type="checkbox" />
        </label>
        <label className="input">
          Salary:
          <select defaultValue={data.salary} name="salary">
            <option value={1}>0-1000</option>
            <option value={2}>1000-2000</option>
            <option value={3}>2000-3000</option>
          </select>
        </label>
        <label className="input">
          <button
            type="submit"
            disabled={data.buttonDisabled}
            style={{
              color: "white",
              backgroundColor: data.buttonDisabled ? "gray" : "green",
            }}
          >
            Submit
          </button>
        </label>
      </form>
    </div>
  );
}
