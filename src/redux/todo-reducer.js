let initialState = {
    posts: []
};

const ADD_NEW_WORK = 'ADD_NEW_WORK';
const DELETE_NEW_WORK = 'DELETE_NEW_WORK';

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_WORK: {
            let newPost = action.posts;
            return {
                ...state,
                posts: [...state.posts, newPost]
            };
        }
        case DELETE_NEW_WORK: {
            let id = action.id;
            state.posts.splice(id, 1);
            return {
                ...state,
                posts: [...state.posts]  
            }
        }
        default: return state;    
    }     
}

export const addNewWork = (posts) => ({type: ADD_NEW_WORK, posts});
export const deleteNewWork = (id) => ({type: DELETE_NEW_WORK, id});


export default todoReducer;