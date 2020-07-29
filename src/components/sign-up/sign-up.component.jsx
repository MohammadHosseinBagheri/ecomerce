import React, { useState } from "react";
import FormInput from "../forms/form-input.component";
import { auth, createUserProfile } from "../../firebase/firebase.utils";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log(email, displayName, password, confirmPassword);
    if (password !== confirmPassword) {
      alert("password not mached");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfile(user, {displayName});
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
      return;
    }
    if (name === "password") {
      setPassword(value);
      return;
    }
    if (name === "confirmPassword") {
      setConfirmPassword(value);
      return;
    }
    if (name === "displayName") {
      setDisplayName(value);
      return;
    }
  };
  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <FormInput
        type="text"
        value={displayName}
        name="displayName"
        handleChange={handleChange}
        require
      />
      <FormInput
        type="email"
        value={email}
        name="email"
        handleChange={handleChange}
        require
      />
      <FormInput
        type="password"
        value={password}
        name="password"
        handleChange={handleChange}
        require
      />
      <FormInput
        type="password"
        value={confirmPassword}
        name="confirmPassword"
        handleChange={handleChange}
        require
      />

      <button type="submit">register</button>
    </form>
  );
};

export default SignUp;
