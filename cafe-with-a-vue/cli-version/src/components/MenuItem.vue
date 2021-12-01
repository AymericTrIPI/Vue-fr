<template>
  <div class="menu-item">
        <img
          class="menu-item__image"
          :src="image.source"
          :alt="image.alt"
        />
        <div>
          <h3>{{ name }}</h3>
          <p v-if="inStock">En stock</p>
          <p v-else>En rupture de stock</p>
          <div>
            <label for="add-item-quantity"
              >Quantité : {{ quantity }}</label
            >
            <input
              v-model.number="liveQuantity"
              id="add-item-quantity"
              type="number"
              @change="updateLiveQuantity"
            />
            <button @click="addToShoppingCart(liveQuantity)">
              Ajouter au panier d'achat
            </button>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: [
    "id",
    "name",
    "inStock",
    "quantity",
    "image",
    "addToShoppingCart"
  ],
  data() {
    return {
      liveQuantity: 1,
      methods: {
        updateLiveQuantity(){
          console.log(this.$props.id)
          this.$emit("update-quantity", this.$props.id, this.liveQuantity);
        }
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
