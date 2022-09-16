<template>
    <div class="c-sidebar" v-if="display">
      <div class="c-sidebar__logo">
        <a href="https://www.peercoin.net/university/" target="_blank">
          <img v-if="this.$store.state.settings.theme === 'dark'" src="../assets/ui/ui-logo.png" alt="Peercoin">
          <img v-else src="../assets/ui/ui-logo-light.png" alt="Peercoin">
        </a>
      </div>
      <div class="c-sidebar__items">
        <ul>
          <li>
            <div class="c-sidebar__items--icon moveMenu">
              <svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M4,10h24c1.104,0,2-0.896,2-2s-0.896-2-2-2H4C2.896,6,2,6.896,2,8S2.896,10,4,10z M28,14H4c-1.104,0-2,0.896-2,2  s0.896,2,2,2h24c1.104,0,2-0.896,2-2S29.104,14,28,14z M28,22H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h24c1.104,0,2-0.896,2-2  S29.104,22,28,22z"/></svg>
            </div>
            <span class="fatter">Menu</span>
          </li>
          <li class="c-sidebar__items--active">
            <div class="c-sidebar__items--icon">
              <img height=32px src="../assets/ui/ui-overview.svg" alt="Overview">
            </div>
            <span>
              <a href="/dashboard">Overview</a>
            </span>
          </li>
          <li>
            <div class="c-sidebar__items--icon">
              <img height="32px" src="../assets/ui/ui-leaf.svg" alt="Mints">
            </div>
            <span>
              <a href="/dashboard/mints">Mints</a>
            </span>
          </li>
          <li>
            <div class="c-sidebar__items--icon rotateArrowUp">
              <img height=32px src="../assets/ui/ui-arrow.svg" alt="Send">
            </div>
            <span>Send</span>
          </li>
          <li>
          <div class="c-sidebar__items--icon rotateArrowDown">
              <img height=32px src="../assets/ui/ui-arrow.svg" alt="Send">
            </div>
            <span>Receive</span>
          </li>
         <li>
            <div class="c-sidebar__items--icon">
              <img height=32px src="../assets/ui/ui-community.svg" alt="Send">
            </div>
            <span>Community</span>
          </li>
          <li>
            <div class="c-sidebar__items--icon">
              <img height=32px src="../assets/ui/ui-backup.svg" alt="Backups">
            </div>
            <span>
              <a href="/dashboard/backups">Backups</a>
            </span>
          </li>
         <li>
            <div class="c-sidebar__items--icon">
              <img height=32px src="../assets/ui/ui-settings.svg" alt="Settings">
            </div>
            <span>
              <a href="/dashboard/settings">Settings</a>
            </span>
          </li>
        </ul>
      </div>
      <div class="c-sidebar__version">
        v.1.0.0
      </div>
    </div>
</template>

<script>
export default {
    name: "Sidebar",
    props: {
      display: {
        type: Boolean,
        default: true
      }
    }
}
</script>