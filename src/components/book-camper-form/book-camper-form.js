import { useForm } from "react-hook-form";
import styles from "./book-camper-form.module.css";
import { Buttons } from "../common-components/buttons/buttons";
const BookCamperForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    window.location.reload();
  };

  return (
    <div className={styles.form_send_section}>
      <h2 className={styles.title}>Book your campervan now</h2>
      <p className={styles.description}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={styles.form_book} onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Name"
          {...register("name", {
            required: { value: true, message: "Please write correct name" },
          })}
        />
        {errors?.name && (
          <p className={styles.validation_text}>{errors?.name?.message}</p>
        )}
        <input
          type="text"
          placeholder="Email"
          {...register("email", {
            required: { value: true, message: "Please write correct email" },
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Please write correct email",
            },
          })}
        />
        {errors?.email && (
          <p className={styles.validation_text}>{errors?.email?.message}</p>
        )}
        <input
          type="date"
          placeholder="Booking Date"
          {...register("booking_date", {
            required: { value: true, message: "Please select booking date" },
          })}
        />
        {errors?.booking_date && (
          <p className={styles.validation_text}>
            {errors?.booking_date?.message}
          </p>
        )}
        <textarea
          rows="4"
          cols="50"
          type="text"
          placeholder="Comment"
          {...register("comment", {})}
        />

        <label className={styles.submitSave}>
          <input className={styles.send} type="submit" />
          <Buttons text="Send" />
        </label>
      </form>
    </div>
  );
};
export default BookCamperForm;
