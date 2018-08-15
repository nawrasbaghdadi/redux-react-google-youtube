import React  from 'react';
import '../stylessheets/App.css';
import SimpleMap from './containers/mapComponent'
import ErrorsComponent from './containers/errorsComponent'
import VideoList from './containers/videosListComponent'


export const App = () =>
    <div className="App">
            <ErrorsComponent />
            <header className="App-header">
            <h1 className="App-title">Welcome, </h1><p className="App-intro "> Simply click in any place in the map and the related video</p>
            </header>
            <section>
              <SimpleMap />
              <aside>
                <VideoList />
              </aside>
            </section>
            
    </div>

