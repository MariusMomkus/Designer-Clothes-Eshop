<template>
  <Shop :product="getMen" :image="heroMen" :category="category" />
</template>

<script>
import { mapGetters } from "vuex";
import Shop from "@/components/Shop.vue";

export default {
  components: { Shop },
  data() {
    return {
      heroMen: "MenLogo.jpg",
      category: "Men",
    };
  },
  computed: {
    ...mapGetters(["getMen"]),
  },
};
</script>

<style></style>
