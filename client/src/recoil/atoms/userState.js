import { atom } from 'recoil';
const userState = atom({
    key: 'userState',
    default: {
        userId: 0,
        username: '',
        email: '',
        role: '',
        isAuthenticated: false,
    },
});
export default userState;