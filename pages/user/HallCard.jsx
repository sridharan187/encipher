function HallCard({ hall, onSelect }) {
  return (
    <div className="card-head" >
      <div className="hall-card" onClick={() => onSelect(hall)}>
      <img src={hall.image} alt={hall.name} />
      <h3>{hall.name}</h3>
      <p>Capacity: {hall.capacity}</p>
    </div>

    </div>
    
  );
}

export default HallCard;
