//  Initialize Firebase
import firebase from "firebase/database";

class MessageBase {
  initializeMessage() {
    console.log("yes!");
    const initialize = firebase.InitializeApp({
      serviceAccount: "./Realtime Google Maps-b5a9a1ffb0fe.json",
      databaseUrl: "https://realtime-maps-2da41.firebaseio.com/"
    });
    const message = { message: "yes" };
    const ref = firebase
      .database()
      .ref()
      .child("realtime-maps-2da41");
    const messagesReg = ref.child("messages");
    const messageReg = messagesReg.push(message);
  }
}

export default MessageBase;
