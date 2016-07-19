import * as React from 'react';
import {observer} from 'mobx-react';

export default class InputCheckbox extends React.Component<{ name: string, onChange: Function, value: boolean, id }, {}> {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(event) {
        this.props.onChange(this.props.name, event.target.checked)
    }

    render() {
        const {name, value, id} = this.props
        return (
            <div className="checkbox">
                <label htmlFor={id}>
                    <input type="checkbox" name={name} id={id}
                        checked={value} onChange={this.onChange}/> {name}
                </label>
            </div>
        )
    }
}
