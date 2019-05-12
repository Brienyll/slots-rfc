function getPick() {
  return Math.floor(Math.random() * 10) + 1;
}

class Slot extends React.Component {
  render() {
    const s1 = getPick();
    const s2 = getPick();
    const s3 = getPick();

    let msg;
    if (s1 === s2 && s2 === s3) {
      msg = 
      <div>
        <p> Winner! </p>
      </div>
    } else {
      msg = <p> Lost! </p>
    }
    return (
      <div>
        <h1> { msg } </h1>
      </div>
    )
  }
}