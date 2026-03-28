
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">
          <span>FitLife</span>
        </div>
        <nav className="menu">
          <p>Menu</p>
          <ul>
            <li><a href="#" className="active">Dashboard</a></li>
            <li><a href="#">Workouts</a></li>
            <li><a href="#">Mobility</a></li>
            <li><a href="#">Progress</a></li>
            <li><a href="#">AI Coach</a></li>
            <li><a href="#">Exercise Library</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Goals</a></li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header>
          <h2>FitLife Companion</h2>
          <h1>Mobility & Recovery</h1>
        </header>
        <section className="protocol">
          <div className="protocol-header">
            <h3>Shoulder Health Protocol</h3>
            <p>Targeted movements to improve joint health and overhead range.</p>
          </div>
          <div className="protocol-list">
            <div className="protocol-item">
              <span>Shoulder Dislocates</span>
              <span>1x10-12 reps</span>
            </div>
            <div className="protocol-item">
              <span>Standing Pullover</span>
              <span>1x8-10 reps (2 sec pause)</span>
            </div>
            <div className="protocol-item">
              <span>Shoulder Protocol</span>
              <span>2x20 reps per move</span>
            </div>
          </div>
          <button className="start-protocol">► Start Protocol</button>
        </section>
        <section className="routine">
          <div className="routine-details">
            <h3>Dead Hang (Passive)</h3>
            <p>Perfect for decompressing the spine and stretching the lats and shoulders. Hold for 60 seconds to maximize benefits for the psoas and lumbar spine.</p>
            <div className="routine-meta">
              <span>1 min</span>
              <span>1 movement</span>
            </div>
            <button className="start-routine">▷ Start Routine</button>
          </div>
        </section>
        <section className="explore">
          <h2>Explore All Routines</h2>
          <div className="explore-grid">
            <div className="explore-item">
              <div className="explore-details">
                <p>10 min</p>
                <h3>Full Body Wake-up</h3>
                <p>Beginner</p>
              </div>
            </div>
            <div className="explore-item">
              <div className="explore-details">
                <p>15 min</p>
                <h3>Hip Opener Flow</h3>
                <p>Intermediate</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <aside className="right-sidebar">
        <div className="weekly-progress">
          <h3>Weekly Progress</h3>
          <p>Completed Sessions</p>
          <div className="progress-bar">
            <div className="progress" style={{ width: '60%' }}></div>
          </div>
          <div className="progress-stats">
            <div>
              <p>TOTAL TIME</p>
              <p>45m</p>
            </div>
            <div>
              <p>STREAK</p>
              <p>4 Days</p>
            </div>
          </div>
          <h4>Focus Areas Reached</h4>
          <ul>
            <li><input type="checkbox" defaultChecked /> Lower Body (Excellent)</li>
            <li><input type="checkbox" defaultChecked /> Core Stability (Good)</li>
            <li><input type="checkbox" /> Upper Body (Needs Work)</li>
          </ul>
        </div>
        <div className="recovery-tip">
          <h3>Coach's Recovery Tip</h3>
          <p>"Don't wait for pain to start moving. Consistent daily mobility work is like greasing the groove for your lifts. Even 5 minutes of movement can change your session performance."</p>
        </div>
      </aside>
    </div>
  );
}

export default App;
