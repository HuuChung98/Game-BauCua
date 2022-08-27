const initialState = {
    tongDiem: 500,
    danhSachCuoc: [
        { diemCuoc: 0, loai: "bau" },
        { diemCuoc: 0, loai: "cua" },
        { diemCuoc: 0, loai: "tom" },
        { diemCuoc: 0, loai: "ca" },
        { diemCuoc: 0, loai: "ga" },
        { diemCuoc: 0, loai: "nai" },
    ],
    xucXac: ["bau", "bau", "bau"],
};

const baucuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "TANG_CUOC": {
            const loai = action.data;
            const danhSachCuoc = state.danhSachCuoc.map((item) => {
                if (item.loai === loai) {
                    return { ...item, diemCuoc: item.diemCuoc + 100 };
                }
                return item;
            });
            // Giam Tong diem

            const tongDiem = state.tongDiem - 100;

            return { ...state, danhSachCuoc, tongDiem };
        }
        case "GIAM_CUOC": {
            const loai = action.data;
            const danhSachCuoc = state.danhSachCuoc.map((item) => {
                if (item.loai === loai) {
                    return { ...item, diemCuoc: item.diemCuoc - 100 };
                }
                return item;
            });
            // Giam Tong diem

            const tongDiem = state.tongDiem + 100;

            return { ...state, danhSachCuoc, tongDiem };
        }
        case "PLAY_GAME": {
            // B1: random XUCXAC
            const CON_VAT = [
                'bau', 'cua', 'tom', 'ca', 'ga', 'nai'
            ];
            const xucXac = state.xucXac.map(() => {
                const random = Math.floor(Math.random() * 6);
                return CON_VAT[random]
            });

            //B2: Loc ra DS cuoc co diem cuoc lon hon 0
            const danhSachDatCuoc = state.danhSachCuoc.filter(
                (item) => item.diemCuoc
            );
            let diemThuong = 0;
            //B3: Hoan tien neu danh sach cuoc co con Vat duoc Xoc trung
            // Kiem tra xem item dat cuoc co trung voi xuc sac hay khong
            diemThuong += danhSachDatCuoc.reduce((result, item) => {
                const found = xucXac.find((x) => x === item.loai);
                // neu tim thay ==> Hoan cuoc 
                if (found) {
                    return result + item.diemCuoc;
                }
                return result;
            }, diemThuong);

            // B4: tinh tien thang

            diemThuong += xucXac.reduce((result, x) => {
                const found = danhSachDatCuoc.find(item => item.id === x);
                if(found) {
                    return result + found.diemCuoc;
                }
                return result;
            }, diemThuong);

            const tongDiem = state.tongDiem + diemThuong;
            //B5: reset lai DS cuoc
            const danhSachCuoc = state.danhSachCuoc.map((item) => (
                {...item, diemCuoc: 0}
            ));

            return { ...state, xucXac, tongDiem, danhSachCuoc};
        }
        default:
            return state;
    }
};

export default baucuaReducer;