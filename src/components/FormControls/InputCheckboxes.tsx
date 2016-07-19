import * as React from 'react';
import {observer} from 'mobx-react';

export default class InputCheckboxes extends React.Component<{ onChange: Function, name: string, items: any, checkedItems: any }, {}> {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    propTypes = {
        onChange: React.PropTypes.func.isRequired,
        name: React.PropTypes.string.isRequired
    }

    onChange(event) {
        this.props.onChange(this.props.name, event.target.value);
    }

    render() {
        const {items, name, checkedItems} = this.props;
        return (
            <div className="form-group">
                <b>{name}</b>
                {
                    items.map((item) => {
                        return (
                            <div className="checkbox" key={`${name}-${item}`}>
                                <label htmlFor={`${name}-${item}`}>
                                    <input type="checkbox" name={`${name}`} value={item} id={`${name}-${item}`}
                                        checked={checkedItems.indexOf(item) > -1}
                                        onChange={this.onChange}/> {item}
                                </label>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
