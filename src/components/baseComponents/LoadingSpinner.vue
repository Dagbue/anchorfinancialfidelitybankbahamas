<template>
  <div class="spinner-wrapper">
    <ul class="c">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>


<script>
export default {
  name: "LoadingSpinner"
}
</script>

<style scoped>
.spinner-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4em; /* Fixed height to constrain spinner */
  width: 4em; /* Match the width of .c */
  margin: 12% auto; /* Center and add spacing */
}

.c {
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  width: 5em;
  height: 5em; /* Ensure height matches width for proper centering */
}

.c li {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  margin: auto;
  border-radius: 50%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-origin: center center;
  animation: anim 1s ease-in-out infinite;
  will-change: transform, filter;
}

.c li:nth-child(1) {
  width: 1em;
  height: 1em;
}

.c li:nth-child(1)::after {
  content: '';
  display: block;
  font-size: 25%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  box-shadow:
      1em 0 0 rgba(72, 157, 138, 0.2),
      -1em 0 0 rgba(50, 70, 80, 0.2),
      0 1em 0 rgba(211, 75, 76, 0.2),
      0 -1em 0 rgba(232, 169, 97, 0.2);
}

.c li:nth-child(2) {
  animation-delay: 0.1s;
  width: 2em;
  height: 2em;
}

.c li:nth-child(2)::after {
  content: '';
  display: block;
  font-size: 50%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  box-shadow:
      1.5em 0 0 rgba(72, 157, 138, 0.4),
      -1.5em 0 0 rgba(50, 70, 80, 0.4),
      0 1.5em 0 rgba(211, 75, 76, 0.4),
      0 -1.5em 0 rgba(232, 169, 97, 0.4);
}

.c li:nth-child(3) {
  animation-delay: 0.15s;
  width: 3em;
  height: 3em;
}

.c li:nth-child(3)::after {
  content: '';
  display: block;
  font-size: 75%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  box-shadow:
      2em 0 0 rgba(72, 157, 138, 0.6),
      -2em 0 0 rgba(50, 70, 80, 0.6),
      0 2em 0 rgba(211, 75, 76, 0.6),
      0 -2em 0 rgba(232, 169, 97, 0.6);
}

.c li:nth-child(4) {
  animation-delay: 0.2s;
  width: 4em;
  height: 4em;
}

.c li:nth-child(4)::after {
  content: '';
  display: block;
  font-size: 100%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  box-shadow:
      2.5em 0 0 rgba(72, 157, 138, 0.8),
      -2.5em 0 0 rgba(50, 70, 80, 0.8),
      0 2.5em 0 rgba(211, 75, 76, 0.8),
      0 -2.5em 0 rgba(232, 169, 97, 0.8);
}

.c li:nth-child(5) {
  animation-delay: 0.25s;
  width: 5em;
  height: 5em;
}

.c li:nth-child(5)::after {
  content: '';
  display: block;
  font-size: 125%;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  box-shadow:
      3em 0 0 #489D8A,
      -3em 0 0 #324650,
      0 3em 0 #D34B4C,
      0 -3em 0 #E8A961;
}

@keyframes anim {
  50% {
    filter: blur(2px);
  }
  90%, 100% {
    transform: rotate(1turn);
    filter: blur(0);
  }
}
</style>