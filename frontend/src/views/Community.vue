<template>
    <div class="c-community">
      <Sidebar :display="this.showSidebar"></Sidebar>
      <div class="c-community-view">
        <div class="c-community-view-header">
            <div class="container">
              <div class="c-community-view-header">
                <img src="../assets/ui/ui-menu.svg" @click="onMenuClick" v-if="!this.showSidebar">
                <h1>Community</h1>
              </div>
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/Sidebar.vue';
  
  export default {
    name: 'Community',
    components: { Sidebar },
    data() {
        return { 
            showSidebar: true
        }
    },
    methods: {
        onMenuClick() {
            this.showSidebar = !this.showSidebar;
        }
    }
  }
  </script>
  