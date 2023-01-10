import { Row, Form } from 'react-bootstrap'

const FormControl = ({
  type, placeholder, value, onChange,
}) => (
  <Row>
    <Form.Control
      className="my-2"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={30}
    />
  </Row>
)

export default FormControl
