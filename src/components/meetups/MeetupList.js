import React from "react";
import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  {/* This ul is holding an array of data organized by MeetupItem component function which each array object = one list */}
  return (
    <ul className={classes.list}>
      {/* props.meetups is going to be the data passed to the meetuplist function */}
      {/* .map will iterate through the data and use meetup."variable" to get all the variables in the data.. ex. meetup.id = data id */}
      {/* MeetupItem is a components that takes all the id,image,title,address,descriptions as props and formats it and will return it back to the meetuplist fucntion */}
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
