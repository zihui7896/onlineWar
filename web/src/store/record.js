export default {
    state: {
        is_record: false,
        a_step: "",
        b_step: "",
    },
    getters: {

    },
    mutations: {
        updateIsRecord(state, is_record) {
            state.is_record = is_record;
        },
        updateSteps(state, data) {
            state.a_step = data.a_step;
            state.b_step = data.b_step;
        },
    },
    actions: {

    },
    modules: {

    }
}
