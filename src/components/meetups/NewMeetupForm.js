import React from "react";
import {useRef} from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm( props) {
    {/* useRef function is used to reference a input or an element and store it into a variable which can be collected/used other places in the code */}
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressinputRef = useRef();
    const descriptionInputRef = useRef();

{/* submit Handler runs when button is clicked (form is submitted) and will store all the input results */}
  function submitHandler(event) {

    {/* event.preventDefault is a javascript feature will cancel the default handling
     of forms when submitted and allows us to run/proccess it on our own*/}
    event.preventDefault();

    {/* current.value is grabbing the current value of the assigned useRef function ex.. the email input in the form */}
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressinputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    {/* created object called meetupData which contains 'keys' called title,image,address,description 
        which contains values that was collected from form using the useRef function */}
    const meetupData = {
        title: enteredTitle,
        image: enteredImage,
        address: enteredAddress,
        description: enteredDescription
    };
    {/* uses NewMeetupForm prop (props.onAddMeetup(meetupData)) 
        = to component.onAddMeetup(meetupData) aka NewMeetup.onAddMeetup(meetupData)*/}
    props.onAddMeetup(meetupData)
  }

  return (
    <Card>
        {/* onSubmit runs the function passed when the form is sumbited. This case, we run our submit handler function when submitted */}
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef}/> {/* ref is used to reference/link to our useRef functioin*/}
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef}/> {/* ref is used to reference/link to our useRef functioin*/}
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressinputRef}/> {/* ref is used to reference/link to our useRef functioin*/}
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea> {/* ref is used to reference/link to our useRef functioin*/}
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;
