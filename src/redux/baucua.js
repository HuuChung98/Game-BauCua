const initialState = {
    tongDiem: 500,
    danhSachCuoc: [
        { diemCuoc: 0, loai: "bau"},
        { diemCuoc: 0, loai: "cua"},
        { diemCuoc: 0, loai: "tom"},
        { diemCuoc: 0, loai: "ca"},
        { diemCuoc: 0, loai: "ga"},
        { diemCuoc: 0, loai: "nai"},
    ],
    xucXac: ["bau", "bau", "bau"],
};

const baucuaReducer = (state = initialState, action) => {
    switch (action.type) {
    
        default:
            return state;
    }
};

export default baucuaReducer;