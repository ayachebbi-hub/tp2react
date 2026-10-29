
function ResultatA() {
  const moyenne = 14;

  const styleResultat = {
    backgroundColor: moyenne >= 10 ? 'lightgreen' : 'lightcoral',
    color: moyenne >= 10 ? 'green' : 'red',
    padding: '20px',
    borderRadius: '10px'
  };

  return (
    <div style={styleResultat}>
      <h2>Exercice 1 - Partie A</h2>
      <p>Moyenne : {moyenne}</p>
      <p>{moyenne >= 10 ? 'Admis' : 'Refusé'}</p>
    </div>
  );
}

export default ResultatA;
