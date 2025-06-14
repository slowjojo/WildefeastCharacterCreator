<template>
    <div class="roster-box">
      <slot />
    </div>
  </template>
  
  <style scoped>
  .roster-box {
    flex: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background-color: blue;
    padding: 0.5rem;
  
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .roster-box::-webkit-scrollbar {
    display: none;
  }
  </style>
  