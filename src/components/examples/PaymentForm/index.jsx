import { useFormik } from "formik";

const PaymentForm = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      name: "",
      cardNumber: "",
      expireDate: "",
      cvv: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex flex-col ">
      <h1 className="font-bold mb-4">Payment Form</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={values.name}
          onChange={handleChange}
          id="name"
          name="name"
          className="border border-gray-300 rounded-md p-2"
        />
        <label htmlFor="">Card Number</label>
        <input
          type="text"
          value={values.cardNumber}
          onChange={handleChange}
          id="cardNumber"
          name="cardNumber"
          className="border border-gray-300 rounded-md p-2"
        />
        <label htmlFor="">Expire Date</label>
        <input
          type="text"
          value={values.expireDate}
          onChange={handleChange}
          id="expireDate"
          name="expireDate"
          className="border border-gray-300 rounded-md p-2"
        />
        <label htmlFor="">CVV</label>
        <input
          type="text"
          value={values.cvv}
          onChange={handleChange}
          id="cvv"
          name="cvv"
          className="border border-gray-300 rounded-md p-2"
        />
        <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
