import React, { useEffect, useMemo, useState } from 'react';
import { useInView } from '../hooks/useInView';
import './GrowthCharts.css';

const barData = [
  { year: '2023', value: 28 },
  { year: '2024', value: 72 },
  { year: '2025', value: 148 },
  { year: '2026', value: 240 },
];

const pieData = [
  { label: 'APIs', value: 42, color: '#0f766e' },
  { label: 'Nutraceuticals', value: 24, color: '#14b8a6' },
  { label: 'Excipients', value: 18, color: '#e8b84a' },
  { label: 'Intermediates', value: 16, color: '#2a4543' },
];

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function polarToCartesian(cx, cy, radius, angleInDegrees) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
}

function describeSlice(cx, cy, radius, startAngle, endAngle) {
  if (endAngle - startAngle < 0.2) return '';
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

  return [
    'M', cx, cy,
    'L', start.x, start.y,
    'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    'Z',
  ].join(' ');
}

const GrowthCharts = () => {
  const [ref, isInView] = useInView({ threshold: 0.25, rootMargin: '0px 0px -60px 0px' });
  const [progress, setProgress] = useState(0);
  const maxBar = Math.max(...barData.map((d) => d.value));

  useEffect(() => {
    if (!isInView) return undefined;

    let frameId;
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(t);
      if (t < 1) frameId = requestAnimationFrame(tick);
    };

    // small delay so the section is visible before motion starts
    const timeoutId = setTimeout(() => {
      frameId = requestAnimationFrame(tick);
    }, 80);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(frameId);
    };
  }, [isInView]);

  const pieProgress = easeOutCubic(progress);

  const pieSlices = useMemo(() => {
    const animatedTotal = pieProgress * 100;
    let angle = 0;
    let remaining = animatedTotal;

    return pieData.map((slice) => {
      const sliceValue = Math.min(slice.value, Math.max(0, remaining));
      remaining -= sliceValue;
      const startAngle = angle;
      const sweep = (sliceValue / 100) * 360;
      const endAngle = angle + sweep;
      angle = endAngle;

      return {
        ...slice,
        path: describeSlice(100, 100, 78, startAngle, endAngle),
      };
    });
  }, [pieProgress]);

  return (
    <div ref={ref} className={`growth-charts ${isInView ? 'is-visible' : ''}`}>
      <div className="growth-panel">
        <div className="growth-panel-head">
          <h3>Client growth</h3>
          <p>Rapid expansion year over year</p>
        </div>

        <div className="bar-chart" role="img" aria-label="Bar chart of client growth from 2023 to 2026">
          {barData.map((item, index) => {
            const startAt = index * 0.12;
            const local = Math.max(0, Math.min(1, (progress - startAt) / 0.7));
            const eased = easeOutCubic(local);
            const heightPct = (item.value / maxBar) * 100 * eased;
            const displayValue = Math.round(item.value * eased);

            return (
              <div key={item.year} className="bar-col">
                <span className="bar-value">{displayValue}+</span>
                <div className="bar-track">
                  <div
                    className="bar-fill"
                    style={{ height: `${Math.max(heightPct, 0)}%` }}
                  />
                </div>
                <span className="bar-year">{item.year}</span>
              </div>
            );
          })}
        </div>

        <p className="growth-note">Approx. 8.5× client base growth since founding</p>
      </div>

      <div className="growth-panel">
        <div className="growth-panel-head">
          <h3>Portfolio mix</h3>
          <p>Where demand is strongest today</p>
        </div>

        <div className="pie-layout">
          <svg
            className="pie-chart"
            viewBox="0 0 200 200"
            role="img"
            aria-label="Pie chart of product portfolio mix"
          >
            <circle cx="100" cy="100" r="78" className="pie-base" />
            {pieSlices.map((slice) =>
              slice.path ? (
                <path
                  key={slice.label}
                  d={slice.path}
                  fill={slice.color}
                  className="pie-slice"
                />
              ) : null
            )}
            <circle cx="100" cy="100" r="42" className="pie-hole" />
            <text x="100" y="96" textAnchor="middle" className="pie-center-label">
              Mix
            </text>
            <text x="100" y="116" textAnchor="middle" className="pie-center-sub">
              2026
            </text>
          </svg>

          <ul className="pie-legend">
            {pieData.map((item) => (
              <li key={item.label} style={{ opacity: 0.35 + pieProgress * 0.65 }}>
                <span className="legend-swatch" style={{ background: item.color }} />
                <span className="legend-label">{item.label}</span>
                <span className="legend-value">{Math.round(item.value * pieProgress)}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GrowthCharts;
