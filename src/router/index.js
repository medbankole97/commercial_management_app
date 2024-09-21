import { createRouter, createWebHistory } from 'vue-router';

// Composants que tu veux afficher pour chaque route
import ListCustomer from '../components/customers/ListCustomer.vue';
import ListProduct from '../components/products/ListProduct.vue';
import ListOrder from '../components/orders/ListOrder.vue';
import AddOrder from '../components/orders/AddOrder.vue'; 
import EditOrder from '../components/orders/EditOrder.vue'; 
import ViewOrder from '../components/orders/ViewOrder.vue'; 


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
   },
   {
    path: '/add-order',  
    name: 'order-add',
    component: AddOrder,
  },
  {
    path: '/order-edit/:id',
    name: 'order-edit',
    component: EditOrder,
  },
  {
    path: '/order-view/:id',
    name: 'order-view',
    component: ViewOrder,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
