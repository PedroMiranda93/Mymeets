import { useHistory} from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch(
      "https://startapp-f76b1-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    , {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type" : "application/json"
      }
      }
    ).then(()=> {
      history.replace("/"); //same link paht
    });
  }
  return <section> 
    <h1>New Meetup Page</h1>
    <NewMeetupForm onAddMeetup={addMeetupHandler}/>

    </section>;
}

export default NewMeetupPage;
