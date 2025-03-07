export const initialState = [
  { id: 0, selected: true, message: "" },
  { id: 1, selected: false, message: "" },
  { id: 2, selected: false, message: "" },
];

export function messengerReducer(state, action) {
  console.log("action type: %s", action.type);
  switch (action.type) {
    case "changed_selection": {
      let newState = state.map((item) => {
        if (item.id === action.contactId) {
          return {
            ...item,
            selected: true,
          };
        } else {
          return {
            ...item,
            selected: false,
          };
        }
      });
      return newState;
    }

    case "edited_message": {
      console.log("message: %s", action.message);
      let newState = state.map((item) => {
        if (item.selected === true) {
          return {
            ...item,
            message: action.message,
          };
        } else {
          return item;
        }
      });
      console.log(newState);
      return newState;
    }

    case "sent_message": {
      let newState = state.map((item) => {
        if (item.selected === true) {
          return {
            ...item,
            message: "",
          };
        } else {
          return item;
        }
      });
      return newState;
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
