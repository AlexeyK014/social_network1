
// import profileReducer, { addPostActionCreator, deletePost } from './Components/Redux/profile-reducer';  
//  // новый State при переданном старом State, будет такой же какой мы ожидаем получить


// it('length new post should be incremented', () => {
//   // 1. test data
//   let action = addPostActionCreator('freestyle');
//   let state = {
//     postData: [
//         {id: 1, post: "Привет", like: 5},
//         {id: 2, post: "Как дела?", like: 10},
//     ]
// }

//   // 2. action
//   let newState = profileReducer(state, action);

//   // 3. ожидания
//   expect( newState.postData.length).toBe(3)
// });

// /// Удаление поста
// it('delete post', () => {
//   // 1. test data
//   let action = deletePost(1);
//   let state = {
//     postData: [
//         {id: 1, post: "Привет", like: 5},
//         {id: 2, post: "Как дела?", like: 10},
//     ]
// }

//   // 2. action
//   let newState = profileReducer(state, action);

//   // 3. ожидания
//   // expect( newState.postData.length).toBe(1)
// });