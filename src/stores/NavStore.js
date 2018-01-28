import { EventEmitter } from 'events';

import { OPEN_SIDE_NAV, CLOSE_SIDE_NAV } from '../constants';
import dispatcher from '../dispatcher';

class NavStore extends EventEmitter {
  constructor() {
    super();

    this.isSideNavOpen = false;
    this.navItems = [
      {
        name: 'Projects',
        href: '/projects',
        external: false
      },
      {
        name: 'Blog',
        href: 'https://medium.com/@wraytw',
        external: true
      }
    ];
  }

  handleActions({ type }) {
    switch (type) {
      case OPEN_SIDE_NAV:
        this.openSideNav();
        break;
      case CLOSE_SIDE_NAV:
        this.closeSideNav();
        break;
      default:
        break;
    }
  }

  openSideNav() {
    this.isSideNavOpen = true;
    this.emit('change');
  }

  closeSideNav() {
    this.isSideNavOpen = false;
    this.emit('change');
  }
}

const navStore = new NavStore();

dispatcher.register(navStore.handleActions.bind(navStore));

export default navStore;
