import { Component } from "react";
import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { FormInput } from "../FormInput";
import { CustomButton } from "../CustomButton";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    const { emailSignInStart } = this.props;

    emailSignInStart(email, password);

    this.setState({
      email: "",
      password: "",
    });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { email, password } = this.state;
    const { googleSignInStart } = this.props;

    return (
      <div className="sign-in">
        <h2>J'ai déjà un compte</h2>
        <span>Se connecter avec l'email et le mot de passe</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            label="Mot de passe"
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" title="Connexion" />
            <CustomButton
              type="button"
              title="google"
              isGoogleSignIn
              onClick={googleSignInStart}
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
