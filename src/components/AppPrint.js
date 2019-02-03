import React, {Component} from 'react';
import PrintComponent from 'react-print-component';
import App from '../App';

class AppPrint extends Component {
    constructor(props) {
        super(props);
        this.printData = this.printData.bind(this);
    }

    printData = (e) => {
        PrintComponent.SetPrintContent(<App/>);
        PrintComponent.AddPrintContent(<App/>);
        PrintComponent.Print();
    };

    render() {
        return (
            <div>
                <div className="button-div">
                    <button className="app-button" onClick={this.printData}>Click to print</button>
                </div>
                <div className="print-div">
                    <PrintComponent/>
                </div>
            </div>
        );
    }
}

export default AppPrint;
