import { createRouter, createWebHistory } from 'vue-router';

// Composants que tu veux afficher pour chaque route
import customerList from '../components/customers/customerList.vue';
// import ProductList from '../components/products/ProductList.vue';
// import OrderList from '../components/orders/OrderList.vue';

const routes = [
  {
    path: '/customers',
    name: 'customers',   // Nom de la route
    component: customerList
  }
//   {
//     path: '/products',
//     name: 'products',    // Nom de la route
//     component: ProductList
//   },
//   {
//     path: '/orders',
//     name: 'orders',      // Nom de la route
//     component: OrderList
//   }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
