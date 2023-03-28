import React from "react";
import { useState, useEffect } from "react";
import MeetupList from "../components/meetups/MeetupList";

function AllMeetupsPage() {

  {/* - This useState hook is true when the fetch hasnt returned the promise yet aka is still loading*/}
  const [isLoading, setIsLoading] = useState(true);
  {/* - This useState hook is initiated with and empty array which will eventually hold an array of data from fetch */}
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  {/* - useEffect is a hook that holds two arguments. 
      - This first argument is an arrow function that contains the fetch 'getting data'
      - The second argument determines when the useEffect function will run, Since the secon argument 
          is an empty array, it will only run once everytime the page is loaded*/}
  useEffect(() => {

    {/* Loading is true until fetch finished */}
    setIsLoading(true);

    {/* fetch with only the link since we are retrieving data*/}
    fetch(
      "https://react-getting-started-19fd9-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => { {/* .then() retrieves the results from the previous function which is fetch in this case
                                  it then holds response as an argument in the arrow function */}
        return response.json(); {/* .json parses the json formatted fetch response into jsx */}
      })
      .then((data) => {     {/* we get the returned results from the previous .then and put it in the hold argument*/}
        const meetups = []; {/* creating an empty array that will hold final fetch results */}

        {/* for in loop. For every key in data aka fetch response, 
            we create an object named meetup and store the data inside */}
        {/* - the ...data[key] is a spread operator which collects array contents */}
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key], 
          };

          {/* for evey meetup object, push it in our meetups array which will created neested array */}
          meetups.push(meetup);
        }

        {/* finished loading */}
        setIsLoading(false);
        {/*  used state now contains the finished array*/}
        setLoadedMeetups(meetups);
      });
  }, []);
  {/* end of useEffect hook */}

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      {/* MeetupList is a function that takes an array of objects aka (data) passed through a prop called 'meetups' and will map through all the object variables
            and get it formatted by another component */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupsPage;
