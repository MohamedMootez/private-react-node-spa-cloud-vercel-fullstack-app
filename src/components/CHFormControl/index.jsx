import { Form } from "react-bootstrap";
import { clsx } from "clsx";
import styles from "./CHFormControl.module.css";
export const CHFormControl = ({
  id,
  label,
  type,
  placeholder,
  formGroupClassName,
  inputClassName,
  textAreaShow,
  as,
  rows,
  ...rest
}) => {
  return (
    <>
      {textAreaShow ? (
        <>
          <Form.Group
            controlid={id}
            className={clsx(styles.formGroup, formGroupClassName)}
            id="contactUsSection"
          >
            <Form.Label htmlFor={id}>{label}</Form.Label>
            <Form.Control
              as={as}
              id={id}
              rows={rows}
              placeholder={placeholder}
              className={clsx(styles.customFormControlStyle, inputClassName)}
              {...rest}
            />
          </Form.Group>
        </>
      ) : (
        <>
          <Form.Group
            controlid={id}
            className={clsx(styles.formGroup, formGroupClassName)}
          >
            <Form.Label htmlFor={id}>{label}</Form.Label>
            <Form.Control
              type={type}
              id={id}
              placeholder={placeholder}
              className={clsx(styles.customFormControlStyle, inputClassName)}
              {...rest}
            />
          </Form.Group>
        </>
      )}
    </>
  );
};
