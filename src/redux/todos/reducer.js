
import {ADDED,ALLCOMPLETED,CLEARCOMPLETED,COLORSELECTED,TOGGLED , DELETED} from './actionTypes';

const initialState = [
    {
        id: 1,
        text: 'Learn React Js',
        completed: true,
        color: 'green'
    },
    {
        id: 2,
        text: 'Learn Redux',
        completed: false,
        color: 'red'
    }
];

const nextTodoId = (todos) => {
    const maxId = todos.reduce((maxId,todo)=>  Math.max(maxId,todo.id), -1);
    return maxId + 1;

}

const reducer = (state = initialState , action ) => {

    switch (action.type) {
        case ADDED:
            
            return [
                ...state,
                {
                    id: nextTodoId(state),
                    text: action.payload ,
                    completed : false
                }
            ]

        case TOGGLED:
            
                return state.map(todo => {
                    if(todo.id !== action.payload){
                        return todo;
                    }else {
                       return {
                        ...todo,
                        completed: !todo.completed,
                       }
                    }
                }); 

        case COLORSELECTED:
                    const {todoId,color} = action.payload;

                    return state.map(todo => {
                        if(todo.id !== todoId){
                            return todo;
                        }else {
                           return {
                            ...todo,
                            color,
                           }
                        }
                    }); 

        case DELETED: 

                    return state.filter((todo)=> todo.id !== action.payload );


        case ALLCOMPLETED: 

                    return state.map((todo)=> {

                        return {
                            ...todo,
                            completed: true
                        }

                    } );
                    
                    case CLEARCOMPLETED: 

                    return state.filter((todo)=> !todo.completed );

    
        default:
            return state;
    }

}

export default reducer;