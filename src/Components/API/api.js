import axios from "axios";
// import axios from 'src/Components/API/api.js';



const insatance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "bed6ca62-291b-4bb7-b19b-b61c0a934821"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return insatance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    follow(userId){
        return insatance.post(`follow/${userId}`, {})
    },
    unfollow(userId){
        return insatance.delete(`follow/${userId}`)
    },
    
}

export const profileAPI = {
    getProfile(userId){
        return insatance.get(`profile/` + userId)
    },
    getStatus(userId){
        return insatance.get('profile/status/' + userId)
    },
    updateStatus(status){
        return insatance.put('profile/status/', {status: status})
    }
}

export const authAPI = {
    me(){
        return insatance.get(`auth/me`)
    },
    login(email, password, rememberMe = false){
        return insatance.post('auth/login', {email, password, rememberMe})
    },
    logout(){
        return insatance.delete('auth/login')  // при логауте, сервер удаляет Cookie
    }
    
}

