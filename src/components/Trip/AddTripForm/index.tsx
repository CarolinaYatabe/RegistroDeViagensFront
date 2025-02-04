import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css';

const AddTrip = () => {
    const [trip, setTrip] = useState({
        destination: '',
        tripname: '',
        tripStartDate: '',
        tripEndDate: '',
        description: '',
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setTrip({ ...trip, [e.target.name]: e.target.value });
    };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     axios.post('https://localhost:7175/Trip/AddTrip', trip)
    //         .then(() => navigate('/trips'))
    //         .catch(erro => {
    //             console.log(erro)
    //         })
    // };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Trip data being sent:", trip); // Adicione este log
        axios.post('https://localhost:7175/Trip/AddTrip', trip)
            .then(() => navigate('/trips'))
            .catch(err => console.log("Error in API call:", err.response?.data || err.message));
    };
 
return (
    <div>
        <h2>Add trip form</h2>
        {/* <form>
            <label htmlFor="Destination">Destination</label>
            <input className="form-input" type="text" name="Destination" onChange={handleChange}></input>
            <label htmlFor="TripName">Trip Name</label>
            <input className="form-input" type="text" name="TripName" onChange={handleChange}></input>
            <label htmlFor="TripStartDate">Trip Start Date</label>
            <input className="form-input" type="date" name="TripStartDate" onChange={handleChange}></input>
            <label htmlFor="TripEndDate">Trip End Date</label>
            <input className="form-input" type="date" name="TripEndDate" onChange={handleChange}></input>
            <label htmlFor="Description">Description</label>
            <input className="form-input" type="text" name="Description" onChange={handleChange}></input>
            <button type="submit" onChange={handleSubmit}>Add Trip</button>
        </form>
         */}
         <form>
         <label htmlFor="userId">UserId</label>
        <input
            className="form-input"
            type="number"
            id="userId"
            name="userId"
            placeholder="Enter your userId"
            title="UserId field"
            onChange={handleChange}
        />
  <label htmlFor="destination">Destination</label>
  <input
    className="form-input"
    type="text"
    id="destination"
    name="destination"
    placeholder="Enter your destination"
    title="Destination field"
    onChange={handleChange}
  />

  <label htmlFor="tripName">Trip Name</label>
  <input
    className="form-input"
    type="text"
    id="tripName"
    name="tripName"
    placeholder="Enter a name for the trip"
    title="Trip name field"
    onChange={handleChange}
  />

  <label htmlFor="tripStartDate">Trip Start Date</label>
  <input
    className="form-input"
    type="text"
    id="tripStartDate"
    name="tripStartDate"
    title="Start date of the trip"
    onChange={handleChange}
  />

  <label htmlFor="tripEndDate">Trip End Date</label>
  <input
    className="form-input"
    type="text"
    id="tripEndDate"
    name="tripEndDate"
    title="End date of the trip"
    onChange={handleChange}
  />

  <label htmlFor="description">Description</label>
  <textarea
    className="form-input"
    id="description"
    name="description"
    placeholder="Describe your trip"
    title="Trip description field"
    onChange={handleChange}
  ></textarea>

  <button type="submit" onClick={handleSubmit}>Add Trip</button>
</form>

    </div>
);
}

export default AddTrip;