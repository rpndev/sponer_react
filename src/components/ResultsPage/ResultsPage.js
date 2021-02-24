import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';

const ResultsPage = () => {
    return (
        <div>
            <Typography>Results Page</Typography>
        </div>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps)(ResultsPage);
