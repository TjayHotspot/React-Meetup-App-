import React from "react";
import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  {/* useNavigate is a react-router-dom hook stored in history variable used to navigate to desire pages*/}
  const history = useNavigate();

  {/* addMeetupHandler takes a prop which is 'onAddMeetup' and sends it to api  */}
  function addMeetupHandler(props) {

    {/* fetch is a java feature that connects to api server link and by deafults, 'gets' data*/}
    {/* after fetching data, you can use .then() function that runs arrow function to redirect to a different page */}
    {/* #1, to use fetch you first add server link in quotes */}
    {/* #2, to send data, you specify an object which contains the 'key' called method - either ('GET' or 'POST') */}
    {/* #3, for the body, you convert data to JSON with JSON.stringify(data) */}
    {/* #4, you can specify the content type which is apllication json*/}
    fetch(
      "https://react-getting-started-19fd9-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(props),
        header: { "Content-Type": "application/json" },
      }
    ).then(() => {
      {/* history(link) aka useNavigate(link) redirects to another page */}
      history("/");
    });
  }
  

  return (
    <section>
      <h1>Add New Meetup</h1>

      {/* NewMeetupForm has a form which collects data and stores it in an object 
          which is passed through 'onAddMeetup' from NewMeetupForm and points it to addMeetupHandler */}
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
