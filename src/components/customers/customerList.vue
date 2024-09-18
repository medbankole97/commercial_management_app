<template>
    <div class="container mt-4">
      <h2 class="mb-4">List of Customers</h2>
      <button class="btn btn-primary mb-3">Add New Customer</button>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in customers" :key="customer.email">
            <td>{{ customer.name }}</td>
            <td>{{ customer.address }}</td>
            <td>{{ customer.email }}</td>
            <td>{{ customer.phone }}</td>
            <td>
              <font-awesome-icon icon="eye" class="text-info me-2" />
              <font-awesome-icon icon="edit" class="text-warning me-2" />
              <font-awesome-icon icon="trash" class="text-danger" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const customers = ref([
    { name: 'John Doe', address: '123 Main St, New York, NY', email: 'johndoe@example.com', phone: '123-456-7890' },
    { name: 'Jane Smith', address: '456 Oak St, Los Angeles, CA', email: 'janesmith@example.com', phone: '098-765-4321' },
    { name: 'Alice Martin', address: '789 Pine St, Chicago, IL', email: 'alicemartin@example.com', phone: '234-567-8901' },
    { name: 'David Brown', address: '101 Maple Ave, Houston, TX', email: 'davidbrown@example.com', phone: '345-678-9012' },
    { name: 'Michael Johnson', address: '202 Elm St, Phoenix, AZ', email: 'michaeljohnson@example.com', phone: '456-789-0123' },
    { name: 'Emily Clark', address: '303 Cedar St, Philadelphia, PA', email: 'emilyclark@example.com', phone: '567-890-1234' },
    { name: 'Robert White', address: '404 Birch St, San Antonio, TX', email: 'robertwhite@example.com', phone: '678-901-2345' },
    { name: 'Sarah Green', address: '505 Walnut St, San Diego, CA', email: 'sarahgreen@example.com', phone: '789-012-3456' },
    { name: 'Chris Blue', address: '606 Spruce St, Dallas, TX', email: 'chrisblue@example.com', phone: '890-123-4567' },
    { name: 'Rachel Black', address: '707 Chestnut St, San Jose, CA', email: 'rachelblack@example.com', phone: '901-234-5678' },
  ]);
  </script>
  
  <style scoped>
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
  }
  
  th {
    text-align: left;
  }
  </style>
  