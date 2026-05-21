export type Procedure = {
    id: number;
    name: string;
    status: "approved" | "rejected";
    value: number;
    executions: number;
};

export const procedures: Procedure[] = [
    { id: 1, name: "Raio-X", status: "approved", value: 150, executions: 2 },
    { id: 2, name: "Ultrassom", status: "approved", value: 120, executions: 1 },
    { id: 3, name: "Tomografia", status: "approved", value: 500, executions: 6 },
    { id: 4, name: "Hemograma completo", status: "approved", value: 50, executions: 20 },
    { id: 5, name: "Ressonância", status: "rejected", value: 700, executions: 1 },
    { id: 6, name: "Mamografia", status: "approved", value: 450, executions: 3},
    { id: 7, name: "Eletrocardiograma (ECG)", status: "approved", value: 80, executions: 4 },
    { id: 8, name: "Mapeamento de retina", status: "rejected", value: 180, executions: 1 },
    { id: 9, name: "Ecocardiograma", status: "rejected", value: 320, executions: 1 },
    { id: 10, name: "Biópsia", status: "approved", value: 800, executions: 2 }
];