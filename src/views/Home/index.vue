<template>
  <div class="home">
    <upLoad></upLoad>
  </div>
</template>

<script>
// @ is an alias to /src
import upLoad from "@/components/upload";
export default {
  name: "home",
  components: { upLoad }
};
</script>
