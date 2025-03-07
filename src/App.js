import { useReducer } from "react";
import Chat from "./Chat.js";
import ContactList from "./ContactList.js";
import { initialState, messengerReducer } from "./messengerReducer";

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const selected = state.find((item) => item.selected === true);
  const contact = contacts.find((c) => c.id === selected.id);

  console.log("selected id = %s", selected.id);

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedId={selected.id}
        dispatch={dispatch}
      />
      <Chat
        key={contact.id}
        message={selected.message}
        contact={contact}
        dispatch={dispatch}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
