<template>
  <div class="item-list">
    <div class="header">{{ headerText }}</div>
    <div v-if="items.length === 0">Loading...</div>
    <component
      v-for="item in items"
      :key="item.id"
      :is="DetailComponent"
      :item="item"
      :isVisible="!!selectedItem"
      @deselect="handleDeselect"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ItemList',
  props: {
    itemType: {
      type: String,
      required: true
    },
    headerText: {
      type: String,
      required: true
    },
    DetailComponent: {
      type: Object,
      required: true
    },
    loaderMethod: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const items = ref<any[]>([]);
    const selectedItem = ref<any | null>(null);

    onMounted(async () => {
      items.value = await props.loaderMethod();
    });

    function handleDeselect() {
      selectedItem.value = null;
    }

    return {
      items,
      selectedItem,
      handleDeselect
    };
  }
});
</script>

<style scoped>
.item-list {
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
}
.header {
  font-size: 1.5em;
  margin-bottom: 10px;
}
</style>
