<template>
    <div class="roster-box">
      <slot />
    </div>
</template>

<style scoped>
.roster-box {
  flex: 1;
  min-height: 0;       /* important to enable scrolling inside flex */
  overflow-y: auto;    /* scroll when content too tall */
  display: flex;
  flex-direction: column;
}
</style>
