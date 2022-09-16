<template>
    <div class="c-settings">
      <Sidebar :display="this.showSidebar"></Sidebar>
      <div class="c-settings-view">
        <div class="c-settings-view-header">
            <div class="container">
              <div class="c-settings-view-header">
                <img src="../assets/ui/ui-menu.svg" @click="onMenuClick" v-if="!this.showSidebar">
                <h1>Backups</h1>
              </div>
            </div>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  import Sidebar from '../components/Sidebar.vue';
  
  export default {
    name: 'Backups',
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
  