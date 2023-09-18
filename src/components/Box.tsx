import './Box.css';

function Box({ pos }: { pos: number[] }) {

      const divStyle = {
        left: pos[0] * 32 + "px",
        top: pos[1] * 32 + "px"
      };


  return <div className="grid-element" style={divStyle} >Box</div>;
}

export default Box