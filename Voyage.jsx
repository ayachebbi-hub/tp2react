
function Voyage() {
  const budget = 1500;

  return (
    <div>
      <h2>Agence de voyages</h2>

      {budget >= 2000 ? (
        <p>Voyage premium</p>
      ) : budget >= 1000 ? (
        <p>Voyage économique</p>
      ) : (
        <p>Budget insuffisant</p>
      )}
    </div>
  );
}

export default Voyage;
