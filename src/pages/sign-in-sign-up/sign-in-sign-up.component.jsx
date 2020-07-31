import React, { useState } from "react";
import FormInput from "../../components/forms/form-input.component";
import "./sign-in-sign-up.styles.scss";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";
import SignUp from "../../components/sign-up/sign-up.component";
const SingInAndSignUp = () => {
  const signInWithEmailAndPassword = async (email, password) => {
    await auth.signInWithEmailAndPassword(email, password);
  };
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setemail(value);
      return;
    }
    setPassword(value);
  };
  // console.log(email, password);
  const onSubmit = (event) => {
    event.preventDefault();
    // console.log(email);
  };
  return (
    <div className="sign-in-and-sign-up">
      {/* <div className="title">Sign In</div> */}
      <form onSubmit={(event) => onSubmit(event)}>
        <FormInput
          type="email"
          value={email}
          name="email"
          handleChange={handleChange}
          onSubmit={onSubmit}
        />
        <FormInput
          type="password"
          value={password}
          name="password"
          handleChange={handleChange}
          onSubmit={onSubmit}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <button
            type="submit"
            onClick={() => signInWithEmailAndPassword(email, password)}
          >
            signIn
          </button>
          <button type="submit" onClick={() => signInWithGoogle()}>
            sign In with google{" "}
          </button>
        </div>
      </form>

      {/* <div className="title">register</div> */}
      <SignUp />
    </div>
  );
};

export default SingInAndSignUp;
