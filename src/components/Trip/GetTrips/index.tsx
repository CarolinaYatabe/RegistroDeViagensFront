import axios from "axios";
import { useEffect, useState } from "react";
import './style.css'

const TripsTable = () => {

    const [trips, setTrips] = useState<any[]>([]);
    const [editingTrip, setEditingTrip] = useState<number | null>(null);
    const [editedTrip, setEditedTrip] = useState<any>({});

    useEffect(() => {
        axios.get('https://localhost:7175/Trip/GetAllTrips')
            .then(resposta => {
                console.log(resposta);
                setTrips(resposta.data);
            })
            .catch(erro => {
                console.log(erro)
            })
    },[])

    const deleteTrip = async (id: number) => {
        try {
            await axios.delete(`https://localhost:7175/Trip/DeleteTrip?id=${id}`);
            setTrips(trips.filter(trip => trip.id !== id)); 
        } catch (error) {
            console.error("Erro ao deletar viagem:", error);
        }
    };

    const startEditing = (trip: any) => {
        setEditingTrip(trip.id);
        setEditedTrip({ ...trip });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setEditedTrip({ ...editedTrip, [field]: e.target.value });
    };
    
    const saveEdit = async (id: number) => {
        try {
            await axios.put(`https://localhost:7175/Trip/UpdateTrip?id=${id}`, editedTrip);
            setTrips(trips.map(trip => (trip.id === id ? editedTrip : trip)));
            setEditingTrip(null);
        } catch (error) {
            console.error("Erro ao atualizar viagem:", error);
        }
    };

    return (
        <div>
            <h2>All Trips</h2>
            <table className="trips-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Destination</th>
                        <th>Trip Name</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {trips.map((trip) => (
                        <tr key={trip.id}>
                            <td>{trip.id}</td>
                            <td>
                                {editingTrip === trip.id ? (
                                    <input type="text" value={editedTrip.destination} onChange={(e) => handleChange(e, "destination")} />
                                ) : (
                                    trip.destination
                                )}
                            </td>
                            <td>
                                {editingTrip === trip.id ? (
                                    <input type="text" value={editedTrip.tripName} onChange={(e) => handleChange(e, "tripName")} />
                                ) : (
                                    trip.tripName
                                )}
                            </td>
                            <td>
                                {editingTrip === trip.id ? (
                                    <input type="string" value={editedTrip.tripStartDate} onChange={(e) => handleChange(e, "tripStartDate")} />
                                ) : (
                                    trip.tripStartDate
                                )}
                            </td>
                            <td>
                                {editingTrip === trip.id ? (
                                    <input type="string" value={editedTrip.tripEndDate} onChange={(e) => handleChange(e, "tripEndDate")} />
                                ) : (
                                    trip.tripEndDate
                                )}
                            </td>
                            <td>
                                {editingTrip === trip.id ? (
                                    <input type="text" value={editedTrip.description} onChange={(e) => handleChange(e, "description")} />
                                ) : (
                                    trip.description
                                )}
                            </td>
                            <td className="action">
                                {editingTrip === trip.id ? (
                                    <button className="action-button save-btn" onClick={() => saveEdit(trip.id)}><img src="src/assets/saveIcon.png"/></button>
                                ) : (
                                    <button className="action-button update-btn" onClick={() => startEditing(trip)}><img src="src/assets/updateIcon.png"/></button>
                                )}
                                <button className="action-button delete-btn" onClick={() => deleteTrip(trip.id)}><img src="src/assets/deleteIcon.png"/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                {/* <tbody>
                    {trips.map((trip) => (
                        <tr key={trip.id}>
                            <td>{trip.id}</td>
                            <td>{trip.destination}</td>
                            <td>{trip.tripName}</td>
                            <td>{trip.tripStartDate}</td>
                            <td>{trip.tripEndDate}</td>
                            <td>{trip.description}</td>
                            <td className="div-action">
                                <button className="delete-btn" onClick={() => deleteTrip(trip.id)}><img src="src/assets/deleteIcon.png"/></button>
                                <button className="update-btn" onClick={() => deleteTrip(trip.id)}><img src="src/assets/updateIcon.png"/></button>
                            </td>
                        </tr>
                    ))}
                </tbody> */}
            </table>
        </div>
    );
};

export default TripsTable;