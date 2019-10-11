import { START_FETCHING, FETCH_FAILURE, FETCH_SUCCESS, ADD_SMURF} from "../actions"; 

export const initialState = {
    isFetching: false,
    error: '',
    smurfs:[{
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0,
    },
    {
        name: "Sleepy",
        age: 200,
        height: "5cm",
        id: 1
    },
    
]};

  export const reducer = (state = initialState, action) => {
      console.log('Reducer state:', state);
      switch(action.type){
          
        case START_FETCHING:
            return {
                ...state,
                isFetching: false,
                error: '',
            };

        case FETCH_SUCCESS:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload],
                isFetching: false,
                error: '',
            };  

        case FETCH_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };

        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs,
                    {
                    ...state.smurfs,
                    name: action.payload,
                    age: 200,
                    height: '5cm',
                    id: Date.now()
                    }
                ]
            }

        default:
            return state;
  }
};

export default reducer;