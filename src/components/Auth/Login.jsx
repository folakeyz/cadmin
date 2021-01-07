import React from 'react'
import styles from './styles.module.css';
import Logo from '../../assets/logo.png';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    return (
        <div className={styles.main}>
            <div className={styles.forms}>
            <div className={styles.logo}>
                <img src={Logo} alt="Chronicles Clothings Logo" />
                </div>
                <div className={styles.form}>
                <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  {/* <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button  type="submit" className={styles.btn}>
    Login
  </Button>
</Form>

                </div>
            </div>
        </div>
    )
}
