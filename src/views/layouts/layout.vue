<template>
  <div style="background-color: #34495e; min-height: 100vh">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent, onMounted } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},
  setup() {
    const names = [
      {
        id: Date.now(),
        name: "Jane Doe",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        like: "0",
        dislike: "5",
        date: "30.08.2022 - 12:39",
      },
      {
        id: Date.now(),
        name: "Jane Doe 1",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        like: "2",
        dislike: "1",
        date: "30.08.2022 - 12:39",
      },
    ];
    onMounted(() => {
      if (localStorage.getItem("chatList") == null) {
        console.log("Liste hazırlandı");
        localStorage.setItem("chatList", JSON.stringify(names));
      }
    });
  },
});
</script>