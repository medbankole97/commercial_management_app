import { createRouter, createWebHistory } from 'vue-router';

// Composants que tu veux afficher pour chaque route
import ListCustomer from '../components/customers/ListCustomer.vue';
import ListProduct from '../components/products/ListProduct.vue';
import ListOrder from '../components/orders/ListOrder.vue';

const routes = [
  {
    path: '/',
    redirect: '/customers'
  },
  {
    path: '/customers',
    name: 'customers-list',   
    component: ListCustomer,
  },
  {
     path: '/products',
     name: 'products-list',    
     component: ListProduct,
   },
   {
     path: '/orders',
     name: 'order-list',      
     component: ListOrder,
   }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
