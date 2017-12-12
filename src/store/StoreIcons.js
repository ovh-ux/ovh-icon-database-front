export const moduleIcons = {
    state: {
        icons: [
            {
                id: 1,
                name: 'AntiDdosProtection',
            },
            {
                id: 2,
                name: 'Bin',
            },
            {
                id: 3,
                name: 'Chatbot',
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
