import "./globals.css";

export default function Page() {
  return (
    <main className="main">
      <div className="header">MU-4 CONTROL TERMINAL</div>

      <div className="panel">
        <div>
          <span className="clearance">CLEARANCE: LEVEL 4</span>
          <span className="clearance">SERVER AUTHORIZED</span>
        </div>
        <p>Server: Alpha Base</p>
        <p>Owner: @admin#1234</p>
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        <button className="button">Connect Discord</button>
      </div>

      <div className="panel">
        <p>Status: STANDBY</p>
        <p>Anti-Nuke Monitoring Active</p>
        <p>All actions logged in special server</p>
      </div>

      <div className="panel">
        <p>Logs:</p>
        <p>[SYSTEM] Waiting for approval...</p>
        <p>[SYSTEM] Snapshot created for server.</p>
      </div>
    </main>
  );
}
