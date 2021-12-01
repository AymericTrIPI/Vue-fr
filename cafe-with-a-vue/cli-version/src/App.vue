<template>
  <div id="app">
    <h1>{{ restaurantName }}</h1>
    <p class="description">
      Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
      notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
      matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
      est difficile de s'arrêter.
    </p>

    <section class="menu">
      <h2>Menu</h2>
      <MenuItem
				v-for="item in simpleMenu"
				:addToShoppingCart="addToShoppingCart"
				:name="item.name"
				:image="item.image"
				:quantity="item.quantity"
				:inStock="item.inStock"
				:key="item.name"
        @update-quantity="updateQuantity"
			/>
    </section>

    <aside class="shopping-cart">
      <h2>Panier d'achat : {{ shoppingCart }} articles</h2>
    </aside>

    <h2>Contactez nous</h2>
    <p>Adresse : {{ address }}</p>
    <p>Téléphone : {{ phone }}</p>
    <p>Email : {{ email }}</p>
    <p>Horaires :</p>
    <ul>
      <li>L-V: 06:00 à 16:00</li>
      <li>Samedi: 07:00 à 14:00</li>
      <li>Dimanche: 07:00 à 12:00</li>
    </ul>
    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>
import MenuItem from './components/MenuItem.vue'

export default {
  name: "app",
  components: {
    MenuItem
  },
  data() {
    return {
      address: "18 avenue du Beurre, Paris, France",
      email: "hello@cafewithavue.bakery",
      phone: "01 88 88 88 88",
      restaurantName: "La belle vue",
      shoppingCart: 0,
      simpleMenu: [
        {
          id: 1,
          name: "Croissant",
          image: {
            source: "images/croissant.jpg",
            alt: "Un croissant",
          },
          inStock: true,
          quantity: 1,
        },
        {
          id: 2,
          name: "Baguette de pain",
          image: {
            source: "images/french-baguette.jpeg",
            alt: "Quatre baguettes de pain",
          },
          inStock: true,
          quantity: 1,
        },
        {
          id: 3,
          name: "Éclair",
          image: {
            source: "images/eclair.jpg",
            alt: "Éclair au chocolat",
          },
          inStock: false,
          quantity: 1,
        },
      ],
    };
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();

      return `Copyright ${this.restaurantName} ${currentYear}`;
    },
  },
  methods: {
    addToShoppingCart(amount) {
      this.shoppingCart += amount;
    },
    updateQuantity(id, newAmount){
      console.log(id)
      this.simpleMenu[id-1].quantity = newAmount;
    }
  },
};
</script>

<style lang="scss">
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.description {
  max-width: 960px;
  font-size: 1.2rem;
  margin: 0 auto;
}

.footer {
  text-align: center;
  font-style: italic;
}

.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
}

.menu-item__image {
  max-width: 300px;
}

.shopping-cart {
  position: absolute;
  right: 30px;
  top: 0;
}

</style>
