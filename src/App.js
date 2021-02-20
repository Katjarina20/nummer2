import ArticleList from './ArticleList'
import 'bootstrap/dist/css/bootstrap.css'


function App() {
  return (
    <div className="container">
      <h1 className="display-4">Posts</h1>
      <div className="container">
        <ArticleList />
      </div>
    </div>
  ) 
}

export default App