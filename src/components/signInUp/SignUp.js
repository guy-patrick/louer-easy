import { connect } from "react-redux";
import { Component } from "react";
import { signUpStart } from "../../redux/user/user.actions";
import { CustomButton } from "../CustomButton";
import { FormInput } from "../FormInput";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      signUpStart({ displayName, email, password });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log("error");
    }
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="sign-up">
        <h2 className="title">Je n'ai pas de compte</h2>
        <span>Créer un nouveau compte</span>

        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            label="Nom"
            value={displayName}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            label="Email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="Mot de passe"
            value={password}
            handleChange={handleChange}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            label="Confirmer le mot de passe"
            value={confirmPassword}
            handleChange={handleChange}
            required
          />
          <CustomButton type="submit" title="sign up" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (credentials) => dispatch(signUpStart(credentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
