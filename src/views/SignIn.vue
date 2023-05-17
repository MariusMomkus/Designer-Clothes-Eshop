<template>
  <div className="SignIn">
    <div className="gradient-section">
      <h1 className="title">Sign In Here</h1>
      <p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p>
      <p><input type="text" placeholder="Email" v-model="email"/> <br /></p>
      <p><input type="password" placeholder="Password" v-model="password"/><br /></p>
      <p v-if="errMsg">{{ errMsg }}<br /></p>
      <p><button @click="signIn"> Submit </button><br /></p>
      <p><button @click="signInWithGoogle"> Sign In With Google</button><br /></p>
    </div>
  </div>
</template>

<script setup>

import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth"
import { useRouter } from "vue-router";

const email = ref("")
const password = ref("")
const router = useRouter()
const errMsg = ref()
const signIn = () => {

  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
      // eslint-disable-next-line no-unused-vars
      .then((data) => {
        console.log("Successfully Signed in!");
        console.log(auth.currentUser)
        router.push('/');
      }).catch((error) => {
    console.log(error.code);

    switch (error.code) {
      case "auth/invalid-email":
        errMsg.value = "Invalid email";
        break;
      case "auth/user-not-found":
        error.value = "No account with that email was found";
        break;
      case "auth/wrong-password":
        errMsg.value = "Incorrect password";
        break;
      default:
        errMsg.value = "Email or password was incorrect";
        break;
    }


    alert(error.message);
  })
}
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log(result.user);
        router.push("/about")
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {

      });
}


</script>

<style scoped>
.gradient-section {
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(transparent, rgb(0, 0, 0));
  z-index: -1;
  text-align: center;
  align-items: center;
  justify-content: top;
  overflow: hidden;
}

.gradient-section .title {
  position: absolute;
  align-self: center;
  text-align: center;
  letter-spacing: 0.3em;
  font-weight: 100;
  text-indent: 0.3em;
  font-size: 3rem;
  color: #fff;
  text-transform: uppercase;
  font-family: "Magisho", sans-serif;
  margin-top: 6em;
  text-shadow: 1px 1px 2px black;
}

.gradient-section .text {
  position: absolute;
  align-self: center;
  text-align: center;
  font-family: "Magisho", sans-serif;
  font-size: 1.3rem;
  font-weight: 100;
  letter-spacing: 0.1em;
  margin-top: 18em;
  padding: 0em 20em;
  text-shadow: 1px 1px 2px black;
  color: #fff;
}

.SignIn {
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: -5;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: -2;
  object-position: top;
  animation: fade-in 0.5s forwards;
  overflow: hidden;
}

@media only screen and (max-width: 600px) {
  .gradient-section .title {
    font-size: 2rem;
  }

  .gradient-section .text {
    font-size: 1rem;
    width: 40vh;
  }
}
</style>
