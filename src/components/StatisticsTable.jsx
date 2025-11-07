import React, { useState } from 'react';
import './StatisticsTable.css';

const StatisticsTable = ({ statsAll = [], statsEinzel = [], statsDoppel = [] }) => {
  const [mode, setMode] = useState('gesamt');

  const statsData = mode === 'einzel' ? statsEinzel : mode === 'doppel' ? statsDoppel : statsAll;

  if (!statsData || statsData.length === 0) {
    return <div className="loading-state">Lade Spielerstatistiken...</div>;
  }

  return (
    <div className="table-container">
      <div className="table-header">
        <h2 className="table-title">Spielerstatistiken</h2>
        <div className="table-controls">
          <label htmlFor="stats-mode" style={{ marginRight: '8px' }}>Ansicht:</label>
          <select id="stats-mode" value={mode} onChange={(e) => setMode(e.target.value)}>
            <option value="gesamt">Statistik gesamt</option>
            <option value="einzel">Statistik Einzel</option>
            <option value="doppel">Statistik Doppel</option>
          </select>
        </div>
      </div>
      <table className="stats-table">
        <thead>
          <tr>
            <th>Rang</th>
            <th>Spieler</th>
            <th>Spiele</th>
            <th>Win %</th>
            <th>Win</th>
            <th>Lose</th>
            <th>Sets +</th>
            <th>Sets -</th>
            <th>Sets Diff</th>
            <th>Highscore</th>
            <th>Lowscore</th>
            <th>Highfinish</th>
            <th>Shortgame</th>
            <th>Starter</th>
          </tr>
        </thead>
        <tbody>
          {statsData.map((player, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{player.name}</td>
              <td>{player.gamesPlayed}</td>
              <td>{player.winPercentage}</td>
              <td>{player.wins}</td>
              <td>{player.losses}</td>
              <td>{player.setsPlus}</td>
              <td>{player.setsMinus}</td>
              <td>{player.setsDifference}</td>
              <td>{player.highscore}</td>
              <td>{player.lowscore}</td>
              <td>{player.highfinish}</td>
              <td>{player.shortgame}</td>
              <td>{player.starter}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsTable;