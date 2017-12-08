export const moduleIcons = {
    state: {
        icons: [
            {
                id: 1, name: 'AntiDdosProtection',
                svg: '<svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;stroke:#122844;stroke-linecap:round;stroke-linejoin:round;}</style></defs><title>antiDdosProtection32</title><path class="cls-1" d="M16.07.5A10.78,10.78,0,0,0,18,3.31,11.37,11.37,0,0,0,21.91,6a13.18,13.18,0,0,0,5,1,13.28,13.28,0,0,1,.61,1.37c.6,1.57,2.69,7.89,2.69,10A8,8,0,0,1,28.33,24C27.1,25.3,16,31.5,16,31.5S4.89,25.3,3.67,24A7.92,7.92,0,0,1,1.79,18.4c0-2.15,2.09-8.49,2.69-10.06A13.37,13.37,0,0,1,5.09,7a13.18,13.18,0,0,0,5-1A11.37,11.37,0,0,0,14,3.31,10.78,10.78,0,0,0,15.93.5Z"/><path class="cls-1" d="M12.43,29.47A10.58,10.58,0,0,1,9,15.18a8.05,8.05,0,0,1,11.1-3,6.65,6.65,0,0,1,2.28,9,5.15,5.15,0,0,1-7.1,1.91,4.26,4.26,0,0,1-1.46-5.78,3.3,3.3,0,0,1,4.55-1.22,2.73,2.73,0,0,1,.93,3.7,2.11,2.11,0,0,1-2.91.78,1.74,1.74,0,0,1-.6-2.37,1.35,1.35,0,0,1,1.86-.5A1.12,1.12,0,0,1,18,19.26a.86.86,0,0,1-1.19.32.71.71,0,0,1-.24-1,.55.55,0,0,1,.76-.21.46.46,0,0,1,.16.62"/><path class="cls-1" d="M17.79,18.81a.87.87,0,1,1-.87-.87.87.87,0,0,1,.87.87"/></svg>'
            },
            {
                id: 2, name: 'Bin',
                svg: '<svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;stroke:#122444;stroke-linecap:round;stroke-linejoin:round;}</style></defs><title>32px-bkg-light</title><path class="cls-1" d="M4.5,10.5v18a3,3,0,0,0,3,3h17a3,3,0,0,0,3-3v-18"/><path class="cls-1" d="M3.5,4.5h25a1,1,0,0,1,1,1v5a0,0,0,0,1,0,0H2.5a0,0,0,0,1,0,0v-5A1,1,0,0,1,3.5,4.5Z"/><path class="cls-1" d="M21.5,4.5v-3a1,1,0,0,0-1-1h-9a1,1,0,0,0-1,1v3"/><line class="cls-1" x1="8.5" y1="15.5" x2="8.5" y2="26.5"/><line class="cls-1" x1="23.5" y1="15.5" x2="23.5" y2="26.5"/><line class="cls-1" x1="13.5" y1="15.5" x2="13.5" y2="26.5"/><line class="cls-1" x1="18.5" y1="15.5" x2="18.5" y2="26.5"/></svg>'
            },
            {
                id: 3, name: 'Chatbot',
                svg: '<svg id="Calque_1" data-name="Calque 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;stroke:#122444;stroke-linecap:round;stroke-linejoin:round;}</style></defs><title>32px-bkg-light</title><path class="cls-1" d="M4.5,10.5v18a3,3,0,0,0,3,3h17a3,3,0,0,0,3-3v-18"/><path class="cls-1" d="M3.5,4.5h25a1,1,0,0,1,1,1v5a0,0,0,0,1,0,0H2.5a0,0,0,0,1,0,0v-5A1,1,0,0,1,3.5,4.5Z"/><path class="cls-1" d="M21.5,4.5v-3a1,1,0,0,0-1-1h-9a1,1,0,0,0-1,1v3"/><line class="cls-1" x1="8.5" y1="15.5" x2="8.5" y2="26.5"/><line class="cls-1" x1="23.5" y1="15.5" x2="23.5" y2="26.5"/><line class="cls-1" x1="13.5" y1="15.5" x2="13.5" y2="26.5"/><line class="cls-1" x1="18.5" y1="15.5" x2="18.5" y2="26.5"/></svg>'
            }
        ]
    },
    mutations: {
        add(state)  {
            state.icons.push({
                id: Math.floor(Math.random()*100),
                name:"New Icon"
            })
        }
    },
    actions: {
        add ({ commit }) {
            setTimeout(() => {
                commit('add');
            },1000);
        }
    }
};
