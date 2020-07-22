import React from "react";
import "./signIn.components.scss";
import FormInput from "../formInput/formInput.components";
import CustomButton from "../customBtn/customBtn.components";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>login Infomation bitch!</span>
        {/* here goes the form */}
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            type="email"
            required
            name="email"
            value={this.state.email}
            label="email"
          />

          <FormInput
            type="password"
            required
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
          />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
