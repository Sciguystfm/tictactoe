import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            squares: ["","","","","","","","",""] 
        }
    }
    
    render(){
        return(
            <table>
                <tbody>
                    <tr>
                        <td>{this.state.squares[0]}</td>
                        <td>{this.state.squares[1]}</td>
                        <td>{this.state.squares[2]}</td>
                    </tr>
                    <tr>
                        <td>{this.state.squares[3]}</td>
                        <td>{this.state.squares[4]}</td>
                        <td>{this.state.squares[5]}</td>
                    </tr>
                    <tr>
                        <td>{this.state.squares[6]}</td>
                        <td>{this.state.squares[7]}</td>
                        <td>{this.state.squares[8]}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

ReactDOM.render(
  <Board />,
  document.getElementById('root')
);