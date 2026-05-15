import React from 'react';

interface Finish {
  f: string;
  d: string;
}

const defaultFinishes: Finish[] = [
  { f: 'PM-F0', d: "non-cosmetic, finish to manufacturing discretion" },
  { f: 'PM-F1', d: 'low-cosmetic, most toolmarks removed' },
  { f: 'SPI-C1', d: '600 grit stone' },
  { f: 'SPI-B1', d: '600 grit paper' },
  { f: 'SPI-A2', d: 'grade #2 diamond buff' },
  { f: 'PM-T1', d: 'light bead blast' },
  { f: 'PM-T2', d: 'medium bead blast' }
];

const SurfaceFinishTable = ({ finishes = defaultFinishes }: { finishes?: Finish[] }) => {
  return (
    <section id="finishes" className="section container" style={{ borderTop: '1px solid #eee' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Surface Finish Options</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f8f9fa', borderBottom: '2px solid #333' }}>
            <th style={{ padding: '1rem', textAlign: 'left' }}>FINISH</th>
            <th style={{ padding: '1rem', textAlign: 'left' }}>DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          {finishes.map((row, i) => (
            <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '1rem', fontWeight: 700 }}>{row.f}</td>
              <td style={{ padding: '1rem' }}>{row.d}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default SurfaceFinishTable;
