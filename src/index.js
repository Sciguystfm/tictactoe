import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const DIMENSION = [0,1,2];

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: ["","","","","","","","",""] 
        }
    }

    
    
    render(){
        const generateRow = rowIndex => {
            return <tr>{DIMENSION.map(colIndex=>generateCol(rowIndex,colIndex))}</tr>
        }

        const generateCol = (rowIndex, colIndex) => {
            return <td>{this.state.squares[rowIndex*3+colIndex]}</td>
        }

        return(
            <table>
                <tbody>{DIMENSION.map(generateRow)}</tbody>
            </table>
        );
    }
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);