import { Provider } from 'react-redux'
import { store } from './store/store'
import { ThemeProvider } from './context/ThemeContext'
import LocalStateComponent from './components/LocalStateComponent'
import ReduxComponent from './components/ReduxComponent'
import ContextComponent from './components/ContextComponent'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div style={{ padding: '20px' }}>
          <h1>State Management Demo</h1>
          <LocalStateComponent />
          <hr />
          <ReduxComponent />
          <hr />
          <ContextComponent />
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App