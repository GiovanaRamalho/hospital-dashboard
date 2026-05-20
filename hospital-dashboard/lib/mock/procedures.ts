export type Procedure = {
    id: number;
    name: string;
    status: "approved" | "rejected";
    value: number;
    executions: number;
};

export const procedures: Procedure[] = [
    { id: 1, name: "Raio-X", status: "approved", value: 150, executions: 2 },
    { id: 2, name: "Ultrassom", status: "rejected", value: 120, executions: 8 },
    { id: 3, name: "Tomografia", status: "approved", value: 500, executions: 6 },
    { id: 4, name: "Hemograma completo", status: "approved", value: 50, executions: 20 },
    { id: 5, name: "Ressonância", status: "rejected", value: 700, executions: 3 },
    { id: 6, name: "Mamografia", status: "approved", value: 450, executions: 3}
];