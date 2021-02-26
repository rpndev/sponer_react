const workLog = [
    {
        date: '24.02.2021',
        hours: [
            { from: '18:45', to: '19:45' },
            { from: '23:00', to: '00:00' },
        ],
        totalMinutes: '120',
    },
    {
        date: '25.02.2021',
        hours: [
            { from: '20:00', to: '22:45' },
        ],
        totalMinutes: '165',
    },
    {
        date: '26.02.2021',
        hours: [
            { from: '23:20', to: '01:00' },
            { from: '06:00', to: '07:00' },
            { from: '17:10', to: '' },
        ],
        totalMinutes: '160',
    },
]

const getTotalTimeWorked = (log) => {
    let total = 0;
    log.map(x => x.totalMinutes)
        .forEach(amount => {
            total += +amount;
        });

    const hours = Math.ceil(total / 60);
    const minutes = total % 60;

    const totalTime = `${hours}:${minutes}`;

    return totalTime;
}

getTotalTimeWorked(workLog);
