<template>
  <section id="TransactionFilterCard" class="filter-wrapper">
    <div data-hover="false" data-delay="0" class="filter w-dropdown">
      <div class="filter-inner w-dropdown-toggle">
        <div class="w-icon-dropdown-toggle"></div>
        <div>Date</div>
      </div>
      <nav class="w-dropdown-list">
        <a href="#" class="w-dropdown-link">Link 1</a>
        <a href="#" class="w-dropdown-link">Link 2</a>
        <a href="#" class="w-dropdown-link">Link 3</a>
      </nav>
    </div>
    <div data-hover="false" data-delay="0" class="filter w-dropdown">
      <div class="filter-inner w-dropdown-toggle">
        <div class="w-icon-dropdown-toggle"></div>
        <div>Status</div>
      </div>
      <nav class="w-dropdown-list">
        <a href="#" class="w-dropdown-link">Link 1</a>
        <a href="#" class="w-dropdown-link">Link 2</a>
        <a href="#" class="w-dropdown-link">Link 3</a>
      </nav>
    </div>
    <div data-hover="false" data-delay="0" class="filter w-dropdown">
      <div class="filter-inner w-dropdown-toggle">
        <div class="w-icon-dropdown-toggle"></div>
        <div>Currency</div>
      </div>
      <nav class="w-dropdown-list">
        <a href="#" class="w-dropdown-link">Link 1</a>
        <a href="#" class="w-dropdown-link">Link 2</a>
        <a href="#" class="w-dropdown-link">Link 3</a>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: "TransactionFilterCard"
}
</script>

<style scoped>
h3 {margin: 40px 0 0; }
ul {list-style-type: none; padding: 0; }
li {display: inline-block; margin: 0 10px; }
a {color: #222222;}
</style>