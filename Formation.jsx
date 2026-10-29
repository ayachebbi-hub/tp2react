
function Formation() {
  const disponible = true;
  const places = 5;

  return (
    <div>
      <h2>Formation</h2>

      <p>React JS</p>

      {disponible && <p>Inscriptions ouvertes</p>}

      {places > 0 && <p>Il reste des places</p>}
    </div>
  );
}

export default Formation;
