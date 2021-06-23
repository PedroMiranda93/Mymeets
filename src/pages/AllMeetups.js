import MeetupList from '../components/meetups/MeetupList';
import {useState,useEffect} from "react";


function AllMeetupsPage() {
  const [isLoading, setIsLoading]=useState(true); //usestate return arr com 2elem
  const [loadedMeetups,setLoadedMeetups]=useState([]);

  useEffect(()=>{
    setIsLoading(true);
    fetch(
        "https://startapp-f76b1-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
        ).then(response => {
          return response.json();
        }).then(data => {
          const meetups =[];

          for(const key in data){
              const meetup = {
                id: key,
                ...data[key]
              };
              meetups.push(meetup);
          }
          setIsLoading(false);
          setLoadedMeetups(meetups);
        });
  },[]); //empty arr only run one time
          //execute when the value of dependencies change
  


  if (isLoading) {
    return (<section>
      <p>...Loading...</p>
    </section>);
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
      
    </section>
  );
}

export default AllMeetupsPage;
