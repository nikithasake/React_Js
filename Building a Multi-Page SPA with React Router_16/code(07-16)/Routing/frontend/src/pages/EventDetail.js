import { Await, defer, redirect, useLoaderData, useParams, useRouteLoaderData } from "react-router-dom";
import { json } from "react-router-dom";
import EventItem from '../components/EventItem';
import EventsList from "../components/EventsList";
import { Suspense } from "react";
function EventDetailPage(){

    const {event,events}=useRouteLoaderData('event-detail');

    return (
    <>
    {/* <h1>EventDetailPage</h1>
    <p>Event ID:{params.eventId}</p> */}
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading....</p>}>
    <Await resolve={event}>
        {(loadedEvent)=><EventItem event={loadedEvent}/>}
    </Await>
    </Suspense>
    <Suspense fallback={<p style={{textAlign:'center'}}>Loading....</p>}>
    <Await resolve={events}>
        {loadedEvents => <EventsList events={loadedEvents}/>}
    </Await>
    </Suspense>
    </>
    );
}

export default EventDetailPage;

async function loadEvent(id){
    const response=await fetch('http://localhost:8080/events/'+id);
    if(!response.ok){
        throw json({message:'Could not fetch details for selected event.'},{
            status:500
        })
    }else{
        const resData = await response.json();
        return resData.event;
    }

}
async function loadEvents(){
    const response = await fetch('http://localhost:8080/events');
  
    if (!response.ok) {
      //return {isError:true,message:'Could not fetch events'};
      //throw{message:'Could not fetch events'};
      // throw new Response(JSON.stringify({message:'could not fetch events.'}),{
      //   status:500,
      // });
  
      return json(
        {message:'could not fetch events.'},
        {
          status:500,
        }
      );
    } else {
      const resData = await response.json();
      return resData.events;
      // return response;
    
    }
  }

export async function loader({request,params}){
    const id=params.eventId;
    return defer({
        event:await loadEvent(id),
        events:loadEvents(),
    })
}

export async function action({params,request}){
    const eventId=params.eventId;
    const response=await fetch('http://localhost:8080/events/'+eventId,{
        method:request.method,
    });
    if(!response.ok){
        throw json({message:'Could not delete event.'},{
            status:500
        })
    }
    return redirect('/events');
    }
