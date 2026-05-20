import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Procedure } from "@/lib/mock/procedures";
import { Skeleton } from "@/components/ui/skeleton";

type ProceduresTableProps = {
  data: Procedure[];
  loading: boolean;
};

export function ProceduresTable({ data, loading }: ProceduresTableProps) {

  if (loading) {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-64" />

      <div className="space-y-2">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </div>
    </div>
  );
}

  return (
    <div className="space-y-2">
      <h2 className="text-lg font-semibold">Procedimentos</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Execuções</TableHead>
            <TableHead>Valor unitário</TableHead>
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>

              <TableCell>
                {item.status === "approved" ? "Aprovado" : "Rejeitado"}
              </TableCell>

              <TableCell>{item.executions}</TableCell>

              <TableCell>
                {item.value.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>

              <TableCell>
                {(item.value * item.executions).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}