const TimelineJourney = () => {
    const milestones = [{ title: 'Junior Automation Developer', company: 'Beez Innovation Labs', year: '2021' }, { title: 'Junior Automation Developer', company: 'Beez Innovation Labs', year: '2022' }, { title: 'Junior Automation Developer', company: 'Beez Innovation Labs', year: '2023' }, { title: 'Junior Automation Developer', company: 'Beez Innovation Labs', year: '2024' }, { title: 'Junior Automation Developer', company: 'Beez Innovation Labs', year: '2025' }];

    return (
        <div className="w-full flex flex-col items-center  text-white">
            <svg width="100%" height="170" viewBox="-100 0 1200 160" className="max-w-5xl">
                {/* Horizontal line */}
                <line x1="50" y1="60" x2="950" y2="60" stroke="white" strokeWidth="2" strokeDasharray="4 4" />

                {/* Milestones */}
                {milestones.map((milestone, index) => {
                    const x = 50 + index * 225; // space evenly (adjust for your layout)
                    return (
                        <g key={milestone.year}>
                            {/* Circle */}
                            <circle cx={x} cy="60" r="12" fill="#38bdf8" stroke="white" strokeWidth="2" />
                            {/* Text below */}
                            <text x={x} y="95" textAnchor="middle" className="fill-white text-sm font-medium">
                                {milestone.year}
                            </text>
                            <text x={x} y="120" textAnchor="middle" className="fill-white text-sm font-medium">
                                {milestone.title}
                            </text>
                            <text x={x} y="140" textAnchor="middle" className="fill-white text-sm font-medium">
                                {milestone.company}
                            </text>
                        </g>
                    );
                })}
            </svg>
        </div>
    );
};

export default TimelineJourney;
