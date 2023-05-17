<template>
  <div class="Register">
    <div class="gradient-section">
      <h1 class="title">Register Here</h1>
      <p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p><p><br /></p>
          <p ><input type="text" placeholder="Email" v-model="email"/></p>
          <p ><input type="password" placeholder="Password" v-model="password"/></p>
          <p>
            <button @click="register"> Submit</button>
          </p>
          <p>
            <button @click="signInWithGoogle"> Sign In With Google</button>
          </p>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import {getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from "firebase/auth"
  import { useRouter } from "vue-router";

  const email = ref("")
  const password = ref("")
  const router = useRouter()

  const register = () => {

  const auth = getAuth()
  createUserWithEmailAndPassword(auth, email.value, password.value)
  // eslint-disable-next-line no-unused-vars
  .then((data) => {
  console.log("Successfully registered!");
  console.log(auth.currentUser)
  router.push('/');
}).catch((error) => {
  console.log(error.code);
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
};

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

.Register {
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
