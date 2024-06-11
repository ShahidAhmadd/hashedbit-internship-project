const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

function calculateAverages(students) {
    return students.map(student => {
        const [key, subjects] = Object.entries(student)[0];

        const scores = Object.values(subjects);
        const total = scores.reduce((acc, score) => acc + score, 0);
        const average = total / scores.length;

        return { [key]: { average: average } };
    });
}

const averages = calculateAverages(students);

console.log(averages);
