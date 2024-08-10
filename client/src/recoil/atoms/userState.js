import { atom } from 'recoil';
const userState = atom({
    key: 'userState',
    default: {
        userId: 0,
        username: '',
        email: '',
        isAuthenticated: false,
    },
});
export default userState;