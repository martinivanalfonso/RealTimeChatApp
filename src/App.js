import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import Join from './components/join/join.component'
import Chat from './components/chat/chat.component'

const App = () => (
    <Router>
        <Route path="/" exact component={Join} />
        <Route path="/chat" exact component={Chat} />
    </Router>
)

export default App