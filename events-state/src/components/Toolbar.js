import PropTypes from 'prop-types'
function Toolbar(props) {


    return (
        props.filters.map((filter) =>
            <button key={filter}
              onClick={() => {
                props.onSelectFilter(filter)
              }}
              className={filter === props.selected ? 'selected' : 'not-selected'}>
              {filter}
            </button>
        )
    );
}

export default Toolbar

Toolbar.PropTypes = {
    filters:PropTypes.array.isRequired,
    selected:PropTypes.string.isRequired,
    onSelectFilter:PropTypes.func.isRequired,
};