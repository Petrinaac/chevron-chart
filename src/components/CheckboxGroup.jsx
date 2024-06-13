import PropTypes from 'prop-types';

const CheckboxGroup = ({ checkboxes, handleChange }) => {
  return (
    <div className="checkbox-group">
      {checkboxes.map((checked, index) => (
        <label key={index}>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => handleChange(index)}
          />
          Checkbox {index + 1}
        </label>
      ))}
    </div>
  );
};

CheckboxGroup.propTypes = {
  checkboxes: PropTypes.arrayOf(PropTypes.bool).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default CheckboxGroup;