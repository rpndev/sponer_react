import { connect } from "react-redux"
import { Typography, Button } from "@material-ui/core"

import { requestQuery } from '../data/actions/queryActions';

const QueryPage = ({
  requestQuery
}) => {

  const handleRequestQuery = () => {
    requestQuery('test');
  }

  return (
    <div>
      <Typography>Query Page</Typography>
      <Button onClick={handleRequestQuery}>Dummy request</Button>
    </div>
  )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {
  requestQuery,
}

export default connect(mapStateToProps, mapDispatchToProps)(QueryPage);
