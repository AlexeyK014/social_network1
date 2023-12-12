import { createSelector } from "reselect"


///  Пример использование реселекта //////
     //  Путём дробления. Более сложный селктор использует более примитивный селектор

export const getUsersSelector = (state) => {
    return state.usersPage.users
}

export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)  // это не сам селектор, это логика селектора
});
////////////////////////////////////////////////



export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage 
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching 
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress 
}