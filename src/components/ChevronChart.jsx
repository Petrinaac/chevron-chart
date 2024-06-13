import PropTypes from 'prop-types';

const ChevronChart = ({ checkboxes }) => {
  const getColor = (index) => {
    const startColor = [192, 211, 212];
    const endColor = [32, 56, 60];
    const steps = 10;

    const r = Math.round(startColor[0] + ((endColor[0] - startColor[0]) / steps) * index);
    const g = Math.round(startColor[1] + ((endColor[1] - startColor[1]) / steps) * index);
    const b = Math.round(startColor[2] + ((endColor[2] - startColor[2]) / steps) * index);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <div id="chevron-chart" className="chevron-chart">
      {checkboxes.map((checked, index) =>
        checked ? (
          <div
            key={index}
            className="chevron"
            style={{
              backgroundColor: getColor(index),
            }}
          ></div>
        ) : null
      )}
    </div>
  );
};

ChevronChart.propTypes = {
  checkboxes: PropTypes.arrayOf(PropTypes.bool).isRequired,
};

export default ChevronChart;