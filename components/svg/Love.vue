<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.3083 9.35179C16.4517 12.4952 16.4517 17.5917 13.3083 20.7352L12.8164 21.2271C12.3895 21.6539 11.6974 21.6539 11.2705 21.2271L2.47826 12.4348C0.557271 10.5138 0.557273 7.39926 2.47826 5.47827C4.39926 3.55728 7.5138 3.55728 9.43479 5.47827L13.3083 9.35179Z"
      :fill="color"
    />
    <path
      opacity="0.6"
      d="M12.834 21.2095C12.3974 21.6461 11.6895 21.6461 11.2529 21.2095L5.08694 15.0435L14.6522 5.47826C16.5731 3.55727 19.6877 3.55727 21.6087 5.47826C23.5297 7.39926 23.5297 10.5138 21.6087 12.4348L12.834 21.2095Z"
      :fill="color"
    />
  </svg>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default() {
        return "#A6A9BC";
      },
    },
  },
};
</script>
