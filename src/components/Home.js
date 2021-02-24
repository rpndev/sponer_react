import { Link } from 'react-router-dom';

const styles = {
  container: {
    margin: "auto",
    marginTop: "100px",
    padding: "20px",
    border: "1px solid #000000",
    maxWidth: "500px",
    fontSize: "24px",
    borderRadius: "10px"
  },
  input: {
    width: "100%",
    height: "30px",
    fontSize: "24px"
  },
  historyContainer: {
    marginTop: "20px"
  },
  historyWrapper: {
    marginLeft: "20px"
  },
  searchBtn: {
    border: "1px solid #000000",
    textAlign: "center",
    padding: "5px",
    textTransform: "uppercase",
    marginTop: "20px",
    width: "100%"
  },
  searchLink: {
    textDecoration: "none",
    color: "#000000",
  }
}

export default function Home({ onChange, history, addHistory }) {
  return(
    <div style={styles.container}>
      <input style={styles.input} placeholder="Ingredient query" onChange={(e)=> onChange(e.target.value)}/>
      <div style={styles.historyContainer}>
        <span>Recent Searches</span>
        <div style={styles.historyWrapper}>
          {history && history.map((item, key) => 
            <div key={key}>
              <Link to="/result" onClick={() => onChange(item)} style={styles.history}>{item}</Link>
            </div>
          )}
        </div>
      </div>
      <div style={styles.searchBtn}>
        <Link to="/result" onClick={addHistory} style={styles.searchLink}>Search</Link>
      </div>
    </div>
  )
}