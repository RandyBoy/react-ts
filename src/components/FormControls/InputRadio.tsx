
import * as React from 'react';
import {observer} from 'mobx-react'

@observer
export default class InputRadio extends React.Component<{ items: any, name: string, value: any, onChange: Function }, {}> {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }
    propTypes = {
        onChange: React.PropTypes.func.isRequired,
        name: React.PropTypes.string.isRequired
    }

    onChange(event) {
        this.props.onChange(this.props.name, event.target.value)
    }

    render() {
        const {items, name, value} = this.props
        return (
            <div className="form-group">
                <b>{name}</b>
                {
                    items.map((item) => {
                        return (
                            <div className="radio" key={`${name}-${item}`}>
                                <label>
                                    <input type="radio" value={item} name={name}
                                        checked={item === value} onChange={this.onChange}/>
                                    {item}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}


