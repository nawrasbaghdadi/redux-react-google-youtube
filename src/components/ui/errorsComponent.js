import React  from 'react';
import PropTypes from 'prop-types';

const ErrorsComponent = ({ errors=[], onClearError=f=>f }) =>
    <div className="show-errors">
        {(errors.length) ?
            errors.map((message, i) =>
                <div key={i} className="error">
                    <p>{message}</p>
                    <a onClick={() => onClearError(i)}>x</a>
                </div>
            ) : null
        }
    </div>


ErrorsComponent.propTypes = {
    errors: PropTypes.array,
    onClearError: PropTypes.func
}

export default ErrorsComponent