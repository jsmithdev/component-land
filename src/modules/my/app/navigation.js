export const navigationItems = {
    //about: {
    //    title: 'About',
    //    value: 'about',
    //    route: '/about',
    //    visible: false
    //},
};

export const navigationElements = Object.keys(navigationItems).map(
    item => navigationItems[item].value
);