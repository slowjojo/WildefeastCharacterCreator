<template>
  <v-card
    class="OptionCard"
    :class="{ selected }"
    @click="$emit('select', item.id)"
    :elevation="selected ? 6 : 2"
  >
    <div class="card-main">
      <v-avatar v-if="hasIcon" size="64" class="mr-4">
        <img
          class="option-icon"
          :src="`/icons/${item.icon}`"
          :alt="item.name"
        />
      </v-avatar>
      <div class="OptionName text-h6">{{ item.name }}</div>
    </div>
   
    <div
      v-if="selected"
      class="check-icon"
      title="Selected"
    >
      @
    </div>
  </v-card>
</template>

<script setup lang="ts">
interface OptionItem {
  id: string
  name: string
  icon?: string
}
defineProps<{
  item: OptionItem
  selected?: boolean
  hasIcon?: boolean
}>()
defineEmits<{
  (e: 'select', id: string): void
}>()
</script>

<style scoped>
.check-icon {
  color: green;
  font-weight: bolder;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  margin-left: auto; /* This will push it to the right */
}
.OptionCard {
  color: black;
  display: flex !important; /* Force flex display */
  background-color: bisque;
  transition: 0.2s ease;
  width: 100%;
  align-items: center;
  position: relative;
  padding: 12px; /* Add some padding */
}
.OptionCard:hover {
  background-color: #f5deb3;
}
.card-main {
  display: flex;
  align-items: center;
  flex: 1; /* Take up available space */
}
.option-icon {
  width: 48px;
  height: 48px;
  object-fit: contain;
}
.OptionName {
  font-weight: bold;
}
</style>