
import * as React from 'react';
import {observer} from 'mobx-react';

export default class InputField extends React.Component<{
    id: any, name: string, type: string, label: any,
    value: any, onChange: Function
}, {}> {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        this.props.onChange(event.target.name, event.target.value);
    }

    render() {
        const input = this.props;
        return (
            <div className="form-group">
                <label htmlFor={input.id}>{input.label || input.name}</label>
                <input
                    className="form-control"
                    id={input.id}
                    name={input.name}
                    onChange={this.onChange}
                    type={input.type}
                    value={input.value}/>
            </div>
        )
    }
}
